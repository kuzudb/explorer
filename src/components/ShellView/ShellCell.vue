<template>
  <div class="shell-cell__wrapper">
    <CypherEditor :schema="schema" :navbarHeight="navbarHeight" :isMaximizable="Boolean(queryResult)"
      @evaluateCypher="evaluateCypher" @remove="removeCell" @toggleMaximize="toggleMaximize" ref="editor" />
    <ResultContainer :queryResult="queryResult" :queryResultString="queryResultString" :schema="schema"
      :errorMessage="errorMessage" :isMaximized="isMaximized" :navbarHeight="navbarHeight" ref="resultContainer"
      v-if="queryResult || errorMessage" />
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
    queryResultString: "",
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
      this.queryResultString = "";
      this.errorMessage = "";
      Axios.post("/api/cypher", { query })
        .then((res) => {
          this.queryResult = res.data;
          this.queryResultString = JSON.stringify(res.data, null, 2);
          this.queryString = query;
          this.$nextTick(() => {
            this.$refs.resultContainer.handleDataChange();
          });
        })
        .catch((error) => {
          if (!error.response) {
            this.errorMessage = "The application is disconnected from the server. Please try to restart the server.";
            return;
          }
          else if (!error.response.data) {
            this.errorMessage = String(error).trim();
            return;
          }
          this.errorMessage = error.response.data.error.trim();
          console.log(error.response.data.error);
          console.log(error.response.data.error.trim());
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
  