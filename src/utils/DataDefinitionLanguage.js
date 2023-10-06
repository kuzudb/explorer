class DataDefinitionLanguage {
  dropTable(tableName) {
    return `DROP TABLE ${tableName};`;
  }
  dropProperty(tableName, columnName) {
    return `ALTER TABLE ${tableName} DROP ${columnName};`;
  }

  renameProperty(tableName, columnName, newColumnName) {
    if (columnName.includes(" ")) {
      columnName = `\`${columnName}\``;
    }
    if (newColumnName.includes(" ")) {
      newColumnName = `\`${newColumnName}\``;
    }
    return `ALTER TABLE ${tableName} RENAME ${columnName} TO ${newColumnName};`;
  }

  addProperty(tableName, columnName, columnType, defaultValue) {
    if (columnType === "BOOL") {
      // Temporary fix for inconsistent naming of boolean type
      columnType = "BOOLEAN";
    }
    if (columnName.includes(" ")) {
      columnName = `\`${columnName}\``;
    }
    let result = `ALTER TABLE ${tableName} ADD ${columnName} ${columnType}`;
    if (defaultValue) {
      result += ` DEFAULT ${defaultValue}`;
    }
    result += ";";
    return result;
  }
}

const ddl = new DataDefinitionLanguage();
export default ddl;
