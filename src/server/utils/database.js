const path = require("path");
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
const kuzu = require(kuzuPath);
const process = require("process");
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
}

module.exports = new Database();
