<template>
  <div
    ref="modal"
    class="modal"
    tabindex="-1"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h5>
            CSV Format Configuration
          </h5>
        </div>
        <div class="modal-body">
          <div>
            <div class="input-group mb-3">
              <span class="input-group-text">Delimiter</span>
              <input
                v-model="delimiter"
                type="text"
                class="form-control"
              >
              <span class="input-group-text">Quote</span>
              <input
                v-model="quote"
                type="text"
                class="form-control"
              >
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text">Escape</span>
              <input
                v-model="escape"
                type="text"
                class="form-control"
              >
              <span class="input-group-text">Header?</span>
              <select
                v-model="hasHeader"
                class="form-select"
              >
                <option value="true">
                  Yes
                </option>
                <option value="false">
                  No
                </option>
              </select>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-danger"
            @click="close"
          >
            Close
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click="save"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import { Modal } from 'bootstrap';
export default {
  name: "ImporterViewCsvFormatModal",
  emits: ["close", "save"],
  data: () => ({
    modal: null,
    delimiter: null,
    quote: null,
    escape: null,
    hasHeader: null,
    listBegin: null,
    listEnd: null,
  }),
  computed: {
  },
  mounted() {
    this.modal = new Modal(this.$refs.modal);
    this.showModal();
  },
  beforeUnmount() {
    this.modal.dispose();
  },
  methods: {
    showModal() {
      this.modal.show();
    },

    setFormat(delimiter, quote, escape, hasHeader) {
      this.delimiter = delimiter;
      this.quote = quote;
      this.escape = escape;
      this.hasHeader = String(hasHeader);
    },

    getFormat() {

    },

    hideModal() {
      this.modal.hide();
    },

    save() {

    }
  },
};
</script>

<style lang="scss" scoped></style>
