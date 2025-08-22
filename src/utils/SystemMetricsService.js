import Axios from "./AxiosWrapper";
import Kuzu from "./KuzuWasm";
import { MODES } from "./Constants";

class SystemMetricsService {
  constructor() {
    this.pendingPromise = null;
  }

  async getBMInfoFromKuzu() {
    const modeResponse = await Axios.get("/api/mode");
    const isWasm = modeResponse.data.mode === MODES.WASM || modeResponse.data.mode === MODES.DEMO;
    
    if (isWasm) {
      // Use WASM mode
      const result = await Kuzu.query('CALL bm_info() RETURN *;');
      if (result?.rows?.length > 0) {
        const row = result.rows[0];
        const total = parseInt(row.mem_limit) || 0;
        const used = parseInt(row.mem_usage) || 0;
        const free = Math.max(0, total - used);
        const percentage = total > 0 ? (used / total) * 100 : 0;
        console.log('Buffer manager stats from WASM');
        return {
          total: total,
          used: used,
          free: free,
          percentage: percentage
        };
      }
      
      throw new Error('No buffer manager data returned from WASM');
    } else {
      // Use docker mode
      const response = await Axios.post('/api/cypher', {
        query: 'CALL bm_info() RETURN *;'
      });
      if (response.data?.rows?.length > 0) {
        const row = response.data.rows[0];
        const total = parseInt(row.mem_limit) || 0;
        const used = parseInt(row.mem_usage) || 0;
        const free = Math.max(0, total - used);
        const percentage = total > 0 ? (used / total) * 100 : 0;
        console.log('Buffer manager stats from docker');
        return {
          total: total,
          used: used,
          free: free,
          percentage: percentage
        };
      }
      
      throw new Error('No buffer manager data returned from docker');
    }
  }

  async getMetrics() {
    // Pending request, return promise
    if (this.pendingPromise) {
      return this.pendingPromise;
    }
    // New promise
    this.pendingPromise = this.getBMInfoFromKuzu();    
    try {
      const result = await this.pendingPromise;
      return result;
    } finally {
      this.pendingPromise = null;
    }
  }
}

export default new SystemMetricsService();
