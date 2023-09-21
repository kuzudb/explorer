const express = require("express");
const api = require("./API");

module.exports = (devServer) => {
  devServer.app.use(express.json({ limit: "16mb" }));
  devServer.app.use("/api", api);
};
