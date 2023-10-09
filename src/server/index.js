const express = require("express");
const api = require("./API");
const path = require("path");

const app = express();
const PORT = 8000;
app.use(express.json({ limit: "16mb" }));
app.use("/api", api);
const distPath = path.join(__dirname, "..", "..", "dist");
app.use("/", express.static(distPath));

app.listen(PORT, () => {
  console.log("Deployed server started on port:", PORT);
});
