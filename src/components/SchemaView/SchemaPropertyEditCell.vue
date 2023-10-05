<template>
  <td :colspan="colspan">


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
    isNew: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  computed: {

  }
}


</script>

<style lang="scss" scoped></style>