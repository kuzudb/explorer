const database = require("./Database");

class DataImportUtils {
  async validateImport(config) {
    let success = true;
    const errors = [];
    const pushError = (error) => {
      if (!error) {
        return;
      }
      errors.push(error);
      success = false;
    }
    const schema = await database.getSchema();
    if (config.length === 0) {
      pushError("No files to import");
    }
    for (const table of config) {
      if (table.extension === 'csv' && !table.csvFormat) {
        pushError("Missing CSV format for file ${table.name}");
      }
      let error;
      error = this.validateTableName(table, config, schema);
      pushError(error);
      error = this.validatePrimaryKey(table);
      pushError(error);
      error = this.validateFromKey(table);
      pushError(error);
      error = this.validateToKey(table);
      pushError(error);
      error = this.validateFromToKeysDifferent(table);
      pushError(error);
      error = this.validateTableFromTo(table, config, schema, true);
      pushError(error);
      error = this.validateTableFromTo(table, config, schema, false);
      pushError(error);
    }
    return { success, errors };
  }

  getTableName(table) {
    if (table.tableName) {
      return table.tableName;
    }
    return table.name;
  }

  validateTableFromTo(table, config, schema, isFromKey) {
    const key = isFromKey ? 'from' : 'to';
    if (!table.isNewTable) {
      return null;
    }
    if (table.type !== 'rel') {
      return null;
    }
    const targetTable = table[key];
    if(!targetTable) {
      return `Relationship table ${this.getTableName(table)} is missing a ${key} table`;
    }
    if(targetTable.isExistingTable) {
      const found = schema.nodeTables.find((nodeTable) => nodeTable.name === targetTable.key);
      if (!found) {
        return `Relationship table ${this.getTableName(table)}'s ${key} table ${targetTable.key} does not exist in the schema`; 
      }
    } else {
      const found = config.find((t) => t.id === targetTable.key);
      if (!found) {
        return `Relationship table ${this.getTableName(table)}'s ${key} table does not exist in the configuration`;
      }
    }
    return null;
  }

  validateTableName(table, config, schema) {
    if (!table.tableName) {
      return `Missing table name for file ${table.name}`;
    }
    if (!table.isNewTable) {
      if (table.type === "node") {
        const nodeTable = schema.nodeTables.find((nodeTable) => nodeTable.name === table.tableName);
        if (!nodeTable) {
          return `Table ${table.tableName} is imported as an existing node table, but it does not exist in the schema`;
        }
      }
      if (table.type === "rel") {
        const relTable = schema.relTables.find((relTable) => relTable.name === table.tableName);
        if (!relTable) {
          return `Table ${table.tableName} is imported as an existing relationship table, but it does not exist in the schema`;
        }
      }
      return null;
    }
    let found = schema.nodeTables.find((nodeTable) => nodeTable.name === table.tableName);
    const foundErrorString = `Table ${table.tableName} is imported as a new table, but it already exists in the schema`;
    if (found) {
      return foundErrorString;
    }
    found = schema.relTables.find((relTable) => relTable.name === table.tableName);
    if (found) {
      return foundErrorString;
    }
    found = config.find((t) => t.tableName === table.tableName);
    if (found && found !== table) {
      return `Table ${table.tableName} is duplicated in the configuration`;
    }
    return null;
  }

  validatePrimaryKey(table) {
    if (!table.isNewTable) {
      return null;
    }
    if (table.type !== 'node') {
      return null;
    }
    const numberOfPrimaryKeys = table.columns.filter((column) => column.isPrimaryKey).length;
    if (numberOfPrimaryKeys === 0) {
      return `Table ${this.getTableName(table)} is missing a primary key`;
    }
    if (numberOfPrimaryKeys > 1) {
      return `Table ${this.getTableName(table)} has more than one primary key`;
    }
    return null;
  }

  validateFromKey(table) {
    if (!table.isNewTable) {
      return null;
    }
    if (table.type !== 'rel') {
      return null;
    }
    const numberOfFromKeys = table.columns.filter((column) => column.isFromKey).length;
    if (numberOfFromKeys === 0) {
      return `Relationship table ${this.getTableName(table)} is missing a from key`;
    }
    if (numberOfFromKeys > 1) {
      return `Relationship table ${this.getTableName(table)} has more than one from key`;
    }
    return null;
  }

  validateToKey(table) {
    if (!table.isNewTable) {
      return null;
    }
    if (table.type !== 'rel') {
      return null;
    }
    const numberOfToKeys = table.columns.filter((column) => column.isToKey).length;
    if (numberOfToKeys === 0) {
      return `Relationship table ${this.getTableName(table)} is missing a to key`;
    }
    if (numberOfToKeys > 1) {
      return `Relationship table ${this.getTableName(table)} has more than one to key`;
    }
    return null;
  }

  validateFromToKeysDifferent(table) {
    if (!table.isNewTable) {
      return null;
    }
    if (table.type !== 'rel') {
      return null;
    }
    const fromKey = table.columns.find((column) => column.isFromKey);
    const toKey = table.columns.find((column) => column.isToKey);
    if (fromKey === toKey && fromKey) {
      return `Relationship table ${this.getTableName(table)} has the same from and to key`;
    }
    return null;
  }
}

module.exports = new DataImportUtils();
