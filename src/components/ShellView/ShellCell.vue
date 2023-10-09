<template>
  <div class="shell-cell__wrapper">
    <CypherEditor
      :schema="schema"
      :navbarHeight="navbarHeight"
      :isMaximizable="
        (queryResult && queryResult.rows && queryResult.rows.length > 0) || isMaximized
      "
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
  </div>
</template>

<script lang="js">
import CypherEditor from "./CypherEditor.vue";
import ResultContainer from "./ResultContainer.vue";
import Axios from "axios";

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

  methods: {
    evaluateCypher(query) {
      this.queryResult = null;
      this.errorMessage = "";
      Axios.post("/api/cypher", { query })
        .then((res) => {
          this.queryResult = res.data;
          this.queryString = query;
          this.$nextTick(() => {
            this.$refs.resultContainer.handleDataChange(this.schema, this.queryResult, "");
          });
        })
        .catch((error) => {
          if (!error.response) {
            this.errorMessage = "The application is disconnected from the server. Please try to restart the server.";
          }
          else if (!error.response.data) {
            this.errorMessage = String(error).trim();
          }
          else {
            this.errorMessage = error.response.data.error.trim();
            console.error(error.response.data.error.trim());
          }
          if (this.errorMessage) {
            this.$nextTick(() => {
              this.$refs.resultContainer.handleDataChange(this.schema, null, this.errorMessage);
            });
          }
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
</style>
