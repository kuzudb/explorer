<template>
  <div>
    <nav
      ref="navbar"
      class="navbar navbar-expand-lg navbar-dark bg-dark"
    >
      <div class="container">
        <a
          class="navbar-brand"
          href="https://kuzudb.com"
          target="_blank"
        >
          <img
            src="/img/kuzu-logo-inverse.png"
            alt="Kuzu Logo"
            class="navbar__logo"
          >
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target=".navbar__buttons"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>
        <div class="collapse navbar-collapse navbar__buttons">
          <ul
            v-if="modeStore.isReadOnly"
            class="navbar-nav me-auto"
          >
            <li class="nav-item">
              <span
                class="badge bg-primary"
                @click="accessModeModal.show()"
              >Read-only Mode</span>
            </li>
          </ul>
          <ul
            v-if="modeStore.isDemo"
            class="navbar-nav me-auto"
          >
            <li class="nav-item">
              <span
                class="badge bg-primary"
                @click="accessModeModal.show()"
              >Demo Mode</span>
            </li>
          </ul>
          <ul class="navbar-nav ms-auto">
            <li :class="['nav-item', { active: showShell }]">
              <a
                class="nav-link"
                href="#"
                @click="toggleShell()"
              >
                <i class="fa-solid fa-terminal" />
                Shell
              </a>
            </li>
            <li :class="['nav-item', { active: showSchema }]">
              <a
                class="nav-link"
                href="#"
                @click="toggleSchema()"
              >
                <i class="fa-solid fa-circle-nodes" />
                Schema
              </a>
            </li>

            <li
              :class="['nav-item', { active: showLoader }]"
              hidden
            >
              <a
                class="nav-link"
                href="#"
                @click="toggleLoader()"
              >
                <i class="fa-solid fa-database" />
                Datasets
              </a>
            </li>

            <li
              v-if="!modeStore.isDemo && !modeStore.isReadOnly"
              :class="['nav-item', {
                active: showImporter || showLoader
              }]"
            >
              <a
                class="nav-link"
                href="#"
                @click="toggleImporter()"
              >
                <i class="fa-solid fa-upload" />
                Import Data
              </a>
            </li>

            <li class="nav-item">
              <a
                class="nav-link"
                href="#"
                @click="showSettingsModal()"
              >
                <i class="fa-solid fa-cog" />
                Settings
              </a>
            </li>

            <li class="nav-item">
              <a
                class="nav-link"
                href="https://docs.kuzudb.com"
                target="_blank"
              >
                <i class="fa-solid fa-book" />
                Docs
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
        ref="schemaView"
        :schema="schema"
        :navbar-height="navbarHeight"
        @reload-schema="reloadSchema"
        @add-placeholder-node-table="addPlaceholderNodeTable"
        @add-placeholder-rel-table="addPlaceholderRelTable"
        @update-placeholder-node-table-label="updatePlaceholderNodeTable"
        @update-placeholder-rel-table="updatePlaceholderRelTable"
        @set-placeholder="setPlaceholder"
        @unset-placeholder="unsetPlaceholder"
      />
      <ShellMainView
        v-show="showShell"
        :schema="schema"
        :navbar-height="navbarHeight"
        @reload-schema="reloadSchema"
      />
      <SettingsMainView
        v-if="showSettings"
        ref="settings"
        :schema="schema"
      />
      <DatasetMainView
        v-show="showLoader"
        :schema="schema"
        :navbar-height="navbarHeight"
        @reload-schema="reloadSchema"
        @back="toggleImporter(true)"
      />
      <ImporterMainView
        v-show="showImporter"
        :schema="schema"
        :navbar-height="navbarHeight"
        @reload-schema="reloadSchema"
        @load-bundled-dataset="toggleLoader"
      />
    </div>

    <div
      ref="modal"
      class="modal"
      tabindex="-1"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div
            v-if="modeStore.isDemo"
            class="modal-header"
          >
            <h5 class="modal-title">
              Welcome to Kùzu Explorer!
            </h5>
          </div>
          <div class="modal-body">
            <p v-if="modeStore.isDemo">
              This is a demo of <a href="https://kuzudb.com/">Kùzu</a> on the
              <a href="https://ldbcouncil.org/benchmarks/snb/">
                LDBC Social Network Benchmark
              </a>
              scale factor 0.1 dataset. Please run Kùzu Explorer locally to load a
              different dataset (see the
              <a href="https://kuzudb.com/docusaurus/kuzuexplorer/"> documentation here</a>).
              <br>
              <br>
              You can visualize the schema of LDBC SNB in the Schema tab and execute
              interactive Cypher queries in the Shell tab.
            </p>
            <p v-if="modeStore.isReadOnly">
              Kùzu Explorer is running in read-only mode. In this mode, you cannot load a
              dataset, modify the schema, or execute write queries. If you want to make
              changes to the database, please restart your Kùzu Explorer Docker image in
              read-write mode.
            </p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-primary"
              @click="accessModeModal.hide()"
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import SchemaViewMain from "./SchemaView/SchemaViewMain.vue";
import ShellMainView from "./ShellView/ShellMainView.vue";
import SettingsMainView from "./SettingsView/SettingsMainView.vue"
import DatasetMainView from "./DatasetView/DatasetMainView.vue"
import ImporterMainView from "./ImporterView/ImporterMainView.vue";
import Axios from "axios";
import { useSettingsStore } from "../store/SettingsStore";
import { useModeStore } from "../store/ModeStore";
import { mapActions, mapStores } from 'pinia'
import { Modal } from 'bootstrap';
import DuckDB from '../utils/DuckDB';

export default {
  name: "MainLayout",
  components: {
    SchemaViewMain,
    ShellMainView,
    SettingsMainView,
    DatasetMainView,
    ImporterMainView,
  },
  data: () => ({
    accessModeModal: null,
    showSchema: false,
    showImporter: false,
    showShell: true,
    showLoader: false,
    showSettings: false,
    navbarHeight: 0,
    schema: null,
  }),
  computed: {
    ...mapStores(useModeStore)
  },
  mounted() {
    this.updateNavbarHeight();
    this.accessModeModal = new Modal(this.$refs.modal);
    window.addEventListener("resize", this.updateNavbarHeight);
    window.setTimeout(() => {
        DuckDB.init();
      }, 500);
  },
  beforeUnmount() {
    this.accessModeModal.dispose();
    window.removeEventListener("resize", this.updateNavbarHeight);
  },
  created() {
    this.getMode();
    Promise.all([this.getSchema(), this.getStoredSettings()]).then((res) => {
      let storedSettings = res[1];
      if (!storedSettings || Object.keys(storedSettings).length === 0) {
        storedSettings = this.loadSettingsFromLocalStorage();
      }
      this.initSettings(this.schema, storedSettings);
      this.$refs.schemaView.drawGraph();
    });
  },
  methods: {
    async getSchema() {
      const response = await Axios.get("/api/schema");
      const schema = response.data;
      this.schema = schema;
      const relGroupsMap = {};
      this.schema.relGroups.forEach((g) => {
        g.rels.forEach((r) => {
          relGroupsMap[r] = g.name
        });
      });
      this.schema.relTables.forEach((r) => {
        if (relGroupsMap[r.name]) {
          r.group = relGroupsMap[r.name];
        }
      });
    },
    async getMode() {
      const response = await Axios.get("/api/mode");
      const mode = response.data.mode;
      this.modeStore.setMode(mode);
      this.$nextTick(() => {
        if (this.modeStore.isDemo) {
          this.accessModeModal.show();
        }
      });
    },
    async getStoredSettings() {
      return (await Axios.get("/api/session/settings")).data;
    },
    async reloadSchema() {
      await this.getSchema();
      this.handleSchemaReload(this.schema);
      this.$refs.schemaView.handleSettingsChange();
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
    updatePlaceholderRelTable(newTable) {
      const table = this.schema.relTables.find((t) => t.isPlaceholder);
      table.name = newTable.name;
      table.src = newTable.src;
      table.dst = newTable.dst;
    },
    setPlaceholder(name) {
      let table = this.schema.nodeTables.find((t) => t.name === name);
      if (table) {
        table.isPlaceholder = true;
        this.setPlaceholderNodeTable(name);
        return;
      }
      table = this.schema.relTables.find((t) => t.name === name);
      if (table) {
        table.isPlaceholder = true;
        this.setPlaceholderRelTable(name);
      }
    },
    unsetPlaceholder({ originalLabel, isNode }) {
      let table;
      if (isNode) {
        table = this.schema.nodeTables.find((t) => t.isPlaceholder);
      } else {
        table = this.schema.relTables.find((t) => t.isPlaceholder);
      }
      if (table) {
        table.isPlaceholder = false;
        table.name = originalLabel;
      }
      if (isNode) {
        this.unsetPlaceholderNodeTable(originalLabel);
      } else {
        this.unsetPlaceholderRelTable(originalLabel);
      }
      this.$nextTick(() => {
        this.$refs.schemaView.handleSettingsChange();
      });
    },
    hideAll() {
      this.showSchema = false;
      this.showShell = false;
      this.showLoader = false;
      this.showImporter = false;
    },
    toggleSchema() {
      this.hideAll();
      this.showSchema = true;
      this.$nextTick(() => {
        this.$refs.schemaView.handleResize();
      });
    },
    toggleShell() {
      this.hideAll();
      this.showShell = true;
    },
    toggleLoader() {
      this.hideAll();

     
        this.showLoader = true;
      
    },
    toggleImporter(force = false) {
      if (force || !this.showLoader) {
        this.hideAll();
        this.showImporter = true;
      }
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
    ...mapActions(useSettingsStore, [
      'initSettings',
      'loadSettingsFromLocalStorage',
      'handleSchemaReload',
      'setPlaceholderNodeTable',
      'setPlaceholderRelTable',
      'unsetPlaceholderNodeTable',
      'unsetPlaceholderRelTable',
    ])
  },
};
</script>

<style scoped lang="scss">
nav.navbar {
  >div.container {
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
  .badge {
    cursor: pointer;
  }

  &.active {
    a {
      color: $gray-300;
    }
  }
}
</style>
