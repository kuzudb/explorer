const database = require("./utils/database");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const conn = database.getConnection();
  try {
    const nodeTableNames = await conn.getNodeTableNames();
    const relTableNames = await conn.getRelTableNames();
    const nodeTableSchemas = await Promise.all(
      nodeTableNames.map((table) => conn.getNodePropertyNames(table))
    );
    const nodeTables = nodeTableNames.map((table, i) => ({
      name: table,
      properties: nodeTableSchemas[i],
    }));
    const relTableSchemas = await Promise.all(
      relTableNames.map((table) => conn.getRelPropertyNames(table))
    );
    const relTables = relTableNames.map((table, i) => ({
      name: table,
      properties: relTableSchemas[i],
    }));
    res.send({ nodeTables, relTables });
  } catch (err) {
    return res.status(400).send({ error: err.message });
  } finally {
    database.releaseConnection(conn);
  }
});

module.exports = router;
