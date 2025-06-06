<template>
  <div
    ref="sidebar"
    class="importer-sidebar"
  >
    <button
      class="importer-sidebar__btn importer-sidebar__btn--primary btn btn-primary"
      @click="$emit('addFiles')"
    >
      <i class="fa-solid fa-plus" />
      Add More Files
    </button>
    <div
      class="importer-sidebar__alert alert alert-info"
      role="alert"
    >
      <i class="fa-solid fa-info-circle" />
      &nbsp;
      Please assign table types to the files to get started.
      You can drag more files to the this panel to add them.
    </div>

    <div class="importer-sidebar__table-wrapper">
      <table class="table border">
        <thead>
          <tr>
            <th>Name</th>
            <th>Size</th>
            <th class="importer-sidebar__type-select">
              Type
            </th>
            <th class="importer-sidebar__actions">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for=" (file, key) in files"
            :key="key"
          >
            <td class="importer-sidebar__name">
              {{ file.file.name }}
            </td>
            <td class="importer-sidebar__size">
              {{ getReadableSize(file.file.size) }}
            </td>
            <td class="importer-sidebar__type-select">
              <select
                class="form-select-sm"
                @change="handleTableTypeChange(key, $event)"
              >
                <option
                  value="none"
                  selected
                >
                  None
                </option>
                <option value="node">
                  Node
                </option>
                <option value="rel">
                  Relationship
                </option>
              </select>
            </td>
            <td class="importer-sidebar__actions">
              <i
                v-if="file.extension === 'csv'"
                class="fa-solid fa-file-csv"
                data-bs-toggle="tooltip"
                title="Configure CSV Format"
                @click="setCsvFormat(file)"
              />
              &nbsp;
              <i
                class="fa-solid fa-table"
                data-bs-toggle="tooltip"
                title="Preview Table"
                @click="previewFile(key)"
              />
              &nbsp;
              <i
                class="fa-solid fa-trash"
                data-bs-toggle="tooltip"
                title="Remove File"
                @click="startFileRemoval(file)"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div
      ref="modal"
      class="modal"
      tabindex="-1"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body">
            <p>
              Are you sure you want to remove the file {{ removingFile ? removingFile.file.name : "" }}?
            </p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              @click="hideModal"
            >
              Cancel
            </button>
            <button
              type="button"
              class="btn btn-danger"
              @click="confirmFileRemoval"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import Dropzone from "dropzone";
import { Modal } from 'bootstrap';
export default {
  name: "ImporterViewSidebar",
  props: {
    files: {
      type: Object,
      default: () => ({}),
    }
  },
  emits: [
    "addFiles",
    "removeFile",
    "tableTypeChange",
    "previewFile",
    "setCsvFormat",
    "dropFiles",
  ],
  data: () => ({
    removingFile: null,
    modal: null,
  }),
  mounted() {
    this.modal = new Modal(this.$refs.modal);
    this.$refs.modal.addEventListener("hidden.bs.modal", this.cancelFileRemoval);
    this.dropzone = new Dropzone(this.$refs.sidebar, {
      url: "/",
      autoProcessQueue: false,
      uploadMultiple: true,
      disablePreviews: true,
    });
    this.dropzone.on("drop", (e) => {
      e.preventDefault();
      const files = e.dataTransfer.files;
      this.$emit("dropFiles", files);
    });
  },
  beforeUnmount() {
    this.modal.dispose();
    this.$refs.modal.removeEventListener("hidden.bs.modal", this.cancelFileRemoval);
  },
  methods: {
    getReadableSize(bytes) {
      const i = Math.floor(Math.log(bytes) / Math.log(1024));
      return (bytes / Math.pow(1024, i)).toFixed(0) * 1 + ' ' + ['B', 'KB', 'MB', 'GB', 'TB'][i];
    },
    handleTableTypeChange(key, event) {
      this.$emit("tableTypeChange", key, event.target.value);
    },
    startFileRemoval(file) {
      this.removingFile = file;
      this.modal.show();

    },
    confirmFileRemoval() {
      this.$emit("removeFile", this.removingFile.id);
      this.modal.hide();
    },
    cancelFileRemoval() {
      this.removingFile = null;
    },
    previewFile(key) {
      this.$emit("previewFile", key);
    },
    setCsvFormat(file) {
      this.$emit("setCsvFormat", file);
    },
    hideModal() {
      this.modal.hide();
    }
  }
}
</script>

<style lang="scss" scoped>
.importer-sidebar {
  width: 480px;
  height: 100%;
  background-color: (var(--bs-body-bg-secondary));
  padding: 16px;
  display: flex;
  flex-direction: column;

  .importer-sidebar__alert {
    margin-bottom: 10px;
    margin-top: 10px;
  }

  .importer-sidebar__table-wrapper {
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  .importer-sidebar__btn {
    &--primary {
      width: 100%;
    }
  }

  .importer-sidebar__actions {
    min-width: 90px;
    text-align: center;

    i {
      cursor: pointer;

      &:hover {
        opacity: 0.7;
      }
    }
  }

  .importer-sidebar__type-select {
    text-align: center;
    width: 100px;
  }

  .importer-sidebar__name {
    word-break: break-all;
  }

  .importer-sidebar__size {
    white-space: nowrap;
  }
}
</style>
