<template>
  <div>
    <div>
      <div
        v-if="isRelGroup"
        class="alert alert-info text-justify"
        role="alert"
      >
        <i class="fa-solid fa-info-circle" />
        When creating a relationship group, multiple relationship tables with the same
        properties will be created.
        <br>
        The visualization will not show a preview of the relationship group, but each
        relationship table will be shown after the relationship group is saved.
      </div>
      <h5>
        <div class="input-group flex-nowrap">
          <span class="input-group-text">Name</span>
          <input
            v-model="currLabel"
            type="text"
            class="form-control"
            :style="{
              backgroundColor: !isRelGroup ? ` ${getColor()} !important` : '#ffffff',
              color: isNode ? '#ffffff' : '#000000',
            }"
          >
        </div>
      </h5>
      <hr>

      <div class="schema_side-panel__add-table-actions-container">
        <button
          type="button"
          class="btn btn-sm btn-outline-success"
          title="Save Table"
          :disabled="!isValid"
          @click="saveTable"
        >
          <i class="fa-solid fa-save" />
          Save
        </button>
        &nbsp;
        <button
          class="btn btn-sm btn-outline-danger"
          title="Discard Table"
          @click="discardTable"
        >
          <i class="fa-solid fa-trash" />
          Discard
        </button>
        &nbsp;
        <button
          class="btn btn-sm btn-outline-primary"
          title="Add Property"
          @click="addProperty"
        >
          <i class="fa-solid fa-plus" />
          Property
        </button>
        &nbsp;
        <button
          v-if="isRelGroup"
          class="btn btn-sm btn-outline-primary"
          title="Relationship"
          @click="addRel"
        >
          <i class="fa-solid fa-plus" />
          Connection
        </button>
      </div>
      <br>

      <div v-if="isRelGroup">
        <h5>Connections</h5>
        <hr>
        <div
          v-for="rel in currRelGroupRels"
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
                  v-if="currRelGroupRels.length > 1"
                  type="button"
                  class="btn btn-sm btn-outline-danger"
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
        <br>
      </div>

      <div v-if="!isNode && !isRelGroup">
        <h5>Connection</h5>
        <hr>
        <div class="input-group flex-nowrap">
          <span class="input-group-text schema_side-panel__add-table-rel-label">From</span>
          <select
            v-model="currSrc"
            class="form-select"
            :style="getSelectStyle(currSrc)"
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
        <div class="input-group flex-nowrap">
          <span class="input-group-text schema_side-panel__add-table-rel-label">To</span>
          <select
            v-model="currDst"
            class="form-select"
            :style="getSelectStyle(currDst)"
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
        <br>
      </div>

      <h5>Properties</h5>
      <hr>
      <table
        v-if="schema"
        class="table table-sm table-bordered schema_side-panel__add-table"
      >
        <thead>
          <tr v-if="currProperties.length > 0">
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
          <tr v-else>
            <th scope="col">
              There are no properties in this table
            </th>
          </tr>
        </thead>

        <tbody v-if="currProperties.length > 0">
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
                class="badge bg-primary"
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
                class="btn btn-sm btn-outline-primary"
                title="Edit"
                @click="enterEditMode(property.id)"
              >
                <i class="fa-solid fa-pencil" />
              </button>
              &nbsp;
              <button
                type="button"
                class="btn btn-sm btn-outline-danger"
                title="Drop"
                @click="dropProperty(property.id)"
              >
                <i class="fa-solid fa-trash" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
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
    isRelGroup: {
      type: Boolean,
      required: true,
    }
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
    currRelGroupRels: [],
    currSrc: null,
    currDst: null,
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
        this.isNode || (
          this.currSrc && this.currDst
        )
      );
    }
  },
  watch: {
    currLabel() {
      clearTimeout(this.currLabelInputDebounce);
      this.currLabelInputDebounce = setTimeout(() => {
        if (this.isNode) {
          this.$emit("updateNodeTableLabel", this.currLabel);
        } else if (!this.isRelGroup) {
          this.updatePlaceholderRelTable();
        }
      }, 300);
    },
    currSrc() {
      this.updatePlaceholderRelTable();
    },
    currDst() {
      this.updatePlaceholderRelTable();
    },
  },

  mounted() {
    this.currLabel = this.label;
    if (this.isRelGroup) {
      this.currRelGroupRels = [];
      this.addRel();
    }
    if (!this.isNode) {
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
        this.$emit("save", this.currLabel, this.currProperties, this.currSrc, this.currDst, this.currRelGroupRels);
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
    updatePlaceholderRelTable() {
      const src = this.currSrc;
      const dst = this.currDst;
      const name = this.currLabel;
      this.$emit("updatePlaceholderRelTable", { src, dst, name });
    },
    addRel() {
      const newRel = {
        id: uuidv4(),
        src: null,
        dst: null,
      };
      this.currRelGroupRels.push(newRel);
    },
    deleteRel(id) {
      const index = this.currRelGroupRels.findIndex(r => r.id === id);
      this.currRelGroupRels.splice(index, 1);
    },
  },
};
</script>

<style scoped lang="scss">
.schema_side-panel__add-table-actions-container {
  width: 100%;
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
