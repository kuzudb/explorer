const express = require("express");
const router = express.Router();
const database = require("./utils/Database");

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
