<template>
  <div class="result-container__wrapper" ref="wrapper" :style="{ height: containerHeight }">
    <div class="result-container__tools_container" ref="toolsContainer" :style="{ minWidth: toolbarWidth + 'px' }"
      v-show="!errorMessage">
      <div :class="`result-container__button` + (showGraph ? ` result-container__button--active` : ``)">
        <i class="fa-lg fa-solid fa-circle-nodes" data-bs-toggle="tooltip" data-bs-placement="right" title="Graph View"
          @click="toggleGraphView"></i>
      </div>
      <div :class="`result-container__button` + (showTable ? ` result-container__button--active` : ``)">
        <i class="fa-lg fa-solid fa-table" data-bs-toggle="tooltip" data-bs-placement="right" title="Table View"
          @click="toggleTableView"></i>
      </div>
      <div :class="`result-container__button` + (showCode ? ` result-container__button--active` : ``)">
        <i class="fa-lg fa-solid fa-code" data-bs-toggle="tooltip" data-bs-placement="right" title="JSON View"
          @click="toggleCodeView"></i>
      </div>

      <div class="result-container__tools_container--bottom" v-show="showGraph">
        <div class="result-container__button">
          <i class="fa-lg fa-solid fa-magnifying-glass-plus" data-bs-toggle="tooltip" data-bs-placement="right"
            title="Zoom In"></i>
        </div>
        <div class="result-container__button">
          <i class="fa-lg fa-solid fa-magnifying-glass-minus" data-bs-toggle="tooltip" data-bs-placement="right"
            title="Zoom Out"></i>
        </div>
        <div class="result-container__button">
          <i class="fa-lg fa-solid fa-compress" data-bs-toggle="tooltip" data-bs-placement="right"
            title="Fit to View"></i>
        </div>
        <div class="result-container__button">
          <i class="fa-lg fa-solid fa-expand" data-bs-toggle="tooltip" data-bs-placement="right" title="Actual Size"></i>
        </div>

      </div>
    </div>

    <ResultGraph v-if="queryResult" v-show="showGraph" :queryResult="queryResult" :schema="schema"
      :containerHeight="containerHeight" ref="resultGraph" />
    <ResultTable v-if="queryResult" v-show="showTable" :queryResult="queryResult" :schema="schema"
      :containerHeight="containerHeight" ref="resultTable" />
    <ResultCode v-if="queryResultString && showCode" :queryResultString="queryResultString" :schema="schema"
      :containerHeight="containerHeight" ref="resultCode" />
    <ResultError v-if="errorMessage" :errorMessage="errorMessage" />
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
  data: () => ({
    queryResultDefaultHeight: 400,
    toolbarWidth: UI_SIZE.SHELL_TOOL_BAR_WIDTH,
    showGraph: true,
    showTable: false,
    showCode: false,
  }),
  props: {
    queryResult: {
      type: Object,
      required: false,
      default: null,
    },
    queryResultString: {
      type: String,
      required: false,
      default: "",
    },
    schema: {
      type: Object,
      required: false,
      default: null,
    },
    errorMessage: {
      type: String,
      required: false,
      default: "",
    },
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
  watch: {
    isMaximized() {
      this.$nextTick(() => {
        this.$refs.resultGraph.handleResize();
      });
    },
  },
  methods: {
    handleDataChange() {
      this.$refs.resultGraph.drawGraph();
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
  },
  computed: {
    containerHeight() {
      if (this.errorMessage) {
        return "auto"
      }
      else if (this.queryResult) {
        if (this.isMaximized) {
          return window.innerHeight - this.navbarHeight - UI_SIZE.DEFAULT_EDITOR_HEIGHT - 2 * UI_SIZE.DEFAULT_MARGIN + 'px';
        }
        else {
          return this.queryResultDefaultHeight + 'px';
        }
      }
      else {
        return "auto";
      }
    },
  },
  mounted() {
  },
  beforeUnmount() {
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
      >i {
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
