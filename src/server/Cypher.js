const database = require("./utils/database");
const express = require("express");
const router = express.Router();

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
  const query = req.body.query;
  if (!query || !typeof query === "string") {
    return res
      .status(400)
      .send({ error: "The query must be a string with length > 0" });
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
