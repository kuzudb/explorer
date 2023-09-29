<template>
  <div class="schema-view__wrapper" ref="wrapper">
    <div class="schema_graph__wrapper" ref="graph" :style="{ width: graphWidth + 'px' }"></div>
    <div class="schema_side-panel__wrapper" ref="sidePanel">
      <br>
      <SchemaSidebarOverview :schema="schema" v-if="schema" />
    </div>
  </div>
</template>
  
<script lang="js">
import G6 from '@antv/g6';
import { UI_SIZE } from "../../utils/Constants";
import { useSettingsStore } from "../../store/SettingsStore";
import { mapStores } from 'pinia'
import SchemaSidebarOverview from './SchemaSidebarOverview.vue';

export default {
  name: "SchemaViewMain",
  components: {
    SchemaSidebarOverview,
  },
  data: () => ({
    graphCreated: false,
    toolbarContainerWidth: UI_SIZE.SHELL_TOOL_BAR_WIDTH,
    sidebarWidth: 500,
    graphWidth: 0,
    graphHeight: 0,
    borderWidth: UI_SIZE.DEFAULT_BORDER_WIDTH,
    hoveredProperties: [],
    hoveredLabel: "",
    hoveredIsNode: false,
    clickedProperties: [],
    clickedLabel: "",
    clickedIsNode: false,
    delta: 0.05, // used for zooming, copied from G6
    zoomSensitivity: 2, // used for zooming, copied from G6
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
    displayProperties() {
      return this.hoveredProperties.length > 0 ? this.hoveredProperties : this.clickedProperties;
    },
    ...mapStores(useSettingsStore),
  },
  watch: {
    graphVizSettings() {
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
        console.log(e);
      });

      this.g6graph.on('node:mouseleave', (e) => {
        console.log(e);

      });

      this.g6graph.on('node:click', (e) => {
        console.log(e);

      });

      this.g6graph.on('edge:mouseenter', (e) => {
        console.log(e);

      });

      this.g6graph.on('edge:mouseleave', (e) => {
        console.log(e);

      });

      this.g6graph.on('edge:click', (e) => {
        console.log(e);

      });

      this.g6graph.on('canvas:click', () => {
        this.deselectAll();
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
            source: r.src,
            target: r.dst,
            label: r.name,
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

    handleHover() {

    },

    handleClick() {
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
      width -= this.sidebarWidth;
      width -= UI_SIZE.DEFAULT_BORDER_WIDTH;
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

    },


    zoomOut() {

    },


    fitToView() {

    },

    actualSize() {

    },

    handleSettingsChange() {
      const { nodes, edges, counters } = this.extractGraphFromSchema(this.schema);
      this.g6graph.changeData({ nodes, edges });
      this.counters = counters;
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
</style>
  