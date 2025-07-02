<template>
  <div>
    <div>
      <div class="d-flex justify-content-between">
        <h5>Node Tables</h5>
        <button
          v-if="modeStore.isReadWrite"
          class="btn btn-sm btn-[var(--bs-body-accent)]"
          @click="$emit('addNodeTable')"
        >
          Add
        </button>
      </div>
      <hr>
      <table
        v-if="schema"
        class="table table-sm table-borderless schema_side-panel__overview-table"
      >
        <tbody>
          <tr
            v-for="nodeTable in schema.nodeTables"
            :key="nodeTable.name"
          >
            <td
              scope="row"
            >
              <span
                class="badge bg-[var(--bs-body-accent)]"
                :style="{ backgroundColor: `${getColor(nodeTable.name)} !important`, textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000' , color: '#FFFFFF',}"
              >{{ nodeTable.name }}</span>
              <br>
              <small>
                {{ nodeTable.properties.length }} properties
              </small>
            </td>
            <td
              v-if="modeStore.isReadWrite"
              class="schema_side-panel__overview-table-buttons-container"
            >
              <div>
                <button
                  class="btn btn-sm btn-outline-[var(--bs-body-accent)]"
                  @click="editTable(nodeTable.name)"
                >
                  <i class="fa-solid fa-pencil" />
                </button>
                &nbsp;
                <button
                  class="btn btn-sm btn-outline-[var(--bs-body-accent)]"
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
          class="btn btn-sm btn-[var(--bs-body-accent)]"
          @click="$emit('addRelTable')"
        >
          Add
        </button>
      </div>
      <hr>
      <table
        v-if="schema"
        class="table table-sm table-borderless schema_side-panel__overview-table"
      >
        <tbody>
          <tr
            v-for="relTable in schema.relTables"
            :key="relTable.name"
          >
            <td
              scope="row"
              :colspan="relTable.group ? 2 : 1"
            >
              <span
                class="badge bg-[var(--bs-body-accent)]"
                :style="{
                  backgroundColor: ` ${getColor(relTable.name)} !important`,
                  color: '#FFFFFF',
                  textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
                }"
              >
                {{ relTable.name }}</span>
              <br>
              <small>
                {{ relTable.properties.length }}
                {{ relTable.properties.length <= 1 ? "property" : "properties" }}
              </small>
              <small v-if="relTable.group">
                &nbsp;&nbsp; <b>{{ relTable.group }} </b> group
              </small>
            </td>
            <td
              v-if="modeStore.isReadWrite && !relTable.group"
              class="schema_side-panel__overview-table-buttons-container"
            >
              <div>
                <button
                  class="btn btn-sm btn-outline-[var(--bs-body-accent)]"
                  @click="editTable(relTable.name)"
                >
                  <i class="fa-solid fa-pencil" />
                </button>
                &nbsp;
                <button
                  class="btn btn-sm btn-outline-[var(--bs-body-accent)]"
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
  emits: ["dropTable", "editTable", "addNodeTable", "addRelTable", ],
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
.schema_side-panel__overview-table {

  border-radius: 1rem;
  padding: 2px;
}

btn {
  background: var(--bs-body-accent);
}

small {
  padding-left: 6px;
}

ul {
  margin-bottom: 4px;
}
.badge {
      display: inline-block;
      max-width: 150px;
      color: #fff !important;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      vertical-align: middle;
    }
</style>
