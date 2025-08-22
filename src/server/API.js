const express = require("express");
const router = express.Router();
const process = require("process");
const logger = require("./utils/Logger");
const MODES = require("./utils/Constants").MODES;


const isWasmMode = process.env.KUZU_WASM &&
    process.env.KUZU_WASM.toLowerCase() === "true";

// APIs that are only available in backend mode
if (!isWasmMode) {
    database = require("./utils/Database");
    const currentMode = database.getAccessModeString();
    const schema = require("./Schema");
    const cypher = require("./Cypher");
    const session = require("./Session");
    const state = require("./State");
    const reset = require("./Reset");
    const importApi = require("./Import");
    const gpt = require("./Gpt");

    router.use("/schema", schema);
    router.use("/cypher", cypher);
    router.use("/session", session);
    router.use("/", state);
    router.use("/gpt", gpt);
    if (currentMode === MODES.READ_WRITE) {
        router.use("/reset", reset);
        router.use("/import", importApi);
    }
} else {
    logger.info("Running in WebAssembly mode, some APIs are disabled");
}

// APIs that are available in both backend and wasm mode
const datasets = require("./Datasets");
const mode = require("./Mode");
const systemMetrics = require("./SystemMetrics");
router.use("/datasets", datasets);
router.use("/mode", mode);
router.use("/system/metrics", systemMetrics);

module.exports = router;
