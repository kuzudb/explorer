<template>
  <div>
    <div>
      <h5>
        <div class="input-group flex-nowrap">
          <span class="input-group-text">Name</span>
          <input
            v-model="currLabel"
            type="text"
            class="form-control"
            :style="{
              backgroundColor: `${getColor()} !important`,
              color: isNode ? '#ffffff' : '#000000',
              textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
            }"
          >
        </div>
      </h5>
      <hr>

      <div class="schema_side-panel__add-table-actions-container">
        <button
          type="button"
          class="btn btn-sm btn-[var(--bs-body-accent)] px-2"
          title="Save Table"
          :disabled="!isValid"
          @click="saveTable"
        >
          <i class="fa-solid fa-save" />
          Save
        </button>
        <button
          class="btn btn-sm btn-outline-[var(--bs-body-accent)] px-2"
          title="Discard Table"
          @click="discardTable"
        >
          <i class="fa-solid fa-trash" />
          Discard
        </button>
        <button
          class="btn btn-sm btn-outline-[var(--bs-body-accent)] px-2"
          title="Add Property"
          @click="addProperty"
        >
          <i class="fa-solid fa-plus" />
          Property
        </button>
        <button
          class="btn btn-sm btn-outline-[var(--bs-body-accent)] px-2"
          title="Relationship"
          @click="addRel"
        >
          <i class="fa-solid fa-plus" />
          Connection
        </button>
      </div>
      <br>

      <div v-if="!isNode">
        <h5>Connections</h5>
        <hr>
        <div
          v-for="rel in currConnectivity"
          :key="rel.id"
        >
          <div>
            <div class="schema_side-panel__add-table-rel-group-container">
              <div class="input-group flex-nowrap">
                <select
                  v-model="rel.src"
                  class="form-select"
                  :style="getSelectStyle(rel.src)"
                >
                  <option
                    v-for="option in relTableSrcAndDstOptions"
                    :key="option.text"
                    :value="option.value"
                  >
                    {{ option.text }}
                  </option>
                </select>
              </div>
              <span class="input-group-text no-border">
                <i class="fa-solid fa-arrow-right" /></span>
              <div class="input-group flex-nowrap">
                <select
                  v-model="rel.dst"
                  class="form-select"
                  :style="getSelectStyle(rel.dst)"
                >
                  <option
                    v-for="option in relTableSrcAndDstOptions"
                    :key="option.text"
                    :value="option.value"
                  >
                    {{ option.text }}
                  </option>
                </select>
              </div>
              &nbsp;
              <div>
                <button
                  type="button"
                  class="btn btn-sm btn-outline-[var(--bs-body-accent)]"
                  title="Drop"
                  @click="deleteRel(rel.id)"
                >
                  <i class="fa-solid fa-trash" />
                </button>
              </div>
            </div>
          </div>
          <div class="schema_side-panel__add-table-rel-group-blank-space" />
        </div>

        <div v-if="currConnectivity.length === 0">
          <div class="alert alert-[var(--bs-body-accent)] text-justify">
            <i class="fa-solid fa-info-circle" />
            There are no connections in this table yet.
            It is required to have at least one connection for a relationship table.
            You can add one by clicking the "Connection" button above.
          </div>
        </div>
        <br>
      </div>

      <h5>Properties</h5>
      <hr>
      <table
        v-if="schema && currProperties.length > 0"
        class="table table-sm table-borderless schema_side-panel__add-table"
      >
        <thead>
          <tr>
            <th scope="col">
              Name
            </th>
            <th scope="col">
              Type
            </th>
            <th
              scope="col"
              class="schema_side-panel__add-table-buttons-container"
            >
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="property in currProperties"
            :key="property.id"
          >
            <SchemaPropertyEditCell
              v-if="property.isEditing"
              :ref="'editCell-' + property.id"
              :property="property"
              :colspan="3"
              :is-new-property="true"
              :is-new-table="true"
              :is-node-table="isNode"
              @save="(...args) => saveProperty(property.id, ...args)"
              @cancel="cancelEditMode(property.id)"
            />
            <td v-if="!property.isEditing">
              {{ property.name }}
              <span
                v-if="property.isPrimaryKey"
                class="badge bg-[var(--bs-body-accent)]"
                :style="{ textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000' }"
              >PK</span>
            </td>
            <td v-if="!property.isEditing">
              {{ property.type }}
            </td>
            <td
              v-if="!property.isEditing"
              class="schema_side-panel__add-table-buttons-container"
            >
              <button
                type="button"
                class="btn btn-sm btn-outline-[var(--bs-body-accent)]"
                title="Edit"
                @click="enterEditMode(property.id)"
              >
                <i class="fa-solid fa-pencil" />
              </button>
              &nbsp;
              <button
                type="button"
                class="btn btn-sm btn-outline-[var(--bs-body-accent)]"
                title="Drop"
                @click="dropProperty(property.id)"
              >
                <i class="fa-solid fa-trash" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <div v-if="currProperties.length === 0">
        <div class="alert alert-[var(--bs-body-accent)] text-justify">
          <i class="fa-solid fa-info-circle" />
          There are no properties in this table yet.
          You can add one by clicking the "Property" button above.
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import { useSettingsStore } from "../../store/SettingsStore";
import { mapStores } from 'pinia'
import SchemaPropertyEditCell from "./SchemaPropertyEditCell.vue";
import { DATA_TYPES, PLACEHOLDER_NODE_TABLE, PLACEHOLDER_REL_TABLE } from "../../utils/Constants";
import { v4 as uuidv4 } from "uuid";
export default {
  name: "SchemaSidebarAddView",
  components: {
    SchemaPropertyEditCell,
  },
  props: {
    schema: {
      type: Object,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    isNode: {
      type: Boolean,
      required: true,
    },
  },
  emits: ["save", "discard", "updateNodeTableLabel", "updatePlaceholderRelTable"],
  data: () => ({
    editingPropertyIndex: -1,
    defaultNewProperty: {
      name: "",
      type: DATA_TYPES.INT64,
      isPrimaryKey: false,
      isEditing: true,
      isNew: true,
      id: null
    },
    defaultPrimaryKey: {
      name: "id",
      type: DATA_TYPES.INT64,
      isPrimaryKey: true,
      isEditing: false,
      isNew: false,
      id: null
    },
    currLabel: "",
    currProperties: [],
    currConnectivity: [],
    placeholderNodeTable: PLACEHOLDER_NODE_TABLE,
    placeholderRelTable: PLACEHOLDER_REL_TABLE,
    currLabelInputDebounce: null,
  }),
  computed: {
    ...mapStores(useSettingsStore),
    relTableSrcAndDstOptions() {
      const result = [
        {
          value: null,
          text: "(Unspecified)",
        }
      ];
      if (!this.schema) {
        return result;
      }
      for (let i = 0; i < this.schema.nodeTables.length; ++i) {
        result.push({
          value: this.schema.nodeTables[i].name,
          text: this.schema.nodeTables[i].name,
        });
      }
      return result;
    },
    isValid() {
      return this.currLabel.length > 0 && (
        this.isNode || (this.currConnectivity.length > 0 && this.currConnectivity.every(r => r.src && r.dst))
      );
    }
  },
  watch: {
    currLabel() {
      clearTimeout(this.currLabelInputDebounce);
      this.currLabelInputDebounce = setTimeout(() => {
        if (this.isNode) {
          this.$emit("updateNodeTableLabel", this.currLabel);
        } else {
          this.updatePlaceholderRelTable();
        }
      }, 300);
    },

    currConnectivity: {
      handler() {
        this.updatePlaceholderRelTable();
      },
      deep: true,
    },
  },

  mounted() {
    this.currLabel = this.label;
    if (!this.isNode) {
      this.currConnectivity = [];
      return;
    }
    const primaryKey = { ...this.defaultPrimaryKey };
    primaryKey.id = uuidv4();
    this.currProperties.push(primaryKey);
  },
  methods: {
    getColor(label) {
      if (!label) {
        return this.isNode ?
          this.settingsStore.colorForLabel(this.placeholderNodeTable) :
          this.settingsStore.colorForLabel(this.placeholderRelTable);
      }
      return this.settingsStore.colorForLabel(label);
    },
    addProperty() {
      const newProperty = { ...this.defaultNewProperty };
      newProperty.id = uuidv4();
      this.currProperties.unshift(newProperty);
    },
    saveTable() {
      let allNamesValid = true;
      for (let i = 0; i < this.currProperties.length; ++i) {
        if (this.currProperties[i].isEditing) {
          const editCell = this.$refs["editCell-" + this.currProperties[i].id][0];
          editCell.save();
          if (!editCell.validateName()) {
            allNamesValid = false;
          }
        }
      }
      if (!allNamesValid) {
        return;
      }
      this.$nextTick(() => {
        this.$emit("save", this.currLabel, this.currProperties, this.processCurrConnectivity());
      });
    },
    discardTable() {
      this.$emit("discard");
    },
    enterEditMode(id) {
      const index = this.currProperties.findIndex(p => p.id === id);
      this.currProperties[index].isEditing = true;
    },
    dropProperty(id) {
      const index = this.currProperties.findIndex(p => p.id === id);
      this.currProperties.splice(index, 1);
    },
    saveProperty(id, _, property) {
      const i = this.currProperties.findIndex(p => p.id === id);
      this.currProperties[i] = property;
      this.currProperties[i].id = id;
      this.currProperties[i].isEditing = false;
      this.currProperties[i].isNew = false;
      if (this.currProperties[i].isPrimaryKey) {
        for (let j = 0; j < this.currProperties.length; ++j) {
          if (i !== j) {
            this.currProperties[j].isPrimaryKey = false;
            if (this.currProperties[j].isEditing) {
              const jId = this.currProperties[j].id;
              this.$refs["editCell-" + jId][0].cancelPrimaryKey();
            }
          }
        }
      }
    },
    cancelEditMode(id) {
      const i = this.currProperties.findIndex(p => p.id === id);
      this.currProperties[i].isEditing = false;
      if (this.currProperties[i].isNew) {
        this.dropProperty(id);
      }
    },
    getSelectStyle(value) {
      if (!value) {
        return {
          backgroundColor: "#ffffff",
          color: "#000000",
        };
      }
      return {
        backgroundColor: this.getColor(value),
        color: "#ffffff",
      };
    },
    processCurrConnectivity() {
      const connectivityHash = {};
      this.currConnectivity.forEach(r => {
        if (!r.src || !r.dst) {
          return;
        }
        if (!connectivityHash[r.src]) {
          connectivityHash[r.src] = {};
        }
        connectivityHash[r.src][r.dst] = true;
      });
      const connectivity = [];
      for (const src in connectivityHash) {
        for (const dst in connectivityHash[src]) {
          connectivity.push({ src, dst });
        }
      }
      return connectivity;
    },
    updatePlaceholderRelTable() {
      const connectivity = this.processCurrConnectivity();
      const name = this.currLabel;
      this.$emit("updatePlaceholderRelTable", { name, connectivity });
    },
    addRel() {
      const newRel = {
        id: uuidv4(),
        src: null,
        dst: null,
      };
      this.currConnectivity.push(newRel);
    },
    deleteRel(id) {
      const index = this.currConnectivity.findIndex(r => r.id === id);
      this.currConnectivity.splice(index, 1);
    },
  },
};
</script>

<style scoped lang="scss">
.schema_side-panel__add-table-actions-container {
  display: flex;
  gap: 0.5rem;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 1rem;
}

.schema_side-panel__add-table-buttons-container {
  width: 90px;
  text-align: center;
  vertical-align: middle;
}

.alert.alert-info.text-justify {
  text-align: justify;
}

.schema_side-panel__add-table-rel-group-blank-space {
  display: block;
  height: 8px;
}

.schema_side-panel__add-table-rel-group-container {
  display: flex;
  flex-direction: row;
  align-items: center;

  .input-group-text.no-border {
    border: none;
  }
}

.schema_side-panel__add-table-rel-label {
  min-width: 70px;
}
</style>
