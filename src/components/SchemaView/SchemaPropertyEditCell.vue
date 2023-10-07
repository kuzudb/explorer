<template>
  <td :colspan="colspan">
    <div v-if="currProperty">
      <div class="input-group flex-nowrap">
        <span class="input-group-text">Name</span>
        <input type="text" class="form-control" v-model="currProperty.name" />
      </div>

      <div v-if="currProperty && isNewProperty">
        <br />
        <div class="input-group flex-nowrap">
          <span class="input-group-text">Type</span>
          <select class="form-select" v-model="currProperty.type" v-if="isNewTable">
            <option v-for="dataType in dataTypes" :value="dataType" :key="dataType">
              {{ dataType }}
            </option>
          </select>

          <select class="form-select" v-model="currProperty.type" v-else>
            <option
              v-for="dataType in supportedTypesForAlter"
              :value="dataType"
              :key="dataType"
            >
              {{ dataType }}
            </option>
          </select>
        </div>

        <div v-if="isList">
          <br />
          <div class="input-group flex-nowrap">
            <span class="input-group-text">Member Type</span>
            <select class="form-select" v-model="currProperty.memberType">
              <option v-for="dataType in basicTypes" :value="dataType" :key="dataType">
                {{ dataType }}
              </option>
            </select>
          </div>
        </div>
      </div>

      <div v-if="isFixedList">
        <br />
        <div class="input-group flex-nowrap">
          <span class="input-group-text">Size</span>
          <input type="number" class="form-control" v-model="currProperty.size" />
        </div>
      </div>

      <div v-if="isVarList">
        <br />
        <div class="input-group flex-nowrap">
          <span class="input-group-text">Dimension</span>
          <input type="number" class="form-control" v-model="currProperty.dim" />
        </div>
      </div>

      <div v-if="isStruct">
        <br />
        <div class="input-group">
          <span class="input-group-text">Fields</span>
          <textarea class="form-control" v-model="currProperty.fields" rows="3" />
        </div>
      </div>

      <div v-if="isNewProperty && !isNewTable">
        <br />
        <div class="input-group flex-nowrap">
          <span class="input-group-text">Default Value</span>
          <input type="text" class="form-control" v-model="defaultValue" />
        </div>
      </div>
    </div>

    <div>
      <button
        type="button"
        class="btn btn-sm btn-outline-primary"
        title="Save"
        @click="handleSave"
      >
        <i class="fa-solid fa-check"></i>
        Save
      </button>
      &nbsp;
      <button
        type="button"
        class="btn btn-sm btn-outline-danger"
        title="Cancel"
        @click="$emit('cancel')"
      >
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
    const basicTypes = dataTypes.filter(t => ![DATA_TYPES.MAP, DATA_TYPES.STRUCT, DATA_TYPES.UNION, DATA_TYPES.FIXED_LIST, DATA_TYPES.VAR_LIST, DATA_TYPES.SERIAL].includes(t));
    const supportedTypesForAlter = dataTypes.filter(t => ![DATA_TYPES.SERIAL, DATA_TYPES.UNION, DATA_TYPES.MAP, DATA_TYPES.FIXED_LIST].includes(t));
    return {
      dataTypes,
      basicTypes,
      supportedTypesForAlter,
      currProperty: null,
      defaultValue: ""
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
    'currProperty.type': {
      handler: function (val) {
        // Add default value for new property
        if (val === DATA_TYPES.FIXED_LIST) {
          this.currProperty.size = this.currProperty.size || 4;
          this.currProperty.memberType = this.currProperty.memberType || DATA_TYPES.INT64;
        }
        if (val === DATA_TYPES.VAR_LIST) {
          this.currProperty.dim = this.currProperty.dim || 1;
          this.currProperty.memberType = this.currProperty.memberType || DATA_TYPES.INT64;
        }
        if (val === DATA_TYPES.MAP) {
          this.currProperty.keyType = this.currProperty.keyType || DATA_TYPES.STRING;
          this.currProperty.valueType = this.currProperty.valueType || DATA_TYPES.INT64;
        }
        if (val === DATA_TYPES.STRUCT) {
          this.currProperty.fields = this.currProperty.fields || 'a INT64, b STRING';
        }
        if (val === DATA_TYPES.UNION) {
          this.currProperty.fields = this.currProperty.fields || '';
        }
      },
      immediate: true,
    },

  },
  computed: {
    isList() {
      return this.currProperty.type && [DATA_TYPES.FIXED_LIST, DATA_TYPES.VAR_LIST].includes(this.currProperty.type);
    },
    isFixedList() {
      return this.currProperty.type && this.currProperty.type === DATA_TYPES.FIXED_LIST;
    },
    isVarList() {
      return this.currProperty.type && this.currProperty.type === DATA_TYPES.VAR_LIST;
    },
    isStruct() {
      return this.currProperty.type && this.currProperty.type === DATA_TYPES.STRUCT;
    },
  },
  methods: {
    parseType(type) {
      // List
      if (type.includes('[') && type.includes(']')) {
        let memberType;
        for (const t of this.dataTypes) {
          if (type.startsWith(t)) {
            memberType = t;
            break;
          }
        }
        let listSize = type.match(/\[(\d+)\]/);
        listSize = listSize && listSize.length > 1 && listSize[1] ? listSize[1] : null;
        if (listSize) {
          // FIXED_LIST
          return {
            type: DATA_TYPES.FIXED_LIST,
            size: parseInt(listSize),
            memberType,
          };
        }
        // VAR_LIST
        const dim = type.split('[]').length - 1;
        return {
          type: DATA_TYPES.VAR_LIST,
          dim,
          memberType,
        };
      }

      // Other complex types
      if (type.includes('(') && type.includes(')')) {
        const result = this.dataTypes.find(t => type.startsWith(t));
        switch (result) {
          case DATA_TYPES.MAP: {
            let typeText = type.split('(')[1];
            typeText = typeText.split(')')[0];
            typeText = typeText.split(':');
            const keyType = typeText[0].trim();
            const valueType = typeText[1].trim();
            return {
              type: DATA_TYPES.MAP,
              keyType,
              valueType,
            };
          }
          case DATA_TYPES.STRUCT: {
            let typeText = type.split('(')[1];
            typeText = typeText.split(')')[0];
            return {
              type: DATA_TYPES.STRUCT,
              fields: typeText.trim()
            };
          }
          case DATA_TYPES.UNION: {
            let typeText = type.split('(')[1];
            typeText = typeText.split(')')[0];
            return {
              type: DATA_TYPES.UNION,
              fields: typeText.trim()
            };
          }
        }
      }
      // Simple types
      return {
        type,
      };
    },

    stringifyType(type) {
      switch (type.type) {
        case DATA_TYPES.FIXED_LIST:
          return `${type.memberType}[${type.size}]`;
        case DATA_TYPES.VAR_LIST: {
          let result = type.memberType;
          for (let i = 0; i < type.dim; i++) {
            result += '[]';
          }
          return result;
        }
        case DATA_TYPES.MAP:
          return `${DATA_TYPES.MAP}(${type.keyType}:${type.valueType})`;
        case DATA_TYPES.STRUCT:
          return `${DATA_TYPES.STRUCT}(${type.fields})`;
        case DATA_TYPES.UNION:
          return `${DATA_TYPES.UNION}(${type.fields})`;
        default:
          return type.type;
      }
    },

    unpackProperty(property) {
      const result = this.parseType(property.type);
      result.name = property.name;
      if (property.isPrimaryKey) {
        result.isPrimaryKey = true;
      }
      return result;
    },

    packProperty(property) {
      const result = {
        name: property.name,
        type: this.stringifyType(property),
      };
      if (property.isPrimaryKey) {
        result.isPrimaryKey = true;
      }
      return result;
    },

    getDefaultValue() {
      if (this.defaultValue.length === 0) {
        return null;
      }
      const type = this.currProperty.type;
      if (type === DATA_TYPES.STRING) {
        return `"${this.defaultValue}"`;
      }
      if (type === DATA_TYPES.DATE) {
        return `date('${this.defaultValue}')`;
      }
      if (type === DATA_TYPES.TIMESTAMP) {
        return `timestamp('${this.defaultValue}')`;
      }
      if (type === DATA_TYPES.INTERVAL) {
        return `interval('${this.defaultValue}')`;
      }
      if (type === DATA_TYPES.BLOB) {
        return `blob('${this.defaultValue}')`;
      }
      if (type === DATA_TYPES.FLOAT) {
        return `to_float(${this.defaultValue})`;
      }
      if (type === DATA_TYPES.DOUBLE) {
        return `to_double(${this.defaultValue})`;
      }
      return this.defaultValue;
    },

    handleSave() {
      this.$emit('save', this.property, this.packProperty(this.currProperty), this.getDefaultValue());
    }
  },
  mounted() {
    this.currProperty = this.unpackProperty(this.property);
  },
}
</script>

<style lang="scss" scoped>
td {
  > div {
    padding: 8px;
  }
}

textarea.form-control {
  font-family: monospace;
}
</style>
