const express = require("express");
const cors = require("cors");
const api = require("./API");
const path = require("path");
const process = require("process");
const database = require("./utils/Database");
const logger = require("./utils/Logger");

const CROSS_ORIGIN = process.env.CROSS_ORIGIN
  ? process.env.CROSS_ORIGIN.toLowerCase() === "true"
  : false;

process.on("SIGINT", () => {
  logger.info("SIGINT received, exiting");
  process.exit(0);
});

process.on("SIGTERM", () => {
  logger.info("SIGTERM received, exiting");
  process.exit(0);
});

const app = express();
if (CROSS_ORIGIN) {
  app.use(cors());
  logger.info("CORS enabled for all origins");
}
const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8000;
app.use(express.json({ limit: "128mb" }));
app.use("/api", api);
const distPath = path.join(__dirname, "..", "..", "dist");
app.use("/", express.static(distPath, { maxAge: "30d" }));

database.getDbVersion()
  .then((res) => {
    const version = res.version;
    const storageVersion = res.storageVersion;
    const isInitialDatabaseEmpty = database.isInitialDatabaseEmpty;
    logger.info("Version of Kùzu: " + version);
    logger.info("Storage version of Kùzu: " + storageVersion);
    if (!isInitialDatabaseEmpty && version.includes("dev")) {
      logger.warn("You are running a dev build of Kùzu Explorer. Please make sure that the database files opened are created by the same version of Kùzu");
    }
    app.listen(PORT, () => {
      logger.info("Deployed server started on port: " + PORT);
    });
  })
  .catch((err) => {
    logger.error("Error getting version of Kùzu: " + err);
  });
