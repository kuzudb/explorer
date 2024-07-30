const express = require("express");
const router = express.Router();
const multer = require("multer");
const database = require("./utils/Database");
const uuid = require("uuid");
const fs = require("fs/promises");
const path = require("path");
const DataImportUtil = require("./utils/DataImport");

const jobsMap = new Map();

const storage = multer.diskStorage({
  destination: function (req, _, cb) {
    const jobId = req.params.job_id;
    const tmpDirPath = DataImportUtil.getTmpPath(jobId);
    cb(null, tmpDirPath);
  },
  filename: function (req, _, cb) {
    cb(null, req.params.file_name);
  },
});

const upload = multer({ storage });

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
  let tmpDirPath;
  try {
    tmpDirPath = await DataImportUtil.createTmp(jobId);
  } catch (err) {
    return res.status(500).send({
      success: false,
      errors: ["Error creating temporary directory"]
    });
  }
  const plan = await DataImportUtil.createImportPlan(config, tmpDirPath);
  jobsMap.set(jobId, {
    id: jobId,
    plan,
    path: tmpDirPath,
  });

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

router.post("/:job_id/:file_name", upload.single("file"), async (req, res) => {
  // const jobId = req.params.job_id;
  // if (!jobId || !uuid.validate(jobId)) {
  //   return res.status(400).send({ error: "Missing or invalid job ID" });
  // }
  // const fileName = req.params.file_name;
  // if (!fileId || !uuid.validate(fileId)) {
  //   return res.status(400).send({ error: "Missing or invalid file ID" });
  // }
  return res.status(200).send({ success: true });
});

module.exports = router;
