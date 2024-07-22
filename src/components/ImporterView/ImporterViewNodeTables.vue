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
          <th>Properties</th>
          <th>Primary Key</th>
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
              {{ file.format.Columns.length }}
            </td>
            <td>
              <select
                class="form-select form-select-sm"
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
                        v-for="(column, index) in file.format.Columns"
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
                        v-for="(column, index) in file.format.Columns"
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
  }
}

.btn.btn-link {
  text-decoration: none;
}
</style>
