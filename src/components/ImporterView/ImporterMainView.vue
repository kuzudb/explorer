<template>
  <div
    v-if="schema"
    ref="wrapper"
    class="import-view__wrapper"
  >
    <button
      class="btn btn-primary"
      @click="selectFiles"
    >
      <i class="fa-solid fa-file-import" />
      Select files to import
      <input
        ref="fileInput"
        type="file"
        style="display: none;"
        multiple
        @change.prevent="handleFilesSelected"
      >
    </button>

    <div v-if="filesLength > 0">
      <br>
      <table class="table border">
        <thead>
          <tr>
            <th />
            <th>File Name</th>
            <th>File Size</th>
            <th>Status </th>
            <th>Table Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <template
            v-for="(file, key) in files"
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
              <td>{{ getReadableSize(file.file.size) }}</td>
              <td />
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
                  <i class="fa-solid fa-eye" />
                </button>
              </td>
            </tr>
            <tr v-if="file.expanded">
              <td />
              <td colspan="5">
                <div>
                  <h5>Fields</h5>
                  What are the fields in this file?
                </div>
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="js">
import Axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { mapStores } from 'pinia';
import { useModeStore } from '../../store/ModeStore';
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

    handleFilesSelected(event) {
      const files = event.target.files;
      for (let i = 0; i < files.length; ++i) {
        const file = files[i];
        this.files[uuidv4()] = {
          file,
          fields: [],
          fieldsMap: {},
          type: 'none',
          header: 0,
          expanded: false,
        }
      }
    },

    handleTableTypeChange(key, event) {
      const fileType = event.target.value;
      const file = this.files[key];
      file.type = fileType;
    },

    handleExpand(key) {
      const file = this.files[key];
      file.expanded = !file.expanded;
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
  },
}
</script>

<style lang="scss" scoped>
.import-view__wrapper {
  height: 100%;
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
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
