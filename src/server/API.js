const express = require("express");
const router = express.Router();
const schema = require("./Schema");
const cypher = require("./Cypher");
const datasets = require("./Datasets");
const mode = require("./Mode");
const gpt = require("./Gpt");

router.use("/schema", schema);
router.use("/cypher", cypher);
router.use("/datasets", datasets);
router.use("/mode", mode);
router.use("/gpt", gpt);

module.exports = router;
