const express = require("express");
const router = express.Router();
const database = require("./utils/Database");
const MODES = require("./utils/Constants").MODES;

router.post("/", async (_, res) => {
  try {
    const mode = database.getAccessModeString();
    if (mode === MODES.DEMO_MODE) {
      return res.status(400).send({
        error: "Cannot reset Kùzu in live demo mode.",
      });
    }
    await database.reset();
    return res.send({ message: "Kùzu has been reset." });
  } catch (err) {
    return res.status(400).send({ error: err.message });
  }
});

module.exports = router;
