const express = require("express");
const router = express.Router();
const database = require("./utils/Database");
const uuid = require("uuid");
const fs = require("fs/promises");
const path = require("path");
const DataImportUtil = require("./utils/DataImport");

const jobsMap = new Map();

router.post("/:job_id", async (req, res) => {
  const jobId = req.params.job_id;
  if (!jobId || !uuid.validate(jobId)) {
    return res.status(400).send({
      success: false,
      errors: ["Missing or invalid job ID"]
    });

  }
  const config = req.body.config;
  if (!config) {
    return res.status(400).send({
      success: false,
      errors: ["Missing config"]
    });
  }
  const { success, errors } = await DataImportUtil.validateImport(config);
  if (!success) {
    return res.status(400).send({
      success: false,
      errors
    });
  }
  const tmpDirPath = path.join("/tmp", jobId);
  try {
    await fs.rm(tmpDirPath, { recursive: true, force: true });
    await fs.mkdir(tmpDirPath);
  } catch (err) {
    return res.status(500).send({
      success: false,
      errors: ["Error creating temporary directory"]
    });
  }
  const plan = await DataImportUtil.createImportPlan(config, tmpDirPath);

  return res.status(200).send({
    plan,
    jobId,
    success: true,
  });
});

router.post("/:job_id/exec", async (_, res) => {
  const jobId = req.params.job_id;
  if (!jobId || !uuid.validate(jobId)) {
    return res.status(400).send({ error: "Missing or invalid job ID" });
  }
  return res.status(200).send({ jobId });
});

router.post("/:job_id/:file_id", async (_, res) => {
  const jobId = req.params.job_id;
  if (!jobId || !uuid.validate(jobId)) {
    return res.status(400).send({ error: "Missing or invalid job ID" });
  }
  const fileId = req.params.file_id;
  if (!fileId || !uuid.validate(fileId)) {
    return res.status(400).send({ error: "Missing or invalid file ID" });
  }
});

module.exports = router;
