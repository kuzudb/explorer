const MODES = {
  DEMO: "DEMO",
  READ_WRITE: "READ_WRITE",
  READ_ONLY: "READ_ONLY",
};

const IRI_PROPERTY_NAME = "iri";
const IRI_VIRTUAL_PROPERTY_NAME = "iri (Virtual)";

const IMPORT_ACTIONS = {
  CREATE: "Create Table",
  UPLOAD: "Upload File",
  COPY: "Copy Table",
};

const JOB_STATUS = {
  PENDING: "PENDING",
  PROCESSING: "PROCESSING",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
};

module.exports = {
  MODES,
  IRI_PROPERTY_NAME,
  IRI_VIRTUAL_PROPERTY_NAME,
  IMPORT_ACTIONS,
  JOB_STATUS,
};
