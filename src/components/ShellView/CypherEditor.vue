<template>
  <div
    ref="wrapper"
    class="shell-editor__wrapper"
  >
    <!-- Topbar -->
    <header class="shell-editor__topbar">
      <div class="shell-editor__tabs-container">
        <ul class="shell-editor__tabs">
          <li>
            <a
              href="#"
              :class="[
                'shell-editor__tab',
                !isQueryGenerationMode ? 'active-tab' : 'inactive-tab'
              ]"
              @click.prevent="isQueryGenerationMode = false"
            >Cypher Query</a>
          </li>
          <li>
            <a
              href="#"
              :class="[
                'shell-editor__tab',
                isQueryGenerationMode ? 'active-tab' : 'inactive-tab'
              ]"
              @click.prevent="isQueryGenerationMode = true"
            >AI Query</a>
          </li>
        </ul>
      </div>
    </header>

    <!-- Layout -->
    <div class="shell-editor__layout">
      <!-- Sidebar -->
      <aside class="shell-editor__tools_container">
        <ul class="shell-editor__tool-buttons">
          <button @click="evaluateCell">
            <i class="fa-solid fa-play" />
          </button>
          <button @click="toggleMaximize">
            <i :class="maximizeButtonClass" />
          </button>
          <button @click="removeCell">
            <i class="fa-solid fa-times" />
          </button>
        </ul>
      </aside>

      <!-- Main Content -->
      <main class="shell-editor__container">
        <div
          v-show="!isQueryGenerationMode"
          ref="editor"
          class="editor-content"
        />
        <div
          v-show="isQueryGenerationMode"
          class="editor-content"
        >
          <textarea
            ref="gptQuestionTextArea"
            v-model="gptQuestion"
            class="shell-editor__textarea"
            placeholder="Type your question here..."
          />
        </div>
      </main>
    </div>
  </div>
</template>

<script lang="js">
import CypherLanguage from "../../utils/CypherLanguage";
import MonacoCypherLanguage from "../../utils/MonacoCypherLanguage";
import * as Monaco from "monaco-editor";
import { UI_SIZE } from "../../utils/Constants";
import PlaceholderContentWidget from "../../utils/MonacoPlaceholderContentWidget";
import { useModeStore } from "../../store/ModeStore";
import { mapStores } from "pinia";

// Make sure Monaco is not reactive. Otherwise, it will cause the Vue.js
// app to crash.
export default {
  props: {
    // eslint-disable-next-line vue/require-default-prop
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
  emits: ['remove', 'evaluateCypher', 'toggleMaximize', 'generateAndEvaluateQuery', 'editorResize'],
  data: () => {
    return {
      name: "CypherEditor",
      cypherLanguage: new CypherLanguage(),
      isCommandPaletteOpen: false,
      editorWidth: 0,
      editorHeight: 0,
      toolbarWidth: UI_SIZE.SHELL_TOOL_BAR_WIDTH,
      isMaximized: false,
      isQueryGenerationMode: false,
      gptQuestion: "",
      observer: null,
      editorResizeDebounce: null,
    }
  },

  computed: {
    ...mapStores(useModeStore),
    maximizeButtonClass() {
      return (this.isMaximized ? "fa-minimize" : "fa-maximize") + "  fa-solid";
    },
    maximizeButtonTitle() {
      return this.isMaximized ? "Minimize" : "Maximize";
    },
    gptButtonClass() {
      return (this.isQueryGenerationMode ? "fa-file-code" : "fa-robot") + " fa-lg fa-solid";
    },
    gptButtonTitle() {
      return this.isQueryGenerationMode ? "Cypher Code Editor" : "Query Generation (Powered by GPT)";
    },
  },

  watch: {
    editorHeight() {
      if (this.editorResizeDebounce) {
        clearTimeout(this.editorResizeDebounce);
      }
      this.editorResizeDebounce = setTimeout(() => {
        this.$emit("editorResize", this.editorHeight);
        this.editorResizeDebounce = null;
      }, 200);
    },
    isQueryGenerationMode(newVal) {
    if (!newVal) {
      // Wait for DOM to render
      this.$nextTick(() => {
        if (this.editor && this.$refs.editor) {
          this.editor.layout();  // Resize Monaco
          this.editor.focus();   // Optional: put cursor back in
        }
      });
    }
  },
  },

  mounted() {
    this.initMonacoEditor();
    // Set height mutation observer for wrapper element
    this.observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        this.editorHeight = entry.contentRect.height;
      }
    });
    this.observer.observe(this.$refs.wrapper);
  },

  beforeUnmount() {
    if (this.editor) {
      this.editor.dispose();
    }
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
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
        theme: "vs-dark",
        automaticLayout: true,
        minimap: {
          enabled: false,
        },
        fontSize: 16,
        scrollBeyondLastLine: false,
      });     
      new PlaceholderContentWidget('Type your Cypher code here...', this.editor);
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
    generateAndEvaluateQuery() {
      this.$emit("generateAndEvaluateQuery", this.gptQuestion);
    },
    evaluateCell() {
      if (this.isQueryGenerationMode) {
        this.generateAndEvaluateQuery();
      } else {
        this.evaluateCypher();
      }
    },
    setEditorContent(content) {
      this.editor.setValue(content);
    },
    removeCell() {
      this.$emit("remove");
    },
    isActive() {
      return (this.isQueryGenerationMode && this.$refs.gptQuestionTextArea === document.activeElement) ||
        (!this.isQueryGenerationMode && this.editor && this.editor.hasTextFocus());
    },
    loadFromHistory(history) {
      this.isQueryGenerationMode = history.isQueryGenerationMode;
      this.gptQuestion = history.gptQuestion;
      this.setEditorContent(history.cypherQuery);
    },
  },
}
</script>

<style lang="scss" scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

$margin: 1rem;

.shell-editor__wrapper {
  @apply mt-4 mx-4 shadow-md rounded-t-xl overflow-hidden;
}

.shell-editor__topbar {
  @apply w-full px-12 py-2 border-b;
  background-color: var(--bs-body-bg-secondary);
  border-color: var(--bs-body-inactive);
  color: var(--bs-body-text);
}

.shell-editor__tabs-container {
  @apply flex flex-row justify-between;
}

.shell-editor__tabs {
  @apply flex text-sm font-medium text-center;
  background-color: var(--bs-body-bg-secondary);
}

.shell-editor__tab {
  @apply p-4 rounded-t-lg;
}

.active-tab {
  font-weight: bold;
  color: var(--bs-body-text);
  background-color: var(--bs-body-shell);
}

.inactive-tab {
  @apply hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300;
}

.shell-editor__layout {
  @apply flex min-h-[132px];
}

.shell-editor__tools_container {
  @apply flex flex-col items-center py-2 border-r min-w-[48px];
  background-color: var(--bs-body-bg-secondary);
  border-color: var(--bs-body-inactive);
}

.shell-editor__tool-buttons {
  @apply flex flex-col gap-3 py-2 items-center text-sm font-medium;
}

.shell-editor__container {
  @apply flex-1 bg-[var(--bs-body-shell)] p-4;
}

.editor-content {
  @apply h-full w-full resize-y;
}

.shell-editor__textarea {
  @apply w-full h-full border-0 p-2 resize-y;
  background-color: var(--bs-body-bg-secondary);
  color: var(--bs-body-text);
}

.shell-editor__button > i {
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
  &:active {
    opacity: 0.5;
  }
}
</style>
