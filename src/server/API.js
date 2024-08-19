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
const importApi = require("./Import");

const database = require("./utils/Database");
const MODES = require("./utils/Constants").MODES;
const currentMode = database.getAccessModeString();


router.use("/schema", schema);
router.use("/cypher", cypher);
router.use("/datasets", datasets);
router.use("/mode", mode);
router.use("/gpt", gpt);
router.use("/session", session);
if (currentMode === MODES.READ_WRITE) {
    router.use("/reset", reset);
    router.use("/import", importApi);
}
router.use("/", state);

module.exports = router;
