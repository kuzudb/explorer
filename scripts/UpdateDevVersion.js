const fs = require("fs");
const path = require("path");
const exec = require("child_process").exec;
const process = require("process");

const PACKAGE_JSON_PATH = path.resolve(__dirname, "../package.json");
const CMD = "npm view kuzu@next version";

(() => {
  exec(CMD, (error, stdout, _) => {
    if (error) {
      console.error(`Failed to get latest dev version: ${error}`);
      process.exit(1);
    }
    const latestVersion = stdout.trim();
    console.log(`Latest dev version is ${latestVersion}`);
    fs.readFile(PACKAGE_JSON_PATH, "utf8", (err, data) => {
      console.log("Opened package.json at", PACKAGE_JSON_PATH);
      if (err) {
        console.error("Error reading package.json", err);
        process.exit(1);
      }
      const packageJson = JSON.parse(data);
      packageJson.dependencies.kuzu = `${latestVersion}`;
      packageJson.dependencies["kuzu-wasm"] = `${latestVersion}`;
      fs.writeFile(
        PACKAGE_JSON_PATH,
        JSON.stringify(packageJson, null, 2),
        (err) => {
          if (err) {
            console.error("Error writing package.json", err);
            process.exit(1);
          }
          console.log(`Updated kuzu to ${latestVersion}`);
          process.exit(0);
        }
      );
    });
  });
})();
