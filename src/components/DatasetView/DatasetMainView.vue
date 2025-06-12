<template>
  <div
    v-if="schema"
    ref="wrapper"
    class="dataset-view__wrapper"
  >
    <!-- Header area (alerts and back button) -->
    <div class="dataset-view__header">
      <div class="alert-and-button-wrapper">
        <button
          class="btn btn-lg btn-secondary"
          title="Back"
          @click="$emit('back')"
        >
          <i class="fa-solid  fa-arrow-left" />
          &nbsp;
          Back
        </button>

        <div
          v-if="!isSchemaEmpty && isProduction && !datasetLoadingLog && modeStore.isReadWrite && !modeStore.isWasm"
          class="alert alert-warning"
          role="alert"
        >
          <i class="fa-solid fa-info-circle" />
          You have already loaded a database. You can still review the schema of the sample
          datasets. If you want to load a different dataset, please restart your Kuzu Explorer
          Docker image with an empty database or drop all tables in the current database.
        </div>

        <div
          v-if="!isSchemaEmpty && isProduction && !datasetLoadingLog && modeStore.isWasm"
          class="alert alert-warning"
          role="alert"
        >
          <i class="fa-solid fa-info-circle" />
          You've already loaded a database. If you want to load a different dataset, please <a
            href="#"
            @click="refreshPage"
          >
            refresh the page
          </a>.
        </div>

        <div
          v-if="isSchemaEmpty && isProduction && !datasetLoadingLog && modeStore.isReadWrite"
          class="alert alert-info"
          role="alert"
        >
          <i class="fa-solid fa-info-circle" />
          No schema found. Load a dataset to begin."
        </div>

        <div
          v-if="!isProduction && modeStore.isReadWrite"
          class="alert alert-warning"
          role="alert"
        >
          <i class="fa-solid fa-info-circle" />
          You are running Kuzu Explorer in development mode. You can load any dataset into the
          database. However, please make sure there is no conflict with the existing schema.
        </div>

        <div
          v-if="modeStore.isReadOnly"
          class="alert alert-warning"
          role="alert"
        >
          <i class="fa-solid fa-info-circle" />
          Kuzu Explorer is running in read-only mode. You can still review the schema of the
          sample datasets. If you want to load a dataset, please restart your Kuzu Explorer
          Docker image in read-write mode with an empty database.
        </div>
      </div>

      <div
        v-if="!datasetLoadingLog"
        class="form-group dataset-select-group"
      >
        <label for="dataset-select">
          <h6>Pick a dataset:</h6>
        </label>
        <select
          id="dataset-select"
          v-model="selectedDataset"
          class="form-select"
        >
          <option
            v-for="dataset in allDatasets"
            :key="dataset"
            :value="dataset"
          >
            {{ dataset }}
          </option>
        </select>
      </div>
      <br>
      <div
        v-if="selectedDatasetSchema"
        class="alert alert-info"
        role="alert"
      >
        <i class="fa-solid fa-info-circle" />
        &nbsp;
        <span v-text="selectedDatasetDescription" />
      </div>
    </div>

    <!-- Main content area (code block) -->
    <div class="dataset-view__content">
      <code 
        v-if="selectedDatasetSchema || datasetLoadingLog"
        ref="codeBlock"
        class="code-block"
      >
        <pre v-text="datasetLoadingLog ? datasetLoadingLog : selectedDatasetSchema" />
      </code>
    </div>

    <!-- Footer area (load dataset button) -->
    <div class="dataset-view__footer">
      <button
        v-if="!datasetLoadingEnded"
        class="accent-btn"
        title="Load Dataset"
        :disabled="(!isSchemaEmpty && isProduction) ||
          !selectedDatasetSchema ||
          datasetLoadingLog ||
          !modeStore.isReadWrite
        "
        @click="copyDataset"
      >
        <i class="fa-solid fa-download" />
        Load Dataset
      </button>

      <button
        v-if="datasetLoadingEnded"
        class="accent-btn"
        title="OK"
        @click="confirmDatasetLoading"
      >
        <i class="fa-solid fa-check" />
        OK
      </button>
    </div>
  </div>
</template>

<script lang="js">
import Axios from "@/utils/AxiosWrapper";
import { mapStores } from 'pinia';
import { useModeStore } from '../../store/ModeStore';
import Kuzu from '../../utils/KuzuWasm';
export default {
  name: "DatasetMainView",
  props: {
    schema: {
      type: Object,
      default: null,
    },
  },
  emits: ["reloadSchema", "back", "jumpToShellView"],
  data: () => ({
    selectedDataset: null,
    selectedDatasetSchema: null,
    selectedDatasetDescription: null,
    datasetLoadingLog: null,
    datasetLoadingEnded: false,
    databaseCache: {},
    allDatasets: [],
    isProduction: true,
  }),
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
    datasetLoadingLog() {
      this.$nextTick(() => {
        this.scrollToBottom();
      });
    }
  },
  mounted() {
    this.fetchDatasets();
  },
  methods: {
    refreshPage() {
      window.location.reload();
    },
    fetchDatasets() {
      Axios.get('/api/mode').then((response) => {
        const isProduction = response.data.isProduction;
        this.isProduction = isProduction;
      }).catch((error) => {
        console.error(error);
        this.isProduction = true;
      });
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
      if (!this.databaseCache[this.selectedDataset]) {
        try {
          const response = await Axios.get(`/api/datasets/${this.selectedDataset}`);
          this.databaseCache[this.selectedDataset] = response.data;
        } catch (error) {
          console.error(error);
          this.databaseCache[this.selectedDataset] = {
            schema: "Error: Failed to fetch dataset metadata.",
            description: "",
          };
        }
      }
      this.selectedDatasetSchema = this.databaseCache[this.selectedDataset].schema;
      this.selectedDatasetDescription = this.databaseCache[this.selectedDataset].description;
      return;

    },
    copyDataset() {
      if (this.modeStore.isWasm) {
        this.copyDatasetToWasm();
      } else {
        this.copyDatasetFromServer();
      }
    },
    async copyDatasetToWasm() {
      this.datasetLoadingLog = "Loading dataset '" + this.selectedDataset + "'...";
      this.datasetLoadingLog += "\n";
      this.datasetLoadingEnded = false;
      try {
        const datasetMetadata = (await Axios.get(`/api/datasets/${this.selectedDataset}`)).data;
        this.datasetLoadingLog += "Downloading dataset files...\n";
        const datasetFiles = await Promise.all(datasetMetadata.files.map(async (file) => {
          const response = await Axios.get(`/api/datasets/${this.selectedDataset}/files/${file}`);
          return response.data;
        }));
        this.datasetLoadingLog += "Dataset files downloaded.\n";
        this.datasetLoadingLog += "Loading files into WASM filesystem...\n";
        const FS = Kuzu.getFS();
        for (let i = 0; i < datasetMetadata.files.length; ++i) {
          const file = datasetMetadata.files[i];
          const data = datasetFiles[i];
          await FS.writeFile(file, data);
          this.datasetLoadingLog += `File '${file}' loaded.\n`;
        }
        const schemaQueries = datasetMetadata.schema.split("\n");
        const copyQueries = datasetMetadata.copy.split("\n");
        const queries = schemaQueries.concat(copyQueries);
        for (const query of queries) {
          if (query.trim() === "") {
            continue;
          }
          this.datasetLoadingLog += `Executing Cypher query '${query}'...\n`;
          await Kuzu.query(query);
          this.datasetLoadingLog += `Query executed.\n`;
        }
        for (const file of datasetMetadata.files) {
          this.datasetLoadingLog += `Removing file '${file}' from WASM filesystem...\n`;
          await FS.unlink(file);
          this.datasetLoadingLog += `File removed.\n`;
        }
        this.datasetLoadingLog += "Dataset load process ended.";
        this.datasetLoadingEnded = true;
        this.$emit("reloadSchema");
      } catch (error) {
        console.error(error);
        this.datasetLoadingLog += "Dataset '" + this.selectedDataset + "' failed to load.";
        this.datasetLoadingLog += "\n";
        this.datasetLoadingLog += "Error: " + error;
        this.datasetLoadingEnded = true;
      }
    },
    copyDatasetFromServer() {
      this.datasetLoadingLog = "Loading dataset '" + this.selectedDataset + "'...";
      this.datasetLoadingLog += "\n";
      this.datasetLoadingEnded = false;
      fetch(`${process.env.BASE_URL}api/datasets/${this.selectedDataset}/copy`,)
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
      this.$emit("jumpToShellView");
    },
    scrollToBottom() {
      if (this.$refs.codeBlock) {
        this.$refs.codeBlock.scrollTop = this.$refs.codeBlock.scrollHeight;
      }
    },
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
  overflow: hidden;

  .dataset-view__content {
    flex-grow: 1;
    overflow-y: auto;
    display: flex;
    flex-direction: column;

    .form-group.dataset-select-group {
      flex-shrink: 0;
    }

    .code-block {
      flex-grow: 1;
      height: auto;
      overflow: auto;
      border: 1px solid (var(--bs-body-inactive));
      padding: 10px;
      color: (var(--bs-body-text));
      background-color: (var(--bs-body-bg-secondary));
      font-size: 16px;
      border-radius: 10px;
      display: block;
      
      pre {
        margin: 0;
        white-space: pre-wrap;
        word-wrap: break-word;
      }
    }
  }

  .dataset-view__footer {
    margin-top: 20px;
    text-align: left;
    
  }

  button.accent-btn {
  color: var(--bs-body-text);
  background-color: var(--bs-body-accent);
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border-radius: 0.375rem;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(255, 87, 34, 0.85); 
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}

  .alert-and-button-wrapper {
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;

    div {
      flex: 1;
      margin-bottom: 0;
    }

    margin-bottom: 16px;
  }
}
</style>
