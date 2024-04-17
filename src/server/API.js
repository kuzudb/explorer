const express = require("express");
const router = express.Router();
const schema = require("./Schema");
const cypher = require("./Cypher");
const datasets = require("./Datasets");
const mode = require("./Mode");
const gpt = require("./Gpt");
const session = require("./Session");
const database = require("./utils/Database");

router.use("/schema", schema);
router.use("/cypher", cypher);
router.use("/datasets", datasets);
router.use("/mode", mode);
router.use("/gpt", gpt);
router.use("/session", session);

router.get("/", async (_, res) => {
  const version = await database.getDbVersion();
  res.send({
    status: "ok",
    version: version.version,
    storageVersion: version.storageVersion,
    mode: database.getAccessModeString(),
  });
});

module.exports = router;
