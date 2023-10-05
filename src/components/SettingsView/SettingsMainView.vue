<template>
  <div class="modal" tabindex="-1" ref="modal">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-body" v-if="Object.keys(currentSettings).length > 0">
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
                <td>{{ node.name }}</td>
                <td>
                  <input type="color" class="form-control form-control-color" v-model="node.g6Settings.style.fill"
                    title="Choose color for node">
                </td>
                <td>
                  <input type="number" class="form-control" v-model="node.g6Settings.size" min="10" max="200"
                    title="Choose size for node">
                </td>
                <td>
                  <select class="form-select" v-model="node.label">
                    <option v-for="option in getCaptionOptions(node, true)" :value="option.value" :key="option.text">
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
                <td>{{ rel.name }}</td>
                <td>
                  <input type="color" class="form-control form-control-color" v-model="rel.g6Settings.style.stroke"
                    title="Choose color for rel">
                </td>
                <td>
                  <input type="number" class="form-control" v-model="rel.g6Settings.size" min="1" max="20"
                    title="Choose size for rel">
                </td>
                <td>
                  <select class="form-select" v-model="rel.label">
                    <option v-for="option in getCaptionOptions(rel, false)" :value="option.value" :key="option.text">
                      {{ option.text }}
                    </option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
          <h5>Performance Options</h5>
          <div class="input-group flex-nowrap">
            <span class="input-group-text" id="addon-wrapping">Max number of nodes to draw for graph visualization</span>
            <input type="number" class="form-control" v-model="currentSettings.performance.maxNumberOfNodes"
              title="Choose max number of nodes to draw for graph visualization" min="100" max="2000">
          </div>

          <br>
          <h4>Schema View Options</h4>
          <hr>
          <div class="input-group flex-nowrap">
            <span class="input-group-text" id="addon-wrapping">Show rel labels</span>
            <select class="form-select" v-model="currentSettings.schemaView.showRelLabels">
              <option :value="showRelLabelsOptions.ALWAYS">Always</option>
              <option :value="showRelLabelsOptions.HOVER">On hover or click</option>
              <option :value="showRelLabelsOptions.NEVER">Never</option>
            </select>
          </div>

          <br>
          <h4>Table View Options</h4>
          <hr>

          <div class="input-group flex-nowrap">
            <span class="input-group-text" id="addon-wrapping">Number of rows per page</span>
            <input type="number" class="form-control" v-model="currentSettings.tableView.rowsPerPage"
              title="Choose number of rows per page" min="1" max="500">
          </div>

        </div>

        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="hideModal()">Close</button>
          <button type="button" class="btn btn-primary" @click="saveAndHideModal()">Save</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import { useSettingsStore } from "../../store/SettingsStore";
import { mapStores } from 'pinia';
import { Modal } from 'bootstrap';
import { SHOW_REL_LABELS_OPTIONS } from "../../utils/Constants";

export default {
  name: "SettingsMainView",
  data: () => ({
    filterKeyword: "",
    currentSettings: {},
    modal: null,
    showRelLabelsOptions: SHOW_REL_LABELS_OPTIONS,
  }),
  props: {
    schema: {
      type: Object,
      required: false,
      default: null,
    },
  },
  computed: {
    ...mapStores(useSettingsStore),
  },
  methods: {
    toggleModal() {
      this.modal.toggle();
    },
    showModal() {
      this.copyCurrentSettings();
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
    getCaptionOptions(entity, isNode) {
      const name = entity.name;
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
  },
  mounted() {
    this.modal = new Modal(this.$refs.modal);
    this.$refs.modal.addEventListener('hidden.bs.modal', () => {
      // Bootstrap modal can also be closed by clicking outside of the modal.
      // This way ensures that we can get the event when the modal is closed.
      this.currentSettings = {};
    });
  },
  beforeUnmount() {
    this.$refs.modal.removeEventListener('hidden.bs.modal');
    this.modal.dispose();
  },
}
</script>

<style lang="scss" scoped>
.modal-body {
  max-height: calc(100vh - 200px);
  overflow-y: auto;
}
</style>
