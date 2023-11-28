<template>
  <div>
    <div>
      <h5>
        <button
          type="button"
          class="btn btn-sm btn-outline-primary"
          title="Back"
          @click="$emit('back')"
        >
          <i class="fa-solid fa-long-arrow-left"></i>
        </button>
        <input
          type="text"
          class="from-control"
          v-model="currLabel"
          :style="{
            backgroundColor: ` ${getColor(label)} !important`,
            color: isNode ? '#ffffff' : '#000000',
          }"
        />
        <button v-if="currLabel!==label" @click="saveNewTableName" class="btn btn-sm btn-outline-primary">
          <i class="fa-solid fa-check"></i>
        </button>
        <button v-if="currLabel!==label" @click="discardNewTableName" class="btn btn-sm btn-outline-danger">
          <i class="fa-solid fa-times"></i>
        </button>
      </h5>
      <hr />

      <div v-if="!isNode">
        <h6 v-if="relGroup">
          <b>{{ relGroup }} </b> group
        </h6>
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

      <div class="schema_side-panel__edit-table-actions-container">
        <button
          class="btn btn-sm btn-outline-primary"
          title="Add Property"
          @click="enterAddMode"
        >
          <i class="fa-solid fa-plus"></i>
          Property
        </button>
        &nbsp;
        <button
          class="btn btn-sm btn-outline-danger"
          :disabled="!!relGroup"
          title="Drop Table"
          @click="$emit('dropTable', label)"
        >
          <i class="fa-solid fa-trash"></i>
          Drop Table
        </button>
        &nbsp;
      </div>
      <br />

      <table
        class="table table-sm table-bordered schema_side-panel__edit-table"
        v-if="schema"
      >
        <thead>
          <tr v-if="tableProperties.length > 0 || addingProperty">
            <th scope="col">Name</th>
            <th scope="col">Type</th>
            <th scope="col" class="schema_side-panel__edit-table-buttons-container">
              Actions
            </th>
          </tr>
          <tr v-else>
            <th scope="col">There are no properties in this table</th>
          </tr>
        </thead>
        <tbody v-if="tableProperties.length > 0 || addingProperty">
          <tr>
            <SchemaPropertyEditCell
              :property="defaultNewProperty"
              :colspan="3"
              :isNewProperty="true"
              :isNewTable="false"
              :isNodeTable="isNode"
              @cancel="cancelAddMode"
              @save="addProperty"
              v-if="addingProperty"
            />
          </tr>
          <tr v-for="(property, i) in tableProperties" :key="property.name">
            <td scope="row" v-if="i !== editingPropertyIndex">
              {{ property.name }}
              <span class="badge bg-primary" v-if="property.isPrimaryKey"> PK </span>
            </td>
            <td v-if="i !== editingPropertyIndex">
              {{ property.type }}
            </td>
            <td
              class="schema_side-panel__edit-table-buttons-container"
              v-if="i !== editingPropertyIndex"
            >
              <button
                type="button"
                class="btn btn-sm btn-outline-primary"
                title="Edit"
                @click="enterEditMode(i)"
              >
                <i class="fa-solid fa-pencil"></i>
              </button>
              &nbsp;
              <button
                type="button"
                class="btn btn-sm btn-outline-danger"
                title="Drop"
                @click="dropProperty(property.name)"
              >
                <i class="fa-solid fa-trash"></i>
              </button>
            </td>
            <SchemaPropertyEditCell
              v-if="i === editingPropertyIndex"
              :property="property"
              :colspan="3"
              :isNewProperty="false"
              :isNewTable="false"
              @cancel="cancelEditMode"
              @save="renameProperty"
            >
              {{ property.name }}
            </SchemaPropertyEditCell>
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
import { DATA_TYPES } from "../../utils/Constants";
export default {
  name: "SchemaSidebarEditView",
  components: {
    SchemaPropertyEditCell,
  },
  data: () => ({
    editingPropertyIndex: -1,
    addingProperty: false,
    defaultNewProperty: {
      name: "",
      type: DATA_TYPES.INT64,
    },
    currLabel: "",
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
          this.$emit("renameNodeTable", this.label, this.currLabel);
        } else if (!this.isRelGroup) {
          this.$emit("renameRelTable", this.label, this.currLabel);
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

    relGroup() {
      if (!this.schema || !this.label || this.isNode) {
        return false;
      }
      return this.schema.relTables.find(t => t.name === this.label).group;
    },

    tableProperties() {
      if (!this.schema || !this.label) {
        return [];
      }
      if (this.isNode) {
        return this.schema.nodeTables
          .find(t => t.name === this.label)
          .properties;
      } else {
        return this.schema.relTables
          .find(t => t.name === this.label)
          .properties;
      }
    },
  },
  methods: {
    getColor(label) {
      return this.settingsStore.colorForLabel(label);
    },
    saveNewTableName() {
      if (this.isNode) {
        this.$nextTick(() => {
          this.$emit("saveRenamedNodeTable", this.label, this.currLabel);
        });
      } else {
        this.$nextTick(() => {
          this.$emit("saveRenamedRelTable", this.label, this.currLabel);
        });
      }
    },
    discardNewTableName() {
      this.currLabel = this.label;
    },
    dropProperty(propertyName) {
      this.$emit("dropProperty", {
        table: this.label,
        property: propertyName,
      });
    },
    enterEditMode(index) {
      if (this.editingPropertyIndex === index) {
        return;
      }
      this.cancelAddMode();
      this.editingPropertyIndex = index;
    },
    cancelEditMode() {
      this.editingPropertyIndex = -1;
    },
    enterAddMode() {
      if (this.addingProperty) {
        return;
      }
      this.cancelEditMode();
      this.addingProperty = true;
    },
    cancelAddMode() {
      this.addingProperty = false;
    },
    renameProperty(oldProperty, newProperty) {
      const oldName = oldProperty.name;
      const newName = newProperty.name;
      this.$emit("renameProperty", {
        table: this.label,
        oldName,
        newName,
      });
    },
    addProperty(_, property, defaultValue) {
      this.$emit("addProperty", {
        table: this.label,
        property,
        defaultValue,
      });
    },
  },
  mounted() {
    this.currLabel = this.label;
  },
};
</script>

<style scoped lang="scss">
.schema_side-panel__edit-table-actions-container {
  width: 100%;
}

.schema_side-panel__edit-table-buttons-container {
  width: 90px;
  text-align: center;
  vertical-align: middle;
}
</style>
