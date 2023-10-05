class DataDefinitionLanguage {
  dropTable(tableName) {
    return `DROP TABLE ${tableName};`;
  }
  dropProperty(tableName, columnName) {
    return `ALTER TABLE ${tableName} DROP ${columnName};`;
  }
}

const ddl = new DataDefinitionLanguage();
export default ddl;
