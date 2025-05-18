<template>
  <div class="shell-cell__wrapper">
    <CypherEditor
      ref="editor"
      :schema="schema"
      :navbar-height="navbarHeight"
      :is-maximizable="isMaximizable"
      :is-loading="isLoading"
      @evaluate-cypher="evaluateCypher"
      @generate-and-evaluate-query="generateAndEvaluateQuery"
      @remove="removeCell"
      @toggle-maximize="toggleMaximize"
      @editor-resize="handleEditorResize"
    />
    <ResultContainer
      v-for="(_, index) in queryResults"
      :key="index"
      :ref="getRefName(index)"
      :is-maximized="isMaximized"
      :navbar-height="navbarHeight"
    />
    <ResultContainer
      v-if="errorMessage"
      ref="resultErrorContainer"
      is-maximized="false"
      :navbar-height="navbarHeight"
    />
    <div
      v-if="isLoading"
      class="d-flex align-items-center"
    >
      <strong class="text-secondary">{{
        loadingText ? loadingText : "Loading..."
      }}</strong>
      <div
        class="spinner-border text-secondary ms-auto"
        role="status"
      />
    </div>
  </div>
</template>

<script lang="js">
import CypherEditor from "./CypherEditor.vue";
import ResultContainer from "./ResultContainer.vue";
import Axios from "@/utils/AxiosWrapper";
import { useModeStore } from "../../store/ModeStore";
import { useSettingsStore } from "../../store/SettingsStore";
import { mapStores } from "pinia";
import Kuzu from "@/utils/KuzuWasm";
import { LOADING_STATUS, LLM_PROVIDERS } from "@/utils/Constants";

export default {
  name: "ShellCell",
  components: {
    CypherEditor,
    ResultContainer,
  },
  props: {
    schema: {
      type: Object,
      required: false,
      default: null,
    },
    navbarHeight: {
      type: Number,
      required: false,
      default: 0,
    },
    cellId: {
      type: String,
      required: false,
      default: "",
    },
  },
  emits: ["reloadSchema", "addCell", "maximize", "minimize", "remove"],
  data: () => ({
    queryString: "",
    queryResults: [],
    errorMessage: "",
    loadingText: "",
    isEvaluated: false,
    isMaximized: false,
    isLoading: false,
  }),

  computed: {
    ...mapStores(useModeStore, useSettingsStore),
    isMaximizable() {
      return (
        (this.queryResults &&
          this.queryResults.length === 1 &&
          this.queryResults[0].rows &&
          this.queryResults[0].rows.length > 0) ||
        this.isMaximized
      );
    },
  },

  methods: {
    isActive() {
      return this.$refs.editor.isActive();
    },
    loadEditorFromHistory(history) {
      this.isEvaluated = true;
      this.$refs.editor.loadFromHistory(history);
    },
    getRefName(index) {
      return `resultContainer_${index}`;
    },
    evaluateCypher(query) {
      this.queryResults = [];
      this.errorMessage = "";
      this.isLoading = true;
      this.loadingText = LOADING_STATUS.EVAL;

      // TODO: Refactor
      if (this.modeStore.isWasm) {
        Kuzu.query(query).then(data => {
          this.handleEvaluationDataChange(data, query);
        }).catch(error => {
          this.errorMessage = error.message;
          this.$nextTick(() => {
            const errorContainer = this.$refs.resultErrorContainer;
            errorContainer.handleDataChange(this.schema, null, this.errorMessage);
          });
        }).finally(() => {
          this.isLoading = false;
        });
      }
      else {
        let intervalId = setInterval(() => {
          Axios.get(`/api/cypher/progress/${this.cellId}`).then((res) => {
            this.loadingText = `Pipelines Finished: ${res.data.numPipelinesFinished}/${res.data.numPipelines}
            Current Pipeline Progress: ${Math.round(res.data.pipelineProgress * 100)}%`;
          }).catch((error) => {
            if (error.response && error.response.status === 404 && this.loadingText !== LOADING_STATUS.EVAL) {
              this.loadingText = LOADING_STATUS.PROCESS;
            }
          });
        }, 500);
        Axios.post("/api/cypher",
          {
            query,
            uuid: this.cellId,
            isQueryGenerationMode: this.$refs.editor.isQueryGenerationMode,
            updateHistory: true,
            progress: true
          })
          .then((res) => {
            this.handleEvaluationDataChange(res.data, query);
          })
          .catch((error) => {
            if (!error.response) {
              this.errorMessage = "The application is disconnected from the server. Please try to restart the server.";
            }
            else {
              try {
                this.errorMessage = error.response.data.error.trim();
                console.error(error.response.data.error.trim());
              } catch (e) {
                const httpStatus = error.response.status;
                this.errorMessage = `The request failed with HTTP status code ${httpStatus}.`;
                console.error(this.errorMessage);
              }
            }
            if (this.errorMessage) {
              this.$nextTick(() => {
                const errorContainer = this.$refs.resultErrorContainer;
                errorContainer.handleDataChange(this.schema, null, this.errorMessage);
              });
            }
          }).finally(() => {
            clearInterval(intervalId);
            this.isLoading = false;
          });
        if (!this.isEvaluated) {
          this.$emit("addCell");
        }
      }
      this.isEvaluated = true;
    },
    handleEvaluationDataChange(data, query) {
      this.loadingText = LOADING_STATUS.PROCESS;
      this.queryResults = data.isMultiStatement ? data.results : [data];
      if (this.queryResults.length > 1) {
        this.minimize();
      }
      this.queryString = query;
      this.$nextTick(() => {
        for (let i = 0; i < this.queryResults.length; ++i) {
          const resultContainer =
            this.$refs[
            this.getRefName(i)
            ][0];
          resultContainer.handleDataChange(this.schema, this.queryResults[i], "");
        }
      });
      const isSchemaChanged = data && data.isSchemaChanged;
      if (isSchemaChanged) {
        this.$emit("reloadSchema");
      }
    },
    generateAndEvaluateQuery(question) {
      this.queryResults = null;
      this.errorMessage = "";
      question = question.trim();
      const isOpenAI = this.settingsStore.gpt.llmProvider === LLM_PROVIDERS.OPENAI.key;
      let token = this.settingsStore.gpt.apiToken;
      const model = this.settingsStore.gpt.model;
      const baseUrl = this.settingsStore.gpt.url;
      if (!token) {
        if (isOpenAI) {
          this.errorMessage = "OpenAI API token is not set. Please set the token in the settings and try again.";
        } else {
          token = "IGNORED";
        }
      }
      else if (!question) {
        this.errorMessage = "The question cannot be empty. Please type a question and try again.";
      }
      if (this.errorMessage) {
        this.$nextTick(() => {
          const errorContainer = this.$refs.resultErrorContainer;
          errorContainer.handleDataChange(this.schema, null, this.errorMessage);
        });
        return;
      }
      this.isLoading = true;
      this.loadingText = "Generating query from question...";
      const url = "/api/gpt";
      const data = {
        question,
        token,
        model,
        uuid: this.cellId,
        isQueryGenerationMode: this.$refs.editor.isQueryGenerationMode
      };
      if(!isOpenAI) {
        data.baseUrl = baseUrl;
      }
      Axios.post(url, data)
        .then((res) => {
          const query = res.data.query;
          this.$refs.editor.setEditorContent(query);
          this.$refs.editor.evaluateCypher(query);
        })
        .catch((error) => {
          this.isLoading = false;
          if (!error.response) {
            this.errorMessage = "The application is disconnected from the server. Please try to restart the server.";
          }
          else {
            try {
              this.errorMessage = error.response.data.error.trim();
              console.error(error.response.data.error.trim());
            } catch (e) {
              const httpStatus = error.response.status;
              this.errorMessage = `The request failed with HTTP status code ${httpStatus}.`;
              console.error(this.errorMessage);
            }
          }
          if (this.errorMessage) {
            this.$nextTick(() => {
              const errorContainer = this.$refs.resultErrorContainer;
              errorContainer.handleDataChange(this.schema, null, this.errorMessage);
            });
          }
        })
    },
    evaluateCell() {
      this.$refs.editor.evaluateCell();
    },
    toggleMaximize() {
      if (this.isMaximized) {
        this.minimize();
      }
      else {
        this.maximize();
      }
    },
    maximize() {
      this.isMaximized = true;
      this.$emit("maximize");
      this.$refs.editor.maximize();
    },
    minimize() {
      this.isMaximized = false;
      this.$emit("minimize");
      this.$refs.editor.minimize();
    },
    removeCell() {
      this.$emit("remove");
    },
    getEditorHeight() {
      return this.$refs.editor.editorHeight;
    },
    handleEditorResize() {
      if (!this.$refs.resultContainer) {
        return;
      }
      this.$refs.resultContainer.updateContainerHeight();
      this.$refs.resultContainer.handleGraphResize();
    },
  },
}
</script>

<style lang="scss" scoped>
.shell-cell__wrapper {
  display: block;

  &:last-child {
    padding-bottom: 10px;
  }
}

div.d-flex.align-items-center {
  margin: 20px;
  margin-top: 0;
  padding: 16px;
  border: 2px solid $gray-300;
  border-top: 0;
}

.text-secondary {
  white-space: pre-line;
}
</style>
