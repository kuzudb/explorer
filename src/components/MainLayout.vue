<template>
  <div>
    <nav ref="navbar" class="navbar-container">
      <div class="navbar-content">
        <a href="//kuzudb.com" target="_blank">
          <img :src="logoUrl" alt="Kuzu Logo" class="h-8" />
        </a>
        <!-- Toggle Button (Mobile) -->
        <button
          class="nav-toggle md:hidden"
          @click="isNavOpen = !isNavOpen"
          aria-label="Toggle navigation"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <!-- Nav Items -->
        <div
          :class="[
            'w-full md:w-auto md:flex md:items-center',
            isNavOpen ? 'block' : 'hidden'
          ]"
          id="navbar-default"
        >
          <ul class="nav-items">
            <li v-if="modeStore.isReadOnly">
              <span
                class="nav-badge"
                @click="accessModeModal.show()"
              >Read-only Mode</span>
            </li>

            <li v-if="modeStore.isDemo">
              <span
                class="nav-badge"
                @click="accessModeModal.show()"
              >Instructions</span>
            </li>
            <li :class="{ 'font-bold': showShell }">
              <a href="#" class="nav-hover" @click="toggleShell()">
                <i class="fa-solid focus:text-[var(--bs-body-text)] fa-terminal"></i>
                Shell
              </a>
            </li>
            <li :class="{ 'font-bold': showSchema }">
              <a href="#" class="nav-hover" @click="toggleSchema()">
                <i class="fa-solid focus:text-[var(--bs-body-text)] fa-circle-nodes"></i>
                Schema
              </a>
            </li>
            <li v-if="!modeStore.isReadOnly" :class="{ 'font-bold': showImporter || showLoader }">
              <a href="#" class="nav-hover" @click="toggleImporter()">
                <i class="fa-solid focus:text-[var(--bs-body-text)] fa-upload"></i>
                Import Data
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline" @click="showSettingsModal()">
                <i class="fa-solid fa-cog"></i>
                Settings
              </a>
            </li>
            <li>
              <a href="https://docs.kuzudb.com" target="_blank" class="hover:underline">
                <i class="fa-solid fa-book"></i>
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
        ref="shellView"
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
        @jump-to-shell-view="toggleShell(true)"
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
                v-if=" !isKuzuWasmInitialized"
                class="d-flex align-items-center"
              >
                <strong class="text-primary">
                  Initializing WebAssembly module...
                </strong>
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
                  <i class="fa-solid fa-check" />&nbsp; WebAssembly is ready—start exploring! </strong>
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
    navbarHeight: 0,
    schema: null,
    isKuzuWasmInitialized: false,
  }),
  computed: {
    ...mapStores(useModeStore),
    logoUrl() {
      return `${process.env.BASE_URL}img/kuzu-logo-dark.png`;
    }
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
@tailwind base;
@tailwind components;
@tailwind utilities;

.navbar-container{
  @apply bg-[var(--bs-body-bg-secondary)] text-[var(--bs-body-text)] border-b border-[var(--bs-body-inactive)];
}

.navbar-content{
  @apply mx-4 flex flex-row items-center justify-between px-2 py-3;
}

.nav-items{
  @apply text-[var(--bs-body-text)] flex flex-col md:flex-row md:items-center md:space-x-6 mt-1 md:mt-0 w-full;
}

.nav-hover{
  @apply focus:text-[var(--bs-body-text)] hover:underline;
}

.nav-badge{
  @apply bg-[var(--bs-body-bg-accent)] text-[var(--bs-body-text)] px-3 py-1 rounded cursor-pointer;
}

.nav-toggle{
  @apply text-[var(--bs-body-text)] md:hidden focus:outline-none;
}

.layout__main-content {
  overflow: hidden;
  width: 100%;
}

.d-flex.align-items-center{
  padding-left: 20px;
  padding-right: 20px;
}
</style>
