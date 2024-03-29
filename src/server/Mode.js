const express = require("express");
const router = express.Router();
const database = require("./utils/Database");

router.get("/", async (_, res) => {
  try {
    const mode = database.getAccessModeString();
    res.send({
      mode,
      isProduction: process.env.NODE_ENV === "production",
  });
  } catch (err) {
    return res.status(400).send({ error: err.message });
  }
});

module.exports = router;
