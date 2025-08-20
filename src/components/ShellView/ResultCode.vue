<template>
  <div
    ref="wrapper"
    class="result-code__wrapper"
    :style="{ height: containerHeight }"
  >
    <div
      ref="editor"
      class="result-code__editor"
    />
  </div>
</template>

<script lang="js">
// Make sure Monaco is not reactive. Otherwise, it will cause the Vue.js
// app to crash.
export default {
  name: "ResultCode",
  props: {
    queryResult: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    containerHeight: {
      type: String,
      required: false,
      default: ""
    },
  },
  data: () => ({
  }),
  watch: {
  },

  mounted() {
    this.initMonacoEditor();
  },

  beforeUnmount() {
    if (this.editor) {
      this.editor.dispose();
    }
  },
  methods: {

    initMonacoEditor() {
      const Monaco = window.Monaco;
      const theme = document.documentElement.getAttribute('data-bs-theme') === 'dark'
        ? 'vs-dark'
        : 'vs-light';
      const int128Replacer = (_, value) => {
        if (typeof value === "bigint") {
          return value.toString();
        }
        return value;
      };
      const queryResultString = JSON.stringify(this.queryResult, int128Replacer, 2);
      // The query result should only be displayed after a query is executed.
      // This means the editor for Cypher query should have been initialized.
      // If not, there is something wrong with the app. The Monaco editor should
      // not be initialized here as it does not have Cypher-related definition.
      if (!Monaco) {
        throw new Error("Monaco is not initialized.");
      }
      this.editor = Monaco.editor.create(this.$refs.editor, {
        value: queryResultString,
        language: "json",
        theme,
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
};
</script>

<style lang="scss" scoped>
.result-code__wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-bottom: 1px solid (var(--bs-body-inactive));
  border-radius: 10px;

  .result-code__editor {
    width: 100%;
    height: 100%;
  }
}
</style>
