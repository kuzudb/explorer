const express = require("express");
const api = require("./API");

module.exports = (devServer) => {
  devServer.app.use(express.json({ limit: "128mb" }));
  devServer.app.use("/api", api);
};
