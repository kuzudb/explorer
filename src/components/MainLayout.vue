<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark" ref="navbar">
      <div class="container">
        <a class="navbar-brand" href="https://kuzudb.com" target="_blank">
          <img src="/img/kuzu-logo-inverse.png" alt="Kuzu Logo" class="navbar__logo" />
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
          <ul class="navbar-nav me-auto" v-if="modeStore.isReadOnly">
            <li class="nav-item">
              <span class="badge bg-primary" @click="accessModeModal.show()"
                >Read-only Mode</span
              >
            </li>
          </ul>
          <ul class="navbar-nav me-auto" v-if="modeStore.isDemo">
            <li class="nav-item">
              <span class="badge bg-primary" @click="accessModeModal.show()"
                >Demo Mode</span
              >
            </li>
          </ul>
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
      <ShellMainView
        v-show="showShell"
        :schema="schema"
        :navbarHeight="navbarHeight"
        @reloadSchema="reloadSchema"
      />
      <SettingsMainView :schema="schema" ref="settings" v-if="showSettings" />
      <DatasetMainView
        v-show="showLoader"
        :schema="schema"
        :navbarHeight="navbarHeight"
        @reloadSchema="reloadSchema"
      />
    </div>

    <div class="modal" tabindex="-1" ref="modal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header" v-if="modeStore.isDemo">
            <h5 class="modal-title">Welcome to KùzuExplorer!</h5>
          </div>
          <div class="modal-body">
            <p v-if="modeStore.isDemo">
              Welcome to the <a target="_blank" href="https://kuzudb.com">Kùzu</a> demo!
              In this demo, the
              <a target="_blank" href="https://ldbcouncil.org/benchmarks/snb/">
                LDBC SNB Interactive Benchmark</a
              >
              dataset with scale factor 0.1 is loaded. You can review the schema of this
              dataset and execute Cypher queries in the shell. However, you cannot load a
              different dataset, modify the schema, or execute write queries in this demo.
              If you want load a different bundled dataset or use your own dataset, you
              can run KùzuExplorer locally. Please refer to
              <a target="_blank" href="https://github.com/kuzudb/explorer/"
                >the GitHub repository</a
              >
              for more information.
            </p>
            <p v-if="modeStore.isReadOnly">
              KùzuExplorer is running in read-only mode. In this mode, you cannot load a
              dataset, modify the schema, or execute write queries. If you want to make
              changes to the database, please restart your KùzuExplorer Docker image in
              read-write mode.
            </p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" @click="accessModeModal.hide()">
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
import Axios from "axios";
import { useSettingsStore } from "../store/SettingsStore";
import { useModeStore } from "../store/ModeStore";
import { mapActions, mapStores } from 'pinia'
import { Modal } from 'bootstrap';

export default {
  name: "MainLayout",
  components: {
    SchemaViewMain,
    ShellMainView,
    SettingsMainView,
    DatasetMainView
  },
  data: () => ({
    accessModeModal: null,
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
      const relGroupsMap = {};
      this.schema.relGroups.forEach((g) => {
        g.rels.forEach((r) => {
          relGroupsMap[r] = g.name
        });
      });
      this.schema.relTables.forEach((r) => {
       if(relGroupsMap[r.name]) {
         r.group = relGroupsMap[r.name];
       }
      });
    },
    async getMode() {
      const response = await Axios.get("/api/mode");
      const mode = response.data.mode;
      this.modeStore.setMode(mode);
      this.$nextTick(() => {
        if(this.modeStore.isDemo) {
          this.accessModeModal.show();
        }
      });
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
    hideAll() {
      this.showSchema = false;
      this.showShell = false;
      this.showLoader = false;
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
    showSettingsModal() {
      this.showSettings = true;
      this.$nextTick(() => {
        this.$refs.settings.showModal();
      });
    },
    updateNavbarHeight() {
      this.navbarHeight = this.$refs.navbar.clientHeight;
    },
    ...mapActions(useSettingsStore, ['initDefaultSettings', 'handleSchemaReload']),
  },
  computed: {
    ...mapStores(useModeStore)
  },
  mounted() {
    this.updateNavbarHeight();
    this.accessModeModal = new Modal(this.$refs.modal);
    window.addEventListener("resize", this.updateNavbarHeight);
  },
  beforeUnmount() {
    this.accessModeModal.dispose();
    window.removeEventListener("resize", this.updateNavbarHeight);
  },
  created() {
    this.getMode();
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
