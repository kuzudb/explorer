const express = require("express");
const router = express.Router();
const logger = require("./utils/Logger");
const database = require("./utils/Database");

router.get("/", async (req, res) => {
try {
    const metrics = await getBufferManagerMetrics();
    res.json(metrics);
} catch (error) {
    logger.error("Error getting system metrics:", error);
    res.status(500).json({ error: "Failed to get buffer manager metrics" });
}
});

async function getBufferManagerMetrics() {
  try {
    const conn = database.getConnection();
    try {
      const result = await conn.query("CALL bm_info() RETURN *;");
      const bufferData = await result.getAll();
      result.close();
      
      if (bufferData && bufferData.length > 0) {
        const buffer = bufferData[0];
        const total = parseInt(buffer.mem_limit) || 0;
        const used = parseInt(buffer.mem_usage) || 0;
        const free = Math.max(0, total - used);
        const percentage = (used / total) * 100;
        return {
          total: total,
          used: used,
          free: free,
          percentage: percentage
        };
      } else {
        throw new Error('No buffer manager data returned from Kuzu');
      }
    } finally {
      database.releaseConnection(conn);
    }
  } catch (error) {
    logger.warn('Could not get buffer manager metrics from Kuzu:', error.message);
  }
}

module.exports = router;
