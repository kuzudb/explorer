<template>
  <div>
    <div>
      <div class="d-flex justify-content-between">
        <div class="input-group d-flex">
          <span class="input-group-text">Name</span>
          <input
            v-model="currLabel"
            type="text"
            class="form-control"
            :style="{
              backgroundColor: ` ${getBackgroundColorForEditingTable()} !important`,
              color: isNode ? '#ffffff' : '#000000',
            }"
          >
        </div>
        <div
          v-if="isEditingLabel"
          class="d-flex"
        >
          &nbsp;
          <button
            class="btn btn-sm btn-outline-primary"
            @click="renameTable"
          >
            <i class="fa-solid fa-check" />
          </button>
          &nbsp;
          <button
            class="btn btn-sm btn-outline-danger"
            @click="cancelTableRename"
          >
            <i class="fa-solid fa-times" />
          </button>
        </div>
      </div>
      <hr>

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
          <i class="fa-solid fa-arrow-right" />
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
        <br>
      </div>

      <div class="schema_side-panel__edit-table-actions-container">
        <button
          class="btn btn-sm btn-outline-primary"
          title="Cancel Edit"
          @click="goBack"
        >
          <i class="fa-solid fa-long-arrow-left" />
          Cancel Edit
        </button>
        &nbsp;
        <button
          class="btn btn-sm btn-outline-primary"
          title="Add Property"
          @click="enterAddMode"
        >
          <i class="fa-solid fa-plus" />
          Property
        </button>
        &nbsp;
        <button
          class="btn btn-sm btn-outline-danger"
          title="Drop Table"
          @click="$emit('dropTable', label)"
        >
          <i class="fa-solid fa-trash" />
          Drop Table
        </button>
        &nbsp;
      </div>
      <br>

      <table
        v-if="schema"
        class="table table-sm table-bordered schema_side-panel__edit-table"
      >
        <thead>
          <tr v-if="tableProperties.length > 0 || addingProperty">
            <th scope="col">
              Name
            </th>
            <th scope="col">
              Type
            </th>
            <th
              scope="col"
              class="schema_side-panel__edit-table-buttons-container"
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
        <tbody v-if="tableProperties.length > 0 || addingProperty">
          <tr>
            <SchemaPropertyEditCell
              v-if="addingProperty"
              :property="defaultNewProperty"
              :colspan="3"
              :is-new-property="true"
              :is-new-table="false"
              :is-node-table="isNode"
              @cancel="cancelAddMode"
              @save="addProperty"
            />
          </tr>
          <tr
            v-for="(property, i) in tableProperties"
            :key="property.name"
          >
            <td
              v-if="i !== editingPropertyIndex"
              scope="row"
            >
              {{ property.name }}
              <span
                v-if="property.isPrimaryKey"
                class="badge bg-primary"
              > PK </span>
            </td>
            <td v-if="i !== editingPropertyIndex">
              {{ property.type }}
            </td>
            <td
              v-if="i !== editingPropertyIndex"
              class="schema_side-panel__edit-table-buttons-container"
            >
              <button
                type="button"
                class="btn btn-sm btn-outline-primary"
                title="Edit"
                @click="enterEditMode(i)"
              >
                <i class="fa-solid fa-pencil" />
              </button>
              &nbsp;
              <button
                type="button"
                class="btn btn-sm btn-outline-danger"
                title="Drop"
                @click="dropProperty(property.name)"
              >
                <i class="fa-solid fa-trash" />
              </button>
            </td>
            <SchemaPropertyEditCell
              v-if="i === editingPropertyIndex"
              :property="property"
              :colspan="3"
              :is-new-property="false"
              :is-new-table="false"
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
import { DATA_TYPES, PLACEHOLDER_NODE_TABLE, PLACEHOLDER_REL_TABLE } from "../../utils/Constants";
export default {
  name: "SchemaSidebarEditView",
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
  emits: ["dropTable", "renameTable", "renameProperty", "addProperty", "dropProperty", "back", "setPlaceholder",
    "setPlaceholderLabel", "unsetPlaceholder"],
  data: () => ({
    editingPropertyIndex: -1,
    addingProperty: false,
    defaultNewProperty: {
      name: "",
      type: DATA_TYPES.INT64,
    },
    currLabel: "",
    currLabelInputDebounce: null,
    isEditingLabel: false,
    oldLabel: "",
  }),
  computed: {
    ...mapStores(useSettingsStore),
    source() {
      if (this.isEditingLabel) {
        return this.schema.relTables.find(t => t.isPlaceholder).src;
      }
      if (!this.schema || !this.label || this.isNode) {
        return null;
      }
      return this.schema.relTables.find(t => t.name === this.label).src;
    },

    destination() {
      if (this.isEditingLabel) {
        return this.schema.relTables.find(t => t.isPlaceholder).dst;
      }
      if (!this.schema || !this.label || this.isNode) {
        return null;
      }
      return this.schema.relTables.find(t => t.name === this.label).dst;
    },

    relGroup() {
      if (!this.schema || !this.label || this.isNode) {
        return null;
      }
      return this.schema.relTables.find(t => t.name === this.label).group;
    },
    tableProperties() {
      if (this.isEditingLabel) {
        if (this.isNode) {
          return this.schema.nodeTables.find(t => t.isPlaceholder).properties;
        }
        return this.schema.relTables.find(t => t.isPlaceholder).properties;
      }
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
  watch: {
    currLabel(newLabel) {
      clearTimeout(this.currLabelInputDebounce);
      this.currLabelInputDebounce = setTimeout(() => {
        if (!this.isEditingLabel && newLabel !== this.label) {
          this.isEditingLabel = true;
          this.oldLabel = this.label;
          this.$emit("setPlaceholder", this.label);
        }
        if (this.isEditingLabel) {
          if (newLabel === this.oldLabel) {
            return this.unsetPlaceholder();
          }
          else {
            this.$nextTick(() => {
              this.$emit("setPlaceholderLabel", {
                newLabel,
                isNode: this.isNode,
              });
            });
          }
        }
      }, 300);
    },
  },
  mounted() {
    this.currLabel = this.label;
  },
  methods: {
    getColor(label) {
      return this.settingsStore.colorForLabel(label);
    },
    getBackgroundColorForEditingTable() {
      if (!this.isEditingLabel) {
        return this.getColor(this.label);
      }
      if (this.isNode) {
        return this.getColor(PLACEHOLDER_NODE_TABLE);
      }
      return this.getColor(PLACEHOLDER_REL_TABLE);
    },
    renameTable() {
      this.$emit("renameTable", {
        oldLabel: this.oldLabel,
        newLabel: this.currLabel,
        isNode: this.isNode,
      });
    },
    unsetPlaceholder() {
      this.$emit("unsetPlaceholder", { originalLabel: this.oldLabel, isNode: this.isNode });
      this.oldLabel = "";
      this.isEditingLabel = false;
    },
    cancelTableRename() {
      if (!this.isEditingLabel) {
        return;
      }
      this.currLabel = this.oldLabel;
    },
    finishTableRename() {
      this.currLabel = this.label;
      this.isEditingLabel = false;
      this.oldLabel = "";
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
    goBack() {
      if (this.isEditingLabel) {
        this.unsetPlaceholder();
      }
      this.$nextTick(() => {
        this.$emit("back");
      });

    },
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
