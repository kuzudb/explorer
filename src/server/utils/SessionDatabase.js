const path = require("path");
const fs = require("fs/promises");
const sqlite3 = require("sqlite3");
const sqlite = require("sqlite");
const constants = require("./Constants");
const logger = require("./Logger");

const MODES = constants.MODES;
const DB_FILE_NAME = "explorer.db";

class SessionDatabase {
  constructor() {
    this.isInitialized = false;
    const dbPath = process.env.KUZU_PATH;
    if (!dbPath) {
      return;
    }
    this.dbPath = path.resolve(path.join(dbPath, DB_FILE_NAME));
    this.isReadOnly = process.env.MODE && process.env.MODE !== MODES.READ_WRITE;
    this.initSqlite();
  }

  initSqlite() {
    if (this.isInitialized) {
      return null;
    }
    if (this.sqlInitPromise) {
      return this.sqlInitPromise;
    }
    this.sqlInitPromise = (async () => {
      console.log("this.dbPath", this.dbPath);
      let isDbFileExists = false;
      try {
        isDbFileExists = await fs.access(this.dbPath, fs.constants.F_OK);
      } catch (err) {
        // File does not exist
      }
      if (!isDbFileExists) {
        if (this.isReadOnly) {
          // In read-only mode, if the db file does not exist, we should not create it,
          // but if it exists, we can still use it.
          return;
        }
        try {
          await new Promise((resolve, reject) => {
            console.log(this.dbPath);
            const newDb = new sqlite3.Database(
              this.dbPath,
              sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
              (err) => {
                if (err) {
                  return reject(err);
                }
                newDb.close();
                resolve();
              }
            );
          });
        } catch (err) {
          return;
        }
      }
      this.db = await sqlite.open({
        filename: this.dbPath,
        driver: sqlite3.Database,
      });
      if (!isDbFileExists) {
        await this.createDbSchema();
      }
      this.isInitialized = true;
      delete this.sqlInitPromise;
    })();
    return this.sqlInitPromise;
  }

  async createDbSchema() {
    await this.db.exec(`
      CREATE TABLE settings (
        key TEXT PRIMARY KEY,
        value TEXT
      );
    `);
    await this.db.exec(`
      CREATE TABLE history (
        uuid TEXT PRIMARY KEY,
        isQueryGenerationMode BOOLEAN,
        gptQuestion TEXT,
        cypherQuery TEXT
    );`);
  }

  async getSetting(key = "allSettings") {
    await this.initSqlite();
    if (!this.isInitialized) {
      return {};
    }
    let settings = await this.db.get(
      "SELECT * FROM settings WHERE key = ?",
      key
    );
    settings = settings ? settings.value : {};
    return settings;
  }

  async setSetting(key = "allSettings", value) {
    await this.initSqlite();
    if (!this.isInitialized) {
      return;
    }
    await this.db.run(
      "INSERT OR REPLACE INTO settings (key, value) VALUES (?, ?)",
      key,
      value
    );
  }
}

module.exports = new SessionDatabase();
