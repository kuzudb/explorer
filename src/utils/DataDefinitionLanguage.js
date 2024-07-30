class DataDefinitionLanguage {
  _escapeName(name) {
    if (!name) {
      return "";
    }
    if (name.includes(" ")) {
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

  addRdf(name) {
    name = this._escapeName(name);
    return `CREATE RDFGRAPH ${name};`;
  }

  dropRdf(name) {
    name = this._escapeName(name);
    return `DROP RDFGRAPH ${name};`;
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

  addRelTable(tableName, properties, src, dst) {
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

  addRelGroup(groupName, properties, rels) {
    groupName = this._escapeName(groupName);
    let result = `CREATE REL TABLE GROUP ${groupName} (\n`;
    const relsSet = new Set();
    rels.forEach((rel) => {
      const src = this._escapeName(rel.src);
      const dst = this._escapeName(rel.dst);
      const relDef = `  FROM ${src} TO ${dst},\n`;
      if (relsSet.has(relDef)) {
        return;
      }
      relsSet.add(relDef);
      result += `  FROM ${src} TO ${dst},\n`;
    });
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

  copyTableSimple(name, path, csvFormatOptions) {
    name = this._escapeName(name);
    let statement = `COPY ${name} FROM '${path}'`;
    if (csvFormatOptions) {
      const { delimiter, quote, escape, hasHeader, listBegin, listEnd, parallelism } = csvFormatOptions;
      let csvOptions = [];
      csvOptions.push(`HEADER=${hasHeader}`);
      csvOptions.push(`DELIM="${this._jsonEscapedString(delimiter)}"`);
      csvOptions.push(`QUOTE="${this._jsonEscapedString(quote)}"`);
      csvOptions.push(`ESCAPE="${this._jsonEscapedString(escape)}"`);
      // csvOptions.push(`LIST_BEGIN="${this._jsonEscapedString(listBegin)}"`);
      // csvOptions.push(`LIST_END="${this._jsonEscapedString(listEnd)}"`);
      csvOptions.push(`PARALLEL=${parallelism}`);
      const csvOptionsString = `(${csvOptions.join(", ")})`;
      statement += ` ${csvOptionsString}`;
    }
    statement += ";";
    console.log(statement);
    const result = { cypher: statement };
    return result;
  }
}

const ddl = new DataDefinitionLanguage();
module.exports = ddl;
