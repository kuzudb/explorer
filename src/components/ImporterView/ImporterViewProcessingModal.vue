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
            {{ processingTitle }}
          </h5>
          <h5
            v-else
            class="modal-title"
          >
            {{ items.length }} {{ doneTitle }}
          </h5>
        </div>
        <div class="modal-body">
          <ul class="list-group">
            <li
              v-for="(item, i) in items"
              :key="i"
              class="list-group-item"
            >
              <div class="d-flex justify-content-between">
                <span>{{ item.name }}</span>
                <span v-if="item.status === 'processing'">
                  <div
                    class="spinner-border text-primary"
                    role="status"
                  />

                  &nbsp;
                  <span>Processing...</span>
                </span>
                <span
                  v-else-if="item.status === 'success'"
                  class="text-success"
                >
                  <i class="fa-solid fa-check-circle" />
                  &nbsp;
                  <span>Success</span>
                </span>
                <span
                  v-else-if="item.status === 'error'"
                  class="text-danger"
                >
                  <i class="fa-solid fa-exclamation-circle" />
                  &nbsp;
                  <span>{{ item.error }}</span>
                </span>
                <span v-else>
                  <i class="fa-solid fa-clock" />
                  &nbsp;
                  <span>Pending</span>
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
  name: "ImporterViewProcessingModal",
  props: {
    items: {
      type: Array,
      required: true,
    },
    processingTitle: {
      type: String,
      default: "Processing..."
    },
    doneTitle: {
      type: String,
      default:  "Items Processed"
    },

  },
  emits: ["close"],
  data: () => ({
    modal: null,
  }),
  computed: {
    isProcessing() {
      return this.items.some((i) => i.status === "processing");
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
.d-flex {
  gap: 20px;
}
</style>
