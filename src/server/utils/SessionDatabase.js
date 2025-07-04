const path = require("path");
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
    if (!this.isWritable()) {
      return;
    }
    await this.db.run("BEGIN TRANSACTION;");
    try {
      let { uuid, isQueryGenerationMode, gptQuestion, cypherQuery } =
        historyItem;
      const currentRow = await this.db.get(
        "SELECT * FROM history WHERE uuid = ?",
        uuid
      );
      if (!currentRow) {
        await this.db.run(
          "INSERT INTO history (uuid, isQueryGenerationMode, gptQuestion, cypherQuery) VALUES (?, ?, ?, ?)",
          uuid,
          isQueryGenerationMode,
          gptQuestion,
          cypherQuery
        );
      } else {
        if (!gptQuestion) {
          gptQuestion = currentRow.gptQuestion;
        }
        if (!cypherQuery) {
          cypherQuery = currentRow.cypherQuery;
        }
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
    if (!this.isWritable()) {
      return;
    }
    await this.db.run("DELETE FROM history WHERE uuid = ?", uuid);
  }

  async getHistoryItems() {
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
