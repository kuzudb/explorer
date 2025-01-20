export const DATA_TYPES = {
  ANY: "ANY",
  NODE: "NODE",
  REL: "REL",
  RECURSIVE_REL: "RECURSIVE_REL",
  SERIAL: "SERIAL",
  BOOL: "BOOL",
  INT128: "INT128",
  INT64: "INT64",
  INT32: "INT32",
  INT16: "INT16",
  INT8: "INT8",
  UINT64: "UINT64",
  UINT32: "UINT32",
  UINT16: "UINT16",
  UINT8: "UINT8",
  DOUBLE: "DOUBLE",
  FLOAT: "FLOAT",
  DATE: "DATE",
  TIMESTAMP: "TIMESTAMP",
  TIMESTAMP_NS: "TIMESTAMP_NS",
  TIMESTAMP_MS: "TIMESTAMP_MS",
  TIMESTAMP_SEC: "TIMESTAMP_SEC",
  TIMESTAMP_TZ: "TIMESTAMP_TZ",
  INTERVAL: "INTERVAL",
  FIXED_LIST: "FIXED_LIST",
  INTERNAL_ID: "INTERNAL_ID",
  ARROW_COLUMN: "ARROW_COLUMN",
  STRING: "STRING",
  BLOB: "BLOB",
  VAR_LIST: "VAR_LIST",
  STRUCT: "STRUCT",
  MAP: "MAP",
  UNION: "UNION",
  UUID: "UUID",
};

export const NESTED_DATA_TYPES = [
  DATA_TYPES.MAP,
  DATA_TYPES.STRUCT,
  DATA_TYPES.UNION,
  DATA_TYPES.FIXED_LIST,
  DATA_TYPES.VAR_LIST,
];

export const INTERNAL_DATA_TYPES = [
  DATA_TYPES.ANY,
  DATA_TYPES.NODE,
  DATA_TYPES.REL,
  DATA_TYPES.RECURSIVE_REL,
  DATA_TYPES.INTERNAL_ID,
  DATA_TYPES.ARROW_COLUMN,
];

const basicDataTypes = JSON.parse(JSON.stringify(DATA_TYPES));
for (const internalType of INTERNAL_DATA_TYPES) {
  delete basicDataTypes[internalType];
}
for (const nestedType of NESTED_DATA_TYPES) {
  delete basicDataTypes[nestedType];
}
delete basicDataTypes.SERIAL;
export const BASIC_DATA_TYPES = basicDataTypes;

export const SCHEMA_ACTION_TYPES = {
  DROP_TABLE: "dropTable",
  DROP_PROPERTY: "dropProperty",
  RENAME_PROPERTY: "renameProperty",
  RENAME_NODE_TABLE: "renameNodeTable",
  RENAME_REL_TABLE: "renameRelTable",
  ADD_PROPERTY: "addProperty",
  ADD_NODE_TABLE: "addNodeTable",
  ADD_REL_TABLE: "addRelTable",
  ADD_REL_GROUP: "addRelGroup",
};

export const UI_SIZE = {
  DEFAULT_MARGIN: 20,
  SHELL_TOOL_BAR_WIDTH: 32,
  DEFAULT_BORDER_WIDTH: 2,
};

export const SHOW_REL_LABELS_OPTIONS = {
  ALWAYS: "ALWAYS",
  HOVER: "HOVER",
  NEVER: "NEVER",
};

export const MODES = {
  DEMO: "DEMO",
  READ_WRITE: "READ_WRITE",
  READ_ONLY: "READ_ONLY",
  WASM: "WASM",
};

export const GPT_MODELS = ["gpt-4o", "gpt-4o-mini", "gpt-4"];

export const PLACEHOLDER_NODE_TABLE = "__placeholder_node_table__";
export const PLACEHOLDER_REL_TABLE = "__placeholder_rel_table__";


export const ARC_CURVE_OFFSETS = [
  0, 60, -60, 80, -80, 100, -100, 120, -120, 140, -140, 160, -160, 180, -180, 200, -200,
];

export const LOOP_POSITIONS = [
  "top",
  "top-right",
  "right",
  "bottom-right",
  "bottom",
  "bottom-left",
  "left",
  "top-left",
];

export const IMPORT_ACTIONS = {
  CREATE: "Create Table",
  UPLOAD: "Upload File",
  COPY: "Copy Table",
};

export const JOB_STATUS = {
  PENDING: "PENDING",
  PROCESSING: "PROCESSING",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
};

export const TABLE_TYPES = {
  NODE: "NODE",
  REL: "REL",
  REL_GROUP: "REL_GROUP",
};

export const LOADING_STATUS = {
  EVAL: "Evaluating query...",
  PROCESS: "Processing results...",
};