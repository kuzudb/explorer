<template>
  <div>
    <h4>
      Import to Node Tables
    </h4>
    <table
      v-if="numberOfFiles > 0"
      class="table border outer-table"
    >
      <thead>
        <tr>
          <th class="expand-btn-column" />
          <th class="table-name-input-column">
            Node Table
          </th>
          <th>File Name</th>
          <th>Primary Key</th>
          <th class="number-properties-column">
            Properties
          </th>
        </tr>
      </thead>
      <tbody>
        <template
          v-for="(file, key) in files"
          :key="key"
        >
          <tr>
            <td class="expand-btn-column">
              <button
                class="expand-btn"
                @click="handleExpand(key)"
              >
                <i :class="file.expanded ? 'fa-solid fa-chevron-up' : 'fa-solid fa-chevron-down'" />
              </button>
            </td>
            <td class="table-name-input-column">
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
                  @input="setTableName(key, $event)"
                >
                <select
                  v-else
                  class="form-select form-select-sm"
                  :value="getTableSelectedOption(file)"
                  @change="setTableName(key, $event)"
                >
                  <option value="">
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
                v-if="file.isNew"
                class="form-select form-select-sm"
                @change="setPrimaryKey(key, $event)"
              >
                <option
                  v-for="(column, index) in file.format.Columns"
                  :key="index"
                  :value="index"
                  :selected="column.primaryKey"
                >
                  {{ column.userDefinedName }}
                </option>
              </select>
              <span v-else>
                {{ getPrimaryKeyFromSchema(file.tableName) }}
              </span>
            </td>
            <td class="number-properties-column">
              {{ file.format.Columns.length }}
            </td>
          </tr>
          <tr v-if="file.expanded">
            <td />
            <td colspan="4">
              <div class="inner-table__wrapper">
                <a
                  v-if="file.extension === 'csv'"
                  href="#"
                  class="btn btn-link"
                  @click.prevent="setCsvFormat(file)"
                ><i class="fa-solid fa-file-csv" />
                  Configure CSV Format
                </a>
                <table class="table border table-sm node-properties-table">
                  <tbody>
                    <tr v-if="file.format.HasHeader">
                      <th class="inner-table__header">
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
                      <th class="inner-table__header">
                        Column Index
                      </th>
                      <td
                        v-for="(_, index) in file.format.Columns"
                        :key="index"
                        class="node-properties-table__key"
                      >
                        {{ index }}
                      </td>
                    </tr>
                    <tr>
                      <th class="inner-table__header">
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
                          :value="getPropertySelectedOption(key, column)"
                          @change="setColumnUserDefinedName(key, index, $event)"
                        >
                          <option
                            key=""
                            value=""
                          >
                            Select property
                          </option>
                          <option
                            v-for="option in getPropertyOptions(key)"
                            :key="option.key"
                            :value="option.key"
                          >
                            {{ option.text }}
                          </option>
                        </select>
                      </td>
                    </tr>
                    <tr v-if="file.isNew">
                      <th class="inner-table__header">
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
                      <th class="inner-table__header">
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
      "expand", "setCsvFormat", "setPrimaryKey", "setTableIsNew",
      "setTableName", "setColumnUserDefinedName", "setColumnType"
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
      const emitValue = () => {
        this.$emit("setTableName", key, event.target.value);
      };
      if (file.isNew) {
        window.clearTimeout(this.debounceTimer);
        this.debounceTimer = window.setTimeout(() => {
          emitValue();
        }, 200);
      } else {
        emitValue();
      }
    },

    setPrimaryKey(key, event) {
      this.$emit("setPrimaryKey", key, event.target.value);
    },

    setColumnType(key, index, event) {
      this.$emit("setColumnType", key, index, event.target.value);
    },

    setColumnUserDefinedName(key, index, event) {
      const file = this.files[key];
      const newColumnName = event.target.value;
      const emitValue = () => {
        this.$emit("setColumnUserDefinedName", key, index, newColumnName);
      };
      if (file.isNew) {
        window.clearTimeout(this.debounceTimer);
        this.debounceTimer = window.setTimeout(() => {
          emitValue();
        }, 200);

      } else {
        emitValue();
      }
    },

    getPropertyOptions(key) {
      const file = this.files[key];
      if (file.isNew) {
        return [];
      }
      const nodeTable = this.schema.nodeTables.find((table) => table.name === file.tableName);
      if (!nodeTable) {
        return [];
      }
      return nodeTable.properties.map((property) => ({
        text: property.name,
        key: property.name,
      }));
    },

    getPropertySelectedOption(key, column) {
      const file = this.files[key];
      const userDefinedName = column.userDefinedName;
      if (!userDefinedName) {
        return "";
      }
      const nodeTable = this.schema.nodeTables.find((table) => table.name === file.tableName);
      if (!nodeTable) {
        return "";
      }
      const property = nodeTable.properties.find((property) => property.name === userDefinedName);
      if (!property) {
        return "";
      }
      return property.name;
    },

    getTableSelectedOption(file) {
      if (!file.tableName) {
        return "";
      }
      const nodeTable = this.schema.nodeTables.find((table) => table.name === file.tableName);
      if (!nodeTable) {
        return "";
      }
      return file.tableName;
    },

    getPrimaryKeyFromSchema(tableName) {
      const nodeTable = this.schema.nodeTables.find((table) => table.name === tableName);
      if (!nodeTable) {
        return "(None)";
      }
      const primaryKey = nodeTable.properties.find((property) => property.isPrimaryKey);
      if (!primaryKey) {
        return "(None)";
      }
      return primaryKey.name;
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

.expand-btn-column {
  width: 40px;
}

.number-properties-column{
  width: 110px;
}

table {
  .actions {
    text-align: center;
  }

  .table-type-select {
    text-align: center;
    width: 100px;
  }

  .expand-btn {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  .table-name-input-column {
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

.outer-table {
  width: 100%;
  overflow-x: hidden;
  table-layout: fixed;
}

.inner-table__wrapper {
  overflow-x: scroll;
}

.inner-table__header {
  min-width: 180px;
}
</style>
