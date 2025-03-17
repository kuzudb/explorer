const express = require("express");
const router = express.Router();
const database = require("./utils/Database");
const MODES = require("./utils/Constants").MODES;

const isWasmMode = process.env.KUZU_WASM &&
  process.env.KUZU_WASM.toLowerCase() === "true";

router.get("/", async (_, res) => {
  const isProduction = true;
  try {
    const mode = database.getAccessModeString();
    if (isWasmMode && mode !== MODES.DEMO) {
      return res.send({
        mode: MODES.WASM,
        isProduction,
      });
    }
    res.send({
      mode,
      isProduction,
    });
  } catch (err) {
    return res.status(400).send({ error: err.message });
  }
});

module.exports = router;
