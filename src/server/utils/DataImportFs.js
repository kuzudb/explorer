const path = require("path");
const fs = require("fs/promises");

class DataImportFsUtils {
  getTmpPath(id) {
    return path.join("/tmp", id);
  }

  async createTmp(id) {
    const tmpPath = this.getTmpPath(id);
    await fs.rm(tmpPath, { recursive: true, force: true });
    await fs.mkdir(tmpPath);
    return tmpPath;
  }

  async deleteTmp(id) {
    const tmpPath = this.getTmpPath(id);
    await fs.rm(tmpPath, { recursive: true, force: true });
  }
}

module.exports = new DataImportFsUtils();
