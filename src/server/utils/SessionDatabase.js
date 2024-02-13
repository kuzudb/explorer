const path = require("path");
const fs = require("fs").promises;
const sqlite3 = require("sqlite3");
const sqlite = require("sqlite");
const constants = require("./Constants");

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
    this.isReadOnly = !!(
      process.env.MODE && process.env.MODE !== MODES.READ_WRITE
    );
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
      let isDbFileExists = false;
      try {
        await fs.access(this.dbPath, fs.constants.R_OK);
        isDbFileExists = true;
      } catch (err) {
        // File does not exist
      }
      // Double check if the file is writable
      if (isDbFileExists) {
        try {
          await fs.access(this.dbPath, fs.constants.W_OK);
        } catch (err) {
          this.isReadOnly = true;
        }
      } else {
        try {
          await fs.writeFile(this.dbPath, "");
          await fs.access(this.dbPath, fs.constants.W_OK);
          await fs.unlink(this.dbPath);
        } catch (err) {
          this.isReadOnly = true;
        }
        if (this.isReadOnly) {
          // In read-only mode, if the db file does not exist, we should not create it,
          // but if it exists, we can still use it.
          return;
        }
        try {
          await new Promise((resolve, reject) => {
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

  isWritable() {
    return this.isInitialized && !this.isReadOnly;
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

  async setSetting(value, key = "allSettings") {
    await this.initSqlite();
    if (!this.isWritable()) {
      return;
    }
    await this.db.run(
      `INSERT OR REPLACE INTO settings (key, value) VALUES (?, ?)`,
      key,
      JSON.stringify(value)
    );
  }

  async upsertHistoryItem(historyItem) {
    await this.initSqlite();
    if (!this.isWritable()) {
      return;
    }
    await this.db.run("BEGIN TRANSACTION;");
    try {
      const { uuid, isQueryGenerationMode, gptQuestion, cypherQuery } =
        historyItem;
      const count = (
        await this.db.get(
          "SELECT COUNT(*) as count FROM history WHERE uuid = ?",
          uuid
        )
      ).count;
      if (count === 0) {
        await this.db.run(
          "INSERT INTO history (uuid, isQueryGenerationMode, gptQuestion, cypherQuery) VALUES (?, ?, ?, ?)",
          uuid,
          isQueryGenerationMode,
          gptQuestion,
          cypherQuery
        );
      } else {
        await this.db.run(
          "UPDATE history SET isQueryGenerationMode = ?, gptQuestion = ?, cypherQuery = ? WHERE uuid = ?",
          isQueryGenerationMode,
          gptQuestion,
          cypherQuery,
          uuid
        );
      }
      await this.db.run("COMMIT;");
    } catch (err) {
      await this.db.run("ROLLBACK;");
    }
  }

  async deleteHistoryItem(uuid) {
    await this.initSqlite();
    if (!this.isWritable()) {
      return;
    }
    await this.db.run("DELETE FROM history WHERE uuid = ?", uuid);
  }

  async getHistoryItems() {
    await this.initSqlite();
    if (!this.isInitialized) {
      return [];
    }
    const historyItems = await this.db.all(
      "SELECT *, rowid FROM history ORDER BY rowid DESC"
    );
    return historyItems;
  }
}

module.exports = new SessionDatabase();
