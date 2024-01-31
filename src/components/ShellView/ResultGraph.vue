<template>
  <div ref="wrapper" class="result-graph__wrapper">
    <div
      ref="graph"
      class="result_container__graph"
      :style="{ width: graphWidth + 'px' }"
    />
    <div
      ref="toolsContainer"
      class="result-container__tools_container"
      :style="{ width: toolbarContainerWidth + 'px' }"
    >
      <div class="result-container__button">
        <i
          :class="sidePanelButtonClass"
          data-bs-toggle="tooltip"
          data-bs-placement="right"
          :data-bs-original-title="sidePanelButtonTitle"
          @click="toggleSidePanel"
        />
      </div>
    </div>
    <div v-show="isSidePanelOpen" ref="sidePanel" class="result-container__side-panel">
      <br />
      <div v-if="displayLabel">
        <div class="result-container__summary-section">
          <h5>{{ sidePanelPropertyTitlePrefix }} Properties</h5>
          <button
            v-if="isNodeSelectedOrHovered"
            class="btn btn-sm btn-outline-secondary"
            @click="hideNode()"
          >
            <i class="fa-solid fa-eye-slash" /> Hide Node
          </button>
        </div>
        <span
          class="badge bg-primary"
          :style="{
            backgroundColor: `${getColor(displayLabel)} !important`,
            color: `${getTextColor(displayLabel)} !important`,
          }"
        >
          {{ displayLabel }}</span
        >
        <hr />
        <table class="table table-sm table-bordered result-container__result-table">
          <tbody>
            <tr v-for="property in displayProperties" :key="property.name">
              <th scope="row">
                {{ property.name }}
                <span v-if="property.isPrimaryKey" class="badge bg-primary">PK</span>
              </th>
              <td>{{ property.value }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-else>
        <h5>Overview</h5>
        <div v-if="counters.total.node > 0">
          <div class="result-container__summary-section">
            <p>
              Showing
              <span v-if="numHiddenNodes > 0">
                {{ counters.total.node - numHiddenNodes }}/</span
              >{{ counters.total.node }} nodes
              <span v-if="numHiddenNodes > 0"> ({{ numHiddenNodes }} hidden) </span>
            </p>
            <button
              v-if="numHiddenNodes > 0"
              class="btn btn-sm btn-outline-secondary"
              @click="showAllNodesRels()"
            >
              <i class="fa-solid fa-eye" />
              Show All
            </button>
          </div>
          <hr />
          <table class="table table-sm table-bordered result-container__overview-table">
            <tbody>
              <tr v-for="label in Object.keys(counters.node)" :key="label">
                <th scope="row">
                  <span
                    class="badge bg-primary"
                    :style="{ backgroundColor: ` ${getColor(label)} !important` }"
                    >{{ label }}</span
                  >
                </th>
                <td>{{ counters.node[label] }}</td>
              </tr>
            </tbody>
          </table>
          <br />
        </div>

        <div v-if="counters.total.rel > 0">
          <p>
            Showing
            <span v-if="numHiddenRels > 0">
              {{ counters.total.rel - numHiddenRels }}/</span
            >{{ counters.total.rel }} rels
            <span v-if="numHiddenRels > 0"> ({{ numHiddenRels }} hidden) </span>
          </p>
          <hr />
          <table class="table table-sm table-bordered result-container__overview-table">
            <tbody>
              <tr v-for="label in Object.keys(counters.rel)" :key="label">
                <th scope="row">
                  <span
                    class="badge bg-primary"
                    :style="{
                      backgroundColor: ` ${getColor(label)} !important`,
                      color: `black !important`,
                    }"
                  >
                    {{ label }}
                  </span>
                </th>
                <td>{{ counters.rel[label] }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div v-if="counters.total.node === 0 && counters.total.rel === 0">
          <p>
            <i class="fa-solid fa-circle-info" />
            No nodes or rels to show.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import G6 from '@antv/g6';
import G6Utils from "../../utils/G6Utils";
import { DATA_TYPES, UI_SIZE } from "../../utils/Constants";
import { useSettingsStore } from "../../store/SettingsStore";
import { mapStores } from 'pinia'
import ValueFormatter from "../../utils/ValueFormatter";

export default {
  name: "ResultGraph",
  props: {
    queryResult: {
      type: Object,
      required: false,
      default: null,
    },
    schema: {
      type: Object,
      required: false,
      default: null,
    },
    containerHeight: {
      type: String,
      required: false,
      default: "auto",
    },
  },
  emits: ["graphEmpty"],
  data: () => ({
    graphCreated: false,
    isMaximized: false,
    isSidePanelOpen: false,
    margin: UI_SIZE.DEFAULT_MARGIN,
    toolbarContainerWidth: UI_SIZE.SHELL_TOOL_BAR_WIDTH,
    sidebarWidth: 500,
    graphWidth: 0,
    borderWidth: UI_SIZE.DEFAULT_BORDER_WIDTH,
    numHiddenNodes: 0,
    numHiddenRels: 0,
    hoveredProperties: [],
    hoveredLabel: "",
    hoveredIsNode: false,
    clickedProperties: [],
    clickedLabel: "",
    clickedIsNode: false,
    nodeTableNameMap: {},
    delta: 0.05, // used for zooming, copied from G6
    zoomSensitivity: 2, // used for zooming, copied from G6
    toolbarDebounceTimeout: 100,
    toolbarDebounceTimer: null,
    counters: {
      node: {},
      rel: {},
      total: {
        node: 0,
        rel: 0,
      },
    }
  }),
  computed: {
    graphVizSettings() {
      return this.settingsStore.graphVizSettings;
    },
    performanceSettings() {
      return this.settingsStore.performance;
    },
    maximizeButtonClass() {
      return (this.isEditorMaximized ? "fa-minimize" : "fa-maximize") + " fa-lg fa-solid";
    },
    maximizeButtonTitle() {
      return this.isEditorMaximized ? "Minimize Graph" : "Maximize Graph";
    },
    sidePanelButtonClass() {
      return (this.isSidePanelOpen ? "fa-angle-right" : "fa-angle-left") + " fa-lg fa-solid";
    },
    sidePanelButtonTitle() {
      return this.isSidePanelOpen ? "Close Side Panel" : "Open Side Panel";
    },
    sidePanelPropertyTitlePrefix() {
      const isNode = this.hoveredLabel ? this.hoveredIsNode : this.clickedIsNode;
      return isNode ? "Node" : "Rel";
    },
    isNodeSelectedOrHovered() {
      return this.hoveredLabel ? this.hoveredIsNode : this.clickedIsNode;
    },
    displayLabel() {
      return this.hoveredLabel ? this.hoveredLabel : this.clickedLabel;
    },
    displayProperties() {
      return this.hoveredProperties.length > 0 ? this.hoveredProperties : this.clickedProperties;
    },
    ...mapStores(useSettingsStore),
  },
  watch: {
    performanceSettings: {
      handler(newVal, oldVal) {
        if (newVal.maxNumberOfNodes !== oldVal.maxNumberOfNodes) {
          this.handleSettingsChange();
        }
      },
      deep: true,
    },
    graphVizSettings(newVal, oldVal) {
      let isRerenderNeeded = false;
      for (let key in this.counters.node) {
        if (newVal.nodes[key] && JSON.stringify(newVal.nodes[key]) !== JSON.stringify(oldVal.nodes[key])) {
          isRerenderNeeded = true;
          break;
        }
      }
      if (!isRerenderNeeded) {
        for (let key in this.counters.rel) {
          if (newVal.rels[key] && JSON.stringify(newVal.rels[key]) !== JSON.stringify(oldVal.rels[key])) {
            isRerenderNeeded = true;
            break;
          }
        }
      }
      if (!isRerenderNeeded) {
        return;
      }
      this.handleSettingsChange();
    },

  },
  mounted() {
    this.computeGraphWidth();
    window.addEventListener("resize", this.handleResize);
  },
  beforeUnmount() {
    if (this.g6graph) {
      this.g6graph.destroy();
    }
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    getColor(label) {
      return this.settingsStore.colorForLabel(label);
    },
    getTextColor(label) {
      if (!Object.values(this.nodeTableNameMap).includes(label)) {
        return "#000000"
      }
      return "#ffffff";
    },
    drawGraph() {
      if (this.graphCreated && this.g6graph) {
        this.g6graph.destroy();
      }
      if (!this.queryResult) {
        return;
      }
      const { counters, nodes, edges, nodeTableNameMap } = this.extractGraphFromQueryResult(this.queryResult);
      this.counters = counters;
      if (nodes.length === 0) {
        this.$emit("graphEmpty");
      }
      this.nodeTableNameMap = nodeTableNameMap;
      const container = this.$refs.graph;
      const width = container.offsetWidth;
      const height = container.offsetHeight;

      this.g6graph = new G6.Graph({
        container,
        width,
        height,
        layout: {
          type: 'force',
          preventOverlap: true,
          linkDistance: 200,
          nodeStrength: -50,
          nodeSpacing: 60,
          alpha: 0.5,
          alphaDecay: 0.05,
          alphaMin: 0.05,
        },
        defaultNode: this.settingsStore.defaultNode,
        nodeStateStyles: {
          hover: {
            lineWidth: 3,
            stroke: '#1890FF',
          },
          click: {
            lineWidth: 3,
            stroke: '#1848FF',
          },
        },
        defaultEdge: this.settingsStore.defaultRel,
        edgeStateStyles: {
          hover: {
            stroke: '#1890FF',
          },
          click: {
            stroke: '#1848FF',
          },
        },
        modes: {
          default: ['drag-canvas', 'zoom-canvas', 'drag-node'],
        },
      });

      this.g6graph.data({ nodes, edges, });

      this.g6graph.on('node:mouseenter', (e) => {
        const nodeItem = e.item;
        this.g6graph.setItemState(nodeItem, 'hover', true);
        this.handleHover(nodeItem.getModel());
      });

      this.g6graph.on('node:mouseleave', (e) => {
        const nodeItem = e.item;
        this.g6graph.setItemState(nodeItem, 'hover', false);
        this.resetHover();
      });

      this.g6graph.on('node:click', (e) => {
        const nodeItem = e.item;
        const nodeModel = nodeItem.getModel();
        this.deselectAll();
        this.g6graph.setItemState(nodeItem, 'click', true);
        this.handleClick(nodeModel);
      });

      this.g6graph.on('edge:mouseenter', (e) => {
        const edgeItem = e.item;
        this.g6graph.setItemState(edgeItem, 'hover', true);
        this.handleHover(edgeItem.getModel());
      });

      this.g6graph.on('edge:mouseleave', (e) => {
        const edgeItem = e.item;
        this.g6graph.setItemState(edgeItem, 'hover', false);
        this.resetHover();
      });

      this.g6graph.on('edge:click', (e) => {
        const edgeItem = e.item;
        const edgeModel = edgeItem.getModel();
        this.deselectAll();
        this.g6graph.setItemState(edgeItem, 'click', true);
        this.handleClick(edgeModel);
      });

      this.g6graph.on('canvas:click', () => {
        this.deselectAll();
      });

      this.g6graph.render();
      this.graphCreated = true;
    },

    hideNode() {
      const currentSelectedNode = this.g6graph.findAllByState('node', 'click')[0];
      const nodeId = currentSelectedNode.getModel().id;
      this.numHiddenNodes += 1;
      currentSelectedNode.hide();
      this.deselectAll();
      const relatedEdges = this.g6graph.getEdges().filter((edge) => {
        const edgeModel = edge.getModel();
        return edgeModel.source === nodeId || edgeModel.target === nodeId;
      });
      relatedEdges.forEach((edge) => {
        this.numHiddenRels += 1;
        edge.hide();
      });
    },

    showAllNodesRels() {
      this.g6graph.getNodes().forEach((node) => {
        if (!node.isVisible()) {
          node.show();
        }
      });
      this.g6graph.getEdges().forEach((edge) => {
        if (!edge.isVisible()) {
          edge.show();
        }
      });
      this.numHiddenNodes = 0;
      this.numHiddenRels = 0;
    },

    encodeNodeId(id) {
      return `${id.table}_${id.offset}`;
    },

    encodeRelId(src, dst) {
      return `${src.table}_${src.offset}_${dst.table}_${dst.offset}`;
    },

    extractGraphFromQueryResult(queryResult, linkDistance = 200) {
      const rows = queryResult.rows;
      const dataTypes = queryResult.dataTypes;
      const nodes = {};
      const edges = {};
      const nodeLabels = {};

      const processNode = (rawNode) => {
        const nodeId = this.encodeNodeId(rawNode._id);
        nodeLabels[rawNode._id.table] = rawNode._label;
        const nodeSettings = this.settingsStore.settingsForLabel(rawNode._label);
        const g6Node = {
          ...nodeSettings.g6Settings,
          id: nodeId,
          properties: rawNode,
        }
        if (nodes[nodeId]) {
          return;
        }
        const expectedPropertiesType = {};
        const expectedProperties = this.schema.nodeTables.find((table) => table.name === rawNode._label).properties;
        expectedProperties.forEach((property) => {
          expectedPropertiesType[property.name] = property.type;
        });
        const nodeLabelProp = nodeSettings.label;
        if (!nodeLabelProp) {
          g6Node.label = "";
        } else {
          g6Node.label = rawNode[nodeLabelProp];
          if (nodeLabelProp in expectedPropertiesType) {
            g6Node.label = ValueFormatter.beautifyValue(rawNode[nodeLabelProp], expectedPropertiesType[nodeLabelProp]);
          }
          g6Node.label = String(g6Node.label);
          const nodeSize = nodeSettings.g6Settings.size;
          const fontSize = nodeSettings.g6Settings.labelCfg.style.fontSize;
          g6Node.label = G6Utils.fittingString(g6Node.label, nodeSize - 6, fontSize);
        }
        nodes[nodeId] = g6Node;
      }

      const processRel = (rawRel) => {
        const relSettings = this.settingsStore.settingsForLabel(rawRel._label);
        const relId = this.encodeRelId(rawRel._src, rawRel._dst);
        const g6Rel = {
          ...relSettings.g6Settings,
          id: relId,
          properties: rawRel,
          source: this.encodeNodeId(rawRel._src),
          target: this.encodeNodeId(rawRel._dst),
        }
        if (g6Rel.source === g6Rel.target) {
          g6Rel.type = "loop";
          g6Rel.loopCfg = {
            dist: 50,
          };
        }
        const expectedPropertiesType = {};
        const expectedProperties = this.schema.relTables.find((table) => table.name === rawRel._label).properties;
        expectedProperties.forEach((property) => {
          expectedPropertiesType[property.name] = property.type;
        });
        const relLabelProp = relSettings.label;
        if (!relLabelProp) {
          g6Rel.label = "";
        } else {
          g6Rel.label = rawRel[relLabelProp];
          if (relLabelProp in expectedPropertiesType) {
            g6Rel.label = ValueFormatter.beautifyValue(rawRel[relLabelProp], expectedPropertiesType[relLabelProp]);
          }
          g6Rel.label = String(g6Rel.label);
          const fontSize = relSettings.g6Settings.labelCfg.style.fontSize;
          g6Rel.label = G6Utils.fittingString(g6Rel.label, linkDistance - 10, fontSize);
        }
        if (edges[relId]) {
          return;
        }
        edges[relId] = g6Rel;
      }
      // Deduplicate nodes and edges
      rows.forEach((row) => {
        for (let key in row) {
          switch (dataTypes[key]) {
            case DATA_TYPES.NODE: {
              const node = { ...row[key] };
              processNode(node);
              break;
            }
            case DATA_TYPES.REL: {
              const rel = { ...row[key] };
              processRel(rel);
              break;
            }
            case DATA_TYPES.RECURSIVE_REL: {
              const recursiveRel = { ...row[key] };
              recursiveRel._nodes.forEach((node) => {
                node = { ...node };
                const nodeId = this.encodeNodeId(node._id);
                if (nodes[nodeId]) {
                  return;
                }
                for (let key in node) {
                  if (node[key] === null || node[key] === undefined) {
                    delete node[key];
                  }
                }
                processNode(node);
              });
              recursiveRel._rels.forEach((rel) => {
                rel = { ...rel };
                const relId = this.encodeRelId(rel._src, rel._dst);
                if (edges[relId]) {
                  return;
                }
                for (let key in rel) {
                  if (rel[key] === null || rel[key] === undefined) {
                    delete rel[key];
                  }
                }
                processRel(rel);
              });
              break;
            }
            default:
              break;
          }
        }
      });
      if (Object.keys(nodes).length > this.settingsStore.performance.maxNumberOfNodes) {
        const nodeIds = Object.keys(nodes);
        while (nodeIds.length > this.settingsStore.performance.maxNumberOfNodes) {
          const indexToRemove = Math.floor(Math.random() * nodeIds.length);
          const nodeIdToRemove = nodeIds[indexToRemove];
          delete nodes[nodeIdToRemove];
          nodeIds.splice(indexToRemove, 1);
        }
        for (let key in edges) {
          const edge = edges[key];
          if (!nodes[edge.source] || !nodes[edge.target]) {
            delete edges[key];
          }
        }
      }
      const nodeCounters = {
      };
      for (let key in nodes) {
        const label = nodes[key].properties._label;
        if (!nodeCounters[label]) {
          nodeCounters[label] = 0;
        }
        nodeCounters[label] += 1;
      }
      const relCounters = {
      };
      for (let key in edges) {
        const label = edges[key].properties._label;
        if (!relCounters[label]) {
          relCounters[label] = 0;
        }
        relCounters[label] += 1;
      }
      const totalNodeCount = Object.values(nodeCounters).reduce((a, b) => a + b, 0);
      const totalRelCount = Object.values(relCounters).reduce((a, b) => a + b, 0);
      const counters = {
        node: nodeCounters,
        rel: relCounters,
        total: {
          node: totalNodeCount,
          rel: totalRelCount,
        },
      };
      return {
        counters,
        nodes: Object.values(nodes),
        edges: Object.values(edges),
        nodesMap: nodes,
        edgesMap: edges,
        nodeTableNameMap: nodeLabels,
      };
    },

    handleResize() {
      this.$nextTick(() => {
        if (this.g6graph) {
          const width = this.computeGraphWidth();
          this.g6graph.changeSize(width, parseInt(this.containerHeight));
          this.g6graph.fitCenter();
        }
      });
    },

    handleHover(model) {
      const label = model.properties._label;
      this.hoveredLabel = label;
      this.hoveredProperties = ValueFormatter.filterAndBeautifyProperties(model.properties, this.schema);
      this.hoveredIsNode = !(model.properties._src && model.properties._dst);
    },

    handleClick(model) {
      const label = model.properties._label;
      this.clickedLabel = label;
      this.clickedProperties = ValueFormatter.filterAndBeautifyProperties(model.properties, this.schema);
      this.clickedIsNode = !(model.properties._src && model.properties._dst);
    },

    deselectAll() {
      if (!this.g6graph) {
        return;
      }
      const currentSelectedNode = this.g6graph.findAllByState('node', 'click')[0];
      if (currentSelectedNode) {
        this.g6graph.setItemState(currentSelectedNode, 'click', false);
      }
      const currentSelectedEdge = this.g6graph.findAllByState('edge', 'click')[0];
      if (currentSelectedEdge) {
        this.g6graph.setItemState(currentSelectedEdge, 'click', false);
      }
      this.clickedLabel = "";
      this.clickedProperties = [];
      this.clickedIsNode = false;
    },

    resetHover() {
      this.hoveredLabel = "";
      this.hoveredProperties = [];
      this.hoveredIsNode = false;
    },

    toggleSidePanel() {
      this.isSidePanelOpen = !this.isSidePanelOpen;
      this.$nextTick(() => {
        this.handleResize();
      });
    },

    computeGraphWidth() {
      let width = document.documentElement.clientWidth || document.body.clientWidth;
      width -= this.margin * 2;
      width -= this.toolbarContainerWidth * 2;
      width -= this.isSidePanelOpen ? this.sidebarWidth : 0;
      width -= 2 * this.borderWidth;
      this.graphWidth = width;
      return width;
    },

    zoomIn() {
      if (this.toolbarDebounceTimer) {
        clearTimeout(this.toolbarDebounceTimer);
      }
      this.toolbarDebounceTimer = setTimeout(() => {
        G6Utils.zoomIn(this.g6graph);
      }, this.toolbarDebounceTimeout);
    },

    zoomOut() {
      if (this.toolbarDebounceTimer) {
        clearTimeout(this.toolbarDebounceTimer);
      }
      this.toolbarDebounceTimer = setTimeout(() => {
        G6Utils.zoomOut(this.g6graph);
      }, this.toolbarDebounceTimeout);
    },

    fitToView() {
      if (this.toolbarDebounceTimer) {
        clearTimeout(this.toolbarDebounceTimer);
      }
      this.toolbarDebounceTimer = setTimeout(() => {
        G6Utils.fitToView(this.g6graph);
      }, this.toolbarDebounceTimeout);
    },

    actualSize() {
      if (this.toolbarDebounceTimer) {
        clearTimeout(this.toolbarDebounceTimer);
      }
      this.toolbarDebounceTimer = setTimeout(() => {
        G6Utils.actualSize(this.g6graph);
      }, this.toolbarDebounceTimeout);
    },


    handleSettingsChange() {
      const { nodes, edges, counters } = this.extractGraphFromQueryResult(this.queryResult);
      this.g6graph.changeData({ nodes, edges });
      this.counters = counters;
    }
  },
};
</script>

<style lang="scss" scoped>
.result-graph__wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;

  .result_container__graph {
    height: 100%;
  }

  .result-container__summary-section {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      display: inline-block;
      margin: 0;
    }

    button {
      padding: 5px;
      margin-right: 20px;
    }
  }

  .result-container__tools_container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-left: 2px solid $gray-300;
    background-color: $gray-100;
  }

  .result-container__button {
    padding-top: 4px;
    padding-bottom: 4px;

    > i {
      cursor: pointer;

      &:hover {
        opacity: 0.7;
      }

      &:active {
        opacity: 0.5;
      }
    }

    > i.fa-maximize,
    > i.fa-minimize {
      color: $gray-500;
    }
  }

  .result-container__side-panel {
    width: 500px;
    height: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
    background-color: $gray-100;

    table {
      max-width: calc(100% - 20px);

      &.result-container__overview-table {
        table-layout: fixed;

        td {
          width: 120px;
        }
      }

      &.result-container__result-table {
        font-family: "Courier New", Courier, monospace;

        td {
          word-break: break-all;
        }
      }
    }
  }
}
</style>
