const { spawn } = require("child_process");
const path = require("path");
const fs = require("fs/promises");

const tempPath = path.join(__dirname, "..", "..", "..", "temp");
const datasetsPath = path.join(__dirname, "..", "..", "..", "datasets");
const configPath = path.join(__dirname, "..", "..", "..", "datasets.json");

const deleteFolderRecursive = async (path) => {
  try {
    await fs.rm(path, { recursive: true, force: true });
  } catch (err) {
    if (err.code !== "ENOENT") {
      throw err;
    }
  }
};

(async () => {
  console.log("Reading config file from", configPath);
  const config = JSON.parse(await fs.readFile(configPath, "utf-8"));
  console.log("Deleting temp and datasets folders");
  await deleteFolderRecursive(tempPath);
  await deleteFolderRecursive(datasetsPath);
  console.log("Cloning repository");
  await new Promise((resolve, reject) => {
    const gitProcess = spawn("git", [
      "clone",
      "-n",
      "--depth=1",
      "--filter=tree:0",
      config.repository,
      tempPath,
    ]);
    gitProcess.stdout.on("data", (data) => {
      console.log(data.toString());
    });
    gitProcess.stderr.on("data", (data) => {
      console.error(data.toString());
    });
    gitProcess.on("close", (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject("Error cloning repository");
      }
    });
  });
  console.log("Gathering datasets paths");
  const datasetPaths = config.datasets.map((d) => {
    console.log(`\t - ${d.name} at ${d.path}`);
    return path.join(config.datasetsRoot, d.path);
  });
  console.log("Initializing sparse checkout");
  await new Promise((resolve, reject) => {
    const gitProcess = spawn(
      "git",
      ["sparse-checkout", "set", "--no-cone", ...datasetPaths],
      { cwd: tempPath }
    );
    gitProcess.stdout.on("data", (data) => {
      console.log(data.toString());
    });
    gitProcess.stderr.on("data", (data) => {
      console.error(data.toString());
    });
    gitProcess.on("close", (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject("Error initializing sparse checkout");
      }
    });
  });
  console.log("Pulling repository");
  await new Promise((resolve, reject) => {
    const gitProcess = spawn("git", ["checkout", config.commitHash], {
      cwd: tempPath,
    });
    gitProcess.stdout.on("data", (data) => {
      console.log(data.toString());
    });
    gitProcess.stderr.on("data", (data) => {
      console.error(data.toString());
    });
    gitProcess.on("close", (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject("Error pulling repository");
      }
    });
  });
  console.log("Moving datasets");
  await fs.rename(path.join(tempPath, config.datasetsRoot), datasetsPath);
  console.log("Deleting temp folder");
  await deleteFolderRecursive(tempPath);
  console.log("Done");
  process.exit(0);
})();
