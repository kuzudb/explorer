<template>
  <div>
    <div>
      <h5>
        <button type="button" class="btn btn-sm btn-outline-primary" title="Back" @click="$emit('back')">
          <i class="fa-solid fa-long-arrow-left"></i>
          Back
        </button>
        &nbsp;
        Editing {{ clickedIsNode ? 'Node' : 'Rel' }} Table: &nbsp;
        <span class="badge bg-primary" :style="{
          backgroundColor: ` ${getColor(clickedLabel)} !important`,
          color: clickedIsNode ? '#ffffff' : '#000000'
        }">
          {{ clickedLabel }}
        </span>
      </h5>
      <hr>

      <div v-if="!clickedIsNode">
        <h6>
          <span class="badge bg-primary" :style="{
            backgroundColor: ` ${getColor(source)} !important`,
          }">
            {{ source }}
          </span>
          &nbsp;
          <i class="fa-solid fa-arrow-right"></i>
          &nbsp;
          <span class="badge bg-primary" :style="{
            backgroundColor: ` ${getColor(destination)} !important`,
          }">
            {{ destination }}
          </span>
        </h6>
        <br>
      </div>

      <div class="schema_side-panel__edit-table-actions-container">
        <button class="btn btn-sm btn-outline-primary" title="Add Property">
          <i class="fa-solid fa-plus"></i>
          Add Property
        </button>
        &nbsp;
        <button class="btn btn-sm btn-outline-danger" title="Drop Table" @click="$emit('dropTable', clickedLabel)">
          <i class="fa-solid fa-trash"></i>
          Drop Table
        </button>
        &nbsp;
        <button class="btn btn-sm btn-outline-secondary" title="Rename Table" v-if="false">
          <i class="fa-solid fa-pencil"></i>
          Rename Table
        </button>
      </div>
      <br>

      <table class="table table-sm table-bordered schema_side-panel__edit-table" v-if="schema">
        <thead>
          <tr v-if="tableProperties.length > 0">
            <th scope="col">Name</th>
            <th scope="col">Type</th>
            <th scope="col" class="schema_side-panel__edit-table-buttons-container">Actions</th>
          </tr>
          <tr v-else>
            <th scope="col">There is no property in this table</th>
          </tr>
        </thead>
        <tbody v-if="tableProperties.length > 0">
          <tr v-for="(property, i) in tableProperties" :key="property.name">
            <td scope="row" v-if="i !== editingPropertyIndex">
              {{ property.name }}
              <span class="badge bg-primary" v-if="property.isPrimaryKey">
                PK
              </span>
            </td>
            <td v-if="i !== editingPropertyIndex">
              {{ property.type }}
            </td>
            <td class="schema_side-panel__edit-table-buttons-container" v-if="i !== editingPropertyIndex">
              <button type="button" class="btn btn-sm btn-outline-primary" title="Edit" @click="enterEditMode(i)">
                <i class="fa-solid fa-pencil"></i>
              </button>
              &nbsp;
              <button type="button" class="btn btn-sm btn-outline-danger" title="Drop"
                @click="dropProperty(property.name)">
                <i class="fa-solid fa-trash"></i>
              </button>
            </td>
            <SchemaPropertyEditCell v-if="i === editingPropertyIndex" :property="property" :colspan="3"
              :isNewProperty="false" :isNewTable="false" @cancel="cancelEditMode" @save="renameProperty">
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
export default {
  name: "SchemaSidebarEditView",
  components: {
    SchemaPropertyEditCell,
  },
  data: () => ({
    editingPropertyIndex: -1,
  }),
  props: {
    schema: {
      type: Object,
      required: true,
    },
    clickedLabel: {
      type: String,
      required: true,
    },
    clickedIsNode: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    ...mapStores(useSettingsStore),
    source() {
      if (!this.schema || !this.clickedLabel || this.clickedIsNode) {
        return null;
      }
      return this.schema.relTables.find(t => t.name === this.clickedLabel).src;
    },

    destination() {
      if (!this.schema || !this.clickedLabel || this.clickedIsNode) {
        return null;
      }
      return this.schema.relTables.find(t => t.name === this.clickedLabel).dst;
    },

    tableProperties() {
      if (!this.schema || !this.clickedLabel) {
        return [];
      }
      if (this.clickedIsNode) {
        return this.schema.nodeTables
          .find(t => t.name === this.clickedLabel)
          .properties;
      } else {
        return this.schema.relTables
          .find(t => t.name === this.clickedLabel)
          .properties;
      }
    },
  },
  methods: {
    getColor(label) {
      return this.settingsStore.colorForLabel(label);
    },
    dropProperty(propertyName) {
      this.$emit("dropProperty", {
        table: this.clickedLabel,
        property: propertyName,
      });
    },
    enterEditMode(index) {
      this.editingPropertyIndex = index;
    },
    cancelEditMode() {
      this.editingPropertyIndex = -1;
    },
    renameProperty(oldProperty, newProperty) {
      const oldName = oldProperty.name;
      const newName = newProperty.name;
      this.$emit("renameProperty", {
        table: this.clickedLabel,
        oldName,
        newName,
      });
    }
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
  