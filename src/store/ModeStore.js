import { defineStore } from "pinia";
import { MODES } from "../utils/Constants";

export const useModeStore = defineStore("mode", {
  state: () => ({
    currentMode: "NORMAL",
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

    isNormal(state) {
      return state.currentMode === MODES.NORMAL;
    },
  },

  actions: {
    setMode(mode) {
      this.currentMode = mode;
    },
  },
});
