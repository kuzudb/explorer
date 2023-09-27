<template>
  <div class="result-graph__wrapper" ref="wrapper">
    <div class="result_container__graph" ref="graph" :style="{ width: graphWidth + 'px' }"></div>
    <div class="result-container__tools_container" ref="toolsContainer" :style="{ width: toolbarContainerWidth + 'px' }">
      <div class="result-container__button">
        <i :class="sidePanelButtonClass" data-bs-toggle="tooltip" data-bs-placement="right"
          :data-bs-original-title="sidePanelButtonTitle" @click="toggleSidePanel"></i>
      </div>
    </div>
    <div class="result-container__side-panel" ref="sidePanel" v-show="isSidePanelOpen">
      <br>
      <div v-if="displayLabel">
        <h5>
          {{ sidePanelPropertyTitlePrefix }} Properties
        </h5>
        <span class="badge bg-primary" :style="{
          backgroundColor: ` ${getColor(displayLabel)} !important`,
          color: sidePanelPropertyTitlePrefix === 'Rel' ? 'black !important' : 'auto'
        }">
          {{ displayLabel }}</span>
        <hr>
        <table class="table table-sm table-bordered result-container__result-table">
          <tbody>
            <tr v-for="property in displayProperties" :key="property.name">
              <th scope="row">{{ property.name }}
                <span v-if="property.isPrimaryKey" class="badge bg-primary">PK</span>
              </th>
              <td>{{ property.value }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-else>
        <h5>
          Overview
        </h5>
        <div v-if="counters.total.node > 0">
          <p>Showing {{ counters.total.node }} nodes</p>
          <hr>
          <table class="table table-sm table-bordered result-container__overview-table">
            <tbody>
              <tr v-for="label in Object.keys(counters.node)" :key="label">
                <th scope="row">
                  <span class="badge bg-primary" :style="{ backgroundColor: ` ${getColor(label)} !important` }">{{
                    label }}</span>
                </th>
                <td>{{ counters.node[label] }}</td>
              </tr>
            </tbody>
          </table>

          <br>
        </div>

        <div v-if="counters.total.rel > 0">
          <p>Showing {{ counters.total.rel }} rels</p>
          <hr>
          <table class="table table-sm table-bordered result-container__overview-table">
            <tbody>
              <tr v-for="label in Object.keys(counters.rel)" :key="label">
                <th scope="row">
                  <span class="badge bg-primary" :style="{
                    backgroundColor: ` ${getColor(label)} !important`,
                    color: `black !important`
                  }">
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
            <i class="fa-solid fa-circle-info"></i>
            No nodes or rels to show.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script lang="js">
import G6 from '@antv/g6';
import { DATA_TYPES, UI_SIZE } from "../../utils/Constants";
import ColorManger from "../../utils/ColorManager";
import ValueFormatter from "../../utils/ValueFormatter";

const DEFAULT_EDGE_COLOR = "#e2e2e2";
export default {
  name: "ResultGraph",
  data: () => ({
    graphCreated: false,
    isMaximized: false,
    isSidePanelOpen: false,
    margin: UI_SIZE.DEFAULT_MARGIN,
    toolbarContainerWidth: UI_SIZE.SHELL_TOOL_BAR_WIDTH,
    sidebarWidth: 500,
    graphWidth: 0,
    borderWidth: UI_SIZE.DEFAULT_BORDER_WIDTH,
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
  computed: {
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
    displayLabel() {
      return this.hoveredLabel ? this.hoveredLabel : this.clickedLabel;
    },
    displayProperties() {
      return this.hoveredProperties.length > 0 ? this.hoveredProperties : this.clickedProperties;
    },
  },
  methods: {
    getColor(label) {
      if (Object.values(this.nodeTableNameMap).includes(label)) {
        return ColorManger.getColor(label);
      }
      return DEFAULT_EDGE_COLOR;
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
          nodeSize: 40,
          nodeSpacing: 10,
        },
        defaultNode: {
          labelCfg: {
            style: {
              fontSize: 12,
              fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
              fontWeight: 600,
            },
          },
          size: 40,
          color: '#5B8FF9',
          style: {
            lineWidth: 0,
            fill: '#C6E5FF',
          },
        },
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
        defaultEdge: {
          size: 3,
          color: DEFAULT_EDGE_COLOR,
          opacity: 1,
          style: {
            endArrow: true,
          },
          labelCfg: {
            style: {
              fontSize: 12,
              fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
              fontWeight: 600,
            },
            autoRotate: true,
          }
        },
        edgeStateStyles: {
          hover: {
            lineWidth: 6,
            stroke: '#1890FF',
          },
          click: {
            lineWidth: 5,
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

    encodeNodeId(id) {
      return `${id.table}_${id.offset}`;
    },

    encodeRelId(src, dst) {
      return `${src.table}_${src.offset}_${dst.table}_${dst.offset}`;
    },

    extractGraphFromQueryResult(queryResult) {
      const rows = queryResult.rows;
      const dataTypes = queryResult.dataTypes;
      const nodes = {};
      const edges = {};
      const nodeLabels = {};
      const nodeTablePrimaryKeys = {};
      // Deduplicate nodes and edges
      rows.forEach((row) => {
        for (let key in row) {
          switch (dataTypes[key]) {
            case DATA_TYPES.NODE: {
              const node = row[key];
              const nodeId = this.encodeNodeId(node._id);
              if (nodes[nodeId]) {
                break;
              }
              let primaryKeyName = nodeTablePrimaryKeys[node._label];
              if (!primaryKeyName) {
                const expectedProperties = this.schema.nodeTables.find((table) => table.name === node._label).properties;
                expectedProperties.forEach((property) => {
                  if (property.isPrimaryKey) {
                    primaryKeyName = property.name;
                    nodeTablePrimaryKeys[node._label] = primaryKeyName;
                  }
                });
              }
              nodeLabels[node._id.table] = node._label;
              node.id = nodeId;
              node.label = node[primaryKeyName];
              node.style = {
                fill: ColorManger.getColor(node._label),
              };
              nodes[nodeId] = node;
              break;
            }
            case DATA_TYPES.REL: {
              const rel = row[key];
              const relId = this.encodeRelId(rel._src, rel._dst);
              rel.source = this.encodeNodeId(rel._src);
              rel.target = this.encodeNodeId(rel._dst);
              rel.label = rel._label;
              if (edges[relId]) {
                break;
              }
              edges[relId] = rel;
              break;
            }
            case DATA_TYPES.RECURSIVE_REL: {
              const recursiveRel = row[key];
              recursiveRel._nodes.forEach((node) => {
                const nodeId = this.encodeNodeId(node._id);
                if (nodes[nodeId]) {
                  return;
                }
                for (let key in node) {
                  if (!node[key]) {
                    delete node[key];
                  }
                }
                nodeLabels[node._id.table] = node._label;
                node.id = nodeId;
                nodes[nodeId] = node;
              });
              recursiveRel._rels.forEach((rel) => {
                const relId = this.encodeRelId(rel._src, rel._dst);
                if (edges[relId]) {
                  return;
                }
                for (let key in rel) {
                  if (!rel[key]) {
                    delete rel[key];
                  }
                }
                rel.source = this.encodeNodeId(rel._src);
                rel.target = this.encodeNodeId(rel._dst);
                edges[relId] = rel;
              });
              break;
            }
            default:
              break;
          }
        }
      });
      const nodeCounters = {
      };
      for (let key in nodes) {
        const label = nodes[key]._label;
        if (!nodeCounters[label]) {
          nodeCounters[label] = 0;
        }
        nodeCounters[label] += 1;
      }
      const relCounters = {
      };
      for (let key in edges) {
        const label = edges[key]._label;
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
          this.g6graph.layout();
        }
      });
    },

    handleHover(model) {
      const label = model._label;
      this.hoveredLabel = label;
      this.hoveredProperties = ValueFormatter.filterAndBeautifyProperties(model, this.schema);
      this.hoveredIsNode = !(model._src && model._dst);
    },

    handleClick(model) {
      const label = model._label;
      this.clickedLabel = label;
      this.clickedProperties = ValueFormatter.filterAndBeautifyProperties(model, this.schema);
      this.clickedIsNode = !(model._src && model._dst);
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

    // Toolbar actions copied from https://github.com/antvis/G6/blob/abca3c0845182c636b43163257f9439aa3d7e738/packages/plugin/src/toolBar/
    // This ensures the same behavior as the original toolbar in G6 while 
    // allowing us to customize the position and style of the toolbar.
    zoomIn() {
      if (!this.g6graph) {
        return;
      }

      if (this.toolbarDebounceTimer) {
        clearTimeout(this.toolbarDebounceTimer);
      }
      this.toolbarDebounceTimer = setTimeout(() => {
        const graph = this.g6graph;
        const currentZoom = graph.getZoom();
        const ratioOut = 1 / (1 - this.delta * this.zoomSensitivity);
        const maxZoom = graph.get('maxZoom');
        if (ratioOut * currentZoom > maxZoom) {
          return;
        }
        graph.zoomTo(currentZoom * ratioOut);
      }, this.toolbarDebounceTimeout);
    },


    zoomOut() {
      if (!this.g6graph) {
        return;
      }
      if (this.toolbarDebounceTimer) {
        clearTimeout(this.toolbarDebounceTimer);
      }
      this.toolbarDebounceTimer = setTimeout(() => {
        const graph = this.g6graph;
        const currentZoom = graph.getZoom();
        const ratioIn = 1 - this.delta * this.zoomSensitivity;
        const minZoom = graph.get('minZoom');
        if (ratioIn * currentZoom < minZoom) {
          return;
        }
        graph.zoomTo(currentZoom * ratioIn);
      }, this.toolbarDebounceTimeout);
    },


    fitToView() {
      if (!this.g6graph) {
        return;
      }
      if (this.toolbarDebounceTimer) {
        clearTimeout(this.toolbarDebounceTimer);
      }
      this.toolbarDebounceTimer = setTimeout(() => {
        this.g6graph.fitView([20, 20]);
      }, this.toolbarDebounceTimeout);
    },

    actualSize() {
      if (!this.g6graph) {
        return;
      }
      if (this.toolbarDebounceTimer) {
        clearTimeout(this.toolbarDebounceTimer);
      }
      this.toolbarDebounceTimer = setTimeout(() => {
        this.g6graph.zoomTo(1);
      }, this.toolbarDebounceTimeout);
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

    >i {
      cursor: pointer;

      &:hover {
        opacity: 0.7;
      }

      &:active {
        opacity: 0.5;
      }
    }

    >i.fa-maximize,
    >i.fa-minimize {
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
        font-family: 'Courier New', Courier, monospace;
      }
    }
  }
}
</style>
  