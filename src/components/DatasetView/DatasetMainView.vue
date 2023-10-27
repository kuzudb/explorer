<template>
  <div class="dataset-view__wrapper" ref="wrapper" v-if="schema">
    <div
      class="alert alert-warning"
      role="alert"
      v-if="!isSchemaEmpty && !datasetLoadingLog && modeStore.isReadWrite"
    >
      <i class="fa-solid fa-info-circle"></i>
      You have already loaded a database. You can still review the schema of the bundled
      datasets. If you want to load a different dataset, please restart your KùzuExplorer
      Docker image with an empty database or drop all tables in the current database.
    </div>

    <div
      class="alert alert-info"
      role="alert"
      v-if="isSchemaEmpty && !datasetLoadingLog && modeStore.isReadWrite"
    >
      <i class="fa-solid fa-info-circle"></i>
      The schema of the current database is empty. You can load a dataset into the
      database.
    </div>

    <div class="alert alert-warning" role="alert" v-if="modeStore.isReadOnly">
      <i class="fa-solid fa-info-circle"></i>
      KùzuExplorer is running in read-only mode. You can still review the schema of the
      bundled datasets. If you want to load a dataset, please restart your KùzuExplorer
      Docker image in read-write mode with an empty database.
    </div>

    <div class="alert alert-warning" role="alert" v-if="modeStore.isDemo">
      <i class="fa-solid fa-info-circle"></i>
      KùzuExplorer is running in demo mode. You can still review the schema of the bundled
      datasets. Loading a dataset is not possible in this demo. However, you can load a
      bundled dataset or use your own dataset if you run KùzuExplorer locally. Please
      refer to
      <a target="_blank" href="https://kuzudb.com/docusaurus/kuzuexplorer/">
        the documentation </a
      >for more information.
    </div>
    <div class="form-group" v-if="!datasetLoadingLog">
      <label for="dataset-select">
        <h6>Select a dataset from the list below to review its schema.</h6>
      </label>
      <select class="form-select" id="dataset-select" v-model="selectedDataset">
        <option v-for="dataset in allDatasets" :key="dataset" :value="dataset">
          {{ dataset }}
        </option>
      </select>
    </div>
    <br />
    <code v-if="selectedDatasetSchema || datasetLoadingLog">
      <pre v-text="datasetLoadingLog ? datasetLoadingLog : selectedDatasetSchema"></pre>
    </code>
    <br />
    <div>
      <button
        class="btn btn-lg btn-primary"
        title="Load Dataset"
        :disabled="
          !isSchemaEmpty ||
          !selectedDatasetSchema ||
          datasetLoadingLog ||
          !modeStore.isReadWrite
        "
        @click="copyDataset"
        v-if="!datasetLoadingEnded"
      >
        <i class="fa-solid fa-download"></i>
        Load Dataset
      </button>

      <button
        class="btn btn-lg btn-primary"
        title="OK"
        @click="confirmDatasetLoading"
        v-if="datasetLoadingEnded"
      >
        <i class="fa-solid fa-check"></i>
        OK
      </button>
    </div>
  </div>
</template>

<script lang="js">
import Axios from 'axios';
import { mapStores } from 'pinia';
import { useModeStore } from '../../store/ModeStore';
export default {
  name: "DatasetMainView",
  data: () => ({
    selectedDataset: null,
    selectedDatasetSchema: null,
    datasetLoadingLog: null,
    datasetLoadingEnded: false,
    databaseSchemaHash: {},
    allDatasets: [],
  }),
  props: {
    schema: {
      type: Object,
    },
  },
  computed: {
    isSchemaEmpty() {
      return this.schema.nodeTables.length === 0 && this.schema.relTables.length === 0;
    },
    ...mapStores(useModeStore),
  },
  watch: {
    selectedDataset() {
      this.fetchDatasetSchema();
    },
  },
  methods: {
    fetchDatasets() {
      Axios.get('/api/datasets')
        .then((response) => {
          this.allDatasets = response.data;
          if (!this.selectedDataset && this.allDatasets.length > 0) {
            this.selectedDataset = this.allDatasets[0];
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },
    async fetchDatasetSchema() {
      if (!this.selectedDataset) {
        return;
      }
      if (this.databaseSchemaHash[this.selectedDataset]) {
        this.selectedDatasetSchema = this.databaseSchemaHash[this.selectedDataset];
        return;
      }
      try {
        const response = await Axios.get(`/api/datasets/${this.selectedDataset}`);
        this.selectedDatasetSchema = response.data.schema;
        this.databaseSchemaHash[this.selectedDataset] = this.selectedDatasetSchema;
      } catch (error) {
        console.error(error);
      }
    },
    copyDataset() {
      this.datasetLoadingLog = "Loading dataset '" + this.selectedDataset + "'...";
      this.datasetLoadingLog += "\n";
      this.datasetLoadingEnded = false;
      fetch(`/api/datasets/${this.selectedDataset}/copy`,)
        .then((response) => {
          if (response.ok && response.body) {
            const reader = response.body.pipeThrough(new TextDecoderStream()).getReader();
            const handler = ({ done, value }) => {
              if (done) {
                this.datasetLoadingLog += "Dataset load process ended.";
                this.datasetLoadingEnded = true;
                this.$emit("reloadSchema");
                return;
              }
              this.datasetLoadingLog += value;
              return reader.read().then(handler);
            };
            reader.read().then(handler);
          }
        })
        .catch((error) => {
          console.error(error);
          this.datasetLoadingLog = "Dataset '" + this.selectedDataset + "' failed to load.";
          this.datasetLoadingEnded = true;
        });
    },
    confirmDatasetLoading() {
      this.datasetLoadingLog = null;
      this.datasetLoadingEnded = false;
    },
  },
  mounted() {
    this.fetchDatasets();
  },
}
</script>

<style lang="scss" scoped>
.dataset-view__wrapper {
  height: 100%;
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;

  code {
    flex: 1;
    overflow: scroll;
    border: 2px solid $gray-300;
    padding: 10px;
    color: $gray-900;
    background-color: $gray-100;
    font-size: 16px;
  }
}
</style>
