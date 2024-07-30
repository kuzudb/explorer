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

            <div class="input-group mb-3" hidden>
              <span class="input-group-text">List Begin</span>
              <input
                v-model="listBegin"
                type="text"
                class="form-control"
              >
              <span class="input-group-text">List End</span>
              <input
                v-model="listEnd"
                type="text"
                class="form-control"
              >
            </div>

            <div class="input-group mb-3">
              <span class="input-group-text">Read CSV in Parallel?</span>
              <select class="form-select">
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
          <div class="d-flex justify-content-between w-100">
            <span>
              <a
                href="https://docs.kuzudb.com/import/csv/"
                target="_blank"
              >
                <button
                  type="button"
                  class="btn btn-secondary"
                >
                  <i class="fa-solid fa-question-circle" />
                  Help
                </button>
              </a>

            </span>
            <span>
              <button
                type="button"
                class="btn btn-danger"
                @click="hideModal"
              >
                Close
              </button>
              &nbsp;
              <button
                type="button"
                class="btn btn-primary"
                @click="save"
              >
                Save
              </button>
            </span>
          </div>
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
    fileKey: null,
    delimiter: null,
    quote: null,
    escape: null,
    hasHeader: null,
    listBegin: null,
    listEnd: null,
    parallelism: null,
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
    showModal() {
      this.modal.show();
    },

    setFormat(fileKey, delimiter, quote, escape, hasHeader, listBegin, listEnd, parallelism) {
      const convertToEscapedString = (str) => {
        if(str === '"' || str === "'") {
          return str;
        }
        const enclosedStr = JSON.stringify(str);
        return enclosedStr.slice(1, enclosedStr.length - 1);
      }
      this.fileKey = fileKey;
      this.delimiter = convertToEscapedString(delimiter);
      this.quote = convertToEscapedString(quote);
      this.escape = convertToEscapedString(escape);
      this.hasHeader = String(hasHeader);
      this.listBegin = convertToEscapedString(listBegin);
      this.listEnd = convertToEscapedString(listEnd);
      this.parallelism = String(parallelism);
    },

    getFormat() {
      const processStringWithEscape = (str) => {
        const enclosedStr = `"${str}"`;
        try {
          return JSON.parse(enclosedStr);
        } catch (e) {
          return str;
        }
      }
      return {
        delimiter: processStringWithEscape(this.delimiter),
        quote: processStringWithEscape(this.quote),
        escape: processStringWithEscape(this.escape),
        hasHeader: this.hasHeader === "true",
        listBegin: processStringWithEscape(this.listBegin),
        listEnd: processStringWithEscape(this.listEnd),
        parallelism: this.parallelism === "true",
      };

    },

    hideModal() {
      this.modal.hide();
    },

    save() {
      const format = this.getFormat();
      this.hideModal();
      this.$emit("save", this.fileKey, format);
    }
  },
};
</script>

<style lang="scss" scoped></style>
