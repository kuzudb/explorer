const path = require("path");
const process = require("process");
const logger = require("./Logger");
const TABLE_TYPES = {
  NODE: "NODE",
  REL: "REL",
  REL_GROUP: "REL_GROUP",
  RDF: "RDFGraph",
};
const RDF_NODE_TABLE_SUFFIXES = ["_l", "_r"];
const RDF_REL_TABLE_SUFFIXES = ["_lt", "_rt"];
const CONSTANTS = require("./Constants");
const MODES = CONSTANTS.MODES;
const READ_WRITE_MODE = MODES.READ_WRITE;
const IRI_PROPERTY_NAME = CONSTANTS.IRI_PROPERTY_NAME;
const IRI_VIRTUAL_PROPERTY_NAME = CONSTANTS.IRI_VIRTUAL_PROPERTY_NAME;

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
    const mode = this.getAccessModeString();
    const isReadOnlyMode = mode !== READ_WRITE_MODE;
    const dbPath = process.env.KUZU_PATH;
    let bufferPoolSize = parseInt(process.env.KUZU_BUFFER_POOL_SIZE);
    bufferPoolSize = isNaN(bufferPoolSize) ? 0 : bufferPoolSize;
    let numberConnections = parseInt(process.env.KUZU_NUM_CONNECTIONS);
    numberConnections = isNaN(numberConnections) ? 1 : numberConnections;
    let numberOfCores = parseInt(process.env.KUZU_NUM_CORES);
    numberOfCores =
      isNaN(numberOfCores) || numberOfCores < 1
        ? os.cpus().length
        : numberOfCores;
    if (numberOfCores !== os.cpus().length) {
      logger.info("Connection pool configuration: ");
      logger.info(`   ${numberOfCores} / ${os.cpus().length} total cores`);
    }
    let coresPerConnection = Math.floor(numberOfCores / numberConnections);
    coresPerConnection = coresPerConnection < 1 ? 1 : coresPerConnection;
    if (numberOfCores !== os.cpus().length) {
      logger.info(
        `   ${coresPerConnection} ${
          coresPerConnection === 1 ? "core" : "cores"
        } per connection`
      );
      logger.info(
        `   ${numberConnections} ${
          numberConnections === 1 ? "connection" : "connections"
        }`
      );
    }
    if (!dbPath) {
      throw new Error("KUZU_PATH environment variable not set");
    }
    logger.info(
      `Access mode: ${isReadOnlyMode ? MODES.READ_ONLY : MODES.READ_WRITE}`
    );
    const queryTimeout = parseInt(process.env.KUZU_QUERY_TIMEOUT);
    if (!isNaN(queryTimeout)) {
      logger.info(`Query timeout: ${queryTimeout} ms`);
    }
    this.db = new kuzu.Database(dbPath, bufferPoolSize, true, isReadOnlyMode);
    this.connectionPool = [];
    for (let i = 0; i < numberConnections; ++i) {
      const conn = {
        connection: new kuzu.Connection(this.db, coresPerConnection),
        useCount: 0,
        id: i,
      };
      if (!isNaN(queryTimeout)) {
        conn.connection.setQueryTimeout(queryTimeout);
      }
      this.connectionPool.push(conn);
    }
  }

  get kuzu() {
    return kuzu;
  }

  getAccessModeString() {
    return process.env.MODE ? process.env.MODE.toUpperCase() : READ_WRITE_MODE;
  }

  getDb() {
    return this.db;
  }

  getConnection() {
    let minUseCount = Number.MAX_SAFE_INTEGER;
    let minUseCountIndex = -1;
    for (let i = 0; i < this.connectionPool.length; ++i) {
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
    for (let i = 0; i < this.connectionPool.length; ++i) {
      if (this.connectionPool[i].connection === connection) {
        this.connectionPool[i].useCount--;
        return true;
      }
    }
    return false;
  }

  async getSchema() {
    const isBelongToGroup = (relTable, relGroupName) => {
      const src = relTable.src;
      const dst = relTable.dst;
      const expectedRelName = `${relGroupName}_${src}_${dst}`;
      const result = relTable.name === expectedRelName;
      return result;
    };

    const conn = this.getConnection();
    try {
      const tables = await conn
        .query("CALL show_tables() RETURN *;")
        .then((res) => res.getAll());
      const nodeTables = [];
      const relTables = [];
      const relGroups = [];
      const rdf = [];
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
        } else if (table.type === TABLE_TYPES.REL_GROUP) {
          const name = table.name;
          relGroups.push({ name });
        } else if (table.type === TABLE_TYPES.RDF) {
          rdf.push(table);
        }
      }
      relGroups.forEach((relGroup) => {
        relGroup.rels = relTables
          .filter((relTable) => isBelongToGroup(relTable, relGroup.name))
          .map((relTable) => relTable.name);
      });
      const rdfRelTables = new Set();
      rdf.forEach((r) => {
        r.nodes = RDF_NODE_TABLE_SUFFIXES.map((suffix) => r.name + suffix);
        r.rels = RDF_REL_TABLE_SUFFIXES.map((suffix) => {
          const name = r.name + suffix;
          rdfRelTables.add(name);
          return name;
        });
      });
      relTables.forEach((relTable) => {
        if (rdfRelTables.has(relTable.name)) {
          const indexOfVirtualProperty = relTable.properties.findIndex(
            (property) => property.name === IRI_VIRTUAL_PROPERTY_NAME
          );
          if (indexOfVirtualProperty > -1) {
            relTable.properties[indexOfVirtualProperty].name =
              IRI_PROPERTY_NAME;
          }
        }
      });
      nodeTables.sort((a, b) => a.name.localeCompare(b.name));
      relTables.sort((a, b) => a.name.localeCompare(b.name));
      relGroups.sort((a, b) => a.name.localeCompare(b.name));
      rdf.sort((a, b) => a.name.localeCompare(b.name));
      return { nodeTables, relTables, relGroups, rdf };
    } finally {
      this.releaseConnection(conn);
    }
  }
}

module.exports = new Database();
