<template>
  <div class="modal" tabindex="-1" ref="modal">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" v-if="!isExecuting && !isExecuted">Confirm DDL Statement</h5>
          <h5 class="modal-title" v-if="isExecuting">Executing...</h5>
          <h5 class="modal-title" v-if="isExecuted">Result</h5>
        </div>
        <div class="modal-body">
          <div v-if="!isExecuting && !isExecuted">
            <h6>The following statement will be executed, do you want to continue?</h6>
            <pre><code v-text="statement" /></pre>
          </div>
          <div v-if="isExecuting">
            <div class="d-flex justify-content-center">
              <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
          <div v-if="isExecuted">
            <div v-if="errorMessage" class="alert alert-danger" role="alert">
              <i class="fa-solid fa-exclamation-circle"></i>
              {{ errorMessage }}
            </div>
            <div v-else class="alert alert-success" role="alert">
              <i class="fa-solid fa-check-circle"></i>
              The statement has been executed successfully. This dialog will be closed automatically in
              {{ remainingSeconds.toFixed(1) }} seconds.
            </div>
          </div>
        </div>
        <div class="modal-footer" v-if="!isExecuting">
          <button type="button" class="btn btn-secondary" @click="hideModal">
            {{ isExecuted ? "Close" : "Cancel" }}
          </button>
          <button type="button" class="btn btn-primary" @click="execute" v-show="!isExecuted">Execute</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import { Modal } from 'bootstrap';
import DataDefinitionLanguage from "../../utils/DataDefinitionLanguage";
import Axios from 'axios';
export default {
  name: "SchemaActionDialog",
  data: () => ({
    statement: "",
    errorMessage: "",
    isExecuting: false,
    isExecuted: false,
    remainingSeconds: 0,
  }),
  methods: {
    async execute() {
      this.isExecuting = true;
      this.isExecuted = false;
      await this.evaluateCypher(this.statement);
      this.isExecuted = true;
    },
    async evaluateCypher(query) {
      Axios.post("/api/cypher", { query })
        .then(() => {
          this.isExecuting = false;
          this.errorMessage = "";
          this.reloadSchema();
          this.remainingSeconds = 2;
          const interval = setInterval(() => {
            this.remainingSeconds -= 0.1;
            if (this.remainingSeconds <= 0) {
              clearInterval(interval);
              this.hideModal();
            }
          }, 100);
        }).catch((error) => {
          this.isExecuting = false;
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
  },
  mounted() {
    this.modal = new Modal(this.$refs.modal);
  },
  beforeUnmount() {
    this.modal.dispose();
  },
};

</script>

<style scoped lang="scss">
.modal-body {
  pre {
    background-color: $gray-300;
    border-radius: 5px;
    padding: 10px;
  }
}
</style>
