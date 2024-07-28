import * as duckdb from "@duckdb/duckdb-wasm";
import { DATA_TYPES } from './Constants';

const DuckDBDataProtocol = duckdb.DuckDBDataProtocol;
const FILE_TYPE = {
  CSV: "csv",
  PARQUET: "parquet",
}

class DuckDB {
  constructor() {
    this.db = null;
    this.loadedTables = {};
    this.loadingTablePromises = {};
    this.initializationPromise = this.init();
    this.duckdb = duckdb;
    window.duckdb = this; // For debugging
  }

  async init() {
    if (this.initializationPromise) {
      await this.initializationPromise;
      delete this.initializationPromise;
      return;
    }
    const MANUAL_BUNDLES = {
      mvp: {
        mainModule: "/js/duckdb-mvp.wasm",
        mainWorker: "/js/duckdb-browser-mvp.worker.js",
      },
      eh: {
        mainModule: "/js/duckdb-eh.wasm",
        mainWorker: "/js/duckdb-browser-eh.worker.js",
      },
    };
    console.time("DuckDB init");
    // Select a bundle based on browser checks
    const bundle = await duckdb.selectBundle(MANUAL_BUNDLES);
    // Instantiate the asynchronus version of DuckDB-wasm
    const worker = new Worker(bundle.mainWorker);
    const logger = new duckdb.ConsoleLogger();
    const db = new duckdb.AsyncDuckDB(logger, worker);
    await db.instantiate(bundle.mainModule, bundle.pthreadWorker);
    const conn = await db.connect();
    const versionResult = await conn.query(`SELECT version()`);
    console.debug("DuckDB version:", versionResult.toArray()[0].toJSON()["version()"]);
    await conn.close();
    this.db = db;
    console.timeEnd("DuckDB init");
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

  getFileName(uuid, type) {
    return `${uuid}.${type}`;
  }

  async registerFile(uuid, file, extension) {
    const db = await this.getDb();
    const fileName = this.getFileName(uuid, extension);
    await db.registerFileHandle(fileName, file, DuckDBDataProtocol.BROWSER_FILEREADER, true);
  }

  async getCSVHeaderWithCustomSettings() {

  }

  async sniffCSVFile(uuid) {
    const db = await this.getDb();
    const conn = await db.connect();
    const fileName = this.getFileName(uuid, FILE_TYPE.CSV);
    const query = `SELECT * FROM sniff_csv('${fileName}', sample_size=200)`;
    console.debug(query);
    let result = await conn.query(query);
    const resultArray = result.toArray();
    await conn.close();
    const resultRow = resultArray[0].toJSON();
    resultRow.Columns = resultRow.Columns.toArray().map((col) => col.toJSON());
    return resultRow;
  }

  async sniffParquetFile(uuid) {
    const db = await this.getDb();
    const conn = await db.connect();
    const fileName = this.getFileName(uuid, FILE_TYPE.PARQUET);
    const query = `DESCRIBE TABLE '${fileName}'`;
    console.debug(query);
    let result = await conn.query(query);
    await conn.close();
    const resultArray = result.toArray();
    const columns = resultArray.map((row) => {
      const rowJSON = row.toJSON();
      return {
        name: rowJSON.column_name,
        type: rowJSON.column_type,
      };
    });
    return {
      Columns: columns,
      HasHeader: true,
    };
  }

  async loadParquetFile(uuid, file) {
    const db = await this.getDb();
    const conn = await db.connect();
    const fileName = this.getFileName(uuid, FILE_TYPE.PARQUET);
    await db.registerFileHandle(fileName, file, DuckDBDataProtocol.BROWSER_FILEREADER, true);
    const query = `SELECT * FROM sniff_parquet('${fileName}')`;
    console.debug(query);
    let result = await conn.query(query);
    const resultArray = result.toArray();
    console.debug(resultArray);
    await conn.close();
  }

  convertDuckDBTypeToKuzuType(typeStr) {
    if (typeStr == "BIGINT" || typeStr == "INT8" || typeStr == "LONG") {
      return DATA_TYPES.INT64;
    } else if (typeStr == "BLOB" || typeStr == "BYTEA" || typeStr == "BINARY" ||
      typeStr == "VARBINARY") {
      return DATA_TYPES.BLOB;
    } else if (typeStr == "BOOLEAN" || typeStr == "BOOL" || typeStr == "LOGICAL") {
      return DATA_TYPES.BOOL;
    } else if (typeStr == "DATE") {
      return DATA_TYPES.DATE;
    } else if (typeStr == "DOUBLE" || typeStr == "FLOAT8") {
      return DATA_TYPES.DOUBLE;
    } else if (typeStr == "HUGEINT") {
      return DATA_TYPES.INT128;
    } else if (typeStr == "INTEGER" || typeStr == "INT4" || typeStr == "INT" ||
      typeStr == "SIGNED") {
      return DATA_TYPES.INT32;
    } else if (typeStr == "INTERVAL") {
      return DATA_TYPES.INTERVAL;
    } else if (typeStr == "REAL" || typeStr == "FLOAT" || typeStr == "FLOAT4") {
      return DATA_TYPES.FLOAT;
    } else if (typeStr == "SMALLINT" || typeStr == "INT2" || typeStr == "SHORT") {
      return DATA_TYPES.INT16;
    } else if (typeStr == "TIMESTAMP" || typeStr == "DATETIME") {
      return DATA_TYPES.TIMESTAMP;
    } else if (typeStr == "TIMESTAMP_NS") {
      return DATA_TYPES.TIMESTAMP_NS;
    } else if (typeStr == "TIMESTAMP_MS") {
      return DATA_TYPES.TIMESTAMP_MS;
    } else if (typeStr == "TIMESTAMP_S") {
      return DATA_TYPES.TIMESTAMP_SEC;
    } else if (typeStr == "TIMESTAMP WITH TIME ZONE" || typeStr == "TIMESTAMPTZ") {
      return DATA_TYPES.TIMESTAMP_TZ;
    } else if (typeStr == "TINYINT" || typeStr == "INT1") {
      return DATA_TYPES.INT8;
    } else if (typeStr == "UBIGINT") {
      return DATA_TYPES.UINT64;
    } else if (typeStr == "UINTEGER") {
      return DATA_TYPES.UINT32;
    } else if (typeStr == "USMALLINT") {
      return DATA_TYPES.UINT16;
    } else if (typeStr == "UTINYINT") {
      return DATA_TYPES.UINT8;
    } else if (typeStr == "UUID") {
      return DATA_TYPES.UUID;
    } else if (typeStr == "VARCHAR" || typeStr == "CHAR" || typeStr == "BPCHAR" ||
      typeStr == "TEXT" || typeStr == "STRING") {
      return DATA_TYPES.STRING;
    }
    return DATA_TYPES.STRING;
  }
}

// Singleton instance
const instance = new DuckDB();
export default instance;
