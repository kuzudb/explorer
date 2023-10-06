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
}

const ddl = new DataDefinitionLanguage();
export default ddl;
