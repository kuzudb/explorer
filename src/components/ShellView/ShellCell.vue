<template>
  <div class="shell-cell__wrapper">
    <CypherEditor
      ref="editor"
      :schema="schema"
      :navbar-height="navbarHeight"
      :is-maximizable="
        (queryResult && queryResult.rows && queryResult.rows.length > 0) || isMaximized
      "
      :is-loading="isLoading"
      @evaluate-cypher="evaluateCypher"
      @generate-and-evaluate-query="generateAndEvaluateQuery"
      @remove="removeCell"
      @toggle-maximize="toggleMaximize"
    />
    <ResultContainer
      v-if="queryResult || errorMessage"
      ref="resultContainer"
      :is-maximized="isMaximized"
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
        aria-hidden="true"
      />
    </div>
  </div>
</template>

<script lang="js">
import CypherEditor from "./CypherEditor.vue";
import ResultContainer from "./ResultContainer.vue";
import Axios from "axios";
import { useModeStore } from "../../store/ModeStore";
import { useSettingsStore } from "../../store/SettingsStore";
import { mapStores } from "pinia";

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
    queryResult: null,
    errorMessage: "",
    loadingText: "",
    isEvaluated: false,
    isMaximized: false,
    isLoading: false,
  }),

  computed: {
    ...mapStores(useModeStore, useSettingsStore),
  },

  methods: {
    isActive() {
      return this.$refs.editor.isActive();
    },
    evaluateCypher(query) {
      this.queryResult = null;
      this.errorMessage = "";
      this.isLoading = true;
      this.loadingText = "Evaluating query...";
      Axios.post("/api/cypher",
        {
          query,
          uuid: this.cellId,
          isQueryGenerationMode: this.$refs.editor.isQueryGenerationMode
        })
        .then((res) => {
          this.queryResult = res.data;
          this.queryString = query;
          this.$nextTick(() => {
            this.$refs.resultContainer.handleDataChange(this.schema, this.queryResult, "");
          });
          const isSchemaChanged = res.data && res.data.isSchemaChanged;
          if (isSchemaChanged) {
            this.$emit("reloadSchema");
          }
        })
        .catch((error) => {
          if (!error.response) {
            if (this.modeStore.isDemo) {
              this.errorMessage = "The application is disconnected from the server. Please try to refresh the page and execute the query again.";
            } else {
              this.errorMessage = "The application is disconnected from the server. Please try to restart the server.";
            }
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
              this.$refs.resultContainer.handleDataChange(this.schema, null, this.errorMessage);
            });
          }
        }).finally(() => {
          this.isLoading = false;
        });
      if (!this.isEvaluated) {
        this.$emit("addCell");
      }
      this.isEvaluated = true;
    },
    generateAndEvaluateQuery(question) {
      this.queryResult = null;
      this.errorMessage = "";
      question = question.trim();
      const token = this.settingsStore.gpt.apiToken;
      const model = this.settingsStore.gpt.model;
      if (!token) {
        this.errorMessage = "OpenAI API token is not set. Please set the token in the settings and try again.";
      }
      else if (!question) {
        this.errorMessage = "The question cannot be empty. Please type a question and try again.";
      }
      if (this.errorMessage) {
        this.$nextTick(() => {
          this.$refs.resultContainer.handleDataChange(this.schema, null, this.errorMessage);
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
      Axios.post(url, data)
        .then((res) => {
          const query = res.data.query;
          this.$refs.editor.setEditorContent(query);
          this.$refs.editor.evaluateCypher(query);
        })
        .catch((error) => {
          this.isLoading = false;
          if (!error.response) {
            if (this.modeStore.isDemo) {
              this.errorMessage = "The application is disconnected from the server. Please try to refresh the page and execute the query again.";
            } else {
              this.errorMessage = "The application is disconnected from the server. Please try to restart the server.";
            }
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
              this.$refs.resultContainer.handleDataChange(this.schema, null, this.errorMessage);
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
  },
}
</script>

<style lang="scss" scoped>
.shell-cell__wrapper {
  display: block;
}

div.d-flex.align-items-center {
  margin: 20px;
  margin-top: 0;
  padding: 16px;
  border: 2px solid $gray-300;
  border-top: 0;
}
</style>
