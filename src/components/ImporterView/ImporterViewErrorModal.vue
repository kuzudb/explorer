<template>
  <div ref="modal" class="modal" tabindex="-1">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-body">
          <div>
            <p class="text-danger">
              <i class="fas fa-exclamation-triangle"></i>
              {{ errorMessage }}
            </p>
          </div>
        </div>
        <div class="modal-footer">
          <span>
            <button type="button" class="btn btn-danger" @click="hideModal">
              Close
            </button>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import { Modal } from 'bootstrap';
export default {
  name: "ImporterViewErrorModal",
  props: {
    errorMessage: {
      type: String,
      required: true,
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

<style lang="scss" scoped></style>
