<template>
  <div
    ref="modal"
    class="modal"
    tabindex="-1"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5
            v-if="isProcessing"
            class="modal-title"
          >
            Validating Import Configuration...
          </h5>
          <h5
            v-if="!isProcessing && errors.length > 0"
            class="modal-title"
          >
            {{ errors.length }}
            {{ errors.length > 1 ? 'errors' : 'error' }}
            found
          </h5>
          <h5
            v-if="!isProcessing && errors.length === 0"
            class="modal-title"
          >
            Import Plan
          </h5>
        </div>
        <div class="modal-body">
          <div
            v-if="isProcessing"
            class="text-center"
          >
            <div
              class="spinner-border text-primary spinner-xl"
              role="status"
            >
              <span class="visually-hidden">Validating...</span>
            </div>
          </div>

          <ul
            v-if="!isProcessing && errors.length > 0"
            class="list-group"
          >
            <li
              v-for="(error, i) in errors"
              :key="i"
              class="list-group-item text-danger"
            >
              <i class="fas fa-exclamation-triangle" />
              &nbsp;
              {{ error }}
            </li>
          </ul>

          <ul
            v-if="!isProcessing && errors.length === 0 && plan.length > 0"
            class="list-group"
          >
            <li
              v-for="(item, i) in plan"
              :key="i"
              class="list-group-item"
            >
              <div class="d-flex w-100 justify-content-between">
                <span class="text-primary">
                  {{ item.action }}
                </span>
                <span>
                  {{ item.displayName }}
                </span>
              </div>
            </li>
          </ul>
        </div>
        <div
          v-if="!isProcessing"
          class="modal-footer"
        >
          <button
            type="button"
            class="btn btn-danger"
            @click="hideModal"
          >
            {{ errors.length > 0 ? 'Close' : 'Abort' }}
          </button>
          <button
            v-if="errors.length === 0"
            type="button"
            class="btn btn-success"
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
export default {
  name: "ImporterViewValidationModal",
  emits: ["close", "execute"],
  data: () => ({
    modal: null,
    isProcessing: false,
    errors: [],
    plan: [],
  }),
  computed: {
  },
  mounted() {
    this.modal = new Modal(this.$refs.modal);
  },
  beforeUnmount() {
    this.modal.dispose();
  },
  methods: {
    setState(isProcessing, errors, plan) {
      this.isProcessing = isProcessing;
      this.errors = errors;
      this.plan = plan;
    },
    showModal() {
      this.modal.show();
    },
    hideModal() {
      this.modal.hide();
      this.$emit("close");
    },
    execute() {
      this.modal.hide();
      this.$emit("execute");
    },
  },
};
</script>

<style scoped lang="scss">
.spinner-xl {
  width: 3rem;
  height: 3rem;
  border-width: 0.25em;
}
</style>
