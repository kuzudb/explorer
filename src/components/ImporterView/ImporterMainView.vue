<template>
  <div
    v-if="schema"
    ref="wrapper"
    class="import-view__wrapper"
  >
    <div
      v-if="filesLength === 0"
      class="container p-5"
    >
      <div class="row">
        <div class="col-md-3" />
        <div class="col-md-6 mt-5">
          <div class="bg-white p-5 rounded shadow-sm border">
            <div class="dropzone d-block">
              <label
                for="files"
                class="dropzone-container"
              >
                <div class="file-icon"><i class="fa-solid fa-file-circle-plus text-primary" /></div>
                <div class="text-center pt-3 px-5">
                  <p class="w-80 h5 text-dark fw-bold">Drag your CSV or Parquet files here to get started.</p>
                  <div class="hr-sect">or</div>
                  <button
                    class="btn btn-primary mb-2"
                    @click="selectFiles"
                  >Browse Files</button>
                </div>
              </label>
              <input
                ref="fileInput"
                type="file"
                multiple
                class="file-input"
                @change.prevent="handleFilesSelected"
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="filesLength > 0"
      class="main-buttons-container"
    >
      <button
        class="btn btn-primary"
        @click="selectFiles"
      >
        <i class="fa-solid fa-plus" />
        Add More Files
      </button>

      <button
        class="btn btn-success"
        @click="selectFiles"
      >
        <i class="fa-solid fa-upload" />
        Start Import
      </button>
    </div>

    <div
      v-if="filesLength > 0"
      class="table-wrapper"
    >
      <div
        class="alert alert-info"
        role="alert"
      >
        <i class="fa-solid fa-info-circle" />
        &nbsp;
        The selected files are listed below. You can assign them to either Node or Relationship tables.
      </div>
      <h4 v-if="shouldShowFilesTable">
        Selected Files
      </h4>
      <table
        v-if="shouldShowFilesTable"
        class="table border"
      >
        <thead>
          <tr>
            <th>File Name</th>
            <th>File Size</th>
            <th>Type </th>
            <th>Table Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(file, key) in unassignedFiles"
            :key="key"
          >
            <td>
              {{ file.file.name }}
            </td>
            <td>{{ getReadableSize(file.file.size) }}</td>
            <td> {{ file.extension }} </td>
            <td class="table-type-select">
              <select
                class="form-select-sm"
                @change="handleTableTypeChange(key, $event)"
              >
                <option
                  value="none"
                  selected
                >
                  None
                </option>
                <option value="node">
                  Node
                </option>
                <option value="rel">
                  Relationship
                </option>
              </select>
            </td>
            <td class="actions">
              <button
                class="btn btn-danger btn-sm"
                @click="removefile(key)"
              >
                <i class="fa-solid fa-trash" />
              </button>
              &nbsp;
              <button
                class="btn btn-primary btn-sm"
                @click="previewFile(key)"
              >
                <i class="fa-solid fa-table" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <h4>
        Node Tables
      </h4>
      <table
        v-if="numberOfNodeFiles > 0"
        class="table border"
      >
        <thead>
          <tr>
            <th />
            <th>Table Name</th>
            <th>File Name</th>
            <th>Number of Properties</th>
            <th>Primary Key</th>
            <th>Status </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <template
            v-for="(file, key) in nodeFiles"
            :key="key"
          >
            <tr>
              <td class="expand-btn-td">
                <button
                  class="expand-btn"
                  @click="handleExpand(key)"
                >
                  <i :class="file.expanded ? 'fa-solid fa-chevron-up' : 'fa-solid fa-chevron-down'" />
                </button>
              </td>
              <td>
                {{ file.tableName }}
              </td>
              <td>
                {{ file.file.name }}
              </td>
              <td>
                {{ file.format.Columns.length }}
              </td>
              <td> {{ getPrimaryKey(file) ? getPrimaryKey(file) : '(Not selected)' }}</td>
              <td>
                <i
                  v-if="getPrimaryKey(file)"
                  class="fa-solid fa-check text-success"
                />
                <i
                  v-else
                  class="fa-solid fa-times text-danger"
                />
              </td>
              <td class="actions">
                <button
                  class="btn btn-danger btn-sm"
                  @click="removefile(key)"
                >
                  <i class="fa-solid fa-trash" />
                </button>
                &nbsp;
                <button
                  class="btn btn-primary btn-sm"
                  @click="previewFile(key)"
                >
                  <i class="fa-solid fa-table" />
                </button>
              </td>
            </tr>
            <tr v-if="file.expanded">
              <td />
              <td colspan="6">
                <div>
                  <h5>Tabel Name</h5>
                  <div class="input-group mb-3">
                    <input
                      v-model="file.tableName"
                      type="text"
                      class="form-control"
                    >
                  </div>
                  <h5>Format</h5>
                  <div class="input-group mb-3">
                    <span class="input-group-text">Delimiter</span>
                    <input
                      v-model="file.format.Delimiter"
                      type="text"
                      class="form-control"
                    >
                    <span class="input-group-text">Quote</span>
                    <input
                      v-model="file.format.Quote"
                      type="text"
                      class="form-control"
                    >

                    <span class="input-group-text">Escape</span>
                    <input
                      v-model="file.format.Escape"
                      type="text"
                      class="form-control"
                    >

                    <span class="input-group-text">Header?</span>
                    <select
                      v-model="file.format.HasHeader"
                      class="form-select"
                    >
                      <option value="true">
                        Yes
                      </option>
                      <option value="false">
                        No
                      </option>
                    </select>
                  </div>
                  <div />
                  <h5>Fields</h5>
                  <table class="table border">
                    <thead>
                      <tr>
                        <th>Column Name (File)</th>
                        <th>Column Name (Database)</th>
                        <th>Type</th>
                        <th>Primary Key?</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr
                        v-for="(column, index) in file.format.Columns"
                        :key="index"
                      >
                        <td>
                          {{ column.name }}
                        </td>
                        <td>
                          <input
                            v-model="column.userDefinedName"
                            type="text"
                            class="form-control"
                          >
                        </td>

                        <td>
                          <select
                            v-model="column.type"
                            class="form-select"
                          >
                            <option
                              v-for="type in dataTypes"
                              :key="type"
                              :value="type"
                            >
                              {{ type }}
                            </option>
                          </select>
                        </td>

                        <td>
                          <input
                            v-model="column.isPrimaryKey"
                            type="checkbox"
                            class="form-check-input"
                            @change.prevent="handlePrimaryKeyChange(key, index)"
                          >
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <button class="btn btn-secondary btn-sm">
                    <i class="fa-solid fa-arrow-right-long" />
                    Move as Relationship Table
                  </button>
                  &nbsp;
                  <button class="btn btn-danger btn-sm">
                    <i class="fa-solid fa-undo" />
                    Reset
                  </button>
                </div>
              </td>
            </tr>
          </template>
        </tbody>
      </table>
      <div v-else>
        <div
          class="alert alert-info"
          role="alert"
        >
          <i class="fa-solid fa-info-circle" />
          &nbsp;
          No node tables have been assigned yet. If you have node tables, please assign them from the selected files.
        </div>
      </div>


      <h4>
        Relationship Tables
      </h4>
      <table
        v-if="numberOfRelFiles > 0"
        class="table border"
      >
        <thead>
          <tr>
            <th />
            <th>Table Name</th>
            <th>Number of Properties</th>
            <th>Primary Key</th>
            <th>Status </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <template
            v-for="(file, key) in relFiles"
            :key="key"
          >
            <tr>
              <td class="expand-btn-td">
                <button
                  class="expand-btn"
                  @click="handleExpand(key)"
                >
                  <i :class="file.expanded ? 'fa-solid fa-chevron-up' : 'fa-solid fa-chevron-down'" />
                </button>
              </td>
              <td>
                {{ file.file.name }}
              </td>
              <td />
              <td />
              <td />
              <td class="actions">
                <button
                  class="btn btn-danger btn-sm"
                  @click="removefile(key)"
                >
                  <i class="fa-solid fa-trash" />
                </button>
                &nbsp;
                <button
                  class="btn btn-primary btn-sm"
                  @click="previewFile(key)"
                >
                  <i class="fa-solid fa-table" />
                </button>
              </td>
            </tr>
            <tr v-if="file.expanded">
              <td />
              <td colspan="5">
                <div>
                  <h5>Format</h5>
                  <div class="input-group mb-3">
                    <span class="input-group-text">Delimiter</span>
                    <input
                      v-model="file.format.Delimiter"
                      type="text"
                      class="form-control"
                    >
                    <span class="input-group-text">Quote</span>
                    <input
                      v-model="file.format.Quote"
                      type="text"
                      class="form-control"
                    >

                    <span class="input-group-text">Escape</span>
                    <input
                      v-model="file.format.Escape"
                      type="text"
                      class="form-control"
                    >

                    <span class="input-group-text">Header?</span>
                    <select
                      v-model="file.format.HasHeader"
                      class="form-select"
                    >
                      <option value="true">
                        Yes
                      </option>
                      <option value="false">
                        No
                      </option>
                    </select>
                  </div>
                  <div />
                  <h5>Fields</h5>
                  <table class="table border">
                    <thead>
                      <tr>
                        <th>Column Name (File)</th>
                        <th>Column Name (Database)</th>
                        <th>Type</th>
                        <th>Primary Key?</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr
                        v-for="(column, index) in file.format.Columns"
                        :key="index"
                      >
                        <td>
                          <input
                            v-model="column.name"
                            type="text"
                            class="form-control"
                          >
                        </td>
                        <td>
                          <input
                            v-model="column.name"
                            type="text"
                            class="form-control"
                          >
                        </td>

                        <td>
                          <select
                            v-model="column.type"
                            class="form-select"
                          >
                            <option
                              v-for="type in dataTypes"
                              :key="type"
                              :value="type"
                            >
                              {{ type }}
                            </option>
                          </select>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </td>
            </tr>
          </template>
        </tbody>
      </table>
      <div v-else>
        <div
          class="alert alert-info"
          role="alert"
        >
          <i class="fa-solid fa-info-circle" />
          &nbsp;
          No relationship tables have been assigned yet. If you have relationship tables, please assign them from the
          selected
          files.
        </div>
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
export default {
  name: "ImporterMainView",
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
    unassignedFiles() {
      const unassignedFiles = {};
      for (const key in this.files) {
        if (this.files[key].type === 'none') {
          unassignedFiles[key] = this.files[key];
        }
      }
      return unassignedFiles;
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
    numberOfNodeFiles() {
      return Object.keys(this.nodeFiles).length;
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
    selectFiles() {
      this.$refs.fileInput.click();
    },

    async handleFilesSelected(event) {
      const files = event.target.files;
      for (let i = 0; i < files.length; ++i) {
        const file = files[i];
        this.files[uuidv4()] = {
          file,
          type: 'none',
          header: 0,
          expanded: false,
        }
      }
      for (const key in this.files) {
        const currentFile = this.files[key];
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
    },

    handleTableTypeChange(key, event) {
      const fileType = event.target.value;
      const file = this.files[key];
      file.type = fileType;
      delete file.from;
      delete file.to;
      file.format.Columns.forEach(c => {
        c.isPrimaryKey = false;
      });
      if (fileType === 'rel') {
        c.from = null;
        c.to = null;
      }
    },

    handleExpand(key) {
      const file = this.files[key];
      file.expanded = !file.expanded;
    },

    handlePrimaryKeyChange(fileKey, columnKey) {
      const file = this.files[fileKey];
      const column = file.format.Columns[columnKey];
      if (column.isPrimaryKey) {
        file.format.Columns.forEach(c => {
          if (c !== column) {
            c.isPrimaryKey = false;
          }
        });
      }
    },

    getReadableSize(bytes) {
      const i = Math.floor(Math.log(bytes) / Math.log(1024));
      return (bytes / Math.pow(1024, i)).toFixed(2) * 1 + ' ' + ['B', 'KB', 'MB', 'GB', 'TB'][i];
    },

    getFileIcon(type) {
      if (type === 'node') {
        return 'fa-solid fa-circle';
      }
      if (type === 'rel') {
        return 'fa-solid fa-arrow-right-long';
      }
    },

    getPrimaryKey(file) {
      const primaryKey = file.format.Columns.find(c => c.isPrimaryKey);
      return primaryKey ? primaryKey.name : null;
    },
  },
}
</script>

<style lang="scss" scoped>
.main-buttons-container{
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  .btn{
    flex: 1;
    &:first-child{
      margin-right: 10px;
    }
  }

}
.dropzone {
  border: dashed 4px #ddd !important;
  background-color: #f2f6fc;
  border-radius: 15px;

  .dropzone-container {
    padding: 2rem 0;
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #8c96a8;
    z-index: 20;
  }

  .file-input {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    visibility: hidden;
    cursor: pointer;
  }

  .file-icon {
    font-size: 60px;
  }

  .hr-sect {
    display: flex;
    flex-basis: 100%;
    align-items: center;
    margin: 8px 0px;
  }

  .hr-sect:before,
  .hr-sect:after {
    content: "";
    flex-grow: 1;
    background: #ddd;
    height: 1px;
    font-size: 0px;
    line-height: 0px;
    margin: 0px 8px;
  }
}


.import-view__wrapper {
  height: 100%;
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.add-more-files__btn {
  width: 100%;
  margin-bottom: 20px;
}

.table-wrapper {
  overflow: scroll;
  flex: 1;
}

table {
  td.actions {
    width: 150px;
  }

  td.table-type-select {
    width: 150px;
  }

  td.expand-btn-td {
    width: 40px;
  }

  .expand-btn {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
}
</style>
