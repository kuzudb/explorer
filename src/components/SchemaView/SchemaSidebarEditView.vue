<template>
  <div>
    <div>
      <h5>
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
          <tr v-for="property in tableProperties" :key="property.name">
            <td scope="row">
              {{ property.name }}
              <span class="badge bg-primary" v-if="property.isPrimaryKey">
                PK
              </span>
            </td>
            <td>
              {{ property.type }}
            </td>
            <td class="schema_side-panel__edit-table-buttons-container">
              <button type="button" class="btn btn-sm btn-outline-primary" title="Edit">
                <i class="fa-solid fa-pencil"></i>
              </button>
              &nbsp;
              <button type="button" class="btn btn-sm btn-outline-danger" title="Drop"
                @click="dropProperty(property.name)">
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
export default {
  name: "SchemaSidebarEditView",
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
  },
};
</script>
  
<style scoped lang="scss">
.schema_side-panel__edit-table-buttons-container {
  width: 90px;
  text-align: center;
  vertical-align: middle;
}
</style>
  