<template>
  <div
    ref="wrapper"
    class="shell-editor__wrapper"
    :style="{ maxHeight: isMaximized ? '550px' : '100%' }"
  >
    <!-- Layout -->
    <div class="shell-editor__layout">
      <!-- Sidebar -->
      <aside :style="{ width: toolbarWidth + 'px' }">
        <ul>
          <button @click="evaluateCell">
            <i
              class="fa-solid fa-play"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              title="Run"
            />
          </button>
          <button @click="toggleMaximize">
            <i
              :class="maximizeButtonClass"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              :data-bs-original-title="maximizeButtonTitle"
            />
          </button>
          <button
            v-if="!isMaximized"
            @click="removeCell"
          >
            <i class="fa-solid fa-times" />
          </button>
        </ul>
      </aside>

      <!-- Content Area -->
      <div class="shell-editor__content">
        <!-- Topbar -->
        <header class="shell-editor__topbar">
          <div>
            <ul class="nav nav-tabs border-0">
              <li class="nav-item text-[var(--bs-body-text)]">
                <a
                  href="#"
                  :class="[
                    !isQueryGenerationMode ? 'active-tab' : 'inactive-tab'
                  ]"
                  class="text-decoration-none"
                  @click.prevent="isQueryGenerationMode = false"
                >Cypher Query</a>
              </li>
              <li class="nav-item">
                <a
                  v-if="!modeStore.isWasm"
                  href="#"
                  :class="[
                    isQueryGenerationMode ? 'active-tab' : 'inactive-tab'
                  ]"
                  class="text-decoration-none"
                  @click.prevent="isQueryGenerationMode = true"
                >AI Query</a>
              </li>
            </ul>
          </div>
        </header>

        <!-- Main Content -->
        <main>
          <div
            v-show="!isQueryGenerationMode"
            ref="editor"
          />
          <div
            v-if="!modeStore.isWasm"
            v-show="isQueryGenerationMode"
          >
            <textarea
              ref="gptQuestionTextArea"
              v-model="gptQuestion"
              placeholder="Type your question here..."
            />
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import CypherLanguage from "../../utils/CypherLanguage";
import MonacoCypherLanguage from "../../utils/MonacoCypherLanguage";
import * as Monaco from "monaco-editor";
import { UI_SIZE } from "../../utils/Constants";
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
      const theme = document.documentElement.getAttribute('data-bs-theme') === 'dark'
        ? 'vs-dark'
        : 'vs-light';
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
        language: "cypher",
        theme,
        automaticLayout: true,
        minimap: {
          enabled: false,
        },
        fontSize: 16,
        scrollBeyondLastLine: false,
      });
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
$margin: 1rem;

.shell-editor__wrapper {
  margin-top: 1rem;
  margin-left: 1rem;
  margin-right: 1rem;
  border-radius: 1rem 1rem 0 0;
  overflow: hidden;

}

.shell-editor__topbar {
  width: 100%;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid var(--bs-body-inactive);
  background-color: var(--bs-body-bg-secondary);
  color: var(--bs-body-text);

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  ul {
    display: flex;
    font-size: 0.875rem;
    font-weight: 500;
    text-align: center;
    background-color: var(--bs-body-bg-secondary);

    .nav-item {
      margin: 0;
      padding: 0;
    }
  }

  a {
    padding: 1rem;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    color: var(--bs-body-inactive);

    &.active-tab {
      font-weight: bold;
      color: var(--bs-body-text);
      background-color: var(--bs-body-shell);
    }

    &.inactive-tab {
      &:hover {
        color: var(--bs-body-text);
        background-color: var(--bs-body-inactive);
      }
    }
  }
}

.shell-editor__layout {
  display: flex;
  min-height: 132px;

  aside {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.5rem 0;
    min-width: 48px;
    background-color: var(--bs-body-bg-secondary);

    ul {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      padding: 0.5rem 0;
      align-items: center;
      font-size: 0.875rem;
      font-weight: 500;
      text-decoration: none;
      padding-top: 2.5rem;

      button {
        padding: 0px;
        background: transparent;
        border: 0px;
      }
    }
  }

  .shell-editor__content {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
}

main {
  flex: 1;
  background-color: var(--bs-body-shell);
  padding: 1rem;
  /* Ensure main takes up available space and handles overflow */
  overflow: hidden;
  /* Prevent content overflow from affecting layout */
  display: flex;
  /* Use flexbox for inner layout */
  flex-direction: column;
  /* Stack inner divs vertically */

  div {
    height: 100%;
    width: 100%;
    resize: vertical;
    overflow: auto;
    min-height: 100px;
    /* Add flex-grow to make the editor div fill the available space */
    flex-grow: 1;

    &::-webkit-scrollbar {
      display: none;
    }

    -ms-overflow-style: none;
    scrollbar-width: none;

    textarea {
      width: 100%;
      height: 100%;
      border: none;
      padding: 0.5rem;
      background-color: var(--bs-body-bg);
      color: var(--bs-body-text);
      min-height: 100px;
      resize: none;
    }
  }
}
</style>
