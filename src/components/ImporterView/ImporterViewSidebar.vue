<template>
  <div class="sidebar">
    <button
      class="btn btn-primary"
      @click="$emit('addFiles')"
    >
      <i class="fa-solid fa-plus" />
      Add More Files
    </button>
    <div
      class="alert alert-info"
      role="alert"
    >
      <i class="fa-solid fa-info-circle" />
      &nbsp;
      The selected files are listed below. Please assign table types to the files to get started.
    </div>

    <table class="table border">
      <thead>
        <tr>
          <th>Name</th>
          <th>Size</th>
          <th class="table-type-select">
            Type
          </th>
          <th class="actions">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for=" (file, key) in files"
          :key="key"
        >
          <td>
            {{ file.file.name }}
          </td>
          <td>{{ getReadableSize(file.file.size) }}</td>
          <td class="table-type-select">
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
          <td class="actions">
            <i
              class="fa-solid fa-trash"
              @click="removeFile(key)"
            />
            &nbsp;
            <i
              class=" fa-solid fa-table"
              @click="previewFile(key)"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="js">
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
    "tableTypeChange"
  ],
  methods: {
    getReadableSize(bytes) {
      const i = Math.floor(Math.log(bytes) / Math.log(1024));
      return (bytes / Math.pow(1024, i)).toFixed(2) * 1 + ' ' + ['B', 'KB', 'MB', 'GB', 'TB'][i];
    },
    handleTableTypeChange(key, event) {
      this.$emit("tableTypeChange", key, event.target.value);
    },
    removeFile(key) {
      this.$emit("removeFile", key);
    },
  },
}
</script>

<style lang="scss" scoped>
.sidebar {
  width: 450px;
  height: 100%;
  background-color: $gray-100;
  padding: 16px;

  .alert {
    margin-bottom: 10px;
    margin-top: 10px;
  }

  .btn-primary {
    width: 100%;
  }

  .actions {
    text-align: center;

    i {
      cursor: pointer;

    }
  }

  .table-type-select {
    text-align: center;
    width: 100px;
  }
}
</style>
