<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark" ref="navbar">
      <div class="container">
        <a class="navbar-brand" href="#"><img src="/img/kuzu-logo-inverse.png" alt="Kuzu Logo" class="navbar__logo" />
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=".navbar__buttons"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse navbar__buttons">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" href="#" @click="toggleSchema()">
                <i class="fa-solid fa-circle-nodes"></i>
                Schema
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" @click="toggleShell()">
                <i class="fa-solid fa-terminal"></i>
                Shell
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" @click="toggleLoader()">
                <i class="fa-solid fa-database"></i>
                Datasets
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">
                <i class="fa-solid fa-cog"></i>
                Settings
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="layout__main-content" :style="{ height: `calc(100vh - ${navbarHeight}px)` }">
      <SchemaViewMain v-show="showSchema" />
      <ShellMainView v-show="showShell" :schema="schema" :navbarHeight="navbarHeight" />
    </div>
  </div>
</template>

<script lang="js">
import SchemaViewMain from "./SchemaView/SchemaViewMain.vue";
import ShellMainView from "./ShellView/ShellMainView.vue";
import Axios from "axios";
import { useSettingsStore } from "../store/SettingsStore";
import { mapActions } from 'pinia'

export default {
  name: "MainLayout",
  components: {
    SchemaViewMain,
    ShellMainView,
  },
  data: () => ({
    showSchema: false,
    showShell: true,
    showLoader: false,
    navbarHeight: 0,
    schema: null,
  }),
  methods: {
    async getSchema() {
      const response = await Axios.get("/api/schema");
      this.schema = response.data;
      this.schema.relTables.forEach((table) => {
        table.src = table.properties.src;
        table.dst = table.properties.dst;
        table.properties = table.properties.props;
      });
      this.initDefaultSettings(this.schema);
    },
    hideAll() {
      this.showSchema = false;
      this.showShell = false;
      this.showLoader = false;
    },
    toggleSchema() {
      this.hideAll();
      this.showSchema = true;
    },
    toggleShell() {
      this.hideAll();
      this.showShell = true;
    },
    toggleLoader() {
      this.hideAll();
      this.showLoader = true;
    },
    updateNavbarHeight() {
      this.navbarHeight = this.$refs.navbar.clientHeight;
    },
    ...mapActions(useSettingsStore, ['initDefaultSettings']),
  },
  mounted() {
    this.updateNavbarHeight();
    window.addEventListener("resize", this.updateNavbarHeight);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.updateNavbarHeight);
  },
  created() {
    this.getSchema();
  },
};
</script>

<style scoped lang="scss">
.navbar {
  .navbar__logo {
    width: 120px;
    image-rendering: crisp-edges;
  }

  .nav-link {
    i {
      margin-right: 4px;
    }
  }
}

.layout__main-content {
  overflow: hidden;
  width: 100%;
}
</style>
