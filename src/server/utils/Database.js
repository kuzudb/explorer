const path = require("path");
const process = require("process");
const TABLE_TYPES = {
  NODE: "NODE",
  REL: "REL",
};

let kuzu;
if (process.env.NODE_ENV !== "production") {
  const kuzuPath = path.join(
    __dirname,
    "..",
    "..",
    "..",
    "kuzu",
    "tools",
    "nodejs_api",
    "build/"
  );
  kuzu = require(kuzuPath);
} else {
  kuzu = require("kuzu");
}
const os = require("os");

class Database {
  constructor() {
    const dbPath = process.env.KUZU_PATH;
    const bufferPoolSize = parseInt(process.env.KUZU_BUFFER_POOL_SIZE);
    let numberConnections = parseInt(process.env.KUZU_NUM_CONNECTIONS);
    numberConnections = isNaN(numberConnections) ? 4 : numberConnections;
    const numberOfCores = os.cpus().length;
    const coresPerConnection = parseInt(numberConnections / numberOfCores);
    if (!dbPath) {
      throw new Error("KUZU_PATH environment variable not set");
    }
    this.db = isNaN(bufferPoolSize)
      ? new kuzu.Database(dbPath)
      : new kuzu.Database(dbPath, bufferPoolSize);
    this.connectionPool = [];
    for (let i = 0; i < numberConnections; i++) {
      this.connectionPool.push({
        connection: new kuzu.Connection(
          this.db,
          coresPerConnection > 0 ? coresPerConnection : 1
        ),
        useCount: 0,
        id: i,
      });
    }
  }

  getDb() {
    return this.db;
  }

  getConnection() {
    let minUseCount = Number.MAX_SAFE_INTEGER;
    let minUseCountIndex = -1;
    for (let i = 0; i < this.connectionPool.length; i++) {
      if (this.connectionPool[i].useCount < minUseCount) {
        minUseCount = this.connectionPool[i].useCount;
        minUseCountIndex = i;
      }
      if (this.connectionPool[i].useCount === 0) {
        minUseCountIndex = 0;
        minUseCountIndex = i;
        break;
      }
    }
    this.connectionPool[minUseCountIndex].useCount++;
    return this.connectionPool[minUseCountIndex].connection;
  }

  releaseConnection(connection) {
    for (let i = 0; i < this.connectionPool.length; i++) {
      if (this.connectionPool[i].connection === connection) {
        this.connectionPool[i].useCount--;
        return true;
      }
    }
    return false;
  }

  async getSchema() {
    const conn = this.getConnection();
    try {
      const tables = await conn
        .query("CALL show_tables() RETURN *;")
        .then((res) => res.getAll());
      const nodeTables = [];
      const relTables = [];
      for (const table of tables) {
        const properties = (
          await conn
            .query(`CALL TABLE_INFO('${table.name}') RETURN *;`)
            .then((res) => res.getAll())
        ).map((property) => ({
          name: property.name,
          type: property.type,
          isPrimaryKey: property["primary key"],
        }));
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
            .then((res) => res.getAll());
          const src = connectivity[0]["source table name"];
          const dst = connectivity[0]["destination table name"];
          table.src = src;
          table.dst = dst;
          relTables.push(table);
        }
      }
      return { nodeTables, relTables };
    } finally {
      this.releaseConnection(conn);
    }
  }
}

module.exports = new Database();
