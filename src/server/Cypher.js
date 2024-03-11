const express = require("express");
const router = express.Router();
const logger = require("./utils/Logger");
const MODES = require("./utils/Constants").MODES;
const database = require("./utils/Database");
let sessionDb;
try {
  sessionDb = require("./utils/SessionDatabase");
} catch (err) {}

const DEMO_MODE = MODES.DEMO;

let querySizeLimit = parseInt(process.env.KUZU_QUERY_SIZE_LIMIT);
querySizeLimit = isNaN(querySizeLimit) ? null : querySizeLimit;
if (querySizeLimit) {
  logger.info(`Query size limit: ${querySizeLimit}`);
}
let schema = null;

router.post("/", async (req, res) => {
  const mode = database.getAccessModeString();
  if (!schema && mode === MODES.READ_WRITE) {
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
    let rows;
    const resultSize = result.getNumTuples();
    if (!querySizeLimit || resultSize <= querySizeLimit) {
      rows = await result.getAll();
    } else {
      rows = [];
      for (let i = 0; i < querySizeLimit; ++i) {
        rows.push(await result.getNext());
      }
    }
    const columnTypes = await result.getColumnDataTypes();
    const columnNames = await result.getColumnNames();
    const dataTypes = {};
    columnNames.forEach((name, i) => {
      dataTypes[name] = columnTypes[i];
    });
    let isSchemaChanged = false;
    if (mode === MODES.READ_WRITE) {
      const currentSchema = await database.getSchema();
      isSchemaChanged =
        JSON.stringify(schema) !== JSON.stringify(currentSchema);
    }
    // This is a workaround for the JSON stringify issue with INT128 values
    const replacer = (key, value) => {
      if (typeof value === "bigint") {
        return value.toString();
      }
      return value;
    };
    const responseBody = JSON.stringify(
      { rows, dataTypes, isSchemaChanged },
      replacer
    );
    if (sessionDb && req.body.updateHistory) {
      try {
        await sessionDb.upsertHistoryItem({
          uuid: req.body.uuid,
          isQueryGenerationMode: Boolean(req.body.isQueryGenerationMode),
          cypherQuery: query,
        });
      } catch (err) {
        // Ignore the error. It fails to record the history, but the query is
        // still executed.
      }
    }
    return res.send(responseBody);
  } catch (err) {
    return res.status(400).send({ error: err.message });
  } finally {
    database.releaseConnection(conn);
  }
});

module.exports = router;
