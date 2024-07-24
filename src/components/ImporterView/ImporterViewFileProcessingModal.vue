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
            v-if="isProcessing"
            class="modal-title"
          >
            Processing Selected Files...
          </h5>
          <h5
            v-else
            class="modal-title"
          >
            {{ files.length }} Files Processed
          </h5>
        </div>
        <div class="modal-body">
          <ul class="list-group">
            <li
              v-for="file in files"
              :key="file.id"
              class="list-group-item"
            >
              <div class="d-flex justify-content-between">
                <span>{{ file.fileName }}</span>
                <span v-if="file.status === 'processing'">
                  <div
                    class="spinner-border text-primary"
                    role="status"
                  />

                  &nbsp;
                  <span>Processing...</span>
                </span>
                <span
                  v-else-if="file.status === 'success'"
                  class="text-success"
                >
                  <i class="fa-solid fa-check-circle" />
                  &nbsp;
                  <span>Sucess</span>
                </span>
                <span
                  v-else-if="file.status === 'error'"
                  class="text-danger"
                >
                  <i class="fa-solid fa-exclamation-circle" />
                  &nbsp;
                  <span>{{ file.error }}</span>
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
            class="btn btn-secondary"
            @click="hideModal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import { Modal } from 'bootstrap';
export default {
  name: "ImporterViewFileProcessingModal",
  props: {
    files: {
      type: Array,
      required: true,
    },
  },
  emits: ["close"],
  data: () => ({
    modal: null,
  }),
  computed: {
    isProcessing() {
      return this.files.some((file) => file.status === "processing");
    },
  },
  mounted() {
    this.modal = new Modal(this.$refs.modal);
  },
  beforeUnmount() {
    this.modal.dispose();
  },
  methods: {
    showModal() {
      this.modal.show();
    },
    hideModal() {
      this.modal.hide();
    },
  },
};
</script>

<style scoped lang="scss">
.spinner-border {
  width: 1rem;
  height: 1rem;
}
</style>
