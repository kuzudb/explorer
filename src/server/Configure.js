const express = require("express");
const api = require("./API");
const baseUrl = require("./utils/BaseURL");

module.exports = (devServer) => {
  devServer.app.use(express.json({ limit: "128mb" }));
  devServer.app.use(`${baseUrl}api`, api);
};
