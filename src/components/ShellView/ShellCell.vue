<template>
  <div class="shell-cell__wrapper">
    <CypherEditor
      :schema="schema"
      :navbarHeight="navbarHeight"
      :isMaximizable="
        (queryResult && queryResult.rows && queryResult.rows.length > 0) || isMaximized
      "
      :isLoading="isLoading"
      @evaluateCypher="evaluateCypher"
      @remove="removeCell"
      @toggleMaximize="toggleMaximize"
      ref="editor"
    />
    <ResultContainer
      :isMaximized="isMaximized"
      :navbarHeight="navbarHeight"
      ref="resultContainer"
      v-if="queryResult || errorMessage"
    />
    <div class="d-flex align-items-center" v-if="isLoading">
      <strong class="text-secondary">Executing query...</strong>
      <div
        class="spinner-border text-secondary ms-auto"
        role="status"
        aria-hidden="true"
      ></div>
    </div>
  </div>
</template>

<script lang="js">
import CypherEditor from "./CypherEditor.vue";
import ResultContainer from "./ResultContainer.vue";
import Axios from "axios";
import { useModeStore } from "../../store/ModeStore";
import { mapStores } from "pinia";

export default {
  name: "ShellCell",
  components: {
    CypherEditor,
    ResultContainer,
  },
  data: () => ({
    queryString: "",
    queryResult: null,
    errorMessage: "",
    isEvaluated: false,
    isMaximized: false,
    isLoading: false,
  }),

  props: {
    schema: {
      type: Object,
      required: false,
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

  computed: {
    ...mapStores(useModeStore),
  },

  methods: {
    evaluateCypher(query) {
      this.queryResult = null;
      this.errorMessage = "";
      this.isLoading = true;
      Axios.post("/api/cypher", { query })
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
          else if (!error.response.data) {
            this.errorMessage = String(error).trim();
          }
          else {
            try {
              this.errorMessage = error.response.data.error.trim();
              console.error(error.response.data.error.trim());
            } catch (e) {
              const httpStatus = error.response.status;
              this.errorMessage = `The request failed with HTTP status code ${httpStatus}: ${error.response.statusText}`;
              console.error(`The request failed with HTTP status code ${httpStatus}: ${error.response.statusText}`);
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
