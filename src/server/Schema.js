const database = require("./utils/Database");
const express = require("express");
const router = express.Router();

router.get("/", async (_, res) => {
  try {
    const schema = await database.getSchema();
    res.send(schema);
  } catch (err) {
    return res.status(400).send({ error: err.message });
  }
});

module.exports = router;
