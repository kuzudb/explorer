import Axios from "axios";
import DataDefinitionLanguage from "./DataDefinitionLanguage";

class NeighborsFetcher {
  constructor() {}

  async fetchNeighbors(
    tableName,
    primaryKey,
    primaryKeyValue,
    sizeLimit = 100
  ) {
    tableName = DataDefinitionLanguage._escapeName(tableName);
    primaryKey = DataDefinitionLanguage._escapeName(primaryKey);

    const query = `MATCH (src:${tableName}) -[r]- (dst) WHERE src.${primaryKey} = $pk RETURN r, dst LIMIT ${sizeLimit}`;
    const params = { pk: primaryKeyValue };
    const result = (await Axios.post("api/cypher", { query, params })).data;
    return result;
  }
}

export default new NeighborsFetcher();
