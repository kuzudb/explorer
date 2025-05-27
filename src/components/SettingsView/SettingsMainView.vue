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
          <h2> Viewing Options </h2>
          <div class="settings-group">
            <h4>Toggle Modes</h4>
            <div class="settings-toggle">
              <label
                for="switch-component-on"
              >Dark Mode</label>
              <div class="toggle-switch">
                <input
                  id="switch-component-on"
                  v-model="isDarkMode"
                  type="checkbox"
                  class="switch-input "
                  @click="toggleDarkMode"
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
          <hr>

          <!-- Graph Visualization Options -->
          <h2> Graph Visualization Options </h2>

          <!-- Nodes -->
          <h3> Nodes </h3>
          <div class="settings-group">
            <table>
              <thead>
                <tr>
                  <th>
                    Label
                  </th>
                  <th>
                    Color
                  </th>
                  <th>
                    Size (px)
                  </th>
                  <th>
                    Caption
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(node, key, index) in currentSettings.graphViz.nodes"
                  :key="index"
                >
                  <td>
                    {{ node.name === placeholderNodeTable ? getPlaceholderNodeLabel() : node.name }}
                  </td>
                  <td>
                    <input
                      v-model="node.g6Settings.style.fill"
                      type="color"
                      class="form-control form-control-color"
                      title="Choose color for node"
                    >
                  </td>
                  <td>
                    <input
                      v-model="node.g6Settings.size"
                      type="number"
                      class="form-control"
                      min="10"
                      max="200"
                      title="Choose size for node"
                    >
                  </td>
                  <td>
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
          <h3> Relationships </h3>
          <div class="settings-group">
            <table>
              <thead>
                <tr>
                  <th>
                    Label
                  </th>
                  <th>
                    Color
                  </th>
                  <th>
                    Size (px)
                  </th>
                  <th>
                    Caption
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(rel, key, index) in currentSettings.graphViz.rels"
                  :key="index"
                >
                  <td>
                    {{ rel.name === placeholderRelTable ? getPlaceholderRelLabel() : rel.name }}
                  </td>
                  <td>
                    <input
                      v-model="rel.g6Settings.style.stroke"
                      type="color"
                      class="form-control form-control-color"
                      title="Choose color for rel"
                      @change="syncRelFill(rel)"
                    >
                  </td>
                  <td>
                    <input
                      v-model="rel.g6Settings.size"
                      type="number"
                      class="form-control"
                      min="1"
                      max="20"
                      title="Choose size for rel"
                    >
                  </td>
                  <td>
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
          <h3> Performance Options </h3>
          <div class="settings-row">
            <h4>
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
            <h4>
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
          <hr>

          <!-- Schema View Options -->
          <h2> Schema View Options </h2>
          <div class="settings-row">
            <h4> Show relationship labels </h4>
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
          <hr>

          <!-- Table View Options -->
          <h2> Table View Options </h2>
          <div class="settings-row">
            <h4> Number of rows per page </h4>
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
          <hr>

          <!-- Query Generation Options -->
          <div v-if="!modeStore.isWasm">
            <h2> Query Generation Options </h2>
            
            <div class="settings-row">
              <h4> LLM provider </h4>
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
              <span>OpenAI model</span>
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
              <span>Model name</span>
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
              <span>API endpoint</span>
              <input
                v-model="currentSettings.gpt.url"
                type="text"
                class="settings-input form-control"
                title="Enter the API endpoint"
              >
            </div>
            <div class="settings-row">
              <span>

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
      const isDark = document.documentElement.getAttribute('data-bs-theme') === 'dark';
      const newTheme = isDark ? 'light' : 'dark';
      const monacoTheme = newTheme === 'dark' ? 'vs-dark' : 'vs-light';

      document.documentElement.setAttribute('data-bs-theme', newTheme);

      if (window.Monaco?.editor) {
        window.Monaco.editor.setTheme(monacoTheme);
      }
      window.dispatchEvent(new CustomEvent('theme-changed', {
        detail: { theme: monacoTheme }
      }));
    },
  },
}
</script>

<style lang="scss" scoped>
.modal-body {
  max-height: calc(100vh - 200px);
  overflow-y: auto;
}

span.pull-left {
  position: absolute;
  left: 12px;
}

.settings-body {
  border-radius: 1rem 1rem 0 0;
  width: 100%;
  background-color: var(--bs-body-bg-secondary);
  border: 1px solid var(--bs-body-inactive);
  padding: 2rem;
  max-height: calc(100vh - 200px);
  overflow-y: auto;

  h2 {
    font-weight: 500; 
    font-size: 1.5rem;
  }

  h3 {
    font-weight: 500;
    font-size: 0.875rem; 
    padding: 0.5rem;
  }
  h4 {
      font-weight: 300;
      font-size: 0.875rem;
  }
  span {
      font-weight: 300;
      font-size: 0.875rem;
  }
  table {
    width: 100%;
    table-layout: auto;
  }
  th {
    padding: 0.5rem 1rem;
  }
  td {
    padding: 0.5rem 1rem;
  }
  hr{
    height: 1px;
    margin: 1rem 0;
    background-color: var(--bs-body-inactive);
    border: none;
  }
  
}

.settings-toggle {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  label { 
    color: var(--bs-body-text);
    font-size: 0.875rem;
    cursor: pointer;
  }
  input {
    appearance: none;
    width: 2.75rem;
    height: 1.25rem;
    background-color: var(--bs-body-bg-secondary);
    border-radius: 9999px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:checked {
      background-color: var(--bs-body-bg-accent);
    }
  }
}


.toggle-switch {
  position: relative;
  display: inline-block;
  width: 2.75rem;
  height: 1.25rem;
  
}

.settings-group {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 0.5rem;
  border-radius: 1rem;
  padding: 0.5rem 1rem;
  width: 100%;
  background-color: var(--bs-body-bg);
  }
  
.switch-slider {
  position: absolute;
  top: 0;
  left: 0;
  width: 1.25rem;
  height: 1.25rem;
  background-color: var(--bs-body-inactive);
  border: 1px solid var(--bs-body-inactive);
  border-radius: 9999px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.05);
  cursor: pointer;
  transition: transform 0.3s;

  .switch-input:checked + & {
    transform: translateX(1.5rem);
  }
}

.settings-row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 1rem;
  padding: 0.75rem 1rem;
  width: 100%;
}

.settings-input {
  background-color: var(--bs-body-bg);
  border: 1px solid var(--bs-body-inactive);
  color: var(--bs-body-text);
  font-size: 0.875rem;
  border-radius: 0.5rem;
  padding: 0.5rem 2rem;
  
}

.active-btn {
  background-color: var(--bs-body-bg-accent);
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  margin-right: 1rem;
  border: 0px;
}

.inactive-btn {
  background-color: var(--bs-body-bg);
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  margin-right: 1rem;
  border: 0px;
}

.settings-footer {
  background-color: var(--bs-body-bg-secondary);
  border: 1px solid var(--bs-body-inactive);
  border-top: none;
  border-radius: 0 0 1rem 1rem;
  display: flex;
  gap: 0.75rem;
}

.btn-save {
  background-color: var(--bs-body-bg-accent);
  padding: 0.5rem 1rem;
  border: 0px;
}
</style>
