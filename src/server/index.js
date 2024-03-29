const express = require("express");
const api = require("./API");
const path = require("path");
const process = require("process");
const database = require("./utils/Database");
const logger = require("./utils/Logger");
const fs = require("fs");

process.on("SIGINT", () => {
  logger.info("SIGINT received, exiting");
  process.exit(0);
});

process.on("SIGTERM", () => {
  logger.info("SIGTERM received, exiting");
  process.exit(0);
});

const app = express();
const PORT = 8000;
app.use(express.json({ limit: "128mb" }));
app.use("/api", api);
const distPath = path.join(__dirname, "..", "..", "dist");
app.use("/", express.static(distPath, { maxAge: "30d" }));

const conn = database.getConnection();

const getDbVersionFromQuery = (conn) => {
  return conn
    .query("CALL db_version() RETURN *;")
    .then((res) => {
      return res.getAll();
    })
    .then((res) => {
      const row = res[0];
      const version = Object.values(row)[0];
      return version;
    });
};

const getDbVersionFromPackage = () => {
  const packagePath = path.join(__dirname, "..", "..", "package.json");
  return fs.promises.readFile(packagePath, "utf8").then((data) => {
    const packageJson = JSON.parse(data);
    return packageJson.dependencies.kuzu;
  });
};

Promise.all([getDbVersionFromQuery(conn), getDbVersionFromPackage()])
  .then(([queryVersion, packageVersion]) => {
    // We do not actively maintain the version for dev builds, so if package
    // version includes "dev" we take the package version as the source of truth
    const version = packageVersion.includes("dev")
      ? packageVersion
      : queryVersion;
    logger.info("Version of Kùzu: " + version);
    const storageVersion = db.kuzu.STORAGE_VERSION;
    logger.info("Storage version of Kùzu: " + storageVersion);
    app.listen(PORT, () => {
      logger.info("Deployed server started on port: " + PORT);
    });
  })
  .catch((err) => {
    logger.error("Error getting version of Kùzu: " + err);
  })
  .finally(() => {
    database.releaseConnection(conn);
  });
