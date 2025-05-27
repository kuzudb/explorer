<template>
  <div class="result-container">
    <div
      ref="wrapper"
      class="result-container__wrapper"
    >
      <!-- Left Sidebar -->
      <aside
        v-show="!errorMessage"
        class="result-container__tools"
      >
        <!-- Top Tool Buttons -->
        <ul class="result-container__button-group">
          <button class="result-container__button " @click="toggleGraphView">
            <i class="fa-lg fa-solid fa-circle-nodes" data-bs-toggle="tooltip" data-bs-placement="right" title="Graph View" />
          </button>
          <button class="result-container__button" @click="toggleTableView">
            <i class="fa-lg fa-solid fa-table" data-bs-toggle="tooltip" data-bs-placement="right" title="Table View"/>
          </button>
          <button class="result-container__button" @click="toggleCodeView">
            <i class="fa-lg fa-solid fa-code" data-bs-toggle="tooltip" data-bs-placement="right" title="JSON View"/>
          </button>
        </ul>

        <!-- Bottom Tool Buttons -->
        <ul v-show="showGraph" class="result-container__button-group result-container__tools--bottom">
          <button class="result-container__button" @click="$refs.resultGraph.zoomIn()">
            <i class="fa-lg fa-solid fa-magnifying-glass-plus" data-bs-toggle="tooltip" data-bs-placement="right" title="Zoom In"/>
          </button>
          <button class="result-container__button" @click="$refs.resultGraph.zoomOut()">
            <i class="fa-lg fa-solid fa-magnifying-glass-minus" data-bs-toggle="tooltip" data-bs-placement="right" title="Zoom Out"/>
          </button>
          <button class="result-container__button" @click="$refs.resultGraph.fitToView()">
            <i class="fa-lg fa-solid fa-compress" data-bs-toggle="tooltip" data-bs-placement="right" title="Fit to View"/>
          </button>
          <button class="result-container__button" @click="$refs.resultGraph.actualSize()">
            <i class="fa-lg fa-solid fa-expand" data-bs-toggle="tooltip" data-bs-placement="right" title="Actual Size"/>
          </button>
        </ul>
      </aside>
  
      <main class="result-container__main">
        <ResultGraph
          v-if="queryResult"
          v-show="showGraph"
          ref="resultGraph"
          :query-result="queryResult"
          :schema="schema"
          :container-height="containerHeight"
          @graph-empty="handleGraphEmpty"
        />
        <ResultTable
          v-if="queryResult && showTable"
          ref="resultTable"
          :query-result="queryResult"
          :schema="schema"
          :container-height="containerHeight"
        />
        <ResultCode
          v-if="queryResultString && showCode"
          ref="resultCode"
          :query-result-string="queryResultString"
          :schema="schema"
          :container-height="containerHeight"
        />
        <ResultError
          v-if="errorMessage"
          ref="resultError"
          :error-message="errorMessage"
          :is-info="errorMessage === emptyResultMessage"
        />
      </main>
    </div>
  </div>
</template>

<script lang="js">
import ResultGraph from "./ResultGraph.vue";
import ResultTable from "./ResultTable.vue";
import ResultCode from "./ResultCode.vue";
import ResultError from "./ResultError.vue";
import { UI_SIZE } from "../../utils/Constants";
import { mapStores } from "pinia";
import { useModeStore } from "../../store/ModeStore";

export default {
  name: "ResultContainer",
  components: {
    ResultGraph,
    ResultTable,
    ResultCode,
    ResultError,
  },
  props: {
    navbarHeight: {
      type: Number,
      required: false,
      default: 0,
    },
    isMaximized: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data: () => ({
    queryResultDefaultHeight: 400,
    toolbarWidth: UI_SIZE.SHELL_TOOL_BAR_WIDTH,
    showGraph: true,
    showTable: false,
    showCode: false,
    isGraphEmpty: false,
    schema: null,
    queryResult: null,
    queryResultString: "",
    errorMessage: "",
    emptyResultMessage: "The query executed successfully but the result is empty.",
    containerHeight: "auto",
  }),
  computed: {
    ...mapStores(useModeStore),
  },
  watch: {
    isMaximized() {
      if (!this.$refs.resultGraph) {
        return;
      }
      this.$nextTick(() => {
        this.updateContainerHeight();
        this.handleGraphResize();
      });
    },
    showTable() {
      this.$nextTick(() => {
        if (this.showTable) {
          this.$refs.resultTable.renderTable();
        }
      });
    },
  },
  mounted() {
  },
  beforeUnmount() {
  },
  methods: {
    handleDataChange(schema, queryResult, errorMessage) {
      const int128Replacer = (_, value) => {
        if (typeof value === "bigint") {
          return value.toString();
        }
        return value;
      };
      this.isGraphEmpty = false;
      this.schema = schema;
      this.queryResult = queryResult;
      this.queryResultString = JSON.stringify(queryResult, int128Replacer, 2);
      this.errorMessage = errorMessage;
      if (this.queryResult && this.queryResult.rows.length === 0) {
        this.queryResult = null;
        this.queryResultString = "";
        this.errorMessage = this.emptyResultMessage;
      }
      this.updateContainerHeight();
      if (this.errorMessage) {
        return;
      }
      this.$nextTick(() => {
        this.$refs.resultGraph.drawGraph();
        if (this.showTable && this.$refs.resultTable) {
          this.$refs.resultTable.renderTable();
        }
      });
    },
    hideAll() {
      this.showGraph = false;
      this.showTable = false;
      this.showCode = false;
    },
    toggleGraphView() {
      this.hideAll();
      this.showGraph = true;
    },
    toggleTableView() {
      this.hideAll();
      this.showTable = true;
    },
    toggleCodeView() {
      this.hideAll();
      this.showCode = true;
    },
    handleGraphEmpty() {
      this.isGraphEmpty = true;
      this.toggleTableView();
    },
    handleGraphResize() {
      this.$refs.resultGraph.handleResize();
    },
    updateContainerHeight() {
      if (this.errorMessage) {
        this.containerHeight = "auto";
      }
      else if (this.queryResult) {
        const editorHeight = this.$parent.getEditorHeight();
        if (this.isMaximized) {
          this.containerHeight = window.innerHeight - this.navbarHeight - editorHeight - 2 * UI_SIZE.DEFAULT_MARGIN + 'px';
        }
        else {
          this.containerHeight = this.queryResultDefaultHeight + 'px';
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.result-container {
  margin-left: 1rem;
  margin-right: 1rem;
  margin-bottom: 1rem;
  border: 1px solid var(--bs-body-inactive);
  border-radius: 0 0 1rem 1rem; // rounded-b-xl
  overflow: hidden;
  box-shadow: 0 .5rem 1rem rgba(0, 0, 0, 0.15); // shadow-md
  position: relative;
}

.result-container__wrapper {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  display: flex;
  min-height: 300px;
}

.result-container__tools {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  min-width: 48px;
}

.result-container__main {
  flex: 1;
}

.result-container__button-group {
  display: flex;
  flex-direction: column;
  gap: 0.75rem; // ~Tailwind's gap-3
  font-size: 0.875rem;
  font-weight: 500;
  padding-left: 0rem;
  align-items: first;
}

.tooltip{
  background-color: var(--bs-body-inactive);
}

.result-container__button {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  background-color: transparent;
  padding: 0px;
  border: 0px;

  i {
    cursor: pointer;
    color: var(--bs-body-text);

    &:hover {
      opacity: 0.7;
    }

    &:active {
      opacity: 0.5;
    }
  }

  &--active {
    i {
      color: var(--bs-body-bg-accent);
    }
  }
}

.result-container__tools--bottom {
  margin-top: auto;
}
</style>
