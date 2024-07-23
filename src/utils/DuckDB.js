import * as duckdb from "@duckdb/duckdb-wasm";
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
    // Create temporary file system (currently not working)
    // await conn.query(`PRAGMA temp_directory='/tmp'`);
    // Lift memory limit
    await conn.query(`PRAGMA memory_limit='1.9GB';`);
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

  async unloadTable(uuid, conn = null) {
    if (!this.loadedTables[uuid]) {
      return;
    }
    const isConnProvided = !!conn;
    if (!conn) {
      const db = await this.getDb();
      conn = await db.connect();
    }
    try {
      const query = `DROP TABLE IF EXISTS "${uuid}" CASCADE`;
      console.debug(query);
      await conn.query(query);
      delete this.loadedTables[uuid];
    } catch (e) {
      console.debug("Cannot unload table:", uuid);
    }
    if (!isConnProvided) {
      await conn.close();
    }
  }

  getFileName(uuid, type) {
    return `${uuid}.${type}`;
  }

  async registerCSVFile(uuid, file) {
    const db = await this.getDb();
    const fileName = this.getFileName(uuid, FILE_TYPE.CSV);
    await db.registerFileHandle(fileName, file, DuckDBDataProtocol.BROWSER_FILEREADER, true);
  }

  async sniffCSVFile(uuid, file) {
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

  async loadCSVFile(uuid, file, skipRows = 0, limitRows = 200) {
    const db = await this.getDb();
    const conn = await db.connect();
    const fileName = this.getFileName(uuid, FILE_TYPE.CSV);
    await db.registerFileHandle(fileName, file, DuckDBDataProtocol.BROWSER_FILEREADER, true);
    const query = `SELECT * FROM sniff_csv('${fileName}', sample_size=${limitRows})`;
    console.debug(query);
    let result = await conn.query(query);
    const resultArray = result.toArray();
    console.debug(resultArray);
    await conn.close();
  }
}

// Singleton instance
const instance = new DuckDB();
export default instance;