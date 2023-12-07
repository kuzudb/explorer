const express = require("express");
const router = express.Router();
// const database = require("./utils/Database");

router.post("/", async (_, res) => {
  try {
  } catch (err) {
    return res.status(400).send({ error: err.message });
  }
});

module.exports = router;
