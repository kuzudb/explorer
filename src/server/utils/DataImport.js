const database = require("./Database");

class DataImportUtils {
	async validateImport(config) {
		let success = true;
		const errors = [];
		const schema = await database.getSchema();
		for (const table of config) {
			const error = this.validateTableName(table, config, schema);
			if (error) {
				errors.push(error);
				success = false;
			}
		}
		return { success, errors };
	}

	validateTableName(table, config, schema) {
		if (!table.tableName) {
			return `Missing table name for file ${table.name}`;
		}
		if (!table.isNewTable) {
			if (table.type === "node") {
				const nodeTable = schema.nodeTables.find((nodeTable) => nodeTable.name === table.tableName);
				if (!nodeTable) {
					return `Table ${table.tableName} is imported as an existing node table, but it does not exist in the schema`;
				}
			}
			if (table.type === "rel") {
				const relTable = schema.relTables.find((relTable) => relTable.name === table.tableName);
				if (!relTable) {
					return `Table ${table.tableName} is imported as an existing relationship table, but it does not exist in the schema`;
				}
			}
			return null;
		}
		let found = schema.nodeTables.find((nodeTable) => nodeTable.name === table.tableName);
		const foundErrorString = `Table ${table.tableName} is imported as a new table, but it already exists in the schema`;
		if (found) {
			return foundErrorString;
		}
		found = schema.relTables.find((relTable) => relTable.name === table.tableName);
		if (found) {
			return foundErrorString;
		}
		found = config.find((t) => t.tableName === table.tableName);
		if (found && found !== table) {
			return `Table ${table.tableName} is duplicated in the configuration`;
		}
		return null;
	}


}

module.exports = new DataImportUtils();
