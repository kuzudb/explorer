<template>
  <div>
    <div>
      <h5>
        <span
          class="badge bg-primary"
          :style="{
            backgroundColor: ` ${getColor(label)} !important`,
            color: isNode ? '#ffffff' : '#000000',
          }"
        >
          {{ label }}
        </span>
      </h5>
      <hr>

      <h6 v-if="rdf">
        <b>{{ rdf }} </b> RDF graph
      </h6>

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

      <table
        v-if="schema"
        class="table table-sm table-bordered schema_side-panel__overview-table"
      >
        <thead>
          <tr v-if="tableProperties.length > 0">
            <th scope="col">
              Name
            </th>
            <th scope="col">
              Type
            </th>
          </tr>
          <tr v-else>
            <th scope="col">
              There are no properties in this table
            </th>
          </tr>
        </thead>
        <tbody v-if="tableProperties.length > 0">
          <tr
            v-for="property in tableProperties"
            :key="property.name"
          >
            <td scope="row">
              {{ property.name }}
              <span
                v-if="property.isPrimaryKey"
                class="badge bg-primary"
              > PK </span>
            </td>
            <td>
              {{ property.type }}
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
  name: "SchemaSidebarReadOnlyView",
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
  computed: {
    ...mapStores(useSettingsStore),

    rdf() {
      if (!this.schema || !this.label) {
        return null;
      }
      if (this.isNode) {
        return this.schema.nodeTables.find(t => t.name === this.label).rdf;
      }
      return this.schema.relTables.find(t => t.name === this.label).rdf;
    },

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
  },
};
</script>

<style scoped lang="scss"></style>
