<template>
  <div>
    <h4>
      Import to Relationship Tables
    </h4>
    <table
      v-if="numberOfFiles > 0"
      class="table border outer-table"
    >
      <thead>
        <tr>
          <th class="expand-btn-column" />
          <th class="table-name-input-column">
            Relationship Table
          </th>
          <th>File Name</th>
          <th>From Node Table</th>
          <th>
            To Node Table
          </th>
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
                    v-for="(option, index) in schema.relTables"
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
              >
                <option
                  v-for="(option, index) in srcDstTableOptions"
                  :key="index"
                  :value="option.key"
                  :selected="option.key === file.from"
                  @change="setFromTable(key, $event)"
                >
                  {{ option.text }}
                </option>
              </select>
              <span v-else>
                {{ getFromTableFromSchema(file.tableName) }}
              </span>
            </td>
            <td>
              <select
                v-if="file.isNew"
                class="form-select form-select-sm"
              >
                <option
                  v-for="(option, index) in srcDstTableOptions"
                  :key="index"
                  :value="option.key"
                  :selected="option.key === file.to"
                  @change="setToTable(key, $event)"
                >
                  {{ option.text }}
                </option>
              </select>
              <span v-else>
                {{ getToTableFromSchema(file.tableName) }}
              </span>
            </td>
            <td class="number-properties-column">
              {{ file.format.Columns.length }}
            </td>
          </tr>
          <tr v-if="file.expanded">
            <td class="expand-btn-column" />
            <td colspan="5">
              <div class="inner-table__wrapper">
                <a
                  href="#"
                  class="btn btn-link"
                  @click.prevent="setCsvFormat(file)"
                >
                  <i class="fa-solid fa-file-csv" />
                  Configure CSV Format
                </a>
                <br>
                <table
                  v-if="file.format.Columns.length > 0"
                  class=" table border table-sm properties-table"
                >
                  <tbody>
                    <tr v-if="file.format.HasHeader">
                      <th class="inner-table__header">
                        Column in File
                      </th>
                      <td
                        v-for="(column, index) in file.format.Columns"
                        :key="index"
                        class="rel-properties-table__key"
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
                        class="rel-properties-table__key"
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

                    <tr>
                      <th class="inner-table__header">
                        Use as From Key?
                      </th>
                      <td
                        v-for="(column, index) in file.format.Columns"
                        :key="index"
                      >
                        <input
                          type="checkbox"
                          class="form-check-input"
                          :checked="column.isFromKey"
                          @change="setFromKey(key, index, $event)"
                        >
                      </td>
                    </tr>
                    <tr>
                      <th class="inner-table__header">
                        Use as To Key?
                      </th>
                      <td
                        v-for="(column, index) in file.format.Columns"
                        :key="index"
                      >
                        <input
                          type="checkbox"
                          class="form-check-input"
                          :checked="column.isToKey"
                          @change="setToKey(key, index, $event)"
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
        No relationship tables have been assigned yet. If you have relationship tables, please assign them from the
        selected files.
      </div>
    </div>
  </div>
</template>

<script lang="js">
import { DATA_TYPES } from '../../utils/Constants';
export default {
  name: "ImporterViewRelTables",
  props: {
    files: {
      type: Object,
      required: true,
      default: () => ({}),
    },

    nodeFiles: {
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
  emits: [
    "expand", "setCsvFormat", "setTableIsNew", "setTableName",
    "setColumnType", "setColumnUserDefinedName", "setFromTable",
    "setToTable", "setFromKey", "setToKey",
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

    srcDstTableOptions() {
      const unselectedTables = [
        {
          text: "(Unspecified)",
          key: "",
          isExistingTable: false,
        },
      ]
      const schemaTables = this.schema.nodeTables.map((table) => ({
        text: table.name,
        key: table.name,
        isExistingTable: true,
      }));
      const filesTables = Object.values(this.nodeFiles).map((file) => ({
        text: file.tableName,
        key: file.id,
        isExistingTable: false,
      }));
      return unselectedTables.concat(schemaTables).concat(filesTables);
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

    getTableSelectedOption(file) {
      if (!file.tableName) {
        return "";
      }
      const relTable = this.schema.relTables.find((table) => table.name === file.tableName);
      if (!relTable) {
        return "";
      }
      return file.tableName;
    },

    getPropertyOptions(key) {
      const file = this.files[key];
      if (file.isNew) {
        return [];
      }
      const relTable = this.schema.relTables.find((table) => table.name === file.tableName);
      if (!relTable) {
        return [];
      }
      const results = relTable.properties.map((property) => ({
        text: property.name,
        key: property.name,
      }));
      return results;
    },

    getPropertySelectedOption(key, column) {
      const file = this.files[key];
      const userDefinedName = column.userDefinedName;
      if (!userDefinedName) {
        return "";
      }
      const relTable = this.schema.relTables.find((table) => table.name === file.tableName);
      if (!relTable) {
        return "";
      }
      const property = relTable.properties.find((property) => property.name === userDefinedName);
      if (!property) {
        return "";
      }
      return property.name;
    },

    getFromTableFromSchema(tableName) {
      const relTable = this.schema.relTables.find((table) => table.name === tableName);
      return relTable ? relTable.src : "(None)";
    },

    getToTableFromSchema(tableName) {
      const relTable = this.schema.relTables.find((table) => table.name === tableName);
      return relTable ? relTable.dst : "(None)";
    },

    setFromKey(key, index, event) {
      this.$emit("setFromKey", key, index, event.target.checked);
    },

    setToKey(key, index, event) {
      this.$emit("setToKey", key, index, event.target.checked);
    },

    setFromTable(key, event) {
      const selectedOption = srcDstTableOptions.find((option) => option.key === event.target.value);
      this.$emit("setFromTable", key, selectedOption);
    },

    setToTable(key, event) {
      const selectedOption = srcDstTableOptions.find((option) => option.key === event.target.value);
      this.$emit("setToTable", key, selectedOption);
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

  .table-name-input-column {
    width: 400px;

    .input-group.mb-3 {
      margin-bottom: 0 !important;
    }
  }

  .input-group.mb-3 {
    margin-bottom: 0 !important;
  }

  .properties-table,
  .from-to-table {
    width: auto;

    th {
      padding-right: 32px;
    }

    input,
    select {
      min-width: 200px;
    }
  }

  .rel-properties-table__key {
    font-weight: 500;
  }
}

.btn.btn-link {
  text-decoration: none;
}

.outer-table {
  width: 100%;
  table-layout: fixed;
}

.inner-table__wrapper {
  overflow-x: scroll;
}

.inner-table__header {
  min-width: 180px;
}

.expand-btn-column {
  width: 40px;
}

.number-properties-column {
  width: 110px;
}
</style>
