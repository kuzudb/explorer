<template>
  <div class="result-code__wrapper" ref="wrapper" :style="{ height: containerHeight }">
    <div class="result-code__editor" ref="editor"></div>
  </div>
</template>

<script lang="js">
// Make sure Monaco is not reactive. Otherwise, it will cause the Vue.js
// app to crash.
export default {
  name: "ResultCode",
  data: () => ({
  }),
  props: {
    queryResultString: {
      type: String,
      required: false,
      default: "",
    },
    containerHeight: {
      type: String,
      required: false,
      default: ""
    },
  },
  watch: {
  },
  methods: {
    initMonacoEditor() {
      const Monaco = window.Monaco;
      // The query result should only be displayed after a query is executed.
      // This means the editor for Cypher query should have been initialized.
      // If not, there is something wrong with the app. The Monaco editor should
      // not be initialized here as it does not have Cypher-related definition.
      if (!Monaco) {
        throw new Error("Monaco is not initialized.");
      }
      this.editor = Monaco.editor.create(this.$refs.editor, {
        value: this.queryResultString,
        language: "json",
        theme: "vs-light",
        readOnly: true,
        automaticLayout: true,
        minimap: {
          enabled: false,
        },
        fontSize: 12,
        scrollBeyondLastLine: false,
      });
    },
  },

  mounted() {
    this.initMonacoEditor();
  },

  beforeUnmount() {
    if (this.editor) {
      this.editor.dispose();
    }
  },
};
</script>

<style lang="scss" scoped>
.result-code__wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-bottom: 2px solid $gray-300;

  .result-code__editor {
    width: 100%;
    height: 100%;
  }
}
</style>
