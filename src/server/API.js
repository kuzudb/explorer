const express = require("express");
const router = express.Router();
const schema = require("./Schema");
const cypher = require("./Cypher");

router.use("/schema", schema);
router.use("/cypher", cypher);

module.exports = router;
