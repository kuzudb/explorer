const express = require("express");
const router = express.Router();
const path = require("path");
const posixPath = require("path/posix");
const fs = require("fs/promises");
const database = require("./utils/database");

const DATASETS_TO_SHOW = {
  "demo-db": "demo-db/csv",
  "ldbc-0.1": "sf-0.1",
  tinysnb: "tinysnb",
  "snap-amazon": "snap/amazon0601/csv",
  "snap-twitter": "snap/twitter/csv",
};

const SCHEMA_FILE = "schema.cypher";
const COPY_FILE = "copy.cypher";

const getBasePath = () => {
  return path.join(__dirname, "..", "..", "kuzu", "dataset");
};

const getDatasetPath = (dataset) => {
  const base = getBasePath();
  const datasetPath = DATASETS_TO_SHOW[dataset];
  if (!datasetPath) {
    return null;
  }
  return path.resolve(path.join(base, datasetPath));
};

router.get("/", async (_, res) => {
  return res.send(Object.keys(DATASETS_TO_SHOW));
});

router.get("/:dataset", async (req, res) => {
  const dataset = req.params.dataset;
  const datasetPath = getDatasetPath(dataset);
  if (!datasetPath) {
    return res.sendStatus(404);
  }
  const schema = path.join(datasetPath, SCHEMA_FILE);
  try {
    const content = await fs.readFile(schema, "utf-8");
    return res.send({ dataset, schema: content });
  } catch (err) {
    return res.sendStatus(400);
  }
});

router.get("/:dataset/copy", async (req, res) => {
  res.set("Content-Type", "text/plain");
  const dataset = req.params.dataset;
  const datasetPath = getDatasetPath(dataset);
  const base = getBasePath();
  if (!datasetPath) {
    return res.sendStatus(404);
  }
  let commands;
  try {
    const copy = path.join(datasetPath, COPY_FILE);
    const schema = path.join(datasetPath, SCHEMA_FILE);
    const schemaContent = await fs.readFile(schema, "utf-8");
    const copyContent = await fs.readFile(copy, "utf-8");
    const ddls = schemaContent
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line.length > 0);
    const copyCommands = copyContent
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line.length > 0)
      .map((line) => line.replace("dataset/", posixPath.resolve(base) + "/"));
    commands = ddls.concat(copyCommands);
  } catch (err) {
    return res.sendStatus(500);
  }
  const conn = database.getConnection();
  try {
    for (let i = 0; i < commands.length; i++) {
      const command = commands[i];
      res.write("Executing: " + command + "\n");
      const result = await conn.query(command);
      const rows = await result.getAll();
      const firstRow = rows[0];
      if (!firstRow) {
        continue;
      }
      const firstValue = Object.values(firstRow)[0];
      if (firstValue) {
        res.write(`Result: ${firstValue}\n`);
      } else {
        res.write("Result: OK\n");
      }
    }
    res.end();
  } catch (err) {
    res.write("Error: " + err.message + "\n");
    res.end();
  } finally {
    database.releaseConnection(conn);
  }
});

module.exports = router;
