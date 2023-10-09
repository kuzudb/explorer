const express = require("express");
const api = require("./API");
const path = require("path");
const process = require("process");

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
app.use("/", express.static(distPath));

app.listen(PORT, () => {
  console.log("Deployed server started on port:", PORT);
});
