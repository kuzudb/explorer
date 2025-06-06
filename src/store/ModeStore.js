import { defineStore } from "pinia";
import { MODES } from "../utils/Constants";

export const useModeStore = defineStore("mode", {
  state: () => ({
    currentMode: "READ_WRITE",
    theme: "vs-dark",
  }),

  getters: {
    mode(state) {
      return state.currentMode;
    },

    isReadOnly(state) {
      return state.currentMode === MODES.READ_ONLY;
    },

    isDemo(state) {
      return state.currentMode === MODES.DEMO;
    },

    isReadWrite(state) {
      return state.currentMode === MODES.READ_WRITE || state.currentMode === MODES.WASM || state.currentMode === MODES.DEMO;
    },

    isWasm(state) {
      return state.currentMode === MODES.WASM || state.currentMode === MODES.DEMO;
    }
  },

  actions: {
    setMode(mode) {
      this.currentMode = mode;
    },
    toggleTheme() {
      this.theme = this.theme === 'vs-dark' ? 'vs-light' : 'vs-dark';
      document.documentElement.setAttribute(
        'data-bs-theme',
        this.theme === 'vs-dark' ? 'dark' : 'light'
      );
      if (window.Monaco?.editor) {
        window.Monaco.editor.setTheme(this.theme);
      }
    },
    setTheme(theme) {
      this.theme = theme;
      document.documentElement.setAttribute(
        'data-bs-theme',
        theme === 'vs-dark' ? 'dark' : 'light'
      );
      if (window.Monaco?.editor) {
        window.Monaco.editor.setTheme(theme);
      }
    },
  },
});
