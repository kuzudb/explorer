<template>
  <div class="shell-main-view__wrapper" :style="{ height: `${containerHeight}px` }">
    <ShellCell
      v-for="(cell, index) in shellCell"
      :key="cell.cellId"
      :schema="schema"
      :navbarHeight="navbarHeight"
      :cellId="cell.cellId"
      @remove="removeCell(index)"
      @addCell="addCell()"
      @maximize="maximize(index)"
      @minimize="minimize()"
      v-show="index === maximizedCellIndex || maximizedCellIndex < 0"
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

  props: {
    schema: {
      type: Object,
      required: false,
    },
    navbarHeight: {
      type: Number,
      required: false,
      default: 0,
    },
  },

  computed: {
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
  },

  mounted() {
    this.$nextTick(() => {
      this.updateContainerHeight();
    });
    window.addEventListener("resize", this.updateContainerHeight);
  },

  beforeUnmount() {
    window.removeEventListener("resize", this.updateContainerHeight);
  },

}
</script>

<style lang="scss" scoped>
.shell-main-view__wrapper {
  width: 100%;
  overflow-y: scroll;
}
</style>
