<template>
  <div>
    <div>
      <h5>
        <div class="input-group flex-nowrap">
          <span class="input-group-text">Table Name</span>
          <input type="text" class="form-control" v-model="currLabel" :style="{
            backgroundColor: ` ${getColor()} !important`,
            color: isNode ? '#ffffff' : '#000000',
          }" />
        </div>
      </h5>
      <hr />

      <div class="schema_side-panel__add-table-actions-container">
        <button type="button" class="btn btn-sm btn-outline-success" title="Save Table" @click="saveTable">
          <i class="fa-solid fa-save"></i>
          Save Table
        </button>
        &nbsp;
        <button class="btn btn-sm btn-outline-danger" title="Discard Table" @click="discardTable">
          <i class="fa-solid fa-trash"></i>
          Discard Table
        </button>
        &nbsp;
        <button class="btn btn-sm btn-outline-primary" title="Add Property" @click="addProperty">
          <i class="fa-solid fa-plus"></i>
          Add Property
        </button>
        &nbsp;
        <button class="btn btn-sm btn-outline-secondary" title="Rename Table" v-if="false">
          <i class="fa-solid fa-pencil"></i>
          Rename Table
        </button>
      </div>
      <br />

      <div v-if="!isNode">
        <div class="input-group flex-nowrap">
          <span class="input-group-text">From</span>
          <select class="form-select" v-model="currSrc" :style="getSelectStyle(currSrc)">
            <option v-for="option in relTableSrcAndDstOptions" :value="option.value" :key="option.text">
              {{ option.text }}
            </option>
          </select>
        </div>
        <div class="input-group flex-nowrap">
          <span class="input-group-text">To</span>
          <select class="form-select" v-model="currDst" :style="getSelectStyle(currDst)">
            <option v-for="option in relTableSrcAndDstOptions" :value="option.value" :key="option.text">
              {{ option.text }}
            </option>
          </select>
        </div>
        <br />
      </div>

      <table class="table table-sm table-bordered schema_side-panel__add-table" v-if="schema">
        <thead>
          <tr v-if="currProperties.length > 0">
            <th scope="col">Name</th>
            <th scope="col">Type</th>
            <th scope="col" class="schema_side-panel__add-table-buttons-container">
              Actions
            </th>
          </tr>
          <tr v-else>
            <th scope="col">There are no properties in this table</th>
          </tr>
        </thead>

        <tbody v-if="currProperties.length > 0">
          <tr v-for="property in currProperties" :key="property.id">
            <SchemaPropertyEditCell :property="property" :colspan="3" :isNewProperty="true" :isNewTable="true"
              :isNodeTable="isNode" :ref="'editCell-' + property.id" v-if="property.isEditing"
              @save="(...args) => saveProperty(property.id, ...args)" @cancel="cancelEditMode(property.id)" />
            <td v-if="!property.isEditing">
              {{ property.name }}
              <span v-if="property.isPrimaryKey" class="badge bg-primary">PK</span>
            </td>
            <td v-if="!property.isEditing">
              {{ property.type }}
            </td>
            <td class="schema_side-panel__add-table-buttons-container" v-if="!property.isEditing">
              <button type="button" class="btn btn-sm btn-outline-primary" title="Edit"
                @click="enterEditMode(property.id)">
                <i class="fa-solid fa-pencil"></i>
              </button>
              &nbsp;
              <button type="button" class="btn btn-sm btn-outline-danger" title="Drop" @click="dropProperty(property.id)">
                <i class="fa-solid fa-trash"></i>
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
    currSrc: null,
    currDst: null,
    placeholderNodeTable: PLACEHOLDER_NODE_TABLE,
    placeholderRelTable: PLACEHOLDER_REL_TABLE,
    currLabelInputDebounce: null,
  }),
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
    currSrc() {
      this.updatePlaceholderRelTable();
    },
    currDst() {
      this.updatePlaceholderRelTable();
    },
  },
  computed: {
    ...mapStores(useSettingsStore),
    relTableSrcAndDstOptions() {
      const result = [
        {
          value: null,
          text: "Select a node table",
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
        this.$emit("save", this.currLabel, this.currProperties, this.currSrc, this.currDst);
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
  },
  mounted() {
    this.currLabel = this.label;
    if (!this.isNode) {
      return;
    }
    const primaryKey = { ...this.defaultPrimaryKey };
    primaryKey.id = uuidv4();
    this.currProperties.push(primaryKey);
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
</style>
