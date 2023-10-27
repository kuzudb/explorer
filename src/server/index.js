const express = require("express");
const api = require("./API");
const path = require("path");
const process = require("process");
const database = require("./utils/Database");

process.on("SIGINT", () => {
  console.log("SIGINT received, exiting");
  process.exit(0);
});

process.on("SIGTERM", () => {
  console.log("SIGTERM received, exiting");
  process.exit(0);
});

const app = express();
const PORT = 8000;
app.use(express.json({ limit: "16mb" }));
app.use("/api", api);
const distPath = path.join(__dirname, "..", "..", "dist");
app.use("/", express.static(distPath, { maxAge: "30d" }));

const conn = database.getConnection();
conn
  .query("CALL db_version() RETURN *;")
  .then((res) => {
    return res.getAll();
  })
  .then((res) => {
    const row = res[0];
    const version = Object.values(row)[0];
    console.log("Version of Kùzu:", version);
    app.listen(PORT, () => {
      console.log("Deployed server started on port:", PORT);
    });
  })
  .catch((err) => {
    console.log("Error getting version of Kùzu:", err);
  })
  .finally(() => {
    database.releaseConnection(conn);
  });
