<template>
  <div
    ref="modal"
    class="modal"
    tabindex="-1"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">
            Preview File
          </h5>
          <button
            type="button"
            class="btn-close" 
            @click="hideModal"
          />
        </div>
        <div class="modal-body">
          <table class="table table-borderless table-striped">
            <thead class="table-header">
              <tr>
                <th
                  v-for="(h, index) in header"
                  :key="index"
                >
                  {{ h }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(row, i) in table"
                :key="i"
              >
                <td
                  v-for="(cell, j) in row"
                  :key="j"
                >
                  {{ cell }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import { Modal } from 'bootstrap';
export default {
  name: "ImporterViewPreview",
  data: () => ({
    modal: null,
    table: [],
    header: [],
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
    preview(table, header) {
      this.table = table;
      this.header = header;
      this.showModal();
    },
    showModal() {
      this.modal.show();
    },
    hideModal() {
      this.table = [];
      this.header = [];
      this.modal.hide();
    },
  },
};
</script>

<style scoped lang="scss">
.modal-body {
  max-height: 80vh;
  overflow-y: auto;
  overflow-x: auto;
}

.modal-xl {
  max-width: 90%;
}

.table-header {
  position: sticky;
}
</style>
