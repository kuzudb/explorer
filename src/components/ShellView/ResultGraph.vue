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
      <h5>
        Node Properties
      </h5>
      <span class="badge bg-primary" :style="{ backgroundColor: ` ${getColor(selectedNodeLabel)} !important` }">{{
        selectedNodeLabel }}</span>
      <hr>
      <table class="table table-sm table-bordered">
        <tbody>
          <tr v-for="property in selectedNodeProperties" :key="property.name">
            <th scope="row">{{ property.name }}
              <span v-if="property.isPrimaryKey" class="badge bg-primary">PK</span>
            </th>
            <td>{{ property.value }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
  
<script lang="js">
import G6 from '@antv/g6';
import Moment from 'moment';
import { DATA_TYPES, UI_SIZE } from "../../utils/Constants";
import ColorManger from "../../utils/ColorManager";

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
    selectedNodeProperties: [],
    selectedNodeLabel: "",
    tableNameMap: {},
    delta: 0.05, // used for zooming, copied from G6
    zoomSensitivity: 2, // used for zooming, copied from G6
    toolbarDebounceTimeout: 100,
    toolbarDebounceTimer: null,
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
  },
  methods: {
    getColor(label) {
      return ColorManger.getColor(label);
    },
    drawGraph() {
      if (this.graphCreated && this.g6graph) {
        this.g6graph.destroy();
      }
      if (!this.queryResult) {
        return;
      }
      const { nodes, edges, tableNameMap } = this.extractGraphFromQueryResult(this.queryResult);
      if (nodes.length === 0) {
        this.$emit("graphEmpty");
      }
      this.tableNameMap = tableNameMap;
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
            opacity: 0.5,
          },
        },
        defaultEdge: {
          size: 3,
          color: '#e2e2e2',
          opacity: 1,
          style: {
            endArrow: true,
          },
        },
        modes: {
          default: ['drag-canvas', 'zoom-canvas', 'drag-node'],
        },
      });

      this.g6graph.data({
        nodes,
        edges,
      });

      this.g6graph.on('node:mouseenter', (e) => {
        const nodeItem = e.item;
        this.g6graph.setItemState(nodeItem, 'hover', true);
        this.handleNodeHover(nodeItem.getModel());
      });

      this.g6graph.on('node:mouseleave', (e) => {
        const nodeItem = e.item;
        this.g6graph.setItemState(nodeItem, 'hover', false);
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
                fill: this.getColor(node._label),
              };
              nodes[nodeId] = node;
              break;
            }
            case DATA_TYPES.REL: {
              const rel = row[key];
              const relId = this.encodeRelId(rel._src, rel._dst);
              rel.source = this.encodeNodeId(rel._src);
              rel.target = this.encodeNodeId(rel._dst);
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
      return {
        nodes: Object.values(nodes),
        edges: Object.values(edges),
        nodesMap: nodes,
        edgesMap: edges,
        tableNameMap: nodeLabels,
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

    beautifyValue(value, type) {
      if (type === DATA_TYPES.DATE) {
        return Moment(value).format('YYYY-MM-DD');
      } else if (type === DATA_TYPES.TIMESTAMP) {
        return Moment(value).format('YYYY-MM-DD HH:mm:ss');
      } else if (type === DATA_TYPES.FLOAT || type === DATA_TYPES.DOUBLE) {
        return Number(value).toFixed(2);
      } else {
        [DATA_TYPES.FIXED_LIST, DATA_TYPES.VAR_LIST].forEach((dataType) => {
          if (type.startsWith(dataType)) {
            // TODO: beautify list recursively
          }
        });
        [DATA_TYPES.STRUCT, DATA_TYPES.MAP, DATA_TYPES.UNION].forEach((dataType) => {
          if (type.startsWith(dataType)) {
            // TODO: beautify struct recursively
          }
        });
        return value;
      }
    },

    handleNodeHover(model) {
      const label = model._label;
      this.selectedNodeLabel = label;
      const properties = [];
      const expectedProperties = this.schema.nodeTables.find((table) => table.name === label).properties;
      expectedProperties.forEach((property) => {
        let value = model[property.name];
        if (value === null || value === undefined) {
          value = "NULL";
        } else {
          value = this.beautifyValue(value, property.type);
        }
        if (value) {
          properties.push({
            name: property.name,
            isPrimaryKey: property.isPrimaryKey,
            type: property.type,
            value,
          });
        }
      });
      this.selectedNodeProperties = properties;
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
      font-family: 'Courier New', Courier, monospace;
      max-width: calc(100% - 20px);
    }
  }
}
</style>
  