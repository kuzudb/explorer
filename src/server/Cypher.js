const database = require("./utils/Database");
const express = require("express");
const router = express.Router();
const DEMO_MODE = "DEMO";

let schema = null;

router.post("/", async (req, res) => {
  if (!schema) {
    try {
      schema = await database.getSchema();
    } catch (err) {
      return res.status(400).send({ error: err.message });
    }
  }
  const conn = database.getConnection();
  const mode = database.getAccessModeString();
  const query = req.body.query;
  if (!query || !typeof query === "string") {
    return res
      .status(400)
      .send({ error: "The query must be a string with length > 0" });
  }
  const isQueryCopy = query.trim().toUpperCase().startsWith("COPY");
  if (mode === DEMO_MODE && isQueryCopy) {
    return res
      .status(400)
      .send({ error: "COPY command is not allowed in demo mode" });
  }
  const params = req.body.params;
  if (params && !typeof params === "object") {
    return res.status(400).send({ error: "Params must be an object" });
  }
  try {
    let result;
    if (!params) {
      result = await conn.query(query);
    } else {
      const preparedStatment = await conn.prepare(query);
      result = await conn.execute(preparedStatment, params);
    }
    const rows = await result.getAll();
    const columnTypes = await result.getColumnDataTypes();
    const columnNames = await result.getColumnNames();
    const dataTypes = {};
    columnNames.forEach((name, i) => {
      dataTypes[name] = columnTypes[i];
    });
    const currentSchema = await database.getSchema();
    const isSchemaChanged =
      JSON.stringify(schema) !== JSON.stringify(currentSchema);
    schema = currentSchema;
    return res.send({ rows, dataTypes, isSchemaChanged });
  } catch (err) {
    return res.status(400).send({ error: err.message });
  } finally {
    database.releaseConnection(conn);
  }
});

module.exports = router;
