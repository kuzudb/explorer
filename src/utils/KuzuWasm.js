import kuzu from "kuzu-wasm";
import { TABLE_TYPES } from "./Constants";

// TODO: Refactor this and extract common logic between frontend WASM module
// and backend Node.js module after we move the backend to use ESM instead of 
// CommonJS.
class Kuzu {
  constructor() {
    const baseUrl = process.env.BASE_URL;
    this.db = null;
    this.conn = null;
    this._schema = null;
    kuzu.setWorkerPath(`${baseUrl}js/kuzu_wasm_worker.js`);
    this.kuzu = kuzu;
    window.kuzu = this; // For debugging
  }

  async init() {
    if (this.initializationPromise) {
      await this.initializationPromise;
      delete this.initializationPromise;
      return;
    }
    console.time("Kuzu init");
    const db = new kuzu.Database(":memory:", 2147483648, 0, true, false, true, 16777216);
    const conn = new kuzu.Connection(db);
    const versionResult = await conn.query(`CALL db_version() RETURN *;`);
    const version = (await versionResult.getAllRows())[0][0];
    console.log("Kuzu WebAssembly module version:", version);
    this.db = db;
    this.conn = conn;
    console.timeEnd("Kuzu init");
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

  async getConnection() {
    if (!this.conn) {
      if (!this.dbInitPromise) {
        this.dbInitPromise = this.init();
      }
      await this.dbInitPromise;
      delete this.dbInitPromise;
    }
    return this.conn;
  }

  async getSchema() {
    const conn = await this.getConnection();
    let result = await conn.query("CALL show_tables() RETURN *;");
    const tables = await result.getAllObjects();
    await result.close();
    const nodeTables = [];
    const relTables = [];
    for (const table of tables) {
      result = await conn
        .query(`CALL TABLE_INFO('${table.name}') RETURN *;`)
      const properties = (await result.getAllObjects())
        .map((property) => ({
          name: property.name,
          type: property.type,
          isPrimaryKey: property["primary key"],
        }));
      await result.close();
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
        result = await conn.query(`CALL SHOW_CONNECTION('${table.name}') RETURN *;`);
        const connectivity = await result.getAllObjects();
        await result.close();
        table.connectivity = [];
        connectivity.forEach(c => {
          table.connectivity.push({
            src: c["source table name"],
            dst: c["destination table name"],
          });
        });
        relTables.push(table);
      }
    }
    nodeTables.sort((a, b) => a.name.localeCompare(b.name));
    relTables.sort((a, b) => a.name.localeCompare(b.name));
    return { nodeTables, relTables };
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
    const conn = await this.getConnection();
    if (!statement || typeof statement !== "string") {
      throw new Error("The statement must be a string with length > 0");
    }
    if (params && typeof params !== "object") {
      throw new Error("Params must be an object");
    }
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
      // We only need to close the first result, the rest will be closed
      // automatically when the first one is closed.
      await result.close();
    }
    return responseBody;
  }

  async close() {
    if (this.conn) {
      await this.conn.close();
      this.conn = null;
    }
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
