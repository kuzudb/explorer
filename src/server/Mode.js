const process = require("process");
const express = require("express");
const router = express.Router();
const READ_WRITE_MODE = "READ_WRITE";

router.get("/", async (_, res) => {
  try {
    const mode = process.env.MODE
      ? process.env.MODE.toUpperCase()
      : READ_WRITE_MODE;
    res.send({ mode });
  } catch (err) {
    return res.status(400).send({ error: err.message });
  }
});

module.exports = router;
