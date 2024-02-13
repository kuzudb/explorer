const sessionDb = require("./utils/SessionDatabase");
const express = require("express");
const router = express.Router();

router.get("/settings", async (_, res) => {
  try {
    const settings = await sessionDb.getSetting();
    res.send(settings);
  } catch (err) {
    return res.status(400).send({ error: err.message });
  }
});

router.post("/settings", async (req, res) => {
  try {
    await sessionDb.setSetting(req.body.key);
    res.send({ success: true });
  } catch (err) {
    return res.status(400).send({ error: err.message });
  }
});

module.exports = router;
