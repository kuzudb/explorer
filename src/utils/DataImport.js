// TODO: Refactor this to use the global Constants module after we move the
// backend to use ESM instead of CommonJS.
const IMPORT_ACTIONS = {
  CREATE: "Create Table",
  UPLOAD: "Upload File",
  COPY: "Copy Table",
};

const JOB_STATUS = {
  PENDING: "PENDING",
  PROCESSING: "PROCESSING",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
};

class DataImportUtils {
  validateImport(config, schema) {
    let success = true;
    const errors = [];
    const pushError = (error) => {
      if (!error) {
        return;
      }
      errors.push(error);
      success = false;
    }
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
      const columnErrors = this.validateColumns(table, schema);
      columnErrors.forEach(pushError);
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
    if (!targetTable) {
      return `Relationship table ${this.getTableName(table)} is missing a ${key} table`;
    }
    if (targetTable.isExistingTable) {
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
          return `Table ${table.tableName} is not found in the schema. This indicates an inconsistency between the server and client of Explorer. Please consider refreshing your browser.`;
        }
      }
      if (table.type === "rel") {
        const relTable = schema.relTables.find((relTable) => relTable.name === table.tableName);
        if (!relTable) {
          return `Table ${table.tableName} is not found in the schema. This indicates an inconsistency between the server and client of Explorer. Please consider refreshing your browser.`;
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
    const primaryKey = table.columns.find((column) => column.isPrimaryKey);
    if (primaryKey.ignore) {
      return `Primary key column ${primaryKey.name} in table ${this.getTableName(table)} is ignored`;
    }
    return null;
  }

  validateFromKey(table) {
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
    const fromKey = table.columns.find((column) => column.isFromKey);
    if (fromKey.ignore) {
      return `From key column in table ${this.getTableName(table)} is ignored`;
    }
    return null;
  }

  validateToKey(table) {
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
    const toKey = table.columns.find((column) => column.isToKey);
    if (toKey.ignore) {
      return `To key column in table ${this.getTableName(table)} is ignored`;
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

  validateColumns(table, schema) {
    const errors = [];
    const columns = table.columns;
    const columnsWithoutIgnore = columns.filter((column) => !column.ignore);
    // Check if there are any columns to import
    if (columnsWithoutIgnore.length === 0) {
      errors.push(`Table ${this.getTableName(table)} has no columns to import`);
      return errors;
    }
    // Check if there are any columns with missing names
    for (let i = 0; i < columns.length; ++i) {
      if (!columns[i].name && !columns[i].ignore) {
        errors.push(`Column ${i} in table ${this.getTableName(table)} is missing column name`);
      }
    }
    // Check if there are any duplicate column names
    const columnNames = columnsWithoutIgnore.filter(column => !column.isFromKey && !column.isToKey).map(column => column.name);
    const uniqueColumnNames = new Set(columnNames);
    if (columnNames.length !== uniqueColumnNames.size) {
      errors.push(`Table ${this.getTableName(table)} has duplicate column names`);
    }
    // Check if there are any columns with missing column types for new tables
    if (table.isNewTable) {
      columnsWithoutIgnore.forEach((column, i) => {
        if (!column.type) {
          const displayName = column.name || i;
          errors.push(`Column ${displayName} in table ${this.getTableName(table)} is missing column type`);
        }
      });
    }
    // Check if there are any missing column for existing node tables
    else if (table.type === 'node') {
      const nodeTable = schema.nodeTables.find((nodeTable) => nodeTable.name === table.tableName);
      if (nodeTable) {
        nodeTable.properties.forEach((property) => {
          if (!uniqueColumnNames.has(property.name)) {
            errors.push(`Table ${this.getTableName(table)} is imported to an existing node table, but it is missing column ${property.name}`);
          }
        });
      }
    }
    // Check if there are any missing column for existing relationship tables
    else if (table.type === 'rel') {
      const relTable = schema.relTables.find((relTable) => relTable.name === table.tableName);
      if (relTable) {
        relTable.properties.forEach((property) => {
          if (!uniqueColumnNames.has(property.name)) {
            errors.push(`Table ${this.getTableName(table)} is imported to an existing relationship table, but it is missing column ${property.name}`);
          }
        });
      }
    }
    return errors;
  }

  createImportPlan(config, tmpPath, schema, ddl) {
    const plan = [];
    // Plan for uploading files
    for (const table of config) {
      plan.push({
        displayName: table.name,
        fileName: `${table.id}.${table.extension}`,
        action: IMPORT_ACTIONS.UPLOAD,
        status: JOB_STATUS.PENDING,
      });
    }
    // Plan for creating new node tables
    for (const table of config) {
      if (table.isNewTable && table.type === 'node') {
        const properties = table.columns.filter((column) => !column.ignore)
          .map((column) => ({
            name: column.name,
            type: column.type,
            isPrimaryKey: !!column.isPrimaryKey
          }));
        const cypher = ddl.addNodeTable(table.tableName, properties);
        plan.push({
          cypher,
          displayName: table.tableName,
          tableName: table.tableName,
          action: IMPORT_ACTIONS.CREATE,
          type: 'node',
          status: JOB_STATUS.PENDING,
        });
      }
    }
    // Plan for creating new rel tables
    for (const table of config) {
      if (table.isNewTable && table.type === 'rel') {
        const properties = table.columns.filter((column) => !column.ignore)
          .filter((column) => !column.isFromKey && !column.isToKey)
          .map((column) => ({
            name: column.name,
            type: column.type,
          }));
        const fromTable = table.from;
        const toTable = table.to;
        let fromTableName, toTableName;
        if (fromTable.isExistingTable) {
          fromTableName = fromTable.key;
        }
        else {
          const found = config.find((t) => t.id === fromTable.key);
          fromTableName = found.tableName;
        }
        if (toTable.isExistingTable) {
          toTableName = toTable.key;
        } else {
          const found = config.find((t) => t.id === toTable.key);
          toTableName = found.tableName;
        }
        const cypher = ddl.addRelTableWithSingleConnection(table.tableName, properties, fromTableName, toTableName);
        plan.push({
          cypher,
          from: fromTableName,
          to: toTableName,
          displayName: table.tableName,
          action: IMPORT_ACTIONS.CREATE,
          type: 'rel',
          status: JOB_STATUS.PENDING,
        });
      }
    }
    // Plan for copying node tables
    for (const table of config) {
      if (table.type === 'node') {
        const copyResult = this.planCopy(table, config, schema, tmpPath, ddl);
        if (copyResult) {
          plan.push(copyResult);
        }
      }
    }
    // Plan for copying rel tables
    for (const table of config) {
      if (table.type === 'rel') {
        const copyResult = this.planCopy(table, config, schema, tmpPath, ddl);
        if (copyResult) {
          plan.push(copyResult);
        }
      }
    }
    return plan;
  }

  planCopy(table, config, schema, tmpPath, ddl) {
    const result = {
      displayName: `${table.name} →  ${table.tableName}`,
      action: IMPORT_ACTIONS.COPY,
      tableName: table.tableName,
      status: JOB_STATUS.PENDING,
    }
    // Simple copy: all columns are copied and the file schema aligns with the 
    // table schema. In this case, we can directly invoke COPY FROM.
    let isCopySimple = false;
    if (table.isNewTable) {
      if (table.type === 'node') {
        isCopySimple = table.columns.every((column) => !column.ignore);
      }
      if (table.type === 'rel') {
        isCopySimple = table.columns.every((column) => !column.ignore)
          && table.columns[0].isFromKey
          && table.columns[1].isToKey;
      }
    } else {
      if (table.type === 'node') {
        const nodeTable = schema.nodeTables.find((nodeTable) => nodeTable.name === table.tableName);
        isCopySimple = table.columns.length === nodeTable.properties.length
          && table.columns.every((column) => !column.ignore)
          && table.columns.every((column, i) => column.name === nodeTable.properties[i].name);
      }
      if (table.type === 'rel') {
        const relTable = schema.relTables.find((relTable) => relTable.name === table.tableName);
        isCopySimple = table.columns.every((column) => !column.ignore) &&
          table.columns[0].isFromKey &&
          table.columns[1].isToKey &&
          table.columns.length === relTable.properties.length + 2 &&
          table.columns.slice(2).every((column, i) => column.name === relTable.properties[i].name);
      }
    }
    const filePath = tmpPath ?
      `${tmpPath}/${table.id}.${table.extension}` :
      `${table.id}.${table.extension}`;
    if (isCopySimple) {
      const { cypher } = ddl.copyTableSimple(table.tableName, filePath, table.csvFormat);
      result.cypher = cypher;
      return result;
    }
    // Complex copy: the file schema does not align with the table schema. In 
    // this case, we need to use `LOAD FROM` subqueries to transform the data.
    const columnMapping = [];
    if (table.type === 'node') {
      if (table.isNewTable) {
        table.columns.forEach((column) => {
          if (!column.ignore) {
            columnMapping.push({
              rawName: column.rawName,
              name: column.name,
              type: column.type,
            });
          }
        });
      } else {
        const nodeTable = schema.nodeTables.find((nodeTable) => nodeTable.name === table.tableName);
        nodeTable.properties.forEach((property) => {
          const matchingColumn = table.columns.find((column) => column.name === property.name);
          columnMapping.push({
            rawName: matchingColumn.rawName,
            name: property.name,
            type: property.type,
          });
        });
      }
    } else if (table.type === 'rel') {
      // First two columns are from and to keys
      const fromTable =
        (!table.isNewTable) ?
          schema.nodeTables.find((nodeTable) => nodeTable.name === schema.relTables.find((relTable) => relTable.name === table.tableName).src) :
          table.from.isExistingTable ?
            schema.nodeTables.find((nodeTable) => nodeTable.name === table.from.key) :
            config.find((t) => t.id === table.from.key);
      const toTable =
        (!table.isNewTable) ?
          schema.nodeTables.find((nodeTable) => nodeTable.name === schema.relTables.find((relTable) => relTable.name === table.tableName).dst) :
          table.to.isExistingTable ?
            schema.nodeTables.find((nodeTable) => nodeTable.name === table.to.key) :
            config.find((t) => t.id === table.to.key);
      const fromTablePrimaryKey = (!table.isNewTable) || table.from.isExistingTable ?
        fromTable.properties.find((property) => property.isPrimaryKey) :
        fromTable.columns.find((column) => column.isPrimaryKey);
      const toTablePrimaryKey = (!table.isNewTable) || table.to.isExistingTable ?
        toTable.properties.find((property) => property.isPrimaryKey) :
        toTable.columns.find((column) => column.isPrimaryKey);
      const fromTablePrimaryKeyType = fromTablePrimaryKey.type;
      const toTablePrimaryKeyType = toTablePrimaryKey.type;
      const fromKey = table.columns.find((column) => column.isFromKey);
      const toKey = table.columns.find((column) => column.isToKey);
      columnMapping.push({
        rawName: fromKey.rawName,
        name: "from",
        type: fromTablePrimaryKeyType,
      });
      columnMapping.push({
        rawName: toKey.rawName,
        name: "to",
        type: toTablePrimaryKeyType,
      });
      // Other columns
      if (table.isNewTable) {
        table.columns.forEach((column) => {
          if (!column.ignore && !column.isFromKey && !column.isToKey) {
            columnMapping.push({
              rawName: column.rawName,
              name: column.name,
              type: column.type,
            });
          }
        });
      }
      else {
        const relTable = schema.relTables.find((relTable) => relTable.name === table.tableName);
        relTable.properties.forEach((property) => {
          const matchingColumn = table.columns.find((column) => column.name === property.name);
          columnMapping.push({
            rawName: matchingColumn.rawName,
            name: property.name,
            type: property.type,
          });
        });
      }
    }
    const { cypher } = ddl.copyTableComplex(table.tableName, filePath, table.csvFormat, columnMapping);
    result.cypher = cypher;
    return result;
  }
}

module.exports = new DataImportUtils();
