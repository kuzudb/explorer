import Axios from "axios";
import DataDefinitionLanguage from "./DataDefinitionLanguage";
import Kuzu from "./KuzuWasm";

class NeighborsFetcher {
  constructor() { }

  async fetchNeighbors(
    tableName,
    primaryKey,
    primaryKeyValue,
    sizeLimit = 100,
    isWasm = false
  ) {
    tableName = DataDefinitionLanguage._escapeName(tableName);
    primaryKey = DataDefinitionLanguage._escapeName(primaryKey);

    const queries = [
      `MATCH (dst) -[r] -> (src:${tableName}) WHERE src.${primaryKey} = $pk RETURN r, dst LIMIT ${sizeLimit};`,
      `MATCH (src:${tableName}) -[r]-> (dst) WHERE src.${primaryKey} = $pk RETURN r, dst LIMIT ${sizeLimit};`
    ];
    const params = { pk: primaryKeyValue };
    let results = await Promise.all(
      queries.map(
        query => {
          if (isWasm) {
            return Kuzu.query(query, params).catch(err => {
              return null;
            });
          }
          return Axios
            .post("api/cypher", { query, params })
            .catch(err => {
              return null
            })
        }
      )
    );
    results = results.filter(result => !!result);
    if(!isWasm) {
      results = results.map(result => result.data);
    }
    if (results.length === 0) {
      return null;
    }
    const result = results[0];
    if (results.length > 1) {
      results[1].rows.forEach(row => {
        result.rows.push(row);
      });
    }
    return result;
  }
}

export default new NeighborsFetcher();
