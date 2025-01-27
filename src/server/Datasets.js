const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs/promises");
const fsSync = require("fs");
const process = require("process");
const database = require("./utils/Database");

let DATASETS_CONFIG, DATASETS_PROMISE, DATASETS_TO_SHOW;

const getDatasetsToShow = async () => {
  if (!DATASETS_TO_SHOW) {
    if (!DATASETS_PROMISE) {
      DATASETS_PROMISE = fs
        .readFile(path.join(__dirname, "..", "..", "datasets.json"), "utf-8")
        .then((content) => {
          DATASETS_CONFIG = JSON.parse(content);
          DATASETS_PROMISE = null;
          DATASETS_TO_SHOW = {};
          DATASETS_CONFIG.datasets.forEach((d) => {
            if (process.env.NODE_ENV === "production" && !d.isProduction) {
              return;
            }
            DATASETS_TO_SHOW[d.name] = d.path;
          });
        });
    }
    await DATASETS_PROMISE;
  }
  return DATASETS_TO_SHOW;
};

const SCHEMA_FILE = "schema.cypher";
const COPY_FILE = "copy.cypher";

const getBasePath = () => {
  return path.join(__dirname, "..", "..", "datasets");
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
  await getDatasetsToShow();
  return res.send(Object.keys(DATASETS_TO_SHOW));
});

router.get("/:dataset", async (req, res) => {
  await getDatasetsToShow();
  const dataset = req.params.dataset;
  const datasetPath = getDatasetPath(dataset);
  if (!datasetPath) {
    return res.sendStatus(404);
  }
  const schema = path.join(datasetPath, SCHEMA_FILE);
  const copy = path.join(datasetPath, COPY_FILE);
  try {
    const datasetRelativePath = DATASETS_TO_SHOW[dataset];
    let copyContent = await fs.readFile(copy, "utf-8");
    // Remove all "datasetRelativePath" from the copy file
    copyContent = copyContent.replace(
      new RegExp(`dataset/${datasetRelativePath}`, "g"),
      ""
    );
    // List all files in the `datasetPath`, and remove the `schema` and `copy` files
    const files = await fs.readdir(datasetPath);
    const filesToShow = files.filter(
      (file) => file !== SCHEMA_FILE && file !== COPY_FILE
    );
    let schemaContent = await fs.readFile(schema, "utf-8");
    return res.send({ dataset, schema: schemaContent, copy: copyContent, files: filesToShow });
  } catch (err) {
    return res.sendStatus(400);
  }
});

router.get("/:dataset/files/:file", async (req, res) => {
  await getDatasetsToShow();
  const dataset = req.params.dataset;
  const fileName = req.params.file;
  const datasetPath = getDatasetPath(dataset);
  if (!datasetPath) {
    return res.sendStatus(404);
  }
  const filesToShow = await fs.readdir(datasetPath);
  if (!filesToShow.includes(fileName)) {
    return res.sendStatus(404);
  }
  try {
    const filePath = path.join(datasetPath, fileName);
    if (fileName.endsWith(".csv")) {
      res.set("Content-Type", "text/csv");
    } else if (fileName.endsWith(".parquet")) {
      res.set("Content-Type", "application/octet-stream");
    } else if (fileName.endsWith(".json")) {
      res.set("Content-Type", "application/json");
    }
    const stream = fsSync.createReadStream(filePath);
    stream.on("error", _ => {
      return res.sendStatus(500);
    });
    stream.pipe(res);
  } catch (err) {
    return res.sendStatus(404);
  }
});

router.get("/:dataset/copy", async (req, res) => {
  await getDatasetsToShow();
  res.set("Content-Type", "text/plain");
  const dataset = req.params.dataset;
  const datasetPath = getDatasetPath(dataset);
  const base = getBasePath();
  base = base.replaceAll("\\", "/");
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
      .map((line) => {
        return line.replace("dataset/", base + "/")
      });
    commands = ddls.concat(copyCommands);
  } catch (err) {
    return res.sendStatus(500);
  }
  const conn = database.getConnection();
  try {
    for (let i = 0; i < commands.length; ++i) {
      const command = commands[i];
      res.write("Executing: " + command + "\n");
      const result = await conn.query(command);
      const rows = await result.getAll();
      const firstRow = rows[0];
      if (!firstRow) {
        continue;
      }
      const firstValue = Object.values(firstRow)[0];
      result.close();
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
