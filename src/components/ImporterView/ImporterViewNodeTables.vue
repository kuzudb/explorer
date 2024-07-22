<template>
  <div>
    <h4>
      Import to Node Tables
    </h4>
    <table
      v-if="numberOfFiles > 0"
      class="table border"
      style="width: 100%"
    >
      <thead>
        <tr>
          <th />
          <th>Node Table</th>
          <th>File Name</th>
          <th>Primary Key</th>
          <th>Properties</th>
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
            <td class="table-name-input-wrapper">
              <div class="input-group mb-3">
                <select
                  class="form-select form-select-sm"
                  @change="setTableIsNew(key, $event)"
                >
                  <option value="create-new">
                    Create new table
                  </option>
                  <option value="existing-table">
                    Use existing table
                  </option>
                </select>
                <input
                  v-if="file.isNew"
                  :value="file.tableName"
                  type="text"
                  class="form-control form-control-sm"
                >
                <select
                  v-else
                  class="form-select form-select-sm"
                  :value="file.tableName"
                  @change="setTableName(key, $event)"
                >
                  <option :value="null">
                    Select table
                  </option>
                  <option
                    v-for="(option, index) in schema.nodeTables"
                    :key="index"
                    :value="option.name"
                  >
                    {{ option.name }}
                  </option>
                </select>
              </div>
            </td>
            <td>
              {{ file.file.name }}
            </td>
            <td>
              <select
                class="form-select form-select-sm"
                @change="setPrimaryKey(key, $event)"
              >
                <option
                  v-for="(column, index) in file.format.Columns"
                  :key="index"
                  :value="column.name"
                  :selected="column.primaryKey"
                >
                  {{ column.name }}
                </option>
              </select>
            </td>
            <td>
              {{ file.format.Columns.length }}
            </td>
          </tr>
          <tr v-if="file.expanded">
            <td />
            <td colspan="6">
              <div>
                <a
                  href="#"
                  class="btn btn-link"
                  @click.prevent="setCsvFormat(file)"
                ><i class="fa-solid fa-file-csv" />
                  Configure CSV
                  Format</a>
                <table class="table border table-sm node-properties-table">
                  <tbody>
                    <tr v-if="file.format.HasHeader">
                      <th>
                        Column in File
                      </th>
                      <td
                        v-for="(column, index) in file.format.Columns"
                        :key="index"
                        class="node-properties-table__key"
                      >
                        {{ column.name }}
                      </td>
                    </tr>
                    <tr v-else>
                      <th>
                        Column Index
                      </th>
                      <td
                        v-for="(_, index) in file.format.Columns"
                        :key="index"
                        class="node-properties-table__key"
                      >
                        {{ index + 1 }}
                      </td>
                    </tr>
                    <tr>
                      <th>
                        Property Name
                      </th>
                      <td
                        v-for="(column, index) in file.format.Columns"
                        :key="index"
                      >
                        <input
                          v-if="file.isNew"
                          :value="column.userDefinedName"
                          type="text"
                          class="form-control form-control-sm"
                          @input="setColumnUserDefinedName(key, index, $event)"
                        >
                        <select
                          v-if="!file.isNew && !!file.tableName"
                          class="form-select form-select-sm"
                          :value="column.userDefinedName"
                        >
                          <option :value="null">
                            Select property
                          </option>
                          <option
                            v-for="option in getPropertyOptions(key, file.tableName)"
                            :key="option.key"
                            :value="option.key"
                          >
                            {{ option.text }}
                          </option>
                        </select>
                      </td>
                    </tr>
                    <tr v-if="file.isNew">
                      <th>
                        Property Type
                      </th>
                      <td
                        v-for="(column, index) in file.format.Columns"
                        :key="index"
                      >
                        <select
                          :value="column.type"
                          class="form-select form-select-sm"
                          @change="setColumnType(key, index, $event)"
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

                    <tr>
                      <th>
                        Import to Table?
                      </th>
                      <td
                        v-for="(column, index) in file.format.Columns"
                        :key="index"
                      >
                        <input
                          type="checkbox"
                          class="form-check-input"
                          checked
                        >
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
        No node tables have been assigned yet. If you have node tables, please assign them from the
        selected files.
      </div>
    </div>
  </div>
</template>

<script lang="js">
import { DATA_TYPES } from '../../utils/Constants';
export default {
  name: "ImporterViewNodeTables",
  props: {
    files: {
      type: Object,
      required: true,
      default: () => ({}),
    },
    schema: {
      type: Object,
      required: true,
      default: () => ({}),
    },
  },
  emits:
    [
      "expand", "setCsvFormat", "setPrimaryKey", "setTableIsNew", "setTableName",
      "setColumnUserDefinedName", "setColumnType"
    ],
  data() {
    return {
    };
  },
  computed: {
    numberOfFiles() {
      return Object.keys(this.files).length;
    },
    dataTypes() {
      return Object.keys(DATA_TYPES);
    },
  },
  methods: {
    handleExpand(key) {
      this.$emit("expand", key);
    },

    setCsvFormat(file) {
      this.$emit("setCsvFormat", file);
    },

    setTableIsNew(key, event) {
      this.$emit("setTableIsNew", key, event.target.value === "create-new");
    },

    setTableName(key, event) {
      const file = this.files[key];

      if (file.isNew) {
        window.clearTimeout(this.debounceTimer);
        this.debounceTimer = window.setTimeout(() => {
          this.$emit("setTableName", key, event.target.value);
        }, 200);
      } else {
        console.log(event.target.value);
        this.$emit("setTableName", key, event.target.value);
      }
    },

    setPrimaryKey(key, event) {
      this.$emit("setPrimaryKey", key, event.target.value);
    },

    setColumnUserDefinedName(key, index, event) {
      window.clearTimeout(this.debounceTimer);
      this.debounceTimer = window.setTimeout(() => {
        console.log(key, index, event.target.value);
        this.$emit("setColumnUserDefinedName", key, index, event.target.value);
      }, 200);
    },

    setColumnType(key, index, event) {
      console.log(key, index, event.target.value);
    },

    getPropertyOptions(key, tableName) {
      console.log(key, tableName);
      const file = this.files[key];
      console.log(file);
      if (file.isNew) {
        return [];
      }
      console.log(this.schema.nodeTables);
      const nodeTable = this.schema.nodeTables.find((table) => table.name === file.tableName);
      console.log(nodeTable);
      if (!nodeTable) {
        return [];
      }
      return nodeTable.properties.map((property) => ({
        text: property.name,
        key: property.name,
      }));
    },
  },
};
</script>

<style lang="scss" scoped>
.form-select-sm {
  max-width: 160px;
}

.form-control-sm {
  max-width: 200px;
}

table {
  .actions {
    text-align: center;
  }

  .table-type-select {
    text-align: center;
    width: 100px;
  }

  td.expand-btn-td {
    width: 40px;
  }

  .expand-btn {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  td.table-name-input-wrapper {
    width: 400px;

    .input-group.mb-3 {
      margin-bottom: 0 !important;
    }
  }

  .node-properties-table {
    width: auto;

    th {
      padding-right: 32px;
    }

    input,
    select {
      min-width: 200px;
    }

    .node-properties-table__key {
      font-weight: 500;
    }
  }
}

.btn.btn-link {
  text-decoration: none;
}
</style>
