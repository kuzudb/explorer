<template>
  <div
    class="shell-main-view__wrapper"
    :style="{ height: `${containerHeight}px` }"
  >
    <ShellCell
      v-for="(cell, index) in shellCell"
      v-show="index === maximizedCellIndex || maximizedCellIndex < 0"
      :key="cell.cellId"
      :schema="schema"
      :navbar-height="navbarHeight"
      :cell-id="cell.cellId"
      @remove="removeCell(index)"
      @add-cell="addCell()"
      @maximize="maximize(index)"
      @minimize="minimize()"
      @reload-schema="reloadSchema()"
    />
  </div>
</template>

<script lang="js">
import ShellCell from "./ShellCell.vue";
import { v4 as uuidv4 } from 'uuid';
export default {
  name: "ShellMainView",
  components: {
    ShellCell,
  },
  props: {
    schema: {
      type: Object,
      required: false,
      default: null,
    },
    navbarHeight: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  emits: ["reloadSchema"],
  data: () => ({
    shellCell: [
      {
        cellId: uuidv4(),
      },
    ],
    isCellAddedToTheEnd: false,
    maximizedCellIndex: -1,
    containerHeight: 0,
  }),

  mounted() {
    this.$nextTick(() => {
      this.updateContainerHeight();
    });
    window.addEventListener("resize", this.updateContainerHeight);
  },

  beforeUnmount() {
    window.removeEventListener("resize", this.updateContainerHeight);
  },

  methods: {
    createCell() {
      return {
        cellId: uuidv4(),
      }
    },
    updateContainerHeight() {
      this.containerHeight = window.innerHeight - this.navbarHeight;
    },
    removeCell(index) {
      this.shellCell.splice(index, 1);
      this.$nextTick(() => {
        if (this.shellCell.length === 0) {
          this.shellCell.push(this.createCell());
        }
      });
    },
    addCell() {
      const cell = this.createCell();
      if (this.isCellAddedToTheEnd) {
        this.shellCell.push(cell);
      }
      else {
        this.shellCell.unshift(cell);
      }
    },
    maximize(index) {
      this.maximizedCellIndex = index;
    },
    minimize() {
      this.maximizedCellIndex = -1;
    },
    reloadSchema() {
      this.$emit("reloadSchema");
    },
  },

}
</script>

<style lang="scss" scoped>
.shell-main-view__wrapper {
  width: 100%;
  overflow-y: scroll;
}
</style>
