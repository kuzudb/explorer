import Moment from "moment";
import { DATA_TYPES, IRI_PROPERTY_NAME } from "./Constants";

class ValueFormatter {
  constructor() {
    // A cache for complex data types such as LIST and STRUCT
    this.parsedComplexTypes = {};
  }

  filterAndBeautifyProperties(rawValue, schema, isRecursiveRel = false) {
    const properties = [];
    if (isRecursiveRel) {
      properties.push({
        name: "_label",
        isPrimaryKey: false,
        value: rawValue._label,
      });
    }

    const label = rawValue._label;
    const expectedProperties = (
      rawValue._src && rawValue._dst ? schema.relTables : schema.nodeTables
    ).find((table) => table.name === label).properties;
    if (!expectedProperties) {
      return [];
    }
    expectedProperties.forEach((property) => {
      let value = rawValue[property.name];
      if (value === null || value === undefined) {
        value = "NULL";
      } else {
        value = this.beautifyValue(value, property.type);
      }
      properties.push({
        name: property.name,
        isPrimaryKey: property.isPrimaryKey,
        type: property.type,
        value,
      });
    });
    return properties;
  }

  getChildTypeForList(type) {
    if (this.parsedComplexTypes[type]) {
      return this.parsedComplexTypes[type];
    }
    let extractedType = type.substring(0, type.indexOf("["));
    extractedType = extractedType.trim();
    this.parsedComplexTypes[type] = extractedType;
    return extractedType;
  }

  beautifyValue(value, type, propName = "") {
    if (type === DATA_TYPES.STRING && propName === IRI_PROPERTY_NAME) {
      if (value.startsWith("http")) {
        // Extract the last part of the IRI as the label
        const parts = value.split("/");
        for (let i = parts.length - 1; i >= 0; --i) {
          const currentPart = parts[i].trim();
          if (currentPart.length > 0) {
            return currentPart;
          }
        }
        return value;
      }
    }
    if (type === DATA_TYPES.DATE) {
      return Moment(value).format("YYYY-MM-DD");
    } else if (type === DATA_TYPES.TIMESTAMP) {
      const moment = Moment(value);
      moment.utc();
      return moment.format();
    } else if (type === DATA_TYPES.FLOAT || type === DATA_TYPES.DOUBLE) {
      return Number(value).toFixed(2);
    } else {
      [DATA_TYPES.FIXED_LIST, DATA_TYPES.VAR_LIST].forEach((dataType) => {
        if (type.startsWith(dataType)) {
          // TODO: beautify list recursively
        }
      });
      [DATA_TYPES.STRUCT, DATA_TYPES.MAP, DATA_TYPES.UNION].forEach(
        (dataType) => {
          if (type.startsWith(dataType)) {
            // TODO: beautify struct recursively
          }
        }
      );
      // Check if the value is an array or an object
      if (Array.isArray(value) || typeof value === "object") {
        return JSON.stringify(value);
      }
      return value;
    }
  }

  beautifyRecursiveRelValue(value, type) {
    return {
      _nodes: value._nodes.map((node) =>
        this.filterAndBeautifyProperties({ ...node }, type, true)
      ),
      _rels: value._rels.map((rel) =>
        this.filterAndBeautifyProperties({ ...rel }, type, true)
      ),
    };
  }
}

const valueFormatter = new ValueFormatter();
export default valueFormatter;
