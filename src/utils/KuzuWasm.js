import kuzu from "kuzu-wasm";
import { TABLE_TYPES } from "./Constants";

// TODO: Refactor this and extract common logic between frontend WASM module
// and backend Node.js module after we move the backend to use ESM instead of 
// CommonJS.
class Kuzu {
  constructor() {
    this.db = null;
    this._schema = null;
    kuzu.setWorkerPath("/js/kuzu_wasm_worker.js");
    this.kuzu = kuzu;
    window.kuzu = this; // For debugging
  }

  async init() {
    if (this.initializationPromise) {
      await this.initializationPromise;
      delete this.initializationPromise;
      return;
    }
    console.time("Kùzu init");
    const db = new kuzu.Database(":memory:", 2147483648, 0, true, false, true, 16777216);
    const conn = new kuzu.Connection(db);
    const versionResult = await conn.query(`CALL db_version() RETURN *;`);
    const version = (await versionResult.getAllRows())[0][0];
    console.log("Kùzu WebAssembly module version:", version);
    await conn.close();
    this.db = db;
    console.timeEnd("Kùzu init");
    this._schema = await this.getSchema();
  }

  async getDb() {
    if (!this.db) {
      if (!this.dbInitPromise) {
        this.dbInitPromise = this.init();
      }
      await this.dbInitPromise;
      delete this.dbInitPromise;
    }
    return this.db;
  }

  async getSchema() {
    const db = await this.getDb();
    const conn = new kuzu.Connection(db);
    const isBelongToGroup = (relTable, relGroupName) => {
      const src = relTable.src;
      const dst = relTable.dst;
      const expectedRelName = `${relGroupName}_${src}_${dst}`;
      const result = relTable.name === expectedRelName;
      return result;
    };

    try {
      const result = await conn.query("CALL show_tables() RETURN *;");
      const tables = await result.getAllObjects();
      result.close();
      const nodeTables = [];
      const relTables = [];
      const relGroups = [];
      for (const table of tables) {
        const properties = (
          await conn
            .query(`CALL TABLE_INFO('${table.name}') RETURN *;`)
            .then((res) => {
              return res.getAllObjects()
            })
        ).map((property) => {
          return {
            name: property.name,
            type: property.type,
            isPrimaryKey: property["primary key"],
          }
        });
        if (table.type === TABLE_TYPES.NODE) {
          delete table["type"];
          table.properties = properties;
          nodeTables.push(table);
        } else if (table.type === TABLE_TYPES.REL) {
          delete table["type"];
          properties.forEach((property) => {
            delete property.isPrimaryKey;
          });
          table.properties = properties;
          const connectivity = await conn
            .query(`CALL SHOW_CONNECTION('${table.name}') RETURN *;`)
            .then((res) => res.getAllObjects());
          const src = connectivity[0]["source table name"];
          const dst = connectivity[0]["destination table name"];
          table.src = src;
          table.dst = dst;
          relTables.push(table);
        } else if (table.type === TABLE_TYPES.REL_GROUP) {
          const name = table.name;
          relGroups.push({ name });
        }
      }
      relGroups.forEach((relGroup) => {
        relGroup.rels = relTables
          .filter((relTable) => isBelongToGroup(relTable, relGroup.name))
          .map((relTable) => relTable.name);
      });
      nodeTables.sort((a, b) => a.name.localeCompare(b.name));
      relTables.sort((a, b) => a.name.localeCompare(b.name));
      relGroups.sort((a, b) => a.name.localeCompare(b.name));
      return { nodeTables, relTables, relGroups };
    } finally {
      await conn.close();
    }
  }

  async processSingleResult(result) {
    const rows = await result.getAllObjects();
    const columnTypes = await result.getColumnTypes();
    const columnNames = await result.getColumnNames();
    const dataTypes = {};
    columnNames.forEach((name, i) => {
      dataTypes[name] = columnTypes[i];
    });
    return { rows, dataTypes };
  };


  async query(statement, params = null) {
    const db = await this.getDb();
    const conn = new kuzu.Connection(db);
    if (!statement || !typeof statement === "string") {
      throw new Error("The statement must be a string with length > 0");

    }
    if (params && !typeof params === "object") {
      throw new Error("Params must be an object");
    }
    try {
      let result;
      if (!params || Object.keys(params).length === 0) {
        result = await conn.query(statement);

      } else {
        const preparedStatement = await conn.prepare(statement);
        result = await conn.execute(preparedStatement, params);
        await preparedStatement.close();
      }
      let isSchemaChanged = false;
      const currentSchema = await this.getSchema();
      isSchemaChanged =
        JSON.stringify(this._schema) !== JSON.stringify(currentSchema);

      let responseBody;
      if (!result.hasNextQueryResult()) {
        responseBody = await this.processSingleResult(result);
        await result.close();
        responseBody.isSchemaChanged = isSchemaChanged;
        responseBody.isMultiStatement = false;
      } else {
        responseBody = {
          isSchemaChanged,
          isMultiStatement: true,
          results: [],
        };
        let currentResult = result;
        while (currentResult) {
          const singleResultBody = await this.processSingleResult(currentResult);
          responseBody.results.push(singleResultBody);
          if (!currentResult.hasNextQueryResult()) {
            break;
          }
          currentResult = await currentResult.getNextQueryResult();
        }
        const lastResultBody = await this.processSingleResult(currentResult);
        responseBody.results.push(lastResultBody);
        // We only need to close the first result, the rest will be closed
        // automatically when the first one is closed.
        await result.close();
      }
      return responseBody;
    } finally {
      await conn.close();
    }
  }

  async close() {
    if (this.db) {
      await this.db.close();
      this.db = null;
    }
  }

  getFS() {
    return this.kuzu.FS;
  }
}

// Singleton instance
const instance = new Kuzu();
export default instance;
