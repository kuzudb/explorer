<template>
  <div>
    <div>
      <div class="d-flex justify-content-between">
        <h5>Node Tables</h5>
        <button
          v-if="modeStore.isReadWrite"
          class="btn btn-sm btn-primary"
          @click="$emit('addNodeTable')"
        >
          Add
        </button>

        <button
            class="btn btn-sm btn-primary"
            @click="showAllTables()"
        >
          Show
        </button>
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
                :style="{ backgroundColor: `${getColor(nodeTable.name)} !important` }"
                >{{ nodeTable.name }}</span
              >
              <br />
              <small> {{ nodeTable.properties.length }} properties </small>
            </td>
            <td
              class="schema_side-panel__overview-table-buttons-container"
              v-if="modeStore.isReadWrite"
            >
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
                &nbsp;
              </div>
            </td>
          </tr>
          <tr v-if="schema.nodeTables.length === 0">
            <td colspan="2" v-if="modeStore.isReadWrite">
              There are no node tables in this schema. Click "Add" to add one.
            </td>
            <td colspan="2" v-else>There are no node tables in this schema.</td>
          </tr>
        </tbody>
      </table>
      <br />
    </div>

    <div>
      <div class="d-flex justify-content-between">
        <h5>Relationship Tables</h5>
        <button
          v-if="modeStore.isReadWrite"
          class="btn btn-sm btn-primary"
          @click="$emit('addRelTable')"
        >
          Add
        </button>
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
              <small>
                {{ relTable.properties.length }}
                {{ relTable.properties.length <= 1 ? "property" : "properties" }}
              </small>
              <small v-if="relTable.group">
                &nbsp;&nbsp; <b>{{ relTable.group }} </b> group
              </small>
            </td>
            <td
              v-if="modeStore.isReadWrite"
              class="schema_side-panel__overview-table-buttons-container"
            >
              <div>
                <button
                  class="btn btn-sm btn-outline-primary"
                  @click="editTable(relTable.name)"
                >
                  <i class="fa-solid fa-pencil"></i>
                </button>
                &nbsp;
                <button
                  :disabled="relTable.group"
                  class="btn btn-sm btn-outline-danger"
                  @click="dropTable(relTable.name)"
                >
                  <i class="fa-solid fa-trash-can"></i>
                </button>
              </div>
            </td>
          </tr>
          <tr v-if="schema.relTables.length === 0">
            <td colspan="2" v-if="modeStore.isReadWrite">
              There are no relationship tables in this schema. Click "Add" to add one.
            </td>
            <td colspan="2" v-else>There are no relationship tables in this schema.</td>
          </tr>
        </tbody>
      </table>
      <br />
    </div>

    <div>
      <div class="d-flex justify-content-between">
        <h5>Relationship Groups</h5>
        <button
          v-if="modeStore.isReadWrite"
          class="btn btn-sm btn-primary"
          @click="$emit('addRelGroup')"
        >
          Add
        </button>
      </div>
      <hr />
      <table
        class="table table-sm table-bordered schema_side-panel__overview-table"
        v-if="schema"
      >
        <tbody>
          <tr v-for="relGroup in schema.relGroups" :key="relGroup.name">
            <td scope="row">
              <small
                >{{ relGroup.name }} ({{ relGroup.rels.length }}
                {{ relGroup.rels.length <= 1 ? "relationship" : "relationships" }})
              </small>
              <br />
              <ul>
                <li v-for="relTableName in relGroup.rels" :key="relTableName">
                  <span
                    class="badge bg-primary"
                    :style="{
                      backgroundColor: `${getColor(relTableName)} !important`,
                      color: '#000000',
                      marginRight: '4px',
                    }"
                  >
                    {{ relTableName }}
                  </span>
                </li>
              </ul>
            </td>
            <td
              v-if="modeStore.isReadWrite"
              class="schema_side-panel__overview-table-buttons-container schema_side-panel__overview-rel-groups-buttons-container"
            >
              <div>
                <button
                  class="btn btn-sm btn-outline-danger"
                  @click="$emit('dropTable', relGroup.name)"
                >
                  <i class="fa-solid fa-trash-can"></i>
                </button>
              </div>
            </td>
          </tr>
          <tr v-if="schema.relGroups.length === 0">
            <td colspan="2" v-if="modeStore.isReadWrite">
              There are no relationship groups in this schema. Click "Add" to add one.
            </td>
            <td colspan="2" v-else>There are no relationship groups in this schema.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="js">
import { useSettingsStore } from "../../store/SettingsStore";
import { useModeStore } from "../../store/ModeStore";
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
    ...mapStores(useSettingsStore, useModeStore)
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
    showAllTables() {
      console.log("in showAllTables");
      this.$emit("showAllTables");
    }
  },
};
</script>

<style scoped lang="scss">
.schema_side-panel__overview-table-buttons-container {
  width: 135px;
  text-align: center;
  vertical-align: middle;

  &.schema_side-panel__overview-rel-groups-buttons-container {
    width: 50px;
  }
}

ul {
  margin-bottom: 4px;
}
</style>
