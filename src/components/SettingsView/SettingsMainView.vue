<template>
  <div
    ref="modal"
    class="modal"
    tabindex="-1"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content bg-transparent border-transparent">
        <div
          v-if="Object.keys(currentSettings).length > 0"
          class="modal-body settings-body"
        >
          <!-- Viewing Options -->
          <h2 class="section-header">
            Viewing Options
          </h2>
          <div class="settings-group">
            <h4 class="settings-label">
              Toggle Modes
            </h4>
            <div class="settings-toggle">
              <label
                for="switch-component-on"
                class="toggle-label"
              >Dark Mode</label>
              <div class="toggle-switch">
                <input
                  id="switch-component-on"
                  v-model="isDarkMode"
                  type="checkbox"
                  class="switch-input peer"
                  @click="toggleDarkMode()"
                >
                <label
                  for="switch-component-on"
                  class="switch-slider"
                />
              </div>
              <label
                for="switch-component-on"
                class="toggle-label"
              >Light Mode</label>
            </div>
          </div>
          <hr class="settings-divider">

          <!-- Graph Visualization Options -->
          <h2 class="section-header">
            Graph Visualization Options
          </h2>

          <!-- Nodes -->
          <h2 class="subsection-header">
            Nodes
          </h2>
          <div class="settings-group">
            <table class="settings-table">
              <thead>
                <tr>
                  <th class="table-cell">
                    Label
                  </th>
                  <th class="table-cell">
                    Color
                  </th>
                  <th class="table-cell">
                    Size (px)
                  </th>
                  <th class="table-cell">
                    Caption
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(node, key, index) in currentSettings.graphViz.nodes"
                  :key="index"
                >
                  <td class="table-cell">
                    {{ node.name === placeholderNodeTable ? getPlaceholderNodeLabel() : node.name }}
                  </td>
                  <td class="table-cell">
                    <input
                      v-model="node.g6Settings.style.fill"
                      type="color"
                      class="form-control form-control-color"
                      title="Choose color for node"
                    >
                  </td>
                  <td class="table-cell">
                    <input
                      v-model="node.g6Settings.size"
                      type="number"
                      class="form-control"
                      min="10"
                      max="200"
                      title="Choose size for node"
                    >
                  </td>
                  <td class="table-cell">
                    <select
                      v-model="node.label"
                      class="form-select"
                    >
                      <option
                        v-for="option in getCaptionOptions(node, true)"
                        :key="option.text"
                        :value="option.value"
                      >
                        {{ option.text }}
                      </option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Relationships -->
          <h2 class="subsection-header">
            Relationships
          </h2>
          <div class="settings-group">
            <table class="settings-table">
              <thead>
                <tr>
                  <th class="table-cell">
                    Label
                  </th>
                  <th class="table-cell">
                    Color
                  </th>
                  <th class="table-cell">
                    Size (px)
                  </th>
                  <th class="table-cell">
                    Caption
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(rel, key, index) in currentSettings.graphViz.rels"
                  :key="index"
                >
                  <td class="table-cell">
                    {{ rel.name === placeholderRelTable ? getPlaceholderRelLabel() : rel.name }}
                  </td>
                  <td class="table-cell">
                    <input
                      v-model="rel.g6Settings.style.stroke"
                      type="color"
                      class="form-control form-control-color"
                      title="Choose color for rel"
                      @change="syncRelFill(rel)"
                    >
                  </td>
                  <td class="table-cell">
                    <input
                      v-model="rel.g6Settings.size"
                      type="number"
                      class="form-control"
                      min="1"
                      max="20"
                      title="Choose size for rel"
                    >
                  </td>
                  <td class="table-cell">
                    <select
                      v-model="rel.label"
                      class="form-select"
                    >
                      <option
                        v-for="option in getCaptionOptions(rel, false)"
                        :key="option.text"
                        :value="option.value"
                      >
                        {{ option.text }}
                      </option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Performance Options -->
          <h2 class="subsection-header">
            Performance Options
          </h2>
          <div class="settings-row">
            <h4 class="settings-label">
              Max number of nodes to draw for graph visualization
            </h4>
            <input
              v-model="currentSettings.performance.maxNumberOfNodes"
              type="number"
              min="100"
              max="2000"
              class="settings-input"
              placeholder="100"
              required
            >
          </div>
          <div class="settings-row">
            <h4 class="settings-label">
              Max number of nodes to expand on double click
            </h4>
            <input
              v-model="currentSettings.performance.maxNumberOfNodesToExpand"
              type="number"
              min="5"
              max="1000"
              class="settings-input"
              placeholder="10"
              required
            >
          </div>
          <hr class="settings-divider">

          <!-- Schema View Options -->
          <h2 class="section-header">
            Schema View Options
          </h2>
          <div class="settings-row">
            <h4 class="settings-label">
              Show relationship labels
            </h4>
            <div>
              <button
                :class="{
                  'active-btn': currentSettings.schemaView.showRelLabels === showRelLabelsOptions.HOVER,
                  'inactive-btn': currentSettings.schemaView.showRelLabels !== showRelLabelsOptions.HOVER
                }"
                @click="currentSettings.schemaView.showRelLabels = showRelLabelsOptions.HOVER"
              >
                On hover or click
              </button>
              <button
                :class="{
                  'active-btn': currentSettings.schemaView.showRelLabels === showRelLabelsOptions.ALWAYS,
                  'inactive-btn': currentSettings.schemaView.showRelLabels !== showRelLabelsOptions.ALWAYS
                }"
                @click="currentSettings.schemaView.showRelLabels = showRelLabelsOptions.ALWAYS"
              >
                Always
              </button>
            </div>
          </div>
          <hr class="settings-divider">

          <!-- Table View Options -->
          <h2 class="section-header">
            Table View Options
          </h2>
          <div class="settings-row">
            <h4 class="settings-label">
              Number of rows per page
            </h4>
            <input
              v-model="currentSettings.tableView.rowsPerPage"
              type="number"
              min="1"
              max="500"
              class="settings-input"
              placeholder="2"
              required
            >
          </div>
          <hr class="settings-divider">

          <!-- Query Generation Options -->
          <div v-if="!modeStore.isWasm">
            <h2 class="section-header">
              Query Generation Options
            </h2>
            
            <div class="settings-row">
              <h4 class="settings-label">
                LLM provider
              </h4>
              <select
                v-model="currentSettings.gpt.llmProvider"
                class="settings-input form-select"
                @change="handleLlmProviderChange"
              >
                <option
                  v-for="(value, key) in llmProviderOptions"
                  :key="key"
                  :value="key"
                >
                  {{ value.text }}
                </option>
              </select>
            </div>
            <div
              v-if="isOpenAIApi"
              class="settings-row"
            >
              <span class="settings-label">OpenAI model</span>
              <select
                v-model="currentSettings.gpt.model"
                class="settings-input form-select"
              >
                <option
                  v-for="option in gptModelOptions"
                  :key="option"
                  :value="option"
                >
                  {{ option }}
                </option>
              </select>
            </div>
            <div
              v-else
              class="settings-row"
            >
              <span class="settings-label">Model name</span>
              <input
                v-model="currentSettings.gpt.model"
                type="text"
                class="settings-input form-control"
                title="Enter the custom model name"
              >
            </div>
            <div
              v-if="!isOpenAIApi"
              class="settings-row"
            >
              <span class="settings-label">API endpoint</span>
              <input
                v-model="currentSettings.gpt.url"
                type="text"
                class="settings-input form-control"
                title="Enter the API endpoint"
              >
            </div>
            <div class="settings-row">
              <span class="settings-label">

                {{ isOpenAIApi ? 'OpenAI' : 'API' }} key
              </span>
              <input
                v-model="currentSettings.gpt.apiToken"
                :type="showPassword ? 'text' : 'password'"
                class="settings-input form-control"
                :title="isOpenAIApi ? 'Enter the OpenAI API key' : 'Enter API key'"
              >
              <button
                type="button"
                class="btn ml-3"
                @click="togglePasswordVisibility"
              >
                <i :class="showPassword ? 'fa fa-eye-slash' : 'fa fa-eye'" />
              </button>
            </div>
            <small
              v-if="isOpenAIApi"
              class="form-text text-muted"
            >
              The OpenAI API key is used to generate Cypher queries from natural language using the specified model.
              It can be obtained from
              <a
                href="https://platform.openai.com/"
                target="_blank"
              >OpenAI</a>. We only
              store the API key in your browser. Click
              <a
                href="#"
                @click="clearGptToken()"
              >here</a> to clear the API key from the
              browser.
            </small>
            <small
              v-else
              class="form-text text-muted"
            >
              The API key may not be required for some deployments, such as the locally hosted version of Ollama.
              Please refer to the documentation for your model
              provider.
              If not required, leave this field empty and we automatically fill it with "IGNORED".
              We only
              store the API key in your browser. Click
              <a
                href="#"
                @click="clearGptToken()"
              >here</a> to clear the API key from the
              browser.
            </small>
          </div>
        </div>

        <div class="modal-footer settings-footer d-flex justify-content-end">
          <button
            type="button"
            class="btn btn-outline-secondary rounded-pill px-4 py-2"
            @click="hideModal()"
          >
            Close
          </button>
          <button
            type="button"
            class="btn-save rounded-pill"
            @click="saveAndHideModal()"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import { useSettingsStore } from "../../store/SettingsStore";
import { useModeStore } from "../../store/ModeStore";
import { mapStores } from 'pinia';
import { Modal } from 'bootstrap';
import {
  SHOW_REL_LABELS_OPTIONS,
  PLACEHOLDER_NODE_TABLE,
  PLACEHOLDER_REL_TABLE,
  GPT_MODELS,
  LLM_PROVIDERS
} from "../../utils/Constants";

export default {
  name: "SettingsMainView",
  props: {
    schema: {
      type: Object,
      required: false,
      default: null,
    },
  },
  data: () => ({
    currentSettings: {},
    modal: null,
    showRelLabelsOptions: SHOW_REL_LABELS_OPTIONS,
    placeholderNodeTable: PLACEHOLDER_NODE_TABLE,
    placeholderRelTable: PLACEHOLDER_REL_TABLE,
    gptModelOptions: GPT_MODELS,
    llmProviderOptions: LLM_PROVIDERS,
    databaseResetStateText: "",
    databaseResetStateClass: "primary",
    showPassword: false,
  }),
  computed: {
    ...mapStores(useSettingsStore, useModeStore),
    isOpenAIApi() {
      return this.currentSettings.gpt.llmProvider === LLM_PROVIDERS.OPENAI.key;
    },
  },
  mounted() {
    this.modal = new Modal(this.$refs.modal);
    this.$refs.modal.addEventListener('hidden.bs.modal', this.resetSettings);
  },
  beforeUnmount() {
    this.$refs.modal.removeEventListener('hidden.bs.modal', this.resetSettings);
    this.modal.dispose();
  },
  methods: {
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
    toggleModal() {
      this.modal.toggle();
    },
    showModal() {
      this.copyCurrentSettings();
      this.databaseResetStateText = "";
      this.modal.show();
    },
    hideModal() {
      this.modal.hide();
    },
    copyCurrentSettings() {
      const settingState = this.settingsStore.allSettings;
      this.currentSettings = JSON.parse(JSON.stringify(settingState));
    },
    saveAndHideModal() {
      this.settingsStore.updateSettings(this.currentSettings);
      this.$nextTick(() => {
        this.hideModal();
      });
    },
    handleLlmProviderChange() {
      if (this.currentSettings.gpt.llmProvider === LLM_PROVIDERS.OPENAI.key) {
        this.currentSettings.gpt.model = GPT_MODELS[0];
        this.currentSettings.gpt.url = "";
      } else {
        this.currentSettings.gpt.model = "";
        this.currentSettings.gpt.apiToken = "";
      }
    },
    getCaptionOptions(entity, isNode) {
      const name = entity.name === this.placeholderNodeTable ? this.getPlaceholderNodeLabel() :
        (entity.name === this.placeholderRelTable ?
          this.getPlaceholderRelLabel() : entity.name);
      const properties = (isNode ? this.schema.nodeTables : this.schema.relTables)
        .find(
          (table) => table.name === name
        ).properties;
      const options = [
        {
          value: "_label",
          text: "(Table Label)",
        },
        {
          value: null,
          text: "(No Caption)",
        }
      ]
      properties.forEach((property) => {
        options.push({
          value: property.name,
          text: property.name,
        });
      });
      return options;
    },
    getPlaceholderNodeLabel() {
      return this.schema.nodeTables.find(t => t.isPlaceholder).name;
    },
    getPlaceholderRelLabel() {
      return this.schema.relTables.find(t => t.isPlaceholder).name;
    },
    resetSettings() {
      // Bootstrap modal can also be closed by clicking outside of the modal.
      // This way ensures that we can get the event when the modal is closed.
      this.currentSettings = {};
    },
    clearGptToken() {
      this.currentSettings.gpt.apiToken = "";
      this.settingsStore.clearGptApiToken();
    },
    syncRelFill(rel) {
      if (!rel.g6Settings.style.endArrow) {
        rel.g6Settings.style.endArrow = {};
      }
      rel.g6Settings.style.endArrow.fill = rel.g6Settings.style.stroke;
    },
    toggleDarkMode() {
      if (document.documentElement.getAttribute('data-bs-theme') === 'dark') {
        document.documentElement.setAttribute('data-bs-theme', 'light');
        Monaco.editor.setTheme('vs-light');
        
        
      } else {
        document.documentElement.setAttribute('data-bs-theme', 'dark');
        Monaco.editor.setTheme('vs-dark');
       
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

.modal-body {
  max-height: calc(100vh - 200px);
  overflow-y: auto;
}

span.pull-left {
  position: absolute;
  left: 12px;
}

.settings-body {
  @apply rounded-t-xl w-full bg-[var(--bs-body-bg-secondary)] border border-[var(--bs-body-inactive)] px-8 py-8;
  max-height: calc(100vh - 200px);
  overflow-y: auto;
}

.section-header {
  @apply font-medium;
}

.subsection-header {
  @apply font-medium text-sm px-2 py-2;
}

.settings-group {
  @apply flex flex-row justify-between mt-2 rounded-xl px-4 py-2 w-full bg-[var(--bs-body-bg)];
}

.settings-label {
  @apply font-light text-sm;
}

.settings-toggle {
  @apply inline-flex items-center gap-2;
}

.toggle-label {
  @apply text-[var(--bs-body-text)] text-sm cursor-pointer;
}

.toggle-switch {
  @apply relative inline-block w-11 h-5;
}

.switch-input {
  @apply appearance-none w-11 h-5 bg-[var(--bs-body-bg-secondary)] rounded-full checked:bg-[var(--bs-body-bg-accent)] cursor-pointer transition-colors duration-300;
}

.switch-slider {
  @apply absolute top-0 left-0 w-5 h-5 bg-[var(--bs-body-inactive)] rounded-full border border-[var(--bs-body-inactive)] shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-[var(--bs-body-inactive)] cursor-pointer;
}

.settings-divider {
  @apply h-px my-4 bg-[var(--bs-body-inactive)] border-0;
}

.settings-table {
  @apply table-auto w-full;
}

.table-cell {
  @apply px-4 py-2;
}

.settings-row {
  @apply flex flex-row justify-between rounded-xl px-4 py-3 w-full;
}

.settings-input {
  @apply bg-[var(--bs-body-bg)] border border-[var(--bs-body-inactive)] text-[var(--bs-body-text)] text-sm rounded-lg px-8 py-2;
}

.active-btn {
  @apply bg-[var(--bs-body-bg-accent)] rounded-lg px-4 py-2 mr-4;
}

.inactive-btn {
  @apply bg-[var(--bs-body-bg)] rounded-lg px-4 py-2 mr-4;
}

.settings-footer {
  @apply bg-[var(--bs-body-bg-secondary)] border-b border-l border-r rounded-b-xl border-solid border-[var(--bs-body-inactive)]  gap-3;
}

.btn-save {
  @apply bg-[var(--bs-body-bg-accent)] py-2 px-4;
}
</style>

