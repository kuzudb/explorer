<template>
  <div ref="modal" class="modal" tabindex="-1">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div v-if="Object.keys(currentSettings).length > 0" class="modal-body">
          <h4>Graph Visualization Options</h4>
          <hr>
          <h5>Nodes</h5>
          <table class="table table-hover table-bordered">
            <thead>
              <tr>
                <th>Label</th>
                <th>Color</th>
                <th>Size (px)</th>
                <th>Caption</th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="(node, key, index) in currentSettings.graphViz.nodes" :key="index">
                <td>
                  {{
                    node.name === placeholderNodeTable
                      ? getPlaceholderNodeLabel()
                      : node.name
                  }}
                </td>
                <td>
                  <input v-model="node.g6Settings.style.fill" type="color" class="form-control form-control-color"
                    title="Choose color for node">
                </td>
                <td>
                  <input v-model="node.g6Settings.size" type="number" class="form-control" min="10" max="200"
                    title="Choose size for node">
                </td>
                <td>
                  <select v-model="node.label" class="form-select">
                    <option v-for="option in getCaptionOptions(node, true)" :key="option.text" :value="option.value">
                      {{ option.text }}
                    </option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>

          <h5>Rels</h5>
          <table class="table table-hover table-bordered">
            <thead>
              <tr>
                <th>Label</th>
                <th>Color</th>
                <th>Size (px)</th>
                <th>Caption</th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="(rel, key, index) in currentSettings.graphViz.rels" :key="index">
                <td>
                  {{
                    rel.name === placeholderRelTable ? getPlaceholderRelLabel() : rel.name
                  }}
                </td>
                <td>
                  <input v-model="rel.g6Settings.style.stroke" type="color" class="form-control form-control-color"
                    title="Choose color for rel" @change="syncRelFill(rel)">
                </td>
                <td>
                  <input v-model="rel.g6Settings.size" type="number" class="form-control" min="1" max="20"
                    title="Choose size for rel">
                </td>
                <td>
                  <select v-model="rel.label" class="form-select">
                    <option v-for="option in getCaptionOptions(rel, false)" :key="option.text" :value="option.value">
                      {{ option.text }}
                    </option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
          <h5>Performance Options</h5>
          <div class="input-group flex-nowrap">
            <span class="input-group-text">Max number of nodes to draw for graph visualization</span>
            <input v-model="currentSettings.performance.maxNumberOfNodes" type="number" class="form-control"
              title="Choose max number of nodes to draw for graph visualization" min="100" max="2000">
          </div>
          <div class="input-group flex-nowrap">
            <span class="input-group-text">Max number of nodes to expand on double click</span>
            <input v-model="currentSettings.performance.maxNumberOfNodesToExpand" type="number" class="form-control"
              title="Choose max number of nodes to expand on double click" min="5" max="1000">
          </div>

          <br>
          <h4>Schema View Options</h4>
          <hr>
          <div class="input-group flex-nowrap">
            <span class="input-group-text">Show relationship labels</span>
            <select v-model="currentSettings.schemaView.showRelLabels" class="form-select">
              <option :value="showRelLabelsOptions.ALWAYS">
                Always
              </option>
              <option :value="showRelLabelsOptions.HOVER">
                On hover or click
              </option>
              <!-- <option :value="showRelLabelsOptions.NEVER">Never</option> -->
            </select>
          </div>

          <br>
          <h4>Table View Options</h4>
          <hr>
          <div class="input-group flex-nowrap">
            <span class="input-group-text">Number of rows per page</span>
            <input v-model="currentSettings.tableView.rowsPerPage" type="number" class="form-control"
              title="Choose number of rows per page" min="1" max="500">
          </div>

          <div v-if="!modeStore.isWasm">
            <br>
            <h4>Query Generation Options</h4>
            <hr>
            <div class="input-group flex-nowrap">
              <span class="input-group-text">LLM provider</span>
              <select v-model="currentSettings.gpt.llmProvider" class="form-select" @change="handleLlmProviderChange">
                <option v-for="(value, key) in llmProviderOptions" :key="key" :value="key">
                  {{ value.text }}
                </option>
              </select>
            </div>
            <div class="input-group flex-nowrap" v-if="isOpenAIApi">
              <span class="input-group-text">OpenAI model</span>
              <select v-model="currentSettings.gpt.model" class="form-select">
                <option v-for="option in gptModelOptions" :key="option" :value="option">
                  {{ option }}
                </option>
              </select>
            </div>
            <div class="input-group flex-nowrap" v-else>
              <span class="input-group-text">Model name</span>
              <input v-model="currentSettings.gpt.model" type="text" class="form-control"
                title="Enter the custom model name">
            </div>
            <div class="input-group flex-nowrap" v-if="!isOpenAIApi">
              <span class="input-group-text">API endpoint</span>
              <input v-model="currentSettings.gpt.url" type="text" class="form-control" title="Enter the API endpoint" />
            </div>
            <div class="input-group flex-nowrap">
              <span class="input-group-text">

                {{ isOpenAIApi ? 'OpenAI' : 'API' }} key
              </span>
              <input v-model="currentSettings.gpt.apiToken" :type="showPassword ? 'text' : 'password'"
                class="form-control" :title="isOpenAIApi ? 'Enter the OpenAI API key' : 'Enter API key'">
              <button type="button" class="btn btn-outline-secondary" @click="togglePasswordVisibility">
                <i :class="showPassword ? 'fa fa-eye-slash' : 'fa fa-eye'" />
              </button>
            </div>
            <small class="form-text text-muted" v-if="isOpenAIApi">
              The OpenAI API key is used to generate Cypher queries from natural language using the specified model.
              It can be obtained from
              <a href="https://platform.openai.com/" target="_blank">OpenAI</a>. We only
              store the API key in your browser. Click
              <a href="#" @click="clearGptToken()">here</a> to clear the API key from the
              browser.
            </small>
            <small class="form-text text-muted" v-else>
              The API key may not be required for some deployments, such as the locally hosted version of Ollama.
              Please refer to the documentation for your model
              provider.
              If not required, leave this field empty and we automatically fill it with "IGNORED".
              We only
              store the API key in your browser. Click
              <a href="#" @click="clearGptToken()">here</a> to clear the API key from the
              browser.
            </small>
          </div>
        </div>

        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="hideModal()">
            Close
          </button>
          <button type="button" class="btn btn-primary" @click="saveAndHideModal()">
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
</style>
