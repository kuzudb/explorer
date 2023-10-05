<template>
  <div class="schema-view__wrapper" ref="wrapper">
    <div class="schema-view__tools_container" ref="toolsContainer" :style="{ minWidth: toolbarWidth + 'px' }">
      <div class="schema-view__tools_container--bottom">
        <div class="schema-view__button">
          <i class="fa-lg fa-solid fa-magnifying-glass-plus" data-bs-toggle="tooltip" data-bs-placement="right"
            title="Zoom In" @click="zoomIn()"></i>
        </div>
        <div class="schema-view__button">
          <i class="fa-lg fa-solid fa-magnifying-glass-minus" data-bs-toggle="tooltip" data-bs-placement="right"
            title="Zoom Out" @click="zoomOut()"></i>
        </div>
        <div class="schema-view__button">
          <i class="fa-lg fa-solid fa-compress" data-bs-toggle="tooltip" data-bs-placement="right" title="Fit to View"
            @click="fitToView()"></i>
        </div>
        <div class="schema-view__button">
          <i class="fa-lg fa-solid fa-expand" data-bs-toggle="tooltip" data-bs-placement="right" title="Actual Size"
            @click="actualSize()"></i>
        </div>

      </div>
    </div>
    <div class="schema_graph__wrapper" ref="graph" :style="{ width: graphWidth + 'px' }"></div>
    <div class="schema_side-panel__wrapper" ref="sidePanel">
      <br>
      <SchemaSidebarOverview :schema="schema" v-if="schema" v-show="!hoveredLabel && !clickedLabel" @dropTable="dropTable"
        @editTable="editTable" />
      <SchemaSidebarHoverView :schema="schema" :hoveredLabel="hoveredLabel" :hoveredIsNode="hoveredIsNode"
        v-if="hoveredLabel && !clickedLabel" />
      <SchemaSidebarEditView :schema="schema" :clickedLabel="clickedLabel" :clickedIsNode="clickedIsNode"
        v-if="clickedLabel" @dropProperty="dropProperty" />
    </div>
    <SchemaActionDialog ref="actionDialog" @reloadSchema="reloadSchema" />
  </div>
</template>
  
<script lang="js">
import G6 from '@antv/g6';
import { UI_SIZE, SHOW_REL_LABELS_OPTIONS } from "../../utils/Constants";
import G6Utils from "../../utils/G6Utils";
import { useSettingsStore } from "../../store/SettingsStore";
import { mapStores } from 'pinia'
import SchemaSidebarEditView from './SchemaSidebarEditView.vue';
import SchemaSidebarHoverView from './SchemaSidebarHoverView.vue';
import SchemaSidebarOverview from './SchemaSidebarOverview.vue';
import SchemaActionDialog from './SchemaActionDialog.vue';

export default {
  name: "SchemaViewMain",
  components: {
    SchemaSidebarOverview, SchemaSidebarHoverView, SchemaSidebarEditView, SchemaActionDialog
  },
  data: () => ({
    graphCreated: false,
    toolbarWidth: UI_SIZE.SHELL_TOOL_BAR_WIDTH,
    sidebarWidth: 500,
    graphWidth: 0,
    graphHeight: 0,
    borderWidth: UI_SIZE.DEFAULT_BORDER_WIDTH,
    hoveredLabel: "",
    hoveredIsNode: false,
    clickedLabel: "",
    clickedIsNode: false,
    toolbarDebounceTimeout: 100,
    toolbarDebounceTimer: null,
  }),
  props: {
    schema: {
      type: Object,
      required: false,
      default: null,
    },
    navbarHeight: {
      type: Number,
      required: true,
    },
  },
  computed: {
    graphVizSettings() {
      return this.settingsStore.graphVizSettings;
    },
    isNodeSelectedOrHovered() {
      return this.hoveredLabel ? this.hoveredIsNode : this.clickedIsNode;
    },
    displayLabel() {
      return this.hoveredLabel ? this.hoveredLabel : this.clickedLabel;
    },
    ...mapStores(useSettingsStore),
  },
  watch: {
    graphVizSettings() {
      this.handleSettingsChange();
    },
    schema(value, oldValue) {
      const oldNodes = oldValue ? oldValue.nodeTables.map(n => n.name) : [];
      const newNodes = value ? value.nodeTables.map(n => n.name) : [];
      const oldEdges = oldValue ? oldValue.relTables.map(n => n.name) : [];
      const newEdges = value ? value.relTables.map(n => n.name) : [];

      const areSetsEqual = (a, b) => a.size === b.size && [...a].every(value => b.has(value));
      if (areSetsEqual(new Set(oldNodes), new Set(newNodes)) && areSetsEqual(new Set(oldEdges), new Set(newEdges))) {
        console.log("Skip redraw")
        return;
      }
      else {
        console.log("Redraw")
      }

      if (!this.graphCreated) {
        return;
      }
      this.handleSettingsChange();
    },
  },
  methods: {
    getColor(label) {
      return this.settingsStore.colorForLabel(label);
    },
    drawGraph() {
      if (this.graphCreated && this.g6graph) {
        this.g6graph.destroy();
      }
      if (!this.schema) {
        return;
      }
      const { nodes, edges } = this.extractGraphFromSchema(this.schema);
      const container = this.$refs.graph;
      const width = container.offsetWidth;
      const height = container.offsetHeight;

      this.g6graph = new G6.Graph({
        container,
        width,
        height,
        linkCenter: false,
        layout: {
          type: 'force',
          preventOverlap: true,
          linkDistance: 250,
          nodeStrength: -100,
          nodeSize: 100,
          nodeSpacing: 150,
        },
        defaultNode: {
          shape: "circle",
          labelCfg: {
            style: {
              fontSize: 14,
              fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
              fontWeight: 600,
              fill: "#ffffff",
            },
          },
          size: 100,
          style: {
            lineWidth: 0,
            fill: "#FF0000",
          },
        },
        nodeStateStyles: {
          hover: {
            lineWidth: 4,
            stroke: '#1890FF',
          },
          click: {
            lineWidth: 4,
            stroke: '#1848FF',
          },
        },
        defaultEdge: {
          size: 5,
          opacity: 1,
          style: {
            stroke: "#e2e2e2",
            endArrow: true
          },
          labelCfg: {
            style: {
              fontSize: 12,
              fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
              fontWeight: 600,
            },
            refY: -10,
            autoRotate: true,
          },
        },
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
        this.handleHover(nodeItem._cfg.model.label, true);
      });

      this.g6graph.on('node:mouseleave', (e) => {
        const nodeItem = e.item;
        this.g6graph.setItemState(nodeItem, 'hover', false);
        this.resetHover();
      });


      this.g6graph.on('node:click', (e) => {
        this.resetClick();
        const nodeItem = e.item;
        this.g6graph.setItemState(nodeItem, 'click', true);
        this.handleClick();
        this.clickedLabel = nodeItem._cfg.model.label;
        this.clickedIsNode = true;
      });

      this.g6graph.on('edge:mouseenter', (e) => {
        const edgeItem = e.item;
        this.g6graph.setItemState(edgeItem, 'hover', true);
        if (this.settingsStore.schemaView.showRelLabels === SHOW_REL_LABELS_OPTIONS.HOVER) {
          this.g6graph.updateItem(edgeItem, {
            label: edgeItem._cfg.model._label
          });
          edgeItem.toFront();
        }
        this.handleHover(edgeItem._cfg.model._label, false);
      });

      this.g6graph.on('edge:mouseleave', (e) => {
        const edgeItem = e.item;
        this.g6graph.setItemState(edgeItem, 'hover', false);
        this.resetHover();
        if (this.settingsStore.schemaView.showRelLabels === SHOW_REL_LABELS_OPTIONS.HOVER) {
          const currentSelectedEdge = this.g6graph.findAllByState('edge', 'click')[0];
          if (currentSelectedEdge && currentSelectedEdge._cfg.id === edgeItem._cfg.id) {
            return;
          }
          this.g6graph.updateItem(edgeItem, {
            label: ""
          });
        }
      });

      this.g6graph.on('edge:click', (e) => {
        this.resetClick();
        const edgeItem = e.item;
        this.g6graph.setItemState(edgeItem, 'click', true);
        this.handleClick();
        if (this.settingsStore.schemaView.showRelLabels === SHOW_REL_LABELS_OPTIONS.HOVER) {
          this.g6graph.updateItem(edgeItem, {
            label: edgeItem._cfg.model._label
          });
          edgeItem.toFront();
        }
        this.clickedIsNode = false;
        this.clickedLabel = edgeItem._cfg.model._label;
      });

      this.g6graph.on('canvas:click', () => {
        this.resetClick();
      });

      this.g6graph.render();
      this.graphCreated = true;
    },

    extractGraphFromSchema(schema) {
      const overlapEdgeHash = {};
      const ARC_CURVE_OFFSETS = [
        60, -60, 80, -80, 100, -100, 120, -120, 140, -140, 160, -160, 180, -180, 200, -200,
      ]
      const LOOP_POSITIONS = [
        "top",
        "top-right",
        "right",
        "bottom-right",
        "bottom",
        "bottom-left",
        "left",
        "top-left",
      ];
      const nodes = schema.nodeTables.map(n => {
        return {
          id: n.name,
          label: n.name,
          style: {
            fill: this.getColor(n.name),
          },
        };
      })

      const edges = schema.relTables.
        map(r => {
          const edge = {
            id: r.name,
            source: r.src,
            target: r.dst,
            label: this.settingsStore.schemaView.showRelLabels === SHOW_REL_LABELS_OPTIONS.ALWAYS ? r.name : "",
            _label: r.name,
            style: {
              stroke: this.getColor(r.name),
            }
          };
          const hashKey = `${r.src}-${r.dst}`;
          if (!overlapEdgeHash[hashKey]) {
            overlapEdgeHash[hashKey] = 0;
          }
          overlapEdgeHash[hashKey] += 1;

          if (edge.source === edge.target) {
            edge.type = 'loop';
            edge.loopCfg = {
              position: LOOP_POSITIONS[(overlapEdgeHash[hashKey] - 1) % LOOP_POSITIONS.length],
              dist: 100,
            };
          }
          else {
            edge.type = 'quadratic';
            edge.curveOffset = ARC_CURVE_OFFSETS[(overlapEdgeHash[hashKey] - 1) % ARC_CURVE_OFFSETS.length];
          }
          return edge;
        });
      return { nodes, edges };
    },

    handleResize() {
      this.$nextTick(() => {
        const width = this.computeGraphWidth();
        const height = this.computeGraphHeight();
        if (this.g6graph) {
          this.g6graph.changeSize(width, height);
          this.g6graph.fitCenter();
          this.g6graph.layout();
        }
      });
    },

    handleHover(label, isNode) {
      this.hoveredLabel = label;
      this.hoveredIsNode = isNode;
    },

    handleClick() {
    },

    resetClick() {
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
        if (this.settingsStore.schemaView.showRelLabels === SHOW_REL_LABELS_OPTIONS.HOVER) {
          this.g6graph.updateItem(currentSelectedEdge, {
            label: ""
          });
        }
      }
      this.clickedLabel = "";
      this.clickedIsNode = false;
    },

    resetHover() {
      this.hoveredLabel = "";
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
      width -= this.sidebarWidth;
      width -= UI_SIZE.DEFAULT_BORDER_WIDTH * 2;
      width -= this.toolbarWidth;
      this.graphWidth = width;
      return width;
    },

    computeGraphHeight() {
      let height = document.documentElement.clientHeight || document.body.clientHeight;
      height -= this.navbarHeight;
      this.graphHeight = height;
      return height;
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
      const { nodes, edges, counters } = this.extractGraphFromSchema(this.schema);
      this.g6graph.changeData({ nodes, edges });
      this.counters = counters;
    },

    dropTable(tableName) {
      this.$refs.actionDialog.dropTable(tableName);
    },

    editTable(tableName) {
      let isTableNode = false;
      const table = this.schema.relTables.find(t => t.name === tableName);
      if (!table) {
        isTableNode = true;
      }
      this.clickedIsNode = isTableNode;
      this.clickedLabel = tableName;
      const g6Item = this.g6graph ? this.g6graph.findById(tableName) : null;
      if (g6Item) {
        this.g6graph.setItemState(g6Item, 'click', true);
      }
      if (this.settingsStore.schemaView.showRelLabels === SHOW_REL_LABELS_OPTIONS.HOVER) {
        this.g6graph.updateItem(g6Item, {
          label: tableName
        });
        g6Item.toFront();
      }
    },

    dropProperty({ table, property }) {
      this.$refs.actionDialog.dropProperty(table, property);
    },

    reloadSchema() {
      this.$emit("reloadSchema");
    }
  },
  mounted() {
    this.computeGraphWidth();
    this.computeGraphHeight();
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
.schema-view__wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;

  .schema_graph__wrapper {
    height: 100%;
  }

  .schema_side-panel__wrapper {
    width: 500px;
    padding-left: 12px;
    padding-right: 12px;
    overflow-x: hidden;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    border-left: 2px solid $gray-300;
    background-color: $gray-100;
  }
}

.schema-view__tools_container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: $gray-100;
  border-right: 2px solid $gray-300;

  .schema-view__tools_container--bottom {
    margin-top: auto;
    padding-bottom: 8px;

    .schema-view__button {
      >i {
        color: $body-tertiary-color;
      }
    }
  }
}

.schema-view__button {
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
  