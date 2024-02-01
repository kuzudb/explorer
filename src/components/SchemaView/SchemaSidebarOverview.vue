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
      </div>
      <hr>
      <table
        v-if="schema"
        class="table table-sm table-bordered schema_side-panel__overview-table"
      >
        <tbody>
          <tr
            v-for="nodeTable in schema.nodeTables"
            :key="nodeTable.name"
          >
            <td
              scope="row"
              :colspan="nodeTable.rdf ? 2 : 1"
            >
              <span
                class="badge bg-primary"
                :style="{ backgroundColor: `${getColor(nodeTable.name)} !important` }"
              >{{ nodeTable.name }}</span>
              <br>
              <small v-if="!nodeTable.rdf">
                {{ nodeTable.properties.length }} properties
              </small>
              <small v-if="nodeTable.rdf">
                <b>{{ nodeTable.rdf }} </b> RDF graph
              </small>
            </td>
            <td
              v-if="modeStore.isReadWrite && !nodeTable.rdf"
              class="schema_side-panel__overview-table-buttons-container"
            >
              <div>
                <button
                  class="btn btn-sm btn-outline-primary"
                  @click="editTable(nodeTable.name)"
                >
                  <i class="fa-solid fa-pencil" />
                </button>
                &nbsp;
                <button
                  class="btn btn-sm btn-outline-danger"
                  @click="dropTable(nodeTable.name)"
                >
                  <i class="fa-solid fa-trash-can" />
                </button>
              </div>
            </td>
          </tr>
          <tr v-if="schema.nodeTables.length === 0">
            <td
              v-if="modeStore.isReadWrite"
              colspan="2"
            >
              There are no node tables in this schema. Click "Add" to add one.
            </td>
            <td
              v-else
              colspan="2"
            >
              There are no node tables in this schema.
            </td>
          </tr>
        </tbody>
      </table>
      <br>
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
      <hr>
      <table
        v-if="schema"
        class="table table-sm table-bordered schema_side-panel__overview-table"
      >
        <tbody>
          <tr
            v-for="relTable in schema.relTables"
            :key="relTable.name"
          >
            <td
              scope="row"
              :colspan="relTable.rdf ? 2 : 1"
            >
              <span
                class="badge bg-primary"
                :style="{
                  backgroundColor: ` ${getColor(relTable.name)} !important`,
                  color: '#000000',
                }"
              >
                {{ relTable.name }}</span>
              <br>
              <small v-if="!relTable.rdf">
                {{ relTable.properties.length }}
                {{ relTable.properties.length <= 1 ? "property" : "properties" }}
              </small>
              <small v-if="relTable.group">
                &nbsp;&nbsp; <b>{{ relTable.group }} </b> group
              </small>
              <small v-if="relTable.rdf">
                <b>{{ relTable.rdf }} </b> RDF graph
              </small>
            </td>
            <td
              v-if="modeStore.isReadWrite && !relTable.rdf"
              class="schema_side-panel__overview-table-buttons-container"
            >
              <div>
                <button
                  class="btn btn-sm btn-outline-primary"
                  @click="editTable(relTable.name)"
                >
                  <i class="fa-solid fa-pencil" />
                </button>
                &nbsp;
                <button
                  :disabled="relTable.group"
                  class="btn btn-sm btn-outline-danger"
                  @click="dropTable(relTable.name)"
                >
                  <i class="fa-solid fa-trash-can" />
                </button>
              </div>
            </td>
          </tr>
          <tr v-if="schema.relTables.length === 0">
            <td
              v-if="modeStore.isReadWrite"
              colspan="2"
            >
              There are no relationship tables in this schema. Click "Add" to add one.
            </td>
            <td
              v-else
              colspan="2"
            >
              There are no relationship tables in this schema.
            </td>
          </tr>
        </tbody>
      </table>
      <br>
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
      <hr>
      <table
        v-if="schema"
        class="table table-sm table-bordered schema_side-panel__overview-table"
      >
        <tbody>
          <tr
            v-for="relGroup in schema.relGroups"
            :key="relGroup.name"
          >
            <td scope="row">
              <small>{{ relGroup.name }} ({{ relGroup.rels.length }}
                {{ relGroup.rels.length <= 1 ? "relationship" : "relationships" }})
              </small>
              <br>
              <ul>
                <li
                  v-for="relTableName in relGroup.rels"
                  :key="relTableName"
                >
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
                  <i class="fa-solid fa-trash-can" />
                </button>
              </div>
            </td>
          </tr>
          <tr v-if="schema.relGroups.length === 0">
            <td
              v-if="modeStore.isReadWrite"
              colspan="2"
            >
              There are no relationship groups in this schema. Click "Add" to add one.
            </td>
            <td
              v-else
              colspan="2"
            >
              There are no relationship groups in this schema.
            </td>
          </tr>
        </tbody>
      </table>
      <br>
    </div>

    <div>
      <div class="d-flex justify-content-between">
        <h5>RDF</h5>
        <button
          v-if="modeStore.isReadWrite"
          class="btn btn-sm btn-primary"
          @click="$emit('addRdf')"
        >
          Add
        </button>
      </div>
      <hr>
      <table
        v-if="schema"
        class="table table-sm table-bordered schema_side-panel__overview-table"
      >
        <tbody>
          <tr
            v-for="rdf in schema.rdf"
            :key="rdf.name"
          >
            <td scope="row">
              <small>{{ rdf.name }} </small>
              <br>
              <ul>
                <li
                  v-for="nodeTableName in rdf.nodes"
                  :key="nodeTableName"
                >
                  <span
                    class="badge bg-primary"
                    :style="{
                      backgroundColor: `${getColor(nodeTableName)} !important`,
                      color: '#ffffff',
                      marginRight: '4px',
                    }"
                  >
                    {{ nodeTableName }}
                  </span>
                </li>
                <li
                  v-for="relTableName in rdf.rels"
                  :key="relTableName"
                >
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
                  <i class="fa-solid fa-trash-can" />
                </button>
              </div>
            </td>
          </tr>
          <tr v-if="schema.rdf.length === 0">
            <td
              v-if="modeStore.isReadWrite"
              colspan="2"
            >
              There are no RDF graphs in this schema. Click "Add" to add one.
            </td>
            <td
              v-else
              colspan="2"
            >
              There are no RDF graphs in this schema.
            </td>
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
  emits: ["dropTable", "editTable", "addNodeTable", "addRelTable", "addRelGroup"],
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
  },
};
</script>

<style scoped lang="scss">
.schema_side-panel__overview-table-buttons-container {
  width: 90px;
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
