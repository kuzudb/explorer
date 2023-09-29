class DataDefinitionLanguage {
  dropTable(tableName) {
    return `DROP TABLE ${tableName};`;
  }
}

const ddl = new DataDefinitionLanguage();
export default ddl;
