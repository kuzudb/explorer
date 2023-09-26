import Moment from "moment";
import { DATA_TYPES } from "./Constants";

class ValueFormatter {
  constructor() {
    // A cache for complex data types such as LIST and STRUCT
    this.parsedComplexTypes = {};
  }

  filterAndBeautifyProperties(rawValue, schema) {
    const properties = [];

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
      if (value) {
        properties.push({
          name: property.name,
          isPrimaryKey: property.isPrimaryKey,
          type: property.type,
          value,
        });
      }
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

  beautifyValue(value, type) {
    if (type === DATA_TYPES.DATE) {
      return Moment(value).format("YYYY-MM-DD");
    } else if (type === DATA_TYPES.TIMESTAMP) {
      return Moment(value).format("YYYY-MM-DD HH:mm:ss");
    } else if (type === DATA_TYPES.FLOAT || type === DATA_TYPES.DOUBLE) {
      return Number(value).toFixed(2);
    } else {
      [DATA_TYPES.FIXED_LIST, DATA_TYPES.VAR_LIST].forEach((dataType) => {
        if (type.startsWith(dataType)) {
          // TODO: beautify list recursively
          const childType = this.getChildTypeForList(type);
          console.log("childType", childType);
        }
      });
      [DATA_TYPES.STRUCT, DATA_TYPES.MAP, DATA_TYPES.UNION].forEach(
        (dataType) => {
          if (type.startsWith(dataType)) {
            // TODO: beautify struct recursively
          }
        }
      );
      return value;
    }
  }
}

const valueFormatter = new ValueFormatter();
export default valueFormatter;
