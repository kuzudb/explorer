<template>
  <div class="main-layout">
    <div
      class="wrapper"
      :class="{ 'toggled': isSidebarCollapsed }"
    >
      <div class="sidebar-wrapper">
        <ul class="sidebar-nav">
          <li>
            <ul
              v-if="modeStore.isReadOnly"
              class="navbar-nav hide-on-collapse"
            >
              <li class="nav-item">
                <span
                  class="badge"
                  @click="accessModeModal.show()"
                >Read-only Mode</span>
              </li>
            </ul>
            <ul
              v-if="modeStore.isDemo"
              class="navbar-nav hide-on-collapse"
            >
              <li class="nav-item">
                <span
                  class="badge bg-primary"
                  @click="accessModeModal.show()"
                >Instructions</span>
              </li>
            </ul> 
            <div class="sidebar__header flex justify-between items-center">
              <a
                class="navbar-brand hide-on-collapse"
                href="//kuzudb.com"
                target="_blank"
              >
                <img
                  :key="logoUrl"
                  :src="logoUrl"
                  alt="Logo"
                  class="sidebar__logo"
                >
              </a>
              
              <a
                class="menu-toggle"
                @click="toggleSidebar"
              >
                <button
                  class="fa fa-bars items-center!"
                  aria-hidden="true"
                />
              </a>           
            </div>             
            <hr>
          </li>

          <li :class="['nav-item', { active: showShell }]">
            <a
              aria-hidden="true"
              href="#shell"
              @click="toggleShell()"
            >
              <i class="fa-solid fa-terminal" />
              <span class="hide-on-collapse">Shell</span>
            </a>
          </li>
          <li :class="['nav-item', { active: showSchema }]">
            <a
              aria-hidden="true"
              href="#schema"
              @click="toggleSchema()"
            >
              <i class="fa-solid fa-circle-nodes" />
              <span class="hide-on-collapse">Schema</span>
            </a>
          </li>
          <li
            :class="['nav-item', { active: showLoader }]"
            hidden
          >
            <a
              aria-hidden="true"
              href="#datasets"
              @click="toggleLoader()"
            >
              <i class="fa-solid fa-database" />
              <span class="hide-on-collapse">Datasets</span>
            </a>
          </li>
          <li
            v-if="!modeStore.isReadOnly"
            :class="['nav-item', { active: showImporter || showLoader }]"
          >
            <a
              aria-hidden="true"
              href="#importer"
              @click="toggleImporter()"
            >
              <i class="fa-solid fa-upload" />
              <span class="hide-on-collapse">Import Data</span>
            </a>
          </li>
          <li class="nav-item">
            <a
              aria-hidden="true"
              href="#settings"
              @click="showSettingsModal()"
            >
              <i class="fa-solid fa-cog" />
              <span class="hide-on-collapse">Settings</span>
            </a>
          </li>
          <li class="nav-item">
            <a
              aria-hidden="true"
              href="https://docs.kuzudb.com"
              target="_blank"
            >
              <i class="fa-solid fa-book" />
              <span class="hide-on-collapse">Docs</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="main-layout__main-container">
        <div class="container-fluid">
          <SchemaViewMain
            v-show="showSchema"
            ref="schemaView"
            :schema="schema"
            :navbar-height="0"
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
            ref="shellView"
            :schema="schema"
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
            :navbar-height="0"
            @reload-schema="reloadSchema"
            @back="toggleImporter(true)"
            @jump-to-shell-view="toggleShell(true)"
          />
          <ImporterMainView
            v-show="showImporter"
            :schema="schema"
            @reload-schema="reloadSchema"
            @load-bundled-dataset="toggleLoader"
          />
        </div>
      </div>
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
              Welcome to Kuzu Explorer!
            </h5>
          </div>
          <div class="modal-body">
            <div v-if="modeStore.isDemo">
              <p>
                This WebAssembly-powered demo of <a href="https://kuzudb.com/">Kuzu</a> lets you import and explore
                graph
                data with Cypher queries.
                Go to "Import Data" to get started. See the <a
                  href="https://docs.kuzudb.com/visualization/kuzu-explorer/"
                  target="_blank"
                >docs</a> or <a
                  href="https://www.youtube.com/watch?v=yKcVV_bhBTo"
                  target="_blank"
                >video tutorial</a> for help.
                <br><br>
                Note: Data is not saved between sessions.
              </p>
              <hr>
              <div
                v-if="!isKuzuWasmInitialized"
                class="d-flex align-items-center"
              >
                <strong class="text-primary">Initializing WebAssembly module...</strong>
                <div
                  class="spinner-border text-primary ms-auto"
                  role="status"
                />
              </div>
              <div
                v-else
                class="d-flex align-items-center"
              >
                <strong class="text-success">
                  <i class="fa-solid fa-check" />&nbsp; WebAssembly is ready—start exploring!
                </strong>
              </div>
            </div>
            <p v-if="modeStore.isReadOnly">
              Kuzu Explorer is running in read-only mode. In this mode, you cannot load a
              dataset, modify the schema, or execute write queries. If you want to make
              changes to the database, please restart your Kuzu Explorer Docker image in
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
import Axios from "@/utils/AxiosWrapper";
import { useSettingsStore } from "../store/SettingsStore";
import { useModeStore } from "../store/ModeStore";
import { mapActions, mapStores } from 'pinia'
import { Modal } from 'bootstrap';
import DuckDB from '../utils/DuckDB';
import Kuzu from '../utils/KuzuWasm';


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
    schema: null,
    isKuzuWasmInitialized: false,
    isSidebarCollapsed: false,
  }),
  computed: {
    ...mapStores(useModeStore),
    logoUrl() {
      return this.modeStore.theme === 'vs-dark'
        ? '/img/kuzu-logo-dark.png'
        : '/img/kuzu-logo-light.png';
    },
  },
  mounted() {
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
  async created() {
    await this.getMode();
    if (this.modeStore.isWasm) {
      this.isKuzuWasmInitialized = false;
      await Kuzu.init();
      this.isKuzuWasmInitialized = true;
    }
    const res = await Promise.all([this.getSchema(), this.getStoredSettings()])
    let storedSettings = res[1];
    if (!storedSettings || Object.keys(storedSettings).length === 0) {
      storedSettings = this.loadSettingsFromLocalStorage();
    }
    this.initSettings(this.schema, storedSettings);
    this.$refs.schemaView.drawGraph();
  },
  methods: {
    async getSchema() {
      let schema;
      if (this.modeStore.isWasm) {
        schema = await Kuzu.getSchema();
      }
      else {
        const response = await Axios.get("/api/schema");
        schema = response.data;
      }
      this.schema = schema;
    },
    async getMode() {
      const response = await Axios.get("/api/mode");
      const mode = response.data.mode;
      this.modeStore.setMode(mode);
      this.$nextTick(() => {
        if (this.modeStore.isDemo) {
          this.accessModeModal.show();
          this.toggleImporter(true);
        }
      });
    },
    async getStoredSettings() {
      if (this.modeStore.isWasm) {
        return {};
      }
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
        connectivity: [],
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
      if (newTable.name) {
        table.name = newTable.name;
      }
      if (newTable.connectivity) {
        table.connectivity = newTable.connectivity;
      }
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
    toggleSidebar() {
      this.isSidebarCollapsed = !this.isSidebarCollapsed;
      window.dispatchEvent(new Event('resize'));
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

<style>
:root {
  --sidebar-width: 180px;
  --sidebar-collapsed-width: 60px;
}

body {
  overflow-x: hidden;
}
.sidebar__logo {
    height: 28px;
    image-rendering: crisp-edges;
}

.wrapper {
  padding-left: var(--sidebar-width);
  transition: all 0.6s ease;
}

.wrapper.toggled {
  padding-left: var(--sidebar-collapsed-width);
}

.sidebar-wrapper {
  z-index: 1000;
  position: fixed;
  left: 0;
  width: var(--sidebar-width);
  height: 100%;
  margin-left: 0;
  overflow-y: auto;
  background-color: var(--bs-body-bg-secondary);
  transition: all 0.5s ease;
}

.wrapper.toggled .sidebar-wrapper {
  width: var(--sidebar-collapsed-width);
}

.main-layout__main-container {
  width: 100%;
  position: relative;
  transition: all 0.6s ease;
}

.sidebar-nav {
  top: 0;
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    line-height: 1.5;

    a {
      display: flex;
      align-items: center;
      text-decoration: none;
      color: var(--bs-body-text);
      padding: 8px 10px;
      gap: 8px;

      &.hover {
        text-decoration: none;
      }
    }

    hr {
      margin: 10px;
      background-color: var(--bs-body-inactive);
    }

    span {
      color: var(--bs-body-text);
    }
  }
}

.wrapper.toggled .hide-on-collapse {
  opacity: 0;
  visibility: hidden;
  width: 0;
  overflow: hidden;
}

.wrapper.toggled .sidebar__header {
  justify-content: center;
  padding: 0.5rem;
}

.wrapper.toggled .sidebar-nav li a {
    justify-content: center;
    padding: 8px 0;
}

.wrapper.toggled .sidebar-nav li i {
    margin-right: 0;
}

.wrapper.toggled .menu-toggle {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.wrapper.toggled .sidebar__header .navbar-brand {
    display: none;
}

.badge { 
  margin-left: 4px;
  margin-top: 4px;
}

.sidebar__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem ;
  gap: 1rem;

  .navbar-brand {
    display: flex;
    align-items: center;
  }

  .menu-toggle {
    display: flex;
    align-items: center;
    cursor: pointer;
    
    
    button {
      background: none;
      border: none;
      color: var(--bs-body-text);
      padding: 0;
      
      &:hover {
        opacity: 0.7;
      }
    }
  }
}
</style>
