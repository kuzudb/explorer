const express = require("express");
const router = express.Router();
const logger = require("./utils/Logger");
const MODES = require("./utils/Constants").MODES;
const database = require("./utils/Database");
let sessionDb;
const queryMap = new Map();
try {
  sessionDb = require("./utils/SessionDatabase");
} catch (err) { }

const DEMO_MODE = MODES.DEMO;

let querySizeLimit = parseInt(process.env.KUZU_QUERY_SIZE_LIMIT);
querySizeLimit = isNaN(querySizeLimit) ? null : querySizeLimit;
if (querySizeLimit) {
  logger.info(`Query size limit: ${querySizeLimit}`);
}
let schema = null;

const processSingleResult = async (result, executionTimeMs = null) => {
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
  
  // Create query summary with timing information
  let querySummary = null;
  try {
    if (result.getQuerySummary && typeof result.getQuerySummary === 'function') {
      querySummary = result.getQuerySummary();
      // Fallback to JavaScript timing if querySummary is invalid
      if (!querySummary || (querySummary.compilingTime === 0 && querySummary.executionTime === 0)) {
        querySummary = {
          compilingTime: 0,
          executionTime: executionTimeMs || 0
        };
      }
    }
  } catch (error) {
    logger.warn('Could not get query summary:', error);
  }
  
  // Fallback to JavaScript timing if no valid querySummary
  if (!querySummary && executionTimeMs !== null) {
    querySummary = {
      compilingTime: 0,
      executionTime: executionTimeMs
    };
  }
  
  return { 
    rows, 
    dataTypes,
    querySummary 
  };
};

// This is a workaround for the JSON stringify issue with BigInt values.
const int128Replacer = (_, value) => {
  if (typeof value === "bigint") {
    return value.toString();
  }
  return value;
};

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
  const progressCallback = (pipelineProgress, numPipelinesFinished, numPipelines) => {
    queryMap.set(req.body.uuid, {
      pipelineProgress: pipelineProgress,
      numPipelinesFinished: numPipelinesFinished,
      numPipelines: numPipelines
    });
  }
  
  // Start timing
  const startTime = process.hrtime.bigint();
  
  try {
    let result;
    if (!params || Object.keys(params).length === 0) {
      result = req.body.progress ? await conn.query(query, progressCallback) : await conn.query(query);
      if (req.body.progress) {
        queryMap.delete(req.body.uuid);
      }
    } else {
      const preparedStatement = await conn.prepare(query);
      result = await conn.execute(preparedStatement, params);
    }
    
    // End timing
    const endTime = process.hrtime.bigint();
    const executionTimeMs = Number(endTime - startTime) / 1000000;
    let isSchemaChanged = false;
    if (mode === MODES.READ_WRITE) {
      const currentSchema = await database.getSchema();
      isSchemaChanged =
        JSON.stringify(schema) !== JSON.stringify(currentSchema);
    }
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
    let responseBody;
    if (!Array.isArray(result)) {
      responseBody = await processSingleResult(result, executionTimeMs);
      result.close();
      responseBody.isSchemaChanged = isSchemaChanged;
      responseBody.isMultiStatement = false;
    } else {
      responseBody = {
        isSchemaChanged,
        isMultiStatement: true,
        results: [],
      };
      for (const singleResult of result) {
        const singleResultBody = await processSingleResult(singleResult, executionTimeMs);
        responseBody.results.push(singleResultBody);
      }
      result.forEach((singleResult) => singleResult.close());
    }
    responseBody = JSON.stringify(responseBody, int128Replacer);
    return res.send(responseBody);
  } catch (err) {
    return res.status(400).send({ error: err.message });
  } finally {
    database.releaseConnection(conn);
  }
});

router.get("/progress/:uuid", (req, res) => {
  let progress = queryMap.get(req.params.uuid);
  if (progress) {
    return res.send(progress);
  } else {
    return res.status(404).end();
  }
});

module.exports = router;
