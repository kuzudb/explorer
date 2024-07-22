<template>
  <div>
    <h4>
      Import to Relationship Tables
    </h4>
    <table
      v-if="numberOfFiles > 0"
      class="table border"
      style="width: 100%"
    >
      <thead>
        <tr>
          <th />
          <th>Relationship Table</th>
          <th>File Name</th>
          <th>Source Node Table</th>
          <th>
            Destination Node Table
          </th>
          <th>Properties</th>
        </tr>
      </thead>
      <tbody>
        <template
          v-for="(file, key) in files"
          :key="key"
        >
          <tr :set="propertyColumns = getPropertyColumns(file)">
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
                <select class="form-select form-select-sm">
                  <option value="create-new">
                    Create new table
                  </option>
                  <option value="existing-table">
                    Use existing table
                  </option>
                </select>
                <input
                  v-model="file.tableName"
                  type="text"
                  class="form-control form-control-sm"
                >
              </div>
            </td>
            <td>
              {{ file.file.name }}
            </td>
            <td>
              <select class="form-select form-select-sm">
                <option
                  v-for="(option, index) in srcDstTableOptions"
                  :key="index"
                  :value="option.key"
                  :selected="option.key === file.from"
                >
                  {{ option.text }}
                </option>
              </select>
            </td>
            <td>
              <select class="form-select form-select-sm">
                <option
                  v-for="(option, index) in srcDstTableOptions"
                  :key="index"
                  :value="option.key"
                  :selected="option.key === file.to"
                >
                  {{ option.text }}
                </option>
              </select>
            </td>
            <td>
              {{ propertyColumns.length }}
            </td>
          </tr>
          <tr
            v-if="file.expanded"
            :set="propertyColumns = getPropertyColumns(file)"
          >
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
                <br>
                <table class="table border table-sm from-to-table">
                  <thead>
                    <tr>
                      <th>Source Key</th>
                      <th>Destination Key</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <select class="form-select form-select-sm">
                          <option
                            v-for="column in file.format.Columns"
                            :key="column.name"
                            :selected="column.isFromKey"
                          >
                            {{ column.name }}
                          </option>
                        </select>
                      </td>
                      <td>
                        <select class="form-select form-select-sm">
                          <option
                            v-for="column in file.format.Columns"
                            :key="column.name"
                            :selected="column.isToKey"
                          >
                            {{ column.name }}
                          </option>
                        </select>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table
                  v-if="propertyColumns.length > 0"
                  class=" table border table-sm properties-table"
                >
                  <tbody>
                    <tr v-if="file.format.HasHeader">
                      <th>
                        Column in File
                      </th>
                      <td
                        v-for="(column, index) in propertyColumns"
                        :key="index"
                        style="font-weight: 500"
                      >
                        {{ column.name }}
                      </td>
                    </tr>
                    <tr>
                      <th>
                        Property Name
                      </th>
                      <td
                        v-for="(column, index) in propertyColumns"
                        :key="index"
                      >
                        <input
                          v-model="column.userDefinedName"
                          type="text"
                          class="form-control form-control-sm"
                        >
                      </td>
                    </tr>
                    <tr>
                      <th>
                        Property Type
                      </th>
                      <td
                        v-for="(column, index) in propertyColumns"
                        :key="index"
                      >
                        <select
                          v-model="column.type"
                          class="form-select form-select-sm"
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
                        v-for="(column, index) in propertyColumns"
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
    srcDstTableOptions: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  emits: ["expand", "setCsvFormat"],
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
    getPropertyColumns(file) {
      const propertyColumns = file.format.Columns.filter((column) => !column.isFromKey && !column.isToKey);
      console.log(propertyColumns);
      return propertyColumns;
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
}

.btn.btn-link {
  text-decoration: none;
}
</style>
