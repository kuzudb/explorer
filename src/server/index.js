const express = require("express");
const api = require("./API");

const server = express();

server.use(express.json({ limit: "16mb" }));
server.use("/api", api);

module.exports = server;
