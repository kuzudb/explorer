<template>
  <div
    ref="modal"
    class="modal"
    tabindex="-1"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h5
            v-if="!isExecuting && !isExecuted"
            class="modal-title"
          >
            Confirm DDL Statement
          </h5>
          <h5
            v-if="isExecuting"
            class="modal-title"
          >
            Executing...
          </h5>
          <h5
            v-if="isExecuted"
            class="modal-title"
          >
            Result
          </h5>
        </div>
        <div class="modal-body">
          <div v-if="!isExecuting && !isExecuted">
            <h6>The following statement will be executed, do you want to continue?</h6>
            <pre><code v-text="statement" /></pre>
          </div>
          <div v-if="isExecuting">
            <div class="d-flex justify-content-center">
              <div
                class="spinner-border"
                role="status"
              >
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
          <div v-if="isExecuted">
            <div
              v-if="errorMessage"
              class="alert alert-danger"
              role="alert"
            >
              <i class="fa-solid fa-exclamation-circle" />
              {{ errorMessage }}
            </div>
            <div
              v-else
              class="alert alert-success"
              role="alert"
            >
              <i class="fa-solid fa-check-circle" />
              The statement has been executed successfully. This dialog will be closed
              automatically in
              {{ remainingSeconds.toFixed(0) }} seconds.
            </div>
          </div>
        </div>
        <div
          v-if="!isExecuting"
          class="modal-footer"
        >
          <button
            type="button"
            class="btn btn-secondary"
            @click="hideModal"
          >
            {{ isExecuted ? "Close" : "Cancel" }}
          </button>
          <button
            v-show="!isExecuted"
            type="button"
            class="btn btn-primary"
            @click="execute"
          >
            Execute
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import { Modal } from 'bootstrap';
import DataDefinitionLanguage from "../../utils/DataDefinitionLanguage";
import { SCHEMA_ACTION_TYPES } from "../../utils/Constants";
import Axios from "@/utils/AxiosWrapper";
import { useModeStore } from "../../store/ModeStore";
import { mapStores } from "pinia";
import Kuzu from "@/utils/KuzuWasm";

export default {
  name: "SchemaActionDialog",
  emits: ["reloadSchema", "actionCompleted"],
  data: () => ({
    statement: "",
    errorMessage: "",
    isExecuting: false,
    isExecuted: false,
    remainingSeconds: 0,
    currentAction: null,
  }),
  computed: {
    ...mapStores(useModeStore),
  },
  mounted() {
    this.modal = new Modal(this.$refs.modal);
  },
  beforeUnmount() {
    this.modal.dispose();
  },
  methods: {
    async execute() {
      this.isExecuting = true;
      this.isExecuted = false;
      await this.evaluateCypher(this.statement);
      this.isExecuted = true;
    },
    async evaluateCypher(query) {
      const promise = this.modeStore.isWasm ?
        Kuzu.query(query) :
        Axios.post("/api/cypher", { query });
      promise.then(() => {
        this.isExecuting = false;
        this.errorMessage = "";
        this.reloadSchema();
        this.remainingSeconds = 2;
        const interval = setInterval(() => {
          this.remainingSeconds -= 1;
          if (this.remainingSeconds <= 0) {
            clearInterval(interval);
            this.hideModal();
          }
        }, 1000);
        if (this.currentAction) {
          this.$emit("actionCompleted", this.currentAction);
        }
      })
        .catch((error) => {
          this.isExecuting = false;
          if (this.modeStore.isWasm) {
            this.errorMessage = error.message;
            return;
          }
          if (!error.response) {
            this.errorMessage = "The application is disconnected from the server. Please try to restart the server.";
            return;
          }
          else if (!error.response.data) {
            this.errorMessage = String(error).trim();
            return;
          }
          this.errorMessage = error.response.data.error.trim();
          console.error(error.response.data.error.trim());
        });
    },
    reset() {
      this.statement = "";
      this.errorMessage = "";
      this.isExecuting = false;
      this.isExecuted = false;
      this.remainingSeconds = 0;
      this.currentAction = null;
    },
    reloadSchema() {
      this.$emit("reloadSchema");
    },
    showModal() {
      this.modal.show();
    },
    hideModal() {
      this.reset();
      this.modal.hide();
    },
    dropTable(tableName) {
      this.reset();
      const statement = DataDefinitionLanguage.dropTable(tableName);
      this.statement = statement;
      this.showModal();
    },
    dropProperty(table, property) {
      this.reset();
      const statement = DataDefinitionLanguage.dropProperty(table, property);
      this.statement = statement;
      this.showModal();
    },
    renameProperty(table, oldName, newName) {
      this.reset();
      this.currentAction = {
        type: SCHEMA_ACTION_TYPES.RENAME_PROPERTY,
        table,
        oldName,
        newName,
      };
      const statement = DataDefinitionLanguage.renameProperty(table, oldName, newName);
      this.statement = statement;
      this.showModal();
    },
    renameTable(oldLabel, newLabel, isNode) {
      this.reset();
      this.currentAction = {
        type: isNode ? SCHEMA_ACTION_TYPES.RENAME_NODE_TABLE : SCHEMA_ACTION_TYPES.RENAME_REL_TABLE,
        oldLabel,
        newLabel,
        isNode,
      };
      const statement = DataDefinitionLanguage.renameTable(oldLabel, newLabel);
      this.statement = statement;
      this.showModal();
    },
    addProperty(table, property, defaultValue) {
      this.reset();
      this.currentAction = {
        type: SCHEMA_ACTION_TYPES.ADD_PROPERTY,
        table,
        property,
      };
      const statement = DataDefinitionLanguage.addProperty(table, property.name, property.type, defaultValue);
      this.statement = statement;
      this.showModal();
    },
    addNewTable(table, properties, isNodeTable, connectivity) {
      this.reset();
      if (isNodeTable) {
        const pk = properties.find(p => p.isPrimaryKey);
        this.currentAction = {
          type: SCHEMA_ACTION_TYPES.ADD_NODE_TABLE,
          primaryKey: pk ? pk.name : null,
          table,
        };
      } else {
        this.currentAction = {
          type: SCHEMA_ACTION_TYPES.ADD_REL_TABLE,
          table,
        };
      }
      const statement =
        isNodeTable ?
          DataDefinitionLanguage.addNodeTable(table, properties) :
          DataDefinitionLanguage.addRelTable(table, properties, connectivity);
      this.statement = statement;
      this.showModal();
    },
  },
};
</script>

<style scoped lang="scss">
.modal-body {
  pre {
    background-color: var(--bs-body-bg-secondary);
    border-radius: 5px;
    padding: 10px;
  }
}
</style>
