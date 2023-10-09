<template>
  <MainLayout />
</template>

<script>
import MainLayout from "./components/MainLayout.vue";
import { Tooltip } from "bootstrap";

export default {
  name: "App",
  components: {
    MainLayout,
  },
  mounted() {
    this.tooltip = new Tooltip(document.body, {
      selector: "[data-bs-toggle='tooltip']",
    });
  },
  beforeUnmount() {
    this.tooltip.dispose();
  },
};
</script>

<style lang="scss">
html {
  height: 100%;
}

body {
  margin: 0;
  padding: 0;
  overflow: hidden;
  height: 100%;
}

// Override Monaco Quick Input Widget height so that Command Palette can still
// be displayed when the editor height is small.
.quick-input-widget {
  .monaco-list {
    min-height: 60px !important;
  }
}
</style>
