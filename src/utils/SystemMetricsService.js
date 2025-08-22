import Axios from "./AxiosWrapper";

class SystemMetricsService {
  constructor() {
    this.pendingPromise = null;
  }

  async getBMInfoFromKuzu() {
    const response = await Axios.get('/api/system/metrics');
    return response.data;
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
