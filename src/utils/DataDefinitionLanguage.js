class DataDefinitionLanguage {
  _escapeName(name) {
    if (name.includes(" ")) {
      return `\`${name}\``;
    }
    return name;
  }

  _fixColumnType(columnType) {
    if (columnType === "BOOL") {
      return "BOOLEAN";
    }
    if (columnType === "BLOB") {
      return "BYTEA";
    }
    if (columnType.startsWith("MAP")) {
      return columnType.replace(":", ",");
    }
    return columnType;
  }

  dropTable(tableName) {
    tableName = this._escapeName(tableName);
    return `DROP TABLE ${tableName};`;
  }
  dropProperty(tableName, columnName) {
    tableName = this._escapeName(tableName);
    return `ALTER TABLE ${tableName} DROP ${columnName};`;
  }

  renameProperty(tableName, columnName, newColumnName) {
    tableName = this._escapeName(tableName);
    columnName = this._escapeName(columnName);
    newColumnName = this._escapeName(newColumnName);
    return `ALTER TABLE ${tableName} RENAME ${columnName} TO ${newColumnName};`;
  }

  addProperty(tableName, columnName, columnType, defaultValue) {
    tableName = this._escapeName(tableName);
    columnName = this._escapeName(columnName);
    columnType = this._fixColumnType(columnType);
    let result = `ALTER TABLE ${tableName} ADD ${columnName} ${columnType}`;
    if (defaultValue) {
      result += ` DEFAULT ${defaultValue}`;
    }
    result += ";";
    return result;
  }

  addNodeTable(tableName, properties) {
    tableName = this._escapeName(tableName);
    let result = `CREATE NODE TABLE ${tableName} (\n`;
    let primaryKey = null;
    properties.forEach((property) => {
      const columnName = this._escapeName(property.name);
      const columnType = this._fixColumnType(property.type);
      let columnString = `  ${columnName} ${columnType},\n`;
      result += columnString;
      if (property.isPrimaryKey) {
        primaryKey = columnName;
      }
    });
    if (primaryKey) {
      result += `  PRIMARY KEY (${primaryKey})\n`;
    } else {
      result = result.slice(0, -2);
      result += "\n";
    }
    result += ");";
    return result;
  }
}

const ddl = new DataDefinitionLanguage();
export default ddl;
