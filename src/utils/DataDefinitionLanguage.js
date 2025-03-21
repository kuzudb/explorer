class DataDefinitionLanguage {
  _escapeName(name) {
    if (!name) {
      return "";
    }
    if (name.includes(" ") || name.includes(".")) {
      return `\`${name}\``;
    }
    return name;
  }

  _jsonEscapedString = (str) => {
    const enclosedStr = JSON.stringify(str);
    return enclosedStr.slice(1, enclosedStr.length - 1);
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
    columnName = this._escapeName(columnName);
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

  addRelTable(tableName, properties, connectivity) {
    tableName = this._escapeName(tableName);
    let result = `CREATE REL TABLE ${tableName} (\n`;
    for (const conn of connectivity) {
      const src = this._escapeName(conn.src);
      const dst = this._escapeName(conn.dst);
      result += `  FROM ${src} TO ${dst},\n`;
    }
    if (properties.length === 0) {
      result = result.slice(0, -2);
      result += "\n";
    } else {
      properties.forEach((property) => {
        const columnName = this._escapeName(property.name);
        const columnType = this._fixColumnType(property.type);
        let columnString = `  ${columnName} ${columnType},\n`;
        result += columnString;
      });
      result = result.slice(0, -2);
      result += "\n";
    }
    result += ");";
    return result;
  }

  addRelTableWithSingleConnection(tableName, properties, src, dst) {
    tableName = this._escapeName(tableName);
    src = this._escapeName(src);
    dst = this._escapeName(dst);
    let result = `CREATE REL TABLE ${tableName} (\n`;
    result += `  FROM ${src} TO ${dst},\n`;
    if (properties.length === 0) {
      result = result.slice(0, -2);
      result += "\n";
    } else {
      properties.forEach((property) => {
        const columnName = this._escapeName(property.name);
        const columnType = this._fixColumnType(property.type);
        let columnString = `  ${columnName} ${columnType},\n`;
        result += columnString;
      });
      result = result.slice(0, -2);
      result += "\n";
    }
    result += ");";
    return result;
  }

  renameTable(oldName, newName) {
    oldName = this._escapeName(oldName);
    newName = this._escapeName(newName);
    return `ALTER TABLE ${oldName} RENAME TO ${newName};`;
  }

  getCsvOptionsSubquery(csvFormatOptions) {
    const { delimiter, quote, escape, hasHeader, listBegin, listEnd, parallelism, ignoreErrors } = csvFormatOptions;
    let csvOptions = [];
    csvOptions.push(`HEADER=${hasHeader}`);
    csvOptions.push(`DELIM="${this._jsonEscapedString(delimiter)}"`);
    csvOptions.push(`QUOTE="${this._jsonEscapedString(quote)}"`);
    csvOptions.push(`ESCAPE="${this._jsonEscapedString(escape)}"`);
    // csvOptions.push(`LIST_BEGIN="${this._jsonEscapedString(listBegin)}"`);
    // csvOptions.push(`LIST_END="${this._jsonEscapedString(listEnd)}"`);
    csvOptions.push(`PARALLEL=${parallelism}`);
    csvOptions.push(`IGNORE_ERRORS=${ignoreErrors}`);
    const csvOptionsString = `(${csvOptions.join(", ")})`;
    return csvOptionsString;
  }

  copyTableSimple(name, path, csvFormatOptions) {
    name = this._escapeName(name);
    path = path.replaceAll("\\", "/");
    let statement = `COPY ${name} FROM '${path}'`;
    if (csvFormatOptions) {
      const csvOptionsString = this.getCsvOptionsSubquery(csvFormatOptions);
      statement += ` ${csvOptionsString}`;
    }
    statement += ";";
    const result = { cypher: statement };
    return result;
  }

  copyTableComplex(name, path, csvFormatOptions, columnMapping) {
    let statement = `COPY ${name} FROM `;
    path = path.replaceAll("\\", "/");
    let loadStatement = `LOAD FROM '${path}'`;
    if (csvFormatOptions) {
      const csvOptionsString = this.getCsvOptionsSubquery(csvFormatOptions);
      loadStatement += ` ${csvOptionsString}`;
    }
    let returnStatement = "RETURN " +
      (columnMapping.map((mapping) => {
        return `CAST(${this._escapeName(mapping.rawName)} AS ${mapping.type})`;
      }).join(", "));
    loadStatement += ` ${returnStatement}`;
    statement += `(${loadStatement});`;
    return { cypher: statement };
  }
}

const ddl = new DataDefinitionLanguage();
module.exports = ddl;
