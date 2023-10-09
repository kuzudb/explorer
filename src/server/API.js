const express = require("express");
const router = express.Router();
const schema = require("./Schema");
const cypher = require("./Cypher");
const datasets = require("./Datasets");

router.use("/schema", schema);
router.use("/cypher", cypher);
router.use("/datasets", datasets);

module.exports = router;
