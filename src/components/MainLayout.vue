<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark" ref="navbar">
      <div class="container">
        <a class="navbar-brand" href="#"
          ><img src="/img/kuzu-logo-inverse.png" alt="Kuzu Logo" class="navbar__logo" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target=".navbar__buttons"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse navbar__buttons">
          <ul class="navbar-nav ms-auto">
            <li :class="['nav-item', { active: showShell }]">
              <a class="nav-link" href="#" @click="toggleShell()">
                <i class="fa-solid fa-terminal"></i>
                Shell
              </a>
            </li>
            <li :class="['nav-item', { active: showSchema }]">
              <a class="nav-link" href="#" @click="toggleSchema()">
                <i class="fa-solid fa-circle-nodes"></i>
                Schema
              </a>
            </li>
            <li :class="['nav-item', { active: showLoader }]">
              <a class="nav-link" href="#" @click="toggleLoader()">
                <i class="fa-solid fa-database"></i>
                Datasets
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#" @click="showSettingsModal()">
                <i class="fa-solid fa-cog"></i>
                Settings
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div
      class="layout__main-content"
      :style="{ height: `calc(100vh - ${navbarHeight}px)` }"
    >
      <SchemaViewMain
        v-show="showSchema"
        :schema="schema"
        ref="schemaView"
        :navbarHeight="navbarHeight"
        @reloadSchema="reloadSchema"
        @addPlaceholderNodeTable="addPlaceholderNodeTable"
        @addPlaceholderRelTable="addPlaceholderRelTable"
        @updatePlaceholderNodeTableLabel="updatePlaceholderNodeTable"
        @updatePlaceholderRelTable="updatePlaceholderRelTable"
      />
      <ShellMainView v-show="showShell" :schema="schema" :navbarHeight="navbarHeight" />
      <SettingsMainView :schema="schema" ref="settings" v-if="showSettings" />
      <DatasetMainView
        v-show="showLoader"
        :schema="schema"
        :navbarHeight="navbarHeight"
        @reloadSchema="reloadSchema"
      />
    </div>
  </div>
</template>

<script lang="js">
import SchemaViewMain from "./SchemaView/SchemaViewMain.vue";
import ShellMainView from "./ShellView/ShellMainView.vue";
import SettingsMainView from "./SettingsView/SettingsMainView.vue"
import DatasetMainView from "./DatasetView/DatasetMainView.vue"
import Axios from "axios";
import { useSettingsStore } from "../store/SettingsStore";
import { mapActions } from 'pinia'

export default {
  name: "MainLayout",
  components: {
    SchemaViewMain,
    ShellMainView,
    SettingsMainView,
    DatasetMainView
  },
  data: () => ({
    showSchema: false,
    showShell: true,
    showLoader: false,
    showSettings: false,
    navbarHeight: 0,
    schema: null,
  }),
  methods: {
    async getSchema() {
      const response = await Axios.get("/api/schema");
      const schema = response.data;
      this.schema = schema;
    },
    async reloadSchema(rerender) {
      await this.getSchema();
      this.removeTablesBySchema(this.schema);
      if(rerender){
        this.initDefaultSettings(this.schema);
      }
      if(rerender && this.$refs.schemaView){
        this.$refs.schemaView.handleSettingsChange();
      }
    },
    addPlaceholderNodeTable(tableName) {
      this.schema.nodeTables.push({
        name: tableName,
        properties: [],
        isPlaceholder: true,
      });
    },
    addPlaceholderRelTable(tableName) {
      this.schema.relTables.push({
        name: tableName,
        src: "",
        dst: "",
        properties: [],
        isPlaceholder: true,
      });
    },
    updatePlaceholderNodeTable(name) {
      const table = this.schema.nodeTables.find((t) => t.isPlaceholder);
      table.name = name;
    },
    updatePlaceholderRelTable(newTable){
      const table = this.schema.relTables.find((t) => t.isPlaceholder);
      table.name = newTable.name;
      table.src = newTable.src;
      table.dst = newTable.dst;
    },
    hideAll() {
      this.showSchema = false;
      this.showShell = false;
      this.showLoader = false;
    },
    toggleSchema() {
      this.hideAll();
      this.showSchema = true;
      this.$refs.schemaView.handleResize();
    },
    toggleShell() {
      this.hideAll();
      this.showShell = true;
    },
    toggleLoader() {
      this.hideAll();
      this.showLoader = true;
    },
    showSettingsModal() {
      this.showSettings = true;
      this.$nextTick(() => {
        this.$refs.settings.showModal();
      });
    },
    updateNavbarHeight() {
      this.navbarHeight = this.$refs.navbar.clientHeight;
    },
    ...mapActions(useSettingsStore, ['initDefaultSettings', 'removeTablesBySchema']),
  },
  mounted() {
    this.updateNavbarHeight();
    window.addEventListener("resize", this.updateNavbarHeight);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.updateNavbarHeight);
  },
  created() {
    this.getSchema().then(() => {
      this.initDefaultSettings(this.schema);
      this.$refs.schemaView.drawGraph();
    });
  },
};
</script>

<style scoped lang="scss">
nav.navbar {
  > div.container {
    max-width: 100%;
  }
}

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

.nav-item {
  &.active {
    a {
      color: $gray-300;
    }
  }
}
</style>
