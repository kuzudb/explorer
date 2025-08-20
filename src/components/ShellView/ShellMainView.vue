<template>
  <div
    class="shell-main-view__wrapper"
    :class="{ 'is-maximized': maximizedCellIndex !== -1 }"
    :style="{ height: `${containerHeight}px` }"
  >
    <div v-if="maximizedCellIndex < 0">
      <div class="d-flex align-items-center gap-3 m-4">
        <button
          type="button"
          class="btn btn-link text-body p-0 text-decoration-none"
          @click="addCell"
        >
          + Click here to add a new cell
        </button>
        <div class="flex-grow-1 border-top border-secondary" />
      </div>
    </div>
    <ShellCell
      v-for="(cell, index) in shellCell"
      v-show="index === maximizedCellIndex || maximizedCellIndex < 0"
      :ref="getCellRef(index)"
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
import Axios from "@/utils/AxiosWrapper";
import { MODES } from "@/utils/Constants";
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
    isWasm: false,
    isDemo: false,
    maximizedCellIndex: -1,
    containerHeight: 0,
  }),

  async mounted() {
    try {
      const response = await Axios.get("/api/mode");
      this.isWasm = response.data.mode === MODES.WASM || response.data.mode === MODES.DEMO;
      this.isDemo = response.data.mode === MODES.DEMO;
    } catch (e) {
      // Ignore
    }
    this.$nextTick(() => {
      this.loadDemoCell();
      this.updateContainerHeight();
    });
    window.addEventListener("resize", this.updateContainerHeight);
    document.addEventListener("keydown", this.handleKeyDown);
    this.loadCellsFromHistory();
  },

  beforeUnmount() {
    window.removeEventListener("resize", this.updateContainerHeight);
    document.removeEventListener("keydown", this.handleKeyDown);
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
      const uuid = this.shellCell[index].cellId;
      this.shellCell.splice(index, 1);
      this.$nextTick(() => {
        if (this.shellCell.length === 0) {
          this.shellCell.push(this.createCell());
        }
      });
      if (!uuid) {
        return;
      }
      try {
        this.removeCellFromHistory(uuid);
      } catch (e) {
        // Ignore
      }
    },
    removeCellFromHistory(uuid) {
      if (this.isWasm) {
        return;
      }
      return Axios.delete(`/api/session/history/${uuid}`);
    },
    loadCellHistoryFromServer() {
      return Axios.get("/api/session/history").then(res => res.data);
    },
    async loadCellsFromHistory() {
      if (this.isWasm) {
        return;
      }
      const history = await this.loadCellHistoryFromServer();
      history.map(cell => {
        return {
          cellId: cell.uuid,
        };
      }).forEach(cell => {
        if (this.isCellAddedToTheEnd) {
          this.shellCell.unshift(cell);
        }
        else {
          this.shellCell.push(cell);
        }
      });
      this.$nextTick(() => {
        history.forEach((cell) => {
          const uuid = cell.uuid;
          const cellRef = this.$refs[this.getCellRefById(uuid)][0];
          cellRef.loadEditorFromHistory(cell);
        });
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
    loadDemoCell() {
      this.$nextTick(() => {
        const cell = this.$refs[this.getCellRef(0)][0]
        cell.loadEditorFromHistory({
          cypherQuery: `// Query to retrieve 5 relationships from the graph.
// ▶️ Run this query by clicking the play button or pressing Shift + Enter.
MATCH (a)-[r]->(b) RETURN * LIMIT 5;`,
          isQueryGenerationMode: false,
          gptQuestion: "",
        });
      });
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
    getCellRef(index) {
      return `shell-cell-${this.shellCell[index].cellId}`;
    },
    getCellRefById(uuid) {
      return `shell-cell-${uuid}`;
    },
    handleKeyDown(event) {
      if (event.shiftKey && event.key === "Enter") {
        event.preventDefault();
        this.evaluateCurrentCell();
      }
    },
    evaluateCurrentCell() {
      for (let i = 0; i < this.shellCell.length; ++i) {
        const currentCell = this.$refs[this.getCellRef(i)][0];
        if (currentCell.isActive()) {
          return currentCell.evaluateCell();
        }
      }
      try {
        const currentCell = this.$refs[this.getCellRef(0)][0];
        return currentCell.evaluateCell();
      } catch (e) {
        // Do nothing, there is no cell to evaluate
      }
    },
  },

}
</script>

<style lang="scss" scoped>
.shell-main-view__wrapper {
  width: 100%;
  overflow-y: scroll;

  &.is-maximized {
    overflow-y: hidden;
    margin-bottom: 2px;
  }

  .shell-main-view__placeholder {
    margin: 20px;
    margin-top: 20px;
    padding: 8px;
    border: 2px solid $gray-300;

    a {
      font-style: italic;
      font-weight: 400;
      color: $body-tertiary-color;
      text-decoration: none;

      i {
        margin-right: 24px;
      }
    }
  }
}
</style>
