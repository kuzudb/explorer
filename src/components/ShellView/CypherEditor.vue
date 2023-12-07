<template>
  <div
    class="shell-editor__wrapper"
    :style="{ height: editorHeight + 'px' }"
    ref="wrapper"
  >
    <div
      class="shell-editor__container"
      :style="{ width: editorWidth + 'px' }"
      v-show="!isQueryGenerationMode"
      ref="editor"
    ></div>
    <div
      class="shell-editor__container"
      :style="{ width: editorWidth + 'px' }"
      v-show="isQueryGenerationMode"
    >
      <textarea
        class="form-control"
        placeholder="Type your question here..."
        v-model="gptQuestion"
      />
    </div>
    <div
      class="shell-editor__tools_container"
      ref="toolsContainer"
      :style="{ width: toolbarWidth + 'px' }"
    >
      <div class="shell-editor__button" v-show="!isMaximized">
        <i class="fa-lg fa-solid fa-times" @click="removeCell"></i>
      </div>
      <div class="shell-editor__button" v-show="!isLoading">
        <i
          class="fa-lg fa-solid fa-play"
          data-bs-toggle="tooltip"
          data-bs-placement="right"
          title="Run"
          @click="evaluateCypher"
        ></i>
      </div>
      <div class="shell-editor__button">
        <i
          :class="gptButtonClass"
          data-bs-toggle="tooltip"
          data-bs-placement="right"
          :data-bs-original-title="gptButtonTitle"
          @click="toggleQueryGeneration"
        ></i>
      </div>
      <div class="shell-editor__button" v-show="isMaximizable">
        <i
          :class="maximizeButtonClass"
          data-bs-toggle="tooltip"
          data-bs-placement="right"
          :data-bs-original-title="maximizeButtonTitle"
          @click="toggleMaximize"
        ></i>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import CypherLanguage from "../../utils/CypherLanguage";
import MonacoCypherLanguage from "../../utils/MonacoCypherLanguage";
import * as Monaco from "monaco-editor";
import { UI_SIZE } from "../../utils/Constants";
import PlaceholderContentWidget from "../../utils/MonacoPlaceholderContentWidget";

// Make sure Monaco is not reactive. Otherwise, it will cause the Vue.js
// app to crash.
export default {
  data: () => {
    return {
      name: "CypherEditor",
      cypherLanguage: new CypherLanguage(),
      isCommandPaletteOpen: false,
      editorWidth: 0,
      editorHeight: UI_SIZE.DEFAULT_EDITOR_HEIGHT,
      toolbarWidth: UI_SIZE.SHELL_TOOL_BAR_WIDTH,
      isMaximized: false,
      isQueryGenerationMode: false,
      gptQuestion: "",
    }
  },
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
    isMaximizable: {
      type: Boolean,
      required: false,
      default: false,
    },
    isLoading: {
      type: Boolean,
      required: true,
      default: false,
    },
  },

  computed: {
    maximizeButtonClass() {
      return (this.isMaximized ? "fa-minimize" : "fa-maximize") + " fa-lg fa-solid";
    },
    maximizeButtonTitle() {
      return this.isMaximized ? "Minimize" : "Maximize";
    },
    gptButtonClass() {
      return (this.isQueryGenerationMode ? "fa-code" : "fa-robot") + " fa-lg fa-solid";
    },
    gptButtonTitle() {
      return this.isQueryGenerationMode ? "Cypher Code Editor" : "Query Generation (Powered by GPT)";
    },
  },

  methods: {
    initMonacoEditor() {
      // Set the Monaco editor to the global window object to make sure it is
      // only initialized once.
      // TODO: Create a singleton class wrapper for Monaco instead.
      if (!window.Monaco) {
        Monaco.languages.getLanguages().forEach((lang) => {
          if (lang.id === "cypher") {
            // Hack: we override the loader function to return our definition of
            // Cypher language instead of the default one.
            lang.loader = () => {
              return {
                then: (callback) => {
                  callback({
                    conf: MonacoCypherLanguage.languageConfiguration,
                    language: MonacoCypherLanguage.language,
                  });
                },
              };
            };
          }
        });

        Monaco.languages.registerCompletionItemProvider("cypher", {
          provideCompletionItems: (model, position) => {
            return this.cypherLanguage.provideCompletionItemsForMonaco(
              model,
              position,
              this.schema
            );
          },
        });
        window.Monaco = Monaco;
      }

      const editorContainer = this.$refs.editor;
      this.editor = window.Monaco.editor.create(editorContainer, {
        value: "",
        language: "cypher",
        theme: "vs-light",
        automaticLayout: true,
        minimap: {
          enabled: false,
        },
        fontSize: 16,
        scrollBeyondLastLine: false,
      });

      this.editor.addCommand(window.Monaco.KeyMod.Shift | window.Monaco.KeyCode.Enter, () => {
        this.evaluateCypher();
      });

      new PlaceholderContentWidget('> Type your query here', this.editor);
    },
    toggleMaximize() {
      this.$emit("toggleMaximize");
    },
    toggleQueryGeneration() {
      this.isQueryGenerationMode = !this.isQueryGenerationMode;
    },
    maximize() {
      this.isMaximized = true;
    },
    minimize() {
      this.isMaximized = false;
    },
    evaluateCypher() {
      const cypher = this.editor.getValue();
      this.$emit("evaluateCypher", cypher);
    },
    removeCell() {
      this.$emit("remove");
    }
  },

  mounted() {
    this.initMonacoEditor();
  },

  beforeUnmount() {
    if (this.editor) {
      this.editor.dispose();
    }
  },
}
</script>

<style lang="scss" scoped>
$margin: 20px;

.shell-editor__wrapper {
  width: calc(100% - #{$margin * 2});
  margin: $margin;
  margin-bottom: 0;
  border: 2px solid $gray-300;
  display: flex;
  flex-direction: row-reverse;
}

.shell-editor__container {
  height: 100%;
  flex-grow: 1;

  textarea {
    height: 100%;
    width: 100%;
    border: none;
    resize: none;
  }
}

.shell-editor__tools_container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: $gray-100;
  border-right: 2px solid $gray-300;
}

.shell-editor__button {
  padding-top: 4px;
  padding-bottom: 4px;

  > i {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    &:active {
      opacity: 0.5;
    }
  }

  > i.fa-play {
    color: $success;
  }

  > i.fa-times {
    color: $red;
  }

  > i.fa-maximize,
  > i.fa-minimize {
    color: $info;
  }
}
</style>
