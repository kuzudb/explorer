<template>
  <td :colspan="colspan">
    <div v-if="currProperty">
      <div class="input-group flex-nowrap">
        <span class="input-group-text">Name</span>
        <input type="text" class="form-control" v-model="currProperty.name">
      </div>

      <div>
        <br>
        <div class="input-group flex-nowrap">
          <span class="input-group-text">Type</span>
          <select class="form-select" v-model="currProperty.type">
            <option v-for="dataType in dataTypes" :value="dataType" :key="dataType">
              {{ dataType }}
            </option>
          </select>
        </div>
      </div>
    </div>
    <div>
      <button type="button" class="btn btn-sm btn-outline-primary" title="Save"
        @click="$emit('save', property, currProperty)">
        <i class="fa-solid fa-check"></i>
        Save
      </button>
      &nbsp;
      <button type="button" class="btn btn-sm btn-outline-danger" title="Cancel" @click="$emit('cancel')">
        <i class="fa-solid fa-xmark"></i>
        Cancel
      </button>
    </div>
  </td>
</template>

<script lang="js">
import { DATA_TYPES, INTERNAL_DATA_TYPES } from '../../utils/Constants';

export default {
  name: "SchemaPropertyEditCell",
  data: () => {
    const dataTypes = Object.keys(DATA_TYPES).filter(k => !INTERNAL_DATA_TYPES.includes(k));
    return {
      dataTypes,
      currProperty: null,
    }
  },
  props: {
    property: {
      type: Object,
      required: true,
    },
    colspan: {
      type: Number,
      required: true,
      default: 1,
    },
    isNewProperty: {
      type: Boolean,
      required: true,
      default: false,
    },
    isNewTable: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  watch: {

  },
  computed: {

  },
  mounted() {
    this.currProperty = JSON.parse(JSON.stringify(this.property));
  },
}


</script>

<style lang="scss" scoped>
td {
  >div {
    padding: 8px;
  }
}
</style>