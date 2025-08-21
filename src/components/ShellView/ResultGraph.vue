<template>
  <div
    ref="wrapper"
    class="result-graph__wrapper"
  >
    <div
      ref="graph"
      class="result-graph__container"
      :style="{ width: graphWidth + 'px' }"
    />

    <HoverContainer
      ref="hoverContainer"
      :schema="schema"
    />

    <div
      v-show="isSidePanelOpen"
      ref="sidePanel"
      class="result-graph__side-panel"
      :style="{ width: sidebarWidth + 'px' }"
    >
      <div
        class="resize-handle"
        @mousedown="startResize"
      />
      <div class="result-graph__side-panel-content">
        <button
          class="result-graph__sidebar-button--close"
          @click="toggleSidePanel"
        >
          <i class="fa-solid fa-times" />
        </button>

        <div
          v-if="clickedIsNode"
          class="result-graph__actions"
        >
          <br>

          <h5>Actions</h5>
          <button
            class="btn btn-sm btn-outline-secondary"
            @click="hideNode()"
          >
            <i class="fa-solid fa-eye-slash" /> Hide Node
          </button>

          &nbsp;

          <button
            v-if="!isHighlightedMode"
            class="btn btn-sm btn-outline-secondary"
            @click="enableHighlightMode()"
          >
            <i class="fa-solid fa-arrows-to-circle" /> Highlight Mode
          </button>

          <button
            v-else
            class="btn btn-sm btn-outline-primary"
            @click="disableHighlightMode()"
          >
            <i class="fa-solid fa-arrows-to-circle" />
            Disable Highlight Mode
          </button>

          &nbsp;

          <button
            v-if="!isCurrentNodeExpanded"
            class="btn btn-sm btn-outline-secondary"
            @click="expandSelectedNode()"
          >
            <i class="fa-solid fa-up-down-left-right" />
            Expand Neighbors
          </button>

          <button
            v-else
            class="btn btn-sm btn-outline-primary"
            @click="collapseSelectedNode()"
          >
            <i class="fa-solid fa-up-down-left-right" />
            Collapse Neighbors
          </button>
        </div>

        <br>
        <div v-if="displayLabel">
          <div class="result-graph__summary-section">
            <h5>{{ sidePanelPropertyTitlePrefix }} Properties</h5>
          </div>
          <span
            class="badge bg-primary"
            :style="{
              backgroundColor: `${getColor(displayLabel)} !important`,
              color: `white !important`,
              textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
            }"
          >
            {{ displayLabel }}</span>
          <hr>
          <table class="table table-sm table-borderless result-graph__result-table">
            <tbody>
              <tr
                v-for="property in displayProperties"
                :key="property.name"
              >
                <th
                  scope="row"
                  class="copyable-cell"
                >
                  {{ property.name }}
                  <span
                    v-if="property.isPrimaryKey"
                    class="badge bg-primary"
                    style="
                      text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000; 
                      color: white !important;"
                  >PK</span>
                  <button
                    class="copy-button"
                    @click="copyToClipboard(property.name)"
                    @mouseenter="showCopyButton($event)"
                    @mouseleave="hideCopyButton($event)"
                  >
                    <i class="fa-solid fa-copy" />
                  </button>
                </th>
                <td class="copyable-cell">
                  {{ property.value }}
                  <button
                    class="copy-button"
                    @click="copyToClipboard(property.value)"
                    @mouseenter="showCopyButton($event)"
                    @mouseleave="hideCopyButton($event)"
                  >
                    <i class="fa-solid fa-copy" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div v-else>
          <!-- Query Metrics Section -->
          <div v-if="queryResult && hasQueryMetrics">
            <h5>Query Metrics</h5>
            <hr>
            <table class="table table-sm table-borderless result-graph__metrics-table">
              <tbody>
                <tr>
                  <th scope="row">
                    <i
                      class="fa-solid fa-code"
                      style="margin-right: 0.5rem; color: var(--bs-body-bg-accent);"
                    />
                    Compile Time
                  </th>
                  <td v-if="queryMetrics.compileTime">
                    {{ formatTime(queryMetrics.compileTime) }}
                  </td>
                  <td v-else>
                    <span class="text-muted small">
                      <i class="fa-solid fa-info-circle" /> Not available
                    </span>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <i
                      class="fa-solid fa-play"
                      style="margin-right: 0.5rem; color: var(--bs-body-bg-accent);"
                    />
                    Execution Time
                  </th>
                  <td v-if="queryMetrics.executionTime">
                    {{ formatTime(queryMetrics.executionTime) }}
                  </td>
                  <td v-else>
                    <span class="text-muted small">
                      <i class="fa-solid fa-info-circle" /> Not available
                    </span>
                  </td>
                </tr>
                <tr v-if="queryMetrics.totalTime">
                  <th scope="row">
                    <i
                      class="fa-solid fa-clock"
                      style="margin-right: 0.5rem; color: var(--bs-body-bg-accent);"
                    />
                    Total Time
                  </th>
                  <td>
                    {{ formatTime(queryMetrics.totalTime) }}
                  </td>
                </tr>
                <tr v-if="queryMetrics.rows">
                  <th scope="row">
                    <i
                      class="fa-solid fa-list"
                      style="margin-right: 0.5rem; color: var(--bs-body-bg-accent);"
                    />
                    Rows
                  </th>
                  <td>{{ queryMetrics.rows.toLocaleString() }}</td>
                </tr>
                <tr v-if="queryMetrics.nodes">
                  <th scope="row">
                    <i
                      class="fa-solid fa-circle"
                      style="margin-right: 0.5rem; color: var(--bs-body-bg-accent);"
                    />
                    Nodes
                  </th>
                  <td>{{ queryMetrics.nodes.toLocaleString() }}</td>
                </tr>
                <tr v-if="queryMetrics.relationships">
                  <th scope="row">
                    <i
                      class="fa-solid fa-arrow-right"
                      style="margin-right: 0.5rem; color: var(--bs-body-bg-accent);"
                    />
                    Relationships
                  </th>
                  <td>{{ queryMetrics.relationships.toLocaleString() }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <br>

          <h5>Overview</h5>
          <div v-if="counters.total.node > 0">
            <div class="result-graph__summary-section">
              <p>
                Showing
                <span v-if="numHiddenNodes > 0">
                  {{ counters.total.node - numHiddenNodes }}/</span>{{ counters.total.node }} nodes
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
            <hr>
            <table class="table table-sm table-borderless result-graph__overview-table">
              <tbody>
                <tr
                  v-for="label in Object.keys(counters.node)"
                  :key="label"
                >
                  <th scope="row">
                    <span
                      class="badge bg-primary"
                      :style="{ backgroundColor: ` ${getColor(label)} !important`, textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000', color: 'white !important' }"
                    >{{
                      label
                    }}</span>
                  </th>
                  <td>{{ counters.node[label] }}</td>
                </tr>
              </tbody>
            </table>
            <br>
          </div>

          <div v-if="counters.total.rel > 0">
            <p>
              Showing
              <span v-if="numHiddenRels > 0">
                {{ counters.total.rel - numHiddenRels }}/</span>{{ counters.total.rel }} rels
              <span v-if="numHiddenRels > 0"> ({{ numHiddenRels }} hidden) </span>
            </p>
            <hr>
            <table class="table table-sm table-borderless result-graph__overview-table">
              <tbody>
                <tr
                  v-for="label in Object.keys(counters.rel)"
                  :key="label"
                >
                  <th scope="row">
                    <span
                      class="badge bg-primary"
                      :style="{
                        backgroundColor: ` ${getColor(label)} !important`,
                        color: 'white !important',
                        textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
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
    <button
      v-show="!isSidePanelOpen"
      class="result-graph__sidebar-button--open"
      data-bs-toggle="tooltip"
      data-bs-placement="right"
      data-bs-original-title="Open Sidebar"
      @click="toggleSidePanel"
    >
      <i class="fa-lg fa-solid fa-angle-left" />
    </button>
  </div>
</template>

<script lang="js">
import { Graph, GraphEvent } from '@antv/g6';
import G6Utils from "../../utils/G6Utils";
import {
  DATA_TYPES, UI_SIZE, LOOP_POSITIONS, ARC_CURVE_OFFSETS
} from "../../utils/Constants";
import NeighborsFetcher from "../../utils/NeighborsFetcher";
import { useSettingsStore } from "../../store/SettingsStore";
import { useModeStore } from "../../store/ModeStore";
import { mapStores } from 'pinia'
import ValueFormatter from "../../utils/ValueFormatter";
import HoverContainer from "./HoverContainer.vue";
import g6Utils from '../../utils/G6Utils';

export default {
  name: "ResultGraph",
  components: {
    HoverContainer
  },
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
    isMaximized: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  emits: ["graphEmpty"],
  data: () => ({
    graphCreated: false,
    isSidePanelOpen: false,
    isHighlightedMode: false,
    margin: UI_SIZE.DEFAULT_MARGIN,
    toolbarContainerWidth: UI_SIZE.SHELL_TOOL_BAR_WIDTH,
    sidebarWidth: 350,
    graphWidth: 0,
    borderWidth: UI_SIZE.DEFAULT_BORDER_WIDTH,
    hiddenElements: {
      nodes: {},
      edges: {}
    },
    clickedProperties: [],
    clickedId: null,
    clickedLabel: "",
    clickedIsNode: false,
    isCurrentNodeExpanded: false,
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
    },
    draggedNodeDebounceTimer: null,
    expansions: [],
    isResizing: false,
    minSidebarWidth: 350,
    maxSidebarWidth: 800,
    isInitialRender: true,
    drawPromise: null
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
      const isNode = this.clickedIsNode;
      return isNode ? "Node" : "Rel";
    },
    isNodeSelectedOrHovered() {
      return this.clickedLabel !== "";
    },
    displayLabel() {
      return this.clickedLabel;
    },
    displayProperties() {
      return this.clickedProperties;
    },
    ...mapStores(useSettingsStore, useModeStore),
    getTextColor() {
      return (label) => {
        const isNode = this.schema.nodeTables.find((table) => table.name === label);
        return isNode ? "#ffffff" : "#ffffff";
      };
    },
    numHiddenNodes() {
      return Object.keys(this.hiddenElements.nodes).length;
    },
    numHiddenRels() {
      return Object.keys(this.hiddenElements.edges).length;
    },
    queryMetrics() {
      // Extract metrics from query result
      if (!this.queryResult) {
        return {};
      }
      
      const metrics = {};
      
      try {
        // Timing information from query summary
        if (this.queryResult.querySummary) {
          metrics.compileTime = this.queryResult.querySummary.compilingTime || null;
          metrics.executionTime = this.queryResult.querySummary.executionTime || null;
          
          // Handle total time calculation
          if (metrics.executionTime  && metrics.compileTime) {
            metrics.totalTime = metrics.compileTime + metrics.executionTime;
          }
        }
        
        // Get row count 
        if (this.queryResult.rows && Array.isArray(this.queryResult.rows)) {
          metrics.rows = this.queryResult.rows.length;
        }
        
        // Get node and relationship counts from counters
        if (this.counters && this.counters.total) {
          metrics.nodes = this.counters.total.node || 0;
          metrics.relationships = this.counters.total.rel || 0;
        }

      } catch (error) {
        console.warn('Error extracting query metrics:', error);
        return {};
      }
      
      return metrics;
    },
    hasQueryMetrics() {
      if (!this.queryMetrics || typeof this.queryMetrics !== 'object') {
        return false;
      }
      
      return Object.keys(this.queryMetrics).length > 0;
    },
  },
  watch: {
    performanceSettings: {
      handler(newVal, oldVal) {
        if (newVal.maxNumberOfNodes !== oldVal.maxNumberOfNodes) {
          return this.redrawGraph();
        }
        if (newVal.maxNumberOfNodesWithLabels !== oldVal.maxNumberOfNodesWithLabels) {
          return this.redrawGraph();
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
      this.redrawGraph();
    },

    isSidePanelOpen() {
      this.$nextTick(() => {
        this.handleResize();
      });
    },
  },
  mounted() {
    this.computeGraphWidth();
    window.addEventListener("resize", this.handleResize);
    window.addEventListener("mousemove", this.handleResizeMove);
    window.addEventListener("mouseup", this.stopResize);
    if (this.isMaximized) {
      this.$nextTick(() => {
        this.handleResize();
      });
    }
  },
  beforeUnmount() {
    if (this.g6Graph) {
      this.g6Graph.destroy();
    }
    window.removeEventListener("resize", this.handleResize);
    window.removeEventListener("mousemove", this.handleResizeMove);
    window.removeEventListener("mouseup", this.stopResize);
  },
  methods: {
    copyToClipboard(text) {
      navigator.clipboard?.writeText(text).catch(() => {
        document.execCommand('copy', false, text);
      });

      // Find the button that was clicked and show success state
      const event = window.event;
      if (event && event.target) {
        const button = event.target.closest('.copy-button');
        if (button) {
          const icon = button.querySelector('i');
          if (icon) {
            icon.className = 'fa-solid fa-check';
            button.style.background = '#28a745';
            setTimeout(() => {
              icon.className = 'fa-solid fa-copy';
              button.style.background = 'var(--bs-body-bg-accent)';
            }, 1000);
          }
        }
      }
    },

    showCopyButton(event) {
      const button = event.target.closest('.copyable-cell').querySelector('.copy-button');
      if (button) {
        button.style.opacity = '1';
      }
    },

    hideCopyButton(event) {
      const button = event.target.closest('.copyable-cell').querySelector('.copy-button');
      if (button) {
        button.style.opacity = '0';
      }
    },
    async setElementVisibility(elements) {
      if (!this.g6Graph) {
        return;
      }
      if (this.drawPromise) {
        await this.drawPromise;
      }
      this.drawPromise = this.g6Graph.setElementVisibility(elements);
      await this.drawPromise;
      this.drawPromise = null;
    },
    async render() {
      if (!this.g6Graph) {
        return;
      }
      if (this.drawPromise) {
        await this.drawPromise;
      }
      console.time("G6 graph render");
      this.drawPromise = this.g6Graph.render();
      await this.drawPromise;
      console.timeEnd("G6 graph render");
      this.drawPromise = null;
    },
    async setElementState(elements) {
      if (!this.g6Graph) {
        return;
      }
      if (this.drawPromise) {
        await this.drawPromise;
      }
      this.drawPromise = this.g6Graph.setElementState(elements);
      await this.drawPromise;
      this.drawPromise = null;
    },
    getColor(label) {
      return this.settingsStore.colorForLabel(label);
    },
    getLayoutConfig(edges) {
      let nodeSpacing = edges.length * 8;
      nodeSpacing = nodeSpacing < 80 ? 80 : nodeSpacing;
      nodeSpacing = nodeSpacing > 500 ? 500 : nodeSpacing;

      const config = {
        type: 'd3-force',
        link: {
          // Dynamic distance: 
          // Fixed distance for nodes with large number of neighbors will cause mass collision (a large circle)
          // Variable distance with multiple layers of variation will display the nodes in a spaced out manner (multiple circles around node)
          distance: (d) => {
            // Get the source and target node degrees
            const sourceDegree = d.source.data?.degree || 1;
            const targetDegree = d.target.data?.degree || 1;

            // Base distance for nodes with few connections
            const baseDistance = 150;

            // For high-degree nodes (hubs), vary the distance based on connection index
            if (sourceDegree > 5 || targetDegree > 5) {
              // Use a hash of the edge ID to create pseudo-random but consistent distances
              const edgeHash = d.id ? d.id.split('').reduce((a, b) => a + b.charCodeAt(0), 0) : 0;
              const variation = (edgeHash % 6) * 100 + 100;
              return baseDistance + variation;
            }

            // For regular nodes, use standard distance
            return baseDistance;
          },
          strength: 2,
        },
        collide: {
          radius: (d) => d.size / 2 + 20, // Add padding for better collision detection
          strength: 1, // Positive strength for stronger collision avoidance
        },
        manyBody: {
          strength: -1200,  // Negative strength indicates repulsion
        },
        radial: {
          radius: 200,

        },
        alpha: 1,
        alphaMin: 0.2,
        alphaDecay: 0.03,
        velocityDecay: 0.45,

      };

      return config;
    },
    async drawGraph() {
      if (this.graphCreated && this.g6Graph) {
        this.g6Graph.destroy();
      }
      if (!this.queryResult) {
        return;
      }
      let { counters, nodes, edges, } = this.extractGraphFromQueryResult(this.queryResult);
      this.counters = counters;
      if (nodes.length === 0) {
        this.$emit("graphEmpty");
      }

      const container = this.$refs.graph;
      const width = container.offsetWidth;
      const height = this.containerHeight === "auto" ? container.offsetHeight : parseInt(this.containerHeight);
      const layoutConfig = this.getLayoutConfig(edges);

      this.g6Graph = new Graph({
        container,
        width,
        height,
        layout: layoutConfig,
        node: {
          type: 'circle',
          style: {
            labelFontSize: 14,
            labelFontFamily: "Lexend, Helvetica Neue, Helvetica, Arial, sans-serif",
            labelFontWeight: 300,
            labelPlacement: 'center',
            zIndex: 10,
          },
          state: {
            active: {
              lineWidth: 10,
              stroke: '#1890FF',
            },

          },
        },
        edge: {
          style: {
            lineWidth: 5,
            stroke: "#e2e2e2",
            endArrow: true,
            labelFontSize: 12,
            labelFontFamily: "Lexend,Helvetica Neue, Helvetica, Arial, sans-serif",
            labelFontWeight: 350,
            labelBackground: true,
            labelBackgroundFill: "#ffffff",
            labelPadding: [0, 8],
            labelBackgroundRadius: 2,
            labelAutoRotate: true,
            labelTextBaseline: 'bottom',
            endArrow: true,
            labelAutoRotate: true,
            labelOffsetY: -8,
            zIndex: 1,
          },
          state: {
            active: {
              lineWidth: 10,
              stroke: '#1890FF',
            },

          },
        },
        behaviors: ['zoom-canvas', 'drag-canvas',
          {
            type: 'optimize-viewport-transform',
            debounce: 300,
          },
          {
            type: 'drag-element-force',
            fixed: true,
          },
          {
            type: 'click-select',
            key: 'click-select-element',
            degree: 0,
            state: 'active',
            enable: true,
          },
          {
            type: 'click-select',
            key: 'click-highlight',
            degree: 1,
            state: 'active',
            unselectedState: 'inactive',
            enable: false,
            neighborState: 'active',
          },
        ],
      });

      this.g6Graph.setData({ nodes, edges, });
      await this.render();
      this.fitToView();

      // Fit the graph to view after rendering
      this.g6Graph.on(GraphEvent.AFTER_RENDER, () => {
        console.timeEnd("G6 graph render");
      });

      // Show hover container on node and edge hover
      this.g6Graph.on('node:pointerenter', (e) => {
        const id = e.target.id;
        const nodeData = this.g6Graph.getNodeData(id);
        this.$refs.hoverContainer.handleHover(nodeData, e);
      });

      this.g6Graph.on('node:pointerleave', (e) => {
        this.$refs.hoverContainer.resetHover();
      });

      this.g6Graph.on('node:pointermove', (e) => {
        this.$refs.hoverContainer.showTooltip(e);
      });

      this.g6Graph.on('edge:pointerenter', (e) => {
        const id = e.target.id;
        const edgeData = this.g6Graph.getEdgeData(id);
        this.$refs.hoverContainer.handleHover(edgeData, e);
      });

      this.g6Graph.on('edge:pointerleave', (e) => {
        this.$refs.hoverContainer.resetHover();
      });

      this.g6Graph.on('edge:pointermove', (e) => {
        this.$refs.hoverContainer.showTooltip(e);
      });
      // End of hover container setup

      // Click node and edge to select it and open side panel
      this.g6Graph.on('node:click', (e) => {
        this.$refs.hoverContainer.resetHover();
        const clickedId = e.target.config.id;
        const nodeData = this.g6Graph.getNodeData(clickedId);
        this.handleClick(nodeData);
        if (!this.isSidePanelOpen) {
          // Add a small delay to avoid conflicting with double click
          window.setTimeout(() => {
            this.isSidePanelOpen = true;
            this.$nextTick(() => {
              this.handleResize();
            });
          }, 200);
        }
      });

      this.g6Graph.on('edge:click', (e) => {
        this.$refs.hoverContainer.resetHover();
        const clickedId = e.target.config.id;
        const edgeData = this.g6Graph.getEdgeData(clickedId);
        this.handleClick(edgeData);
        if (!this.isSidePanelOpen) {
          this.isSidePanelOpen = true;
        }
      });
      // End of click to select node and edge

      this.g6Graph.on('node:dblclick', (e) => {
        const itemId = e.target.id;
        const isCurrentNodeExpanded = this.isNeighborExpanded(e.target);
        if (isCurrentNodeExpanded) {
          this.collapseNode(itemId);
          this.deselectAll();
          return this.redrawGraph();
        }
        const nodeData = this.g6Graph.getNodeData(itemId);
        this.expandOnNode(nodeData);
        this.deselectAll();
      });

      // Ensure force simulation continues after node dragging
      this.g6Graph.on('node:dragend', () => {
        // Restart the force simulation to ensure proper collision detection
        const layout = this.g6Graph.getLayout();
        if (layout && layout.simulation) {
          layout.simulation.alpha(0.3).restart();
        }
      });

      this.g6Graph.on('canvas:click', () => {
        this.deselectAll();
      });

      this.graphCreated = true;
    },

    hideNode() {
      this.hiddenElements.nodes[this.clickedId] = 'hidden';
      const nodeId = this.clickedId;
      this.deselectAll();

      const edges = this.g6Graph.getEdgeData();
      const relatedEdges = edges.filter((edge) => {
        return edge.source === nodeId || edge.target === nodeId;
      });
      relatedEdges.forEach((edge) => this.hiddenElements.edges[edge.id] = 'hidden');
      const combined = { ...this.hiddenElements.nodes, ...this.hiddenElements.edges };
      return this.setElementVisibility(combined);
    },

    enableHighlightMode() {
      this.g6Graph.updateBehavior({ key: 'click-select-element', enable: false });
      this.g6Graph.updateBehavior({ key: 'click-highlight', enable: true });
      this.isHighlightedMode = true;

      if (!this.clickedId) return;

      const combined = {};
      const activeNodes = new Set([this.clickedId]);

      // Mark active edges and connected nodes
      this.g6Graph.getEdgeData().forEach(edge => {
        const isConnected = edge.source === this.clickedId || edge.target === this.clickedId;
        combined[edge.id] = isConnected ? ['active'] : ['inactive'];

        if (isConnected) {
          activeNodes.add(edge.source);
          activeNodes.add(edge.target);
        }
      });
      this.g6Graph.getNodeData().forEach(node => {
        combined[node.id] = activeNodes.has(node.id) ? ['active'] : ['inactive'];
      });
      this.setElementState(combined);

    },

    disableHighlightMode() {
      this.g6Graph.updateBehavior({ key: 'click-select-element', enable: true });
      this.g6Graph.updateBehavior({ key: 'click-highlight', enable: false });
      this.isHighlightedMode = false;
      const inactiveNodes = this.g6Graph.getElementDataByState('node', 'inactive');
      const inactiveEdges = this.g6Graph.getElementDataByState('edge', 'inactive');
      const combined = {};
      inactiveNodes.forEach((node) => {
        combined[node.id] = [];
      });
      inactiveEdges.forEach((edge) => {
        combined[edge.id] = [];
      });
      this.setElementState(combined);
      this.deselectAll();
    },

    showAllNodesRels() {
      const combined = { ...this.hiddenElements.nodes, ...this.hiddenElements.edges };
      Object.keys(combined).forEach((key) => {
        combined[key] = 'visible';
      });
      return this.setElementVisibility(combined).then(() => {
        this.hiddenElements = { nodes: {}, edges: {} };
      });
    },

    encodeId(id) {
      return `${id.table}_${id.offset}`;
    },

    extractGraphFromQueryResult(queryResult) {
      const rows = queryResult.rows;
      const dataTypes = queryResult.dataTypes;
      const nodes = {};
      const edges = {};
      const numberOfRelsBetweenNodes = {};
      const nodeLabels = {};

      const sortNodes = (src, dst) => {
        const sortedLabels = [src.table, dst.table].sort();
        const sortedSrcDst = [src.offset, dst.offset].sort();
        return [sortedLabels[0], sortedSrcDst[0], sortedLabels[1], sortedSrcDst[1]];
      }

      const increaseRelCounter = (src, dst) => {
        const sortedNodeInfo = sortNodes(src, dst);
        if (!numberOfRelsBetweenNodes[sortedNodeInfo[0]]) {
          numberOfRelsBetweenNodes[sortedNodeInfo[0]] = {};
        }
        if (!numberOfRelsBetweenNodes[sortedNodeInfo[0]][sortedNodeInfo[2]]) {
          numberOfRelsBetweenNodes[sortedNodeInfo[0]][sortedNodeInfo[2]] = {};
        }
        if (!numberOfRelsBetweenNodes[sortedNodeInfo[0]][sortedNodeInfo[2]][sortedNodeInfo[1]]) {
          numberOfRelsBetweenNodes[sortedNodeInfo[0]][sortedNodeInfo[2]][sortedNodeInfo[1]] = {};
        }
        const currentMap = numberOfRelsBetweenNodes[sortedNodeInfo[0]][sortedNodeInfo[2]][sortedNodeInfo[1]];
        if (!currentMap[sortedNodeInfo[3]]) {
          currentMap[sortedNodeInfo[3]] = 0;
        }
        currentMap[sortedNodeInfo[3]] += 1;
        return currentMap[sortedNodeInfo[3]];
      }
      const processNode = (rawNode) => {
        if (!rawNode || !rawNode._id || !rawNode._label) {
          console.warn('Invalid node data:', rawNode);
          return;
        }

        const nodeId = this.encodeId(rawNode._id);
        nodeLabels[rawNode._id.table] = rawNode._label;
        const nodeSettings = this.settingsStore.settingsForLabel(rawNode._label);
        const nodeFill = nodeSettings.g6Settings.style.fill;
        const labelColor = G6Utils.getReadableTextColor(nodeFill);

        if (nodes[nodeId]) {
          return;
        }

        const expectedPropertiesType = {};
        const nodeTable = this.schema.nodeTables.find((table) => table.name === rawNode._label);
        if (!nodeTable) {
          console.warn('Node table not found for label:', rawNode._label);
          return;
        }
        const expectedProperties = nodeTable.properties;
        expectedProperties.forEach((property) => {
          expectedPropertiesType[property.name] = property.type;
        });

        let nodeLabel = "";
        const nodeLabelProp = nodeSettings.label;
        if (nodeLabelProp) {
          nodeLabel = rawNode[nodeLabelProp];
          if (nodeLabelProp in expectedPropertiesType) {
            nodeLabel = ValueFormatter.beautifyValue(rawNode[nodeLabelProp], expectedPropertiesType[nodeLabelProp]);
          }
          nodeLabel = String(nodeLabel);
          const nodeSize = nodeSettings.g6Settings.size;
          const fontSize = nodeSettings.g6Settings.labelCfg.style.fontSize;
          nodeLabel = G6Utils.fittingString(nodeLabel, nodeSize - 6, fontSize);
        }

        const g6Node = {
          id: nodeId,
          data: {
            properties: rawNode,
            ...nodeSettings.g6Settings,
          },
          style: {
            size: nodeSettings.g6Settings.size,
            fill: nodeFill,
            stroke: G6Utils.shadeColor(nodeFill),
            lineWidth: nodeSettings.g6Settings.style.lineWidth || 0,
            labelText: nodeLabel,
            labelFill: labelColor,
          },
        };

        nodes[nodeId] = g6Node;
      };

      const processRel = (rawRel) => {
        if (!rawRel || !rawRel._id || !rawRel._label || !rawRel._src || !rawRel._dst) {
          console.warn('Invalid rel data:', rawRel);
          return;
        }

        const relSettings = this.settingsStore.settingsForLabel(rawRel._label);
        const relId = this.encodeId(rawRel._id);
        const numberOfOverlappingRels = increaseRelCounter(rawRel._src, rawRel._dst);

        if (edges[relId]) {
          return;
        }

        const expectedPropertiesType = {};
        const relTable = this.schema.relTables.find((table) => table.name === rawRel._label);
        if (!relTable) {
          console.warn('Rel table not found for label:', rawRel._label);
          return;
        }
        const expectedProperties = relTable.properties;
        expectedProperties.forEach((property) => {
          expectedPropertiesType[property.name] = property.type;
        });

        let relLabel = "";
        const relLabelProp = relSettings.label;
        if (relLabelProp) {
          relLabel = rawRel[relLabelProp];
          if (relLabelProp === '_label' && relTable.group) {
            relLabel = relTable.group;
          }
          if (relLabelProp in expectedPropertiesType) {
            relLabel = ValueFormatter.beautifyValue(rawRel[relLabelProp], expectedPropertiesType[relLabelProp]);
          }
          relLabel = String(relLabel);
          const fontSize = relSettings.g6Settings.labelCfg.style.fontSize;
          // Truncate edge label to max width 80px
          relLabel = G6Utils.fittingString(relLabel, 80, fontSize);
        }

        const g6Rel = {
          id: relId,
          source: this.encodeId(rawRel._src),
          target: this.encodeId(rawRel._dst),
          data: {
            properties: rawRel,
            ...relSettings.g6Settings,
          },
          style: {
            stroke: relSettings.g6Settings.style.stroke,
            lineWidth: relSettings.g6Settings.size || 3,
            labelText: relLabel,
          },
        };

        // Handle self-loops and overlapping edges
        if (g6Rel.source === g6Rel.target) {
          // Self-loop (do not set type, otherwise it will not work)
          g6Rel.style.loopDist = 50;
          g6Rel.style.loopPlacement = LOOP_POSITIONS[(numberOfOverlappingRels - 1) % LOOP_POSITIONS.length];
        } else if (numberOfOverlappingRels > 1) {
          g6Rel.type = 'quadratic';
          g6Rel.style.curveOffset = ARC_CURVE_OFFSETS[(numberOfOverlappingRels - 1) % ARC_CURVE_OFFSETS.length];
          g6Rel.style.curvePosition = 0.5;
        } else {
          g6Rel.type = 'line';
        }

        edges[relId] = g6Rel;
      }
      // Deduplicate nodes and edges
      rows.forEach((row) => {
        for (let key in row) {
          switch (dataTypes[key]) {
            case DATA_TYPES.NODE: {
              if (!row[key] || !row[key]._id) {
                continue;
              }
              const node = { ...row[key] };
              processNode(node);
              break;
            }
            case DATA_TYPES.REL: {
              if (!row[key] || !row[key]._src || !row[key]._dst) {
                continue;
              }
              const rel = { ...row[key] };
              processRel(rel);
              break;
            }
            case DATA_TYPES.RECURSIVE_REL: {
              const recursiveRel = { ...row[key] };
              if (recursiveRel._nodes && Array.isArray(recursiveRel._nodes)) {
                recursiveRel._nodes.forEach((node) => {
                  if (!node || !node._id) return;
                  node = { ...node };
                  const nodeId = this.encodeId(node._id);
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
              }
              if (recursiveRel._rels && Array.isArray(recursiveRel._rels)) {
                recursiveRel._rels.forEach((rel) => {
                  if (!rel || !rel._id) return;
                  rel = { ...rel };
                  const relId = this.encodeId(rel._id);
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
              }
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
      const nodeCounters = {};
      for (let key in nodes) {
        const label = nodes[key].data.properties._label;
        if (!nodeCounters[label]) {
          nodeCounters[label] = 0;
        }
        nodeCounters[label] += 1;
      }
      const relCounters = {};
      for (let key in edges) {
        const label = edges[key].data.properties._label;
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
      // Calculate node degrees for dynamic distance
      const nodeDegrees = {};
      Object.values(edges).forEach(edge => {
        nodeDegrees[edge.source] = (nodeDegrees[edge.source] || 0) + 1;
        nodeDegrees[edge.target] = (nodeDegrees[edge.target] || 0) + 1;
      });

      // Add degree information to node data
      Object.values(nodes).forEach(node => {
        node.data.degree = nodeDegrees[node.id] || 0;
      });

      if (totalNodeCount > this.settingsStore.performance.maxNumberOfNodesWithLabels) {
        for (let key in nodes) {
          const node = nodes[key];
          delete node.style.labelText;
        }
        for (let key in edges) {
          const edge = edges[key];
          delete edge.style.labelText;
        }
      }

      return {
        counters,
        nodes: Object.values(nodes),
        edges: Object.values(edges),
        nodesMap: nodes,
        edgesMap: edges,
      };
    },

    handleResize() {
      this.$nextTick(() => {
        if (this.g6Graph) {
          const width = this.$refs.graph.offsetWidth;

          // Set graph size based on sidebar state
          if (this.isSidePanelOpen) {
            this.g6Graph.setSize(width - this.sidebarWidth, parseInt(this.containerHeight));
          } else {
            this.g6Graph.setSize(width, parseInt(this.containerHeight));
          }

        }
      });
    },

    handleClick(model) {
      const properties = model.data.properties;
      const label = properties._label;
      this.clickedLabel = label;
      this.clickedId = model.id;
      this.clickedProperties = ValueFormatter.filterAndBeautifyProperties(properties, this.schema);
      this.clickedIsNode = !(properties._src && properties._dst);
      if (this.clickedIsNode) {
        this.isCurrentNodeExpanded = this.isNeighborExpanded(model);
      }
    },

    getInfoForExpansion(model) {
      const properties = model.data.properties;
      const tableName = properties._label;
      const primaryKey = this.schema.nodeTables
        .find((table) => table.name === tableName)
        .properties
        .find((prop) => prop.isPrimaryKey);
      const primaryKeyValue = properties[primaryKey.name];
      const primaryKeyName = primaryKey.name;
      return { tableName, primaryKey, primaryKeyValue, primaryKeyName };
    },

    async expandOnNode(model) {
      const { tableName, primaryKey, primaryKeyValue, primaryKeyName } = this.getInfoForExpansion(model);
      const sizeLimit = this.settingsStore.performance.maxNumberOfNodesToExpand;
      let neighbors = null;
      try {
        neighbors = await NeighborsFetcher.fetchNeighbors(
          tableName,
          primaryKeyName,
          primaryKeyValue,
          sizeLimit,
          this.modeStore.isWasm
        );
      } catch (e) {
        // Ignore error for now. Just don't expand if the core does not execute the query.
        console.error(e);
        return;
      }
      if (!neighbors) {
        return;
      }
      this.addDataWithQueryResult(neighbors);
      this.expansions.push({
        id: model.id, neighbors
      });
      this.deselectAll();
    },

    isNeighborExpanded(model) {
      const id = model.id;
      return this.expansions.some((e) => {
        return e.id === id;
      });
    },

    expandSelectedNode() {
      const nodeData = this.g6Graph.getNodeData(this.clickedId);
      this.expandOnNode(nodeData);
    },

    collapseNode(id) {
      const expansion = this.expansions.find((e) => e.id === id);
      if (!expansion) {
        return;
      }
      const neighbors = expansion.neighbors;
      this.expansions = this.expansions.filter((e) => e.id !== id);
      // Recursively collapse neighbors
      neighbors.rows.forEach((neighbor) => {
        if (neighbor.dst) {
          const id = this.encodeId(neighbor.dst._id);
          this.collapseNode(id);
        }
      });
    },

    collapseSelectedNode() {
      this.collapseNode(this.clickedId);
      this.redrawGraph();
      this.isCurrentNodeExpanded = false;
      this.deselectAll();
    },

    addDataWithQueryResult(queryResult) {
      const { nodes, edges } = this.extractGraphFromQueryResult(queryResult);
      this.addData(nodes, edges);
    },

    addData(nodes, edges) {
      if (!this.g6Graph) {
        return;
      }
      const nodesToAdd = [];
      for (let key in nodes) {
        const node = nodes[key];
        try {
          this.g6Graph.getNodeData(node.id);
          // Node already exists, skip it
          continue;
        } catch (error) {
          // Do nothing, the node does not exist, we can add it
        }
        nodesToAdd.push(node);
        if (!this.counters.node[node.data.properties._label]) {
          this.counters.node[node.data.properties._label] = 0;
        }
        this.counters.node[node.data.properties._label] += 1;
        this.counters.total.node += 1;
      }
      const edgesToAdd = [];
      for (let key in edges) {
        const edge = edges[key];
        try {
          this.g6Graph.getEdgeData(edge.id);
          // Edge already exists, skip it
          continue;
        } catch (error) {
          // Do nothing, the edge does not exist, we can add it
        }
        edgesToAdd.push(edge);
        if (!this.counters.rel[edge.data.properties._label]) {
          this.counters.rel[edge.data.properties._label] = 0;
        }
        this.counters.rel[edge.data.properties._label] += 1;
        this.counters.total.rel += 1;
      }
      const currentNodes = this.g6Graph.getNodeData() || [];
      const currentEdges = this.g6Graph.getEdgeData() || [];
      const newData = {
        nodes: currentNodes.concat(nodesToAdd),
        edges: currentEdges.concat(edgesToAdd),
      };
      this.g6Graph.setData(newData);
      this.render();
    },

    deselectAll() {
      const selectedNodes = this.g6Graph.getElementDataByState('node', 'active');
      const selectedEdges = this.g6Graph.getElementDataByState('edge', 'active');
      const combined = {};
      selectedNodes.forEach((node) => {
        combined[node.id] = [];
      });
      selectedEdges.forEach((edge) => {
        combined[edge.id] = [];
      });
      this.setElementState(combined);
      this.clickedLabel = "";
      this.clickedId = null;
      this.clickedProperties = [];
      this.clickedIsNode = false;
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
      width -= 2 * this.borderWidth;
      this.graphWidth = width;
      return width;
    },

    zoomIn() {
      if (this.toolbarDebounceTimer) {
        clearTimeout(this.toolbarDebounceTimer);
      }
      this.toolbarDebounceTimer = setTimeout(() => {
        G6Utils.zoomIn(this.g6Graph);
      }, this.toolbarDebounceTimeout);
    },

    zoomOut() {
      if (this.toolbarDebounceTimer) {
        clearTimeout(this.toolbarDebounceTimer);
      }
      this.toolbarDebounceTimer = setTimeout(() => {
        G6Utils.zoomOut(this.g6Graph);
      }, this.toolbarDebounceTimeout);
    },

    fitToView() {
      if (this.toolbarDebounceTimer) {
        clearTimeout(this.toolbarDebounceTimer);
      }
      this.toolbarDebounceTimer = setTimeout(() => {
        G6Utils.fitToView(this.g6Graph);
      }, this.toolbarDebounceTimeout);
    },

    actualSize() {
      if (this.toolbarDebounceTimer) {
        clearTimeout(this.toolbarDebounceTimer);
      }
      this.toolbarDebounceTimer = setTimeout(() => {
        G6Utils.actualSize(this.g6Graph);
      }, this.toolbarDebounceTimeout);
    },

    async redrawGraph() {
      await new Promise((resolve) => setTimeout(resolve, 300));
      const { nodes, edges, counters } = this.extractGraphFromQueryResult(this.queryResult);
      if (!this.g6Graph) {
        return;
      }
      this.g6Graph.setData({ nodes, edges });
      this.render();
      this.counters = counters;
      this.expansions.forEach(e => this.addDataWithQueryResult(e.neighbors));
    },

    startResize(e) {
      this.isResizing = true;
      e.preventDefault();
    },

    handleResizeMove(e) {
      if (!this.isResizing) return;

      const newWidth = window.innerWidth - e.clientX;
      if (newWidth >= this.minSidebarWidth && newWidth <= this.maxSidebarWidth) {
        this.sidebarWidth = newWidth;
        this.$nextTick(() => {
          this.handleResize();
        });
      }
    },

    stopResize() {
      this.isResizing = false;
    },

    formatTime(milliseconds) {
      if (!milliseconds) {
        return 'N/A';
      }
      return `${milliseconds.toFixed(2)}ms`;
    },
  },
};
</script>

<style lang="scss" scoped>
.result-graph__wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  position: relative;

  .result-graph__container {
    height: 100%;
    flex: 1 1 0%;
    min-width: 0;
    padding: 1rem;
  }

  .result-graph__loading-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--bs-body-bg);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 10;
    /* Ensure it's above the graph */
    color: var(--bs-body-text);

    .spinner-border {
      margin-bottom: 10px;
      color: var(--bs-body-bg-accent);
    }
  }

  .result-graph__summary-section {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 0.5rem;

    p {
      display: inline-block;
      margin: 0;
    }

    button {
      padding: 5px;
      margin-right: 0;
      margin-top: 0.25rem;
    }
  }

  .result-graph__side-panel {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
    width: 350px;
    background-color: var(--bs-body-bg-secondary);
    z-index: 2;

    .resize-handle {
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 5px;
      cursor: col-resize;
      background-color: transparent;
      transition: background-color 0.2s;
      z-index: 3;
      pointer-events: auto;

      &:hover,
      &:active {
        background-color: var(--bs-body-bg-accent);
      }

      &::after {
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 2px;
        height: 30px;
        background-color: var(--bs-body-bg-accent);
        opacity: 0;
        transition: opacity 0.2s;
      }

      &:hover::after,
      &:active::after {
        opacity: 1;
      }
    }

    .result-graph__side-panel-content {
      height: 100%;
      overflow-x: hidden;
      overflow-y: auto;
      padding: 1rem;
      padding-left: 1.5rem;
    }

    .result-graph__sidebar-button--close {
      position: absolute;
      top: 1rem;
      right: 1rem;
      background: none;
      border: none;
      font-size: 1.5rem;
      cursor: pointer;
      color: var(--bs-body-text);
      z-index: 3;

      &:hover {
        opacity: 0.7;
      }
    }

    .result-graph__actions {

      gap: 3px;
    }

    table {

      table-layout: auto;
      border-collapse: collapse;
      border-radius: 1rem;
      overflow: hidden;
      background-color: var(--bs-body-bg);
      margin-bottom: 1rem;

      th,
      td {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: none;
        position: relative;
        padding-right: 30px;
      }

      .copyable-cell {
        position: relative;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .copy-button {
        position: absolute;
        right: 4px;
        top: 50%;
        transform: translateY(-50%);
        background: var(--bs-body-bg-accent);
        color: white;
        border: none;
        border-radius: 4px;
        width: 24px;
        height: 24px;
        font-size: 12px;
        cursor: pointer;
        opacity: 0;
        transition: opacity 0.2s;
        z-index: 1000;
        display: flex;
        align-items: center;
        justify-content: center;

        &:hover {
          opacity: 1;
        }
      }

      th {
        padding-left: 6px;
        padding-top: 8px;
        max-width: 120px;
        word-break: break-word;
      }

      td {
        padding: 0.5rem 1rem;
        max-width: 200px;
        word-break: break-word;
      }

      &.result-graph__overview-table {
        table-layout: fixed;

        th {
          width: 50%;
          font-weight: 500;
          color: var(--bs-body-text);
        }

        td {
          width: 50%;
        }
      }

      &.result-graph__metrics-table {
        table-layout: fixed;

        th {
          width: 50%;
          font-weight: 500;
          color: var(--bs-body-text);
        }

        td {
          width: 50%;
          font-family: "Lexend", sans-serif;
        }

        i {
          width: 16px;
          text-align: center;
        }

      }

      &.result-graph__result-table {
        table-layout: fixed;
        font-family: "Lexend", Lexend, sans-serif;

        th {
          width: 50%;
          font-weight: 500;
          color: var(--bs-body-text);
        }

        td {
          width: 50%;
          word-break: normal;
        }
      }

      scrollbar-width: none;
      scrollbar-color: transparent transparent;
    }

    h5 {
      margin-bottom: 1rem;
      color: var(--bs-body-text);
    }

    hr {
      margin: 1rem 0;
      border-top: 1px solid var(--bs-body-inactive);
    }

    .badge {
      display: inline-block;
      background-color: var(--bs-body-bg-accent) !important;
      color: #fff !important;
      overflow: hidden;
      text-overflow: hidden;
      white-space: nowrap;
      vertical-align: middle;
    }

    button.btn-outline-secondary,
    button.btn-outline-primary {
      width: 100%;
      text-align: left;
      background-color: var(--bs-body-bg);
      color: var(--bs-body-text);
      border-color: transparent;
      border-radius: 0.5rem;

      &:hover {
        background-color: var(--bs-body-bg-hover);
      }

      i {
        margin-right: 0.5rem;
      }
    }

    button.btn-outline-primary {
      background-color: var(--bs-body-bg-accent);
      color: var(--bs-body-bg);
    }

    .badge.bg-primary {
      color: white !important;
    }
  }

  .result-graph__sidebar-button--open {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    background-color: var(--bs-body-bg-secondary);
    border: 2px solid var(--bs-body-shell);
    border-radius: 0.5rem 0 0 0.5rem;
    padding: 0.5rem 0.25rem;
    cursor: pointer;
    color: var(--bs-body-text);
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3rem;

    &:hover {
      opacity: 0.8;
    }

    i {
      font-size: 1.2rem;
    }
  }
}
</style>
