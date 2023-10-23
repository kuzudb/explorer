<template>
  <div>
    <div>
      <div class="d-flex justify-content-between">
        <h5>Node Tables</h5>
        <button class="btn btn-sm btn-primary" @click="$emit('addNodeTable')">Add</button>
      </div>
      <hr />
      <table
        class="table table-sm table-bordered schema_side-panel__overview-table"
        v-if="schema"
      >
        <tbody>
          <tr v-for="nodeTable in schema.nodeTables" :key="nodeTable.name">
            <td scope="row">
              <span
                class="badge bg-primary"
                :style="{ backgroundColor: ` ${getColor(nodeTable.name)} !important` }"
                >{{ nodeTable.name }}</span
              >
              <br />
              <small> {{ nodeTable.properties.length }} properties </small>
            </td>
            <td class="schema_side-panel__overview-table-buttons-container">
              <div>
                <button
                  class="btn btn-sm btn-outline-primary"
                  @click="editTable(nodeTable.name)"
                >
                  <i class="fa-solid fa-pencil"></i>
                </button>
                &nbsp;
                <button
                  class="btn btn-sm btn-outline-danger"
                  @click="dropTable(nodeTable.name)"
                >
                  <i class="fa-solid fa-trash-can"></i>
                </button>
              </div>
            </td>
          </tr>
          <tr v-if="schema.nodeTables.length === 0">
            <td colspan="2">
              There are no node tables in this schema. Click "Add" to add one.
            </td>
          </tr>
        </tbody>
      </table>
      <br />
    </div>

    <div class="d-flex justify-content-between">
      <h5>Relationship Tables</h5>
      <button class="btn btn-sm btn-primary" @click="$emit('addRelTable')">Add</button>
    </div>
    <hr />
    <table
      class="table table-sm table-bordered schema_side-panel__overview-table"
      v-if="schema"
    >
      <tbody>
        <tr v-for="relTable in schema.relTables" :key="relTable.name">
          <td scope="row">
            <span
              class="badge bg-primary"
              :style="{
                backgroundColor: ` ${getColor(relTable.name)} !important`,
                color: '#000000',
              }"
            >
              {{ relTable.name }}</span
            >
            <br />
            <small> {{ relTable.properties.length }} properties </small>
          </td>
          <td class="schema_side-panel__overview-table-buttons-container">
            <div>
              <button
                class="btn btn-sm btn-outline-primary"
                @click="editTable(relTable.name)"
              >
                <i class="fa-solid fa-pencil"></i>
              </button>
              &nbsp;
              <button
                class="btn btn-sm btn-outline-danger"
                @click="dropTable(relTable.name)"
              >
                <i class="fa-solid fa-trash-can"></i>
              </button>
            </div>
          </td>
        </tr>
        <tr v-if="schema.relTables.length === 0">
          <td colspan="2">
            There are no relationship tables in this schema. Click "Add" to add one.
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="js">
import { useSettingsStore } from "../../store/SettingsStore";
import { mapStores } from 'pinia'
export default {
  name: "SchemaSidebarOverview",
  props: {
    schema: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapStores(useSettingsStore),
  },
  methods: {
    getColor(label) {
      return this.settingsStore.colorForLabel(label);
    },
    dropTable(tableName) {
      this.$emit("dropTable", tableName);
    },
    editTable(tableName) {
      this.$emit("editTable", tableName);
    },
  },
};
</script>

<style scoped lang="scss">
.schema_side-panel__overview-table-buttons-container {
  width: 90px;
  text-align: center;
  vertical-align: middle;
}
</style>
