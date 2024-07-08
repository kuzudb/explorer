const express = require("express");
const router = express.Router();
const schema = require("./Schema");
const cypher = require("./Cypher");
const datasets = require("./Datasets");
const mode = require("./Mode");
const gpt = require("./Gpt");
const session = require("./Session");
const state = require("./State");
const reset = require("./Reset");

router.use("/schema", schema);
router.use("/cypher", cypher);
router.use("/datasets", datasets);
router.use("/mode", mode);
router.use("/gpt", gpt);
router.use("/session", session);
router.use("/reset", reset);
router.use("/", state);

module.exports = router;
