<template>
  <div
    ref="wrapper"
    class="result-container__wrapper"
    :style="{ height: containerHeight }"
  >
    <div
      v-show="!errorMessage"
      ref="toolsContainer"
      class="result-container__tools_container"
      :style="{ minWidth: toolbarWidth + 'px' }"
    >
      <div
        v-show="!isGraphEmpty"
        :class="
          `result-container__button` +
            (showGraph ? ` result-container__button--active` : ``)
        "
      >
        <i
          class="fa-lg fa-solid fa-circle-nodes"
          data-bs-toggle="tooltip"
          data-bs-placement="right"
          title="Graph View"
          @click="toggleGraphView"
        />
      </div>
      <div
        :class="
          `result-container__button` +
            (showTable ? ` result-container__button--active` : ``)
        "
      >
        <i
          class="fa-lg fa-solid fa-table"
          data-bs-toggle="tooltip"
          data-bs-placement="right"
          title="Table View"
          @click="toggleTableView"
        />
      </div>
      <div
        :class="
          `result-container__button` +
            (showCode ? ` result-container__button--active` : ``)
        "
      >
        <i
          class="fa-lg fa-solid fa-code"
          data-bs-toggle="tooltip"
          data-bs-placement="right"
          title="JSON View"
          @click="toggleCodeView"
        />
      </div>

      <div
        v-show="showGraph"
        class="result-container__tools_container--bottom"
      >
        <div class="result-container__button">
          <i
            class="fa-lg fa-solid fa-magnifying-glass-plus"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            title="Zoom In"
            @click="$refs.resultGraph.zoomIn()"
          />
        </div>
        <div class="result-container__button">
          <i
            class="fa-lg fa-solid fa-magnifying-glass-minus"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            title="Zoom Out"
            @click="$refs.resultGraph.zoomOut()"
          />
        </div>
        <div class="result-container__button">
          <i
            class="fa-lg fa-solid fa-compress"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            title="Fit to View"
            @click="$refs.resultGraph.fitToView()"
          />
        </div>
        <div class="result-container__button">
          <i
            class="fa-lg fa-solid fa-expand"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            title="Actual Size"
            @click="$refs.resultGraph.actualSize()"
          />
        </div>
      </div>
    </div>

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
  </div>
</template>

<script lang="js">
import ResultGraph from "./ResultGraph.vue";
import ResultTable from "./ResultTable.vue";
import ResultCode from "./ResultCode.vue";
import ResultError from "./ResultError.vue";
import { UI_SIZE } from "../../utils/Constants";
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
      this.isGraphEmpty = false;
      this.schema = schema;
      this.queryResult = queryResult;
      this.queryResultString = JSON.stringify(queryResult, null, 2);
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
$margin: 20px;

.result-container__wrapper {
  width: calc(100% - #{$margin * 2});
  margin: $margin;
  margin-top: 0;
  border: 2px solid $gray-300;
  border-top: 0;
  display: flex;
  flex-direction: row;
}

.result-container__tools_container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: $gray-100;
  border-right: 2px solid $gray-300;

  .result-container__tools_container--bottom {
    margin-top: auto;

    .result-container__button {
      > i {
        color: $body-tertiary-color;
      }
    }
  }
}

.result-container__button {
  padding-top: 4px;
  padding-bottom: 4px;

  i {
    cursor: pointer;
    color: $secondary;

    &:hover {
      opacity: 0.7;
    }

    &:active {
      opacity: 0.5;
    }
  }

  &--active {
    i {
      color: $primary;
    }
  }
}
</style>
