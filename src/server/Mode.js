const process = require("process");
const express = require("express");
const router = express.Router();
const NORMAL_MODE = "NORMAL";

router.get("/", async (_, res) => {
  try {
    const mode = process.env.MODE
      ? process.env.MODE.toUpperCase()
      : NORMAL_MODE;
    res.send({ mode });
  } catch (err) {
    return res.status(400).send({ error: err.message });
  }
});

module.exports = router;
