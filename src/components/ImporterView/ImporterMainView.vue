<template>
  <div
    v-if="schema"
    ref="wrapper"
    class="import-view__wrapper"
  >
    <div
      v-show="filesLength === 0"
      class="container p-5"
    >
      <importer-view-drop-zone
        ref="dropzone"
        @files-selected="handleFilesSelected"
      />
    </div>
    <div
      v-if="filesLength > 0"
      class="main-wrapper"
    >
      <importer-view-sidebar
        :files="files"
        @table-type-change="handleTableTypeChange"
        @add-files="addFiles"
      />
      <div class=" table-wrapper">
        <button
          class="btn btn-success"
          @click="selectFiles"
        >
          <i class="fa-solid fa-upload" />
          Start Import
        </button>

        <importer-view-node-tables
          :files="nodeFiles"
          :schema="schema"
          @expand="handleExpand"
          @set-csv-format="setCSVFormat"
          @set-table-is-new="setTableIsNew"
          @set-table-name="setTableName"
          @set-primary-key="setPrimaryKey"
          @set-column-user-defined-name="setColumnUserDefinedName"
          @set-column-type="setColumnType"
        />
        <importer-view-rel-tables
          :files="relFiles"
          :schema="schema"
          :node-files="nodeFiles"
          @expand="handleExpand"
          @set-csv-format="setCSVFormat"
          @set-table-is-new="setTableIsNew"
          @set-table-name="setTableName"
          @set-from-table="setFromTable"
          @set-to-table="setToTable"
          @set-from-key="setFromKey"
          @set-to-key="setToKey"
          @set-column-user-defined-name="setColumnUserDefinedName"
          @set-column-type="setColumnType"
        />
      </div>
    </div>
  </div>
</template>

<script lang="js">
import Axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { mapStores } from 'pinia';
import { useModeStore } from '../../store/ModeStore';
import { DATA_TYPES } from '../../utils/Constants';
import DuckDB from '../../utils/DuckDB';
import ImporterViewDropZone from './ImporterViewDropZone.vue';
import ImporterViewSidebar from './ImporterViewSidebar.vue';
import ImporterViewNodeTables from './ImporterViewNodeTables.vue';
import ImporterViewRelTables from './ImporterViewRelTables.vue';
export default {
  name: "ImporterMainView",
  components: {
    ImporterViewDropZone,
    ImporterViewSidebar,
    ImporterViewNodeTables,
    ImporterViewRelTables,
  },
  props: {
    schema: {
      type: Object,
      default: null,
    },
  },
  emits: ["reloadSchema"],
  data: () => ({
    files: {},
  }),
  computed: {
    isSchemaEmpty() {
      return this.schema.nodeTables.length === 0 && this.schema.relTables.length === 0;
    },

    filesLength() {
      return Object.values(this.files).length;
    },

    dataTypes() {
      return Object.keys(DATA_TYPES);
    },

    shouldShowFilesTable() {
      if (this.filesLength === 0) {
        return false;
      }
      for (const key in this.files) {
        if (this.files[key].type === 'none') {
          return true;
        }
      }
      return false;
    },

    nodeFiles() {
      const nodeFiles = {};
      for (const key in this.files) {
        if (this.files[key].type === 'node') {
          nodeFiles[key] = this.files[key];
        }
      }
      return nodeFiles;
    },

    relFiles() {
      const relFiles = {};
      for (const key in this.files) {
        if (this.files[key].type === 'rel') {
          relFiles[key] = this.files[key];
        }
      }
      return relFiles;
    },
    numberOfRelFiles() {
      return Object.keys(this.relFiles).length;
    },
    ...mapStores(useModeStore),
  },
  watch: {
  },
  mounted() {
  },
  methods: {
    addFiles() {
      this.$refs.dropzone.selectFiles();
    },

    async handleFilesSelected(files) {
      const filesHash = {};
      for (let i = 0; i < files.length; ++i) {
        const file = files[i];
        const id = uuidv4().toString();
        filesHash[id] = {
          id,
          file,
          type: 'none',
          header: 0,
          expanded: false,
        }
      }
      for (const key in filesHash) {
        const currentFile = filesHash[key];
        const extension = currentFile.file.type === 'text/csv' ? 'csv' :
          currentFile.file.name.toLowerCase().endsWith('.parquet') ? 'parquet' :
            'unsupported';
        currentFile.extension = extension;
        await DuckDB.registerCSVFile(key, currentFile.file);
        const detectedFormat = await DuckDB.sniffCSVFile(key, currentFile.file);
        currentFile.detectedFormat = detectedFormat;
        const tableNameSplit = currentFile.file.name.split('.');
        tableNameSplit.pop();
        currentFile.tableName = tableNameSplit.join('_');
        currentFile.format = JSON.parse(JSON.stringify(detectedFormat));
        currentFile.format.Columns.forEach(c => {
          if (c.type === 'VARCHAR') {
            c.type = DATA_TYPES.STRING;
          }
          if (c.type === 'BIGINT') {
            c.type = DATA_TYPES.INT64
          }
          c.userDefinedName = c.name;
          c.isPrimaryKey = false;
        })
      }
      this.files = { ...this.files, ...filesHash };
    },

    handleTableTypeChange(fileKey, fileType) {
      const file = this.files[fileKey];
      file.type = fileType;
      file.isNew = true;
      file.isSelectedForImport = true;
      delete file.from;
      delete file.to;
      file.format.Columns.forEach(c => {
        delete c.isPrimaryKey;
        delete c.isFromKey;
        delete c.isToKey;
      });
      if (fileType === 'node') {
        file.format.Columns[0].isPrimaryKey = true;
      }
      if (fileType === 'rel') {
        file.from = null;
        file.to = null;
        file.format.Columns[0].isFromKey = true;
        file.format.Columns[1].isToKey = true;
      }
    },

    handleExpand(key) {
      const file = this.files[key];
      file.expanded = !file.expanded;
    },

    setCSVFormat() { },
    
    setTableName(fileKey, tableName) {
      this.files[fileKey].tableName = tableName;
    },

    setColumnUserDefinedName(fileKey, columnIndex, userDefinedName) {
      const file = this.files[fileKey];
      const column = file.format.Columns[columnIndex];
      column.userDefinedName = userDefinedName;
    },

    setColumnType(fileKey, columnIndex, type) {
      const file = this.files[fileKey];
      const column = file.format.Columns[columnIndex];
      column.type = type;
    },

    setTableIsNew(fileKey, isNew) {
      this.files[fileKey].isNew = isNew;
    },

    setPrimaryKey(fileKey, columnIndex) {
      const file = this.files[fileKey];
      const column = file.format.Columns[columnIndex];
      column.isPrimaryKey = true;
      file.format.Columns.forEach((c, i) => {
        if (i !== columnIndex) {
          delete c.isPrimaryKey;
        }
      });
    },

    setFromTable(fileKey, fromTable) {
    },

    setToTable(fileKey, toTable) {
    },

    setFromKey(fileKey, columnIndex, checked) {
      const file = this.files[fileKey];
      file.format.Columns.forEach((c, i) => {
        if (i !== columnIndex) {
          delete c.isFromKey;
        }
      });
      if (checked) {
        file.format.Columns[columnIndex].isFromKey = true;
      }
    },

    setToKey(fileKey, columnIndex, checked) {
      const file = this.files[fileKey];
      file.format.Columns.forEach((c, i) => {
        if (i !== columnIndex) {
          delete c.isToKey;
        }
      });
      if (checked) {
        file.format.Columns[columnIndex].isToKey = true;
      }
    },

    getReadableSize(bytes) {
      const i = Math.floor(Math.log(bytes) / Math.log(1024));
      return (bytes / Math.pow(1024, i)).toFixed(2) * 1 + ' ' + ['B', 'KB', 'MB', 'GB', 'TB'][i];
    },
  },
}
</script>

<style lang="scss" scoped>
.main-buttons-container {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  .btn-success {
    flex: 1;

    &:first-child {
      margin-right: 10px;
    }
  }
}

.import-view__wrapper {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.add-more-files__btn {
  width: 100%;
  margin-bottom: 20px;
}

.main-wrapper {
  display: flex;
  flex-direction: row;
  height: 100%;
}

.table-wrapper {
  overflow: scroll;
  flex: 1;
  padding: 16px;

  .btn.btn-success {
    width: 100%;
    margin-bottom: 20px;
  }
}
</style>
