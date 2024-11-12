const express = require("express");
const router = express.Router();
const path = require("path");
const multer = require("multer");
const database = require("./utils/Database");
const uuid = require("uuid");
const DataImportUtil = require("./utils/DataImport");
const Constants = require("./utils/Constants");
const JOB_STATUS = Constants.JOB_STATUS;
const IMPORT_ACTIONS = Constants.IMPORT_ACTIONS;


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

router.post("/:job_id/exec", async (req, res) => {
  const jobId = req.params.job_id;
  if (!jobId || !uuid.validate(jobId)) {
    return res.status(400).send({ error: "Missing or invalid job ID" });
  }
  const job = jobsMap.get(jobId);
  const isAllUploaded = job.plan.every((step) => step.action !== IMPORT_ACTIONS.UPLOAD || step.status === JOB_STATUS.SUCCESS);
  if (!isAllUploaded) {
    return res.status(400).send({ error: "Not all files have been uploaded" });
  }
  res.status(202).send({ jobId });
  const conn = await database.getConnection();
  // Clear all previous warnings
  await conn.query("CALL clear_warnings();");
  try {
    for (let i = 0; i < job.plan.length; ++i) {
      const step = job.plan[i];
      if (step.action === IMPORT_ACTIONS.UPLOAD) {
        continue;
      }
      step.status = JOB_STATUS.PROCESSING;
      try {
        if (step.params) {
          const preparedStatement = await conn.prepare(step.cypher);
          await conn.execute(preparedStatement, step.params);
        } else {
          await conn.query(step.cypher);
        }
        step.status = JOB_STATUS.SUCCESS;
      } catch (err) {
        step.status = JOB_STATUS.ERROR;
        step.error = err.message;
        for (let j = i + 1; j < job.plan.length; ++j) {
          job.plan[j].status = JOB_STATUS.ERROR;
          job.plan[j].error = 'Previous step failed';
        }
        try {
          await DataImportUtil.deleteTmp(jobId);
        } catch (deleteErr) {
          // Ignore
        }
        // Rethrow error to stop execution
        throw err;
      }
    }
    const numberOfWarningsQueryResult = await conn.query("CALL SHOW_WARNINGS() RETURN COUNT(*) AS count;");
    const numberOfWarnings = (await numberOfWarningsQueryResult.getNext()).count;
    job.numberOfWarnings = numberOfWarnings;
    if (numberOfWarnings > 0) {
      const warningsQueryResult = await conn.query("CALL SHOW_WARNINGS() RETURN * LIMIT 100;");
      const warnings = await warningsQueryResult.getAll();
      const fileNameHash = {};
      job.plan.forEach((step) => {
        if (step.action === IMPORT_ACTIONS.UPLOAD) {
          fileNameHash[step.fileName] = step.displayName;
        }
      });
      job.warnings = warnings.map((warning) => {
        const message = warning.message;
        const lineNumber = warning.line_number;
        const filePath = path.parse(warning.file_path);
        const fileNameOnDisk = filePath.base;
        const fileName = fileNameHash[fileNameOnDisk] ? fileNameHash[fileNameOnDisk] : fileNameOnDisk;
        return {
          message,
          lineNumber,
          fileName,
        };
      });
    }
    try {
      await DataImportUtil.deleteTmp(jobId);
    } catch (err) {
      // Ignore
    }
  } finally {
    database.releaseConnection(conn);
  }
});

router.post("/:job_id/:file_name", upload.single("file"), async (req, res) => {
  const jobId = req.params.job_id;
  const fileName = req.params.file_name;
  if (!jobId || !uuid.validate(jobId)) {
    return res.status(400).send({ error: "Missing or invalid job ID" });
  }
  if (!fileName) {
    return res.status(400).send({ error: "Missing file name" });
  }
  const job = jobsMap.get(jobId);
  if (!job) {
    return res.status(404).send({ error: "Job not found" });
  }
  for (const step of job.plan) {
    if (step.action === IMPORT_ACTIONS.UPLOAD && step.fileName === fileName) {
      step.status = JOB_STATUS.SUCCESS;
      return res.status(200).send({ success: true });
    }
  }
  return res.status(404).send({ error: "File not found in import plan" });
});

router.get("/:job_id", async (req, res) => {
  const jobId = req.params.job_id;
  if (!jobId || !uuid.validate(jobId)) {
    return res.status(400).send({ error: "Missing or invalid job ID" });
  }
  const job = jobsMap.get(jobId);
  if (!job) {
    return res.status(404).send({ error: "Job not found" });
  }
  return res.status(200).send(job);
});

router.delete("/:job_id", async (req, res) => {
  const jobId = req.params.job_id;
  if (jobId) {
    jobsMap.delete(jobId);
    try {
      await DataImportUtil.deleteTmp(jobId);
    }
    catch (err) {
      // Ignore
    }
  }
  return res.sendStatus(204);
});

module.exports = router;
