<template>
  <div>
    <div>
      <h5>
        <div class="input-group flex-nowrap">
          <span class="input-group-text">Table Name</span>
          <input
            type="text"
            class="form-control"
            v-model="currLabel"
            @keyup.enter="$emit('save', label)"
            :style="{
              backgroundColor: ` ${getColor()} !important`,
              color: '#ffffff',
            }"
          />
        </div>
      </h5>
      <hr />

      <div v-if="!isNode">
        <h6>
          <span
            class="badge bg-primary"
            :style="{
              backgroundColor: ` ${getColor(source)} !important`,
            }"
          >
            {{ source }}
          </span>
          &nbsp;
          <i class="fa-solid fa-arrow-right"></i>
          &nbsp;
          <span
            class="badge bg-primary"
            :style="{
              backgroundColor: ` ${getColor(destination)} !important`,
            }"
          >
            {{ destination }}
          </span>
        </h6>
        <br />
      </div>

      <div class="schema_side-panel__add-table-actions-container">
        <button
          type="button"
          class="btn btn-sm btn-outline-success"
          title="Save Table"
          @click="saveTable"
        >
          <i class="fa-solid fa-save"></i>
          Save Table
        </button>
        &nbsp;
        <button
          class="btn btn-sm btn-outline-danger"
          title="Discard Table"
          @click="discardTable"
        >
          <i class="fa-solid fa-trash"></i>
          Discard Table
        </button>
        &nbsp;
        <button
          class="btn btn-sm btn-outline-primary"
          title="Add Property"
          @click="addProperty"
        >
          <i class="fa-solid fa-plus"></i>
          Add Property
        </button>
        &nbsp;
        <button
          class="btn btn-sm btn-outline-secondary"
          title="Rename Table"
          v-if="false"
        >
          <i class="fa-solid fa-pencil"></i>
          Rename Table
        </button>
      </div>
      <br />

      <table
        class="table table-sm table-bordered schema_side-panel__add-table"
        v-if="schema"
      >
        <thead>
          <tr v-if="currProperties.length > 0">
            <th scope="col">Name</th>
            <th scope="col">Type</th>
            <th scope="col" class="schema_side-panel__add-table-buttons-container">
              Actions
            </th>
          </tr>
          <tr v-else>
            <th scope="col">There is no property in this table</th>
          </tr>
        </thead>

        <tbody v-if="currProperties.length > 0">
          <tr v-for="property in currProperties" :key="property.id">
            <SchemaPropertyEditCell
              :property="property"
              :colspan="3"
              :isNewProperty="true"
              :isNewTable="true"
              :ref="'editCell-' + property.id"
              v-if="property.isEditing"
              @save="(...args) => saveProperty(property.id, ...args)"
              @cancel="cancelEditMode(property.id)"
            />
            <td v-if="!property.isEditing">
              {{ property.name }}
              <span v-if="property.isPrimaryKey" class="badge bg-primary">PK</span>
            </td>
            <td v-if="!property.isEditing">
              {{ property.type }}
            </td>
            <td
              class="schema_side-panel__add-table-buttons-container"
              v-if="!property.isEditing"
            >
              <button
                type="button"
                class="btn btn-sm btn-outline-primary"
                title="Edit"
                @click="enterEditMode(property.id)"
              >
                <i class="fa-solid fa-pencil"></i>
              </button>
              &nbsp;
              <button
                type="button"
                class="btn btn-sm btn-outline-danger"
                title="Drop"
                @click="dropProperty(property.id)"
              >
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
import { DATA_TYPES, PLACEHOLDER } from "../../utils/Constants";
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
    originalLabel: "",
    currProperties: [],
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
      this.$emit("updateLabel", this.currLabel);
    }
  },
  computed: {
    ...mapStores(useSettingsStore),
    source() {
      if (!this.schema || !this.label || this.isNode) {
        return null;
      }
      return this.schema.relTables.find(t => t.name === this.label).src;
    },

    destination() {
      if (!this.schema || !this.label || this.isNode) {
        return null;
      }
      return this.schema.relTables.find(t => t.name === this.label).dst;
    },
  },
  methods: {
    getColor(label) {
      if(!label) {
        return this.settingsStore.colorForLabel(PLACEHOLDER)
      }
      return this.settingsStore.colorForLabel(label);
    },
    addProperty() {
      const newProperty = {...this.defaultNewProperty};
      newProperty.id = uuidv4();
      this.currProperties.unshift(newProperty);
    },
    saveTable() {
      for (let i = 0; i < this.currProperties.length; ++i) {
        if (this.currProperties[i].isEditing) {
          this.$refs["editCell-" + this.currProperties[i].id][0].save();
        }
      }
      this.$nextTick(() => {
        this.$emit("save", this.currLabel, this.currProperties);
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
           if(this.currProperties[j].isEditing) {
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

  },
  mounted() {
    this.currLabel = this.label;
    const primaryKey = {...this.defaultPrimaryKey};
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
