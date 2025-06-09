<template>
  <div
    ref="wrapper"
    class="result-graph__wrapper"
  >
    <div
      ref="graph"
      class="result_container__graph"
      :style="{ width: graphWidth + 'px' }"
    />
    <!-- Loading Overlay -->
    <div v-if="isGraphLoading" class="graph-loading-overlay">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <div class="loading-text">Rendering Graph...</div>
    </div>
    
    <HoverContainer
      v-if="g6Graph"
      ref="hoverContainer"
      :g6-graph="g6Graph"
      :schema="schema"
    />
    
    <div
      v-show="isSidePanelOpen"
      ref="sidePanel"
      class="result-container__side-panel"
      :style="{ width: sidebarWidth + 'px' }"
    >
      <div class="resize-handle" @mousedown="startResize"></div>
      <div class="result-container__side-panel-content">
        <button class="close-sidebar-button" @click="toggleSidePanel">
          <i class="fa-solid fa-times"></i>
        </button>

        <div v-if="clickedIsNode" class="sidebar-actions">
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
          <div class="result-container__summary-section">
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
          <table class="table table-sm table-borderless result-container__result-table">
            <tbody>
              <tr
                v-for="property in displayProperties"
                :key="property.name"
              >
                <th scope="row">
                  {{ property.name }}
                  <span
                    v-if="property.isPrimaryKey"
                    class="badge bg-primary"
                    style="text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000; color: white !important;"
                  >PK</span>
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
            <table class="table table-sm table-borderless result-container__overview-table">
              <tbody>
                <tr
                  v-for="label in Object.keys(counters.node)"
                  :key="label"
                >
                  <th scope="row">
                    <span
                      class="badge bg-primary"
                      :style="{ backgroundColor: ` ${getColor(label)} !important`, textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000', color: 'white !important' }"
                    >{{ label
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
            <table class="table table-sm table-borderless result-container__overview-table">
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
      class="open-sidebar-button"
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
import G6 from '@antv/g6';
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
    numHiddenNodes: 0,
    numHiddenRels: 0,
    clickedProperties: [],
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
    isGraphLoading: false, // Added loading state
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

    isSidePanelOpen(newVal) {
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
    getColor(label) {
      return this.settingsStore.colorForLabel(label);
    },
    drawGraph() {
      this.isGraphLoading = true; // Show loading overlay
      if (this.graphCreated && this.g6Graph) {
        this.g6Graph.destroy();
      }
      if (!this.queryResult) {
        return;
      }
      const { counters, nodes, edges, } = this.extractGraphFromQueryResult(this.queryResult);
      this.counters = counters;
      if (nodes.length === 0) {
        this.$emit("graphEmpty");
      }
      console.log("Nodes data sent to G6:", nodes);
      console.log("Edges data sent to G6:", edges);
      const container = this.$refs.graph;
      const width = container.offsetWidth;
      const height = container.offsetHeight;

      this.g6Graph = new G6.Graph({
        container,
        width,
        height,
        layout: {
          type: 'force2',
          preventOverlap: true,
          nodeStrength: 2000,
          animate: true,
          maxIteration: 500,
        },
        defaultNode: this.settingsStore.defaultNode,
        nodeStateStyles: {
          hover: {
            lineWidth: 3,
            stroke: '#1890FF',
          },
          click: {
            lineWidth: 3,
            stroke: '#1890FF',
          },
          opaque: {
            opacity: 0.2,
          },
        },
        defaultEdge: {
          ...this.settingsStore.defaultRel,
          style: {
            ...this.settingsStore.defaultRel.style,
            startArrow: false,
          },
        },
        edgeStateStyles: {
          hover: {
            stroke: '#1890FF',
            endArrow: {
              path: G6.Arrow.triangle(),
              fill: '#1890FF',
            },
          },
          click: {
            stroke: '#1890FF',
            endArrow: {
              path: G6.Arrow.triangle(),
              fill: '#1890FF',
            },
          },
          opaque: {
            opacity: 0.2,
          },
        },
        modes: {
          default: ['drag-canvas', 'zoom-canvas', 'drag-node'],
        },
      });

      this.g6Graph.data({ nodes, edges, });

      this.g6Graph.on('node:mouseenter', (e) => {
        const nodeItem = e.item;
        this.g6Graph.setItemState(nodeItem, 'hover', true);
        this.$refs.hoverContainer.handleHover(nodeItem.getModel(), e);
      });

      this.g6Graph.on('node:mouseleave', (e) => {
        const nodeItem = e.item;
        this.g6Graph.setItemState(nodeItem, 'hover', false);
        this.$refs.hoverContainer.resetHover();
      });

      this.g6Graph.on('node:mousemove', (e) => {
        if (this.$refs.hoverContainer.currentHoveredModel) {
          this.$refs.hoverContainer.updateTooltipPosition(e);
        }
      });

      this.g6Graph.on('node:click', (e) => {
        const nodeItem = e.item;
        const nodeModel = nodeItem.getModel();
        this.deselectAll();
        this.g6Graph.setItemState(nodeItem, 'click', true);
        this.handleClick(nodeModel);
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

      this.g6Graph.on('node:dblclick', (e) => {
        const nodeItem = e.item;
        const nodeModel = nodeItem.getModel();
        this.expandOnNode(nodeModel);
      });

      // Auto layout after drag
      this.g6Graph.on('node:dragstart', (e) => {
        this.refreshDraggedNodePosition(e);
      });

      this.g6Graph.on('node:drag', (e) => {
        this.refreshDraggedNodePosition(e);
      });

      this.g6Graph.on('node:dragend', (e) => {
        this.refreshDraggedNodePosition(e);
        this.g6Graph.layout();
      });

      this.g6Graph.on('edge:mouseenter', (e) => {
        const edgeItem = e.item;
        this.g6Graph.setItemState(edgeItem, 'hover', true);
        this.$refs.hoverContainer.handleHover(edgeItem.getModel(), e);
      });

      this.g6Graph.on('edge:mouseleave', (e) => {
        const edgeItem = e.item;
        this.g6Graph.setItemState(edgeItem, 'hover', false);
        this.$refs.hoverContainer.resetHover();
      });

      this.g6Graph.on('edge:mousemove', (e) => {
        if (this.$refs.hoverContainer.currentHoveredModel) {
          this.$refs.hoverContainer.updateTooltipPosition(e);
        }
      });

      this.g6Graph.on('edge:click', (e) => {
        const edgeItem = e.item;
        const edgeModel = edgeItem.getModel();
        this.deselectAll();
        this.unhighlightEverything();
        this.g6Graph.setItemState(edgeItem, 'click', true);
        this.handleClick(edgeModel);
        if (!this.isSidePanelOpen) {
          this.toggleSidePanel();
        }
      });

      this.g6Graph.on('canvas:click', () => {
        this.deselectAll();
        this.unhighlightEverything();
      });

      this.g6Graph.render();
      this.graphCreated = true;

      // Fit the graph to view after rendering
      this.g6Graph.once('afterrender', () => {
        this.fitToView();
        this.isGraphLoading = false; // Hide loading overlay after fit to view
      });

      this.g6Graph.on('node:mouseenter', (e) => {
        const nodeItem = e.item;
        this.g6Graph.setItemState(nodeItem, 'hover', true);
        this.$refs.hoverContainer.handleHover(nodeItem.getModel(), e);
      });
    },

    refreshDraggedNodePosition(e) {
      const model = e.item.get('model');
      model.fx = e.x;
      model.fy = e.y;
      model.x = e.x;
      model.y = e.y;
    },

    hideNode() {
      if (!this.g6Graph) {
        console.error('Graph not initialized');
        return;
      }

      const currentSelectedNode = this.g6Graph.findAllByState('node', 'click')[0];
      if (!currentSelectedNode) {
        console.error('No node selected');
        return;
      }

      try {
        const nodeId = currentSelectedNode.getModel().id;
        this.numHiddenNodes += 1;
        currentSelectedNode.hide();
        this.deselectAll();

        const relatedEdges = this.g6Graph.getEdges().filter((edge) => {
          try {
            const edgeModel = edge.getModel();
            return edgeModel.source === nodeId || edgeModel.target === nodeId;
          } catch (e) {
            console.error('Error processing edge:', e);
            return false;
          }
        });

        relatedEdges.forEach((edge) => {
          try {
            this.numHiddenRels += 1;
            edge.hide();
          } catch (e) {
            console.error('Error hiding edge:', e);
          }
        });
      } catch (e) {
        console.error('Error hiding node:', e);
      }
    },

    enableHighlightMode() {
      this.isHighlightedMode = true;
      const currentSelectedNode = this.g6Graph.findAllByState('node', 'click')[0];
      if (currentSelectedNode) {
        this.highlightNode(currentSelectedNode.getModel());
      }
    },

    disableHighlightMode() {
      this.unhighlightEverything();
      this.isHighlightedMode = false;
    },

    showAllNodesRels() {
      this.g6Graph.getNodes().forEach((node) => {
        if (!node.isVisible()) {
          node.show();
        }
      });
      this.g6Graph.getEdges().forEach((edge) => {
        if (!edge.isVisible()) {
          edge.show();
        }
      });
      this.numHiddenNodes = 0;
      this.numHiddenRels = 0;
    },

    encodeId(id) {
      return `${id.table}_${id.offset}`;
    },

    extractGraphFromQueryResult(queryResult, linkDistance = 200) {
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
        const nodeId = this.encodeId(rawNode._id);
        nodeLabels[rawNode._id.table] = rawNode._label;
        const nodeSettings = this.settingsStore.settingsForLabel(rawNode._label);
        const g6Node = {
          id: nodeId,
          properties: rawNode,
          ...nodeSettings.g6Settings,
          labelCfg: {
            ...nodeSettings.g6Settings.labelCfg,
            style: {
              ...nodeSettings.g6Settings.labelCfg.style,
              fill: "#ffffff",
              stroke: "#000000",
              lineWidth: 2,
            }
          }
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
        g6Node.style.stroke = G6Utils.shadeColor(g6Node.style.fill);
        nodes[nodeId] = g6Node;
      };

      const processRel = (rawRel) => {
        const relSettings = this.settingsStore.settingsForLabel(rawRel._label);
        const relId = this.encodeId(rawRel._id);
        const numberOfOverlappingRels = increaseRelCounter(rawRel._src, rawRel._dst);
        const g6Rel = {
          id: relId,
          properties: rawRel,
          source: this.encodeId(rawRel._src),
          target: this.encodeId(rawRel._dst),
          ...relSettings.g6Settings,
          labelCfg: {
            ...relSettings.g6Settings.labelCfg,
            style: {
              ...relSettings.g6Settings.labelCfg.style,
              fill: "#ffffff",
              stroke: "#000000",
              lineWidth: 2,
            }
          },
          style: {
            ...relSettings.g6Settings.style,
            endArrow: {
              path: G6.Arrow.triangle(),
              fill: '#E2E2E2',
            },
            startArrow: false,
          },
        }
        if (g6Rel.source === g6Rel.target) {
          g6Rel.type = "loop";
          g6Rel.loopCfg = {
            dist: 50,
            position: LOOP_POSITIONS[(numberOfOverlappingRels - 1) % LOOP_POSITIONS.length],
          };
        } else if (numberOfOverlappingRels > 1) {
          g6Rel.type = 'quadratic';
          g6Rel.curveOffset = ARC_CURVE_OFFSETS[(numberOfOverlappingRels - 1) % ARC_CURVE_OFFSETS.length];
        }

        const expectedPropertiesType = {};
        const relTable = this.schema.relTables.find((table) => table.name === rawRel._label);
        const expectedProperties = this.schema.relTables.find((table) => table.name === rawRel._label).properties;
        expectedProperties.forEach((property) => {
          expectedPropertiesType[property.name] = property.type;
        });
        const relLabelProp = relSettings.label;
        if (!relLabelProp) {
          g6Rel.label = "";
        } else {
          g6Rel.label = rawRel[relLabelProp];
          if (relLabelProp === '_label' && relTable.group) {
            g6Rel.label = relTable.group;
          }
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
              recursiveRel._nodes.forEach((node) => {
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
              recursiveRel._rels.forEach((rel) => {
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
      };
    },

    handleResize() {
      this.$nextTick(() => {
        if (this.g6Graph) {
          const width = this.$refs.graph.offsetWidth;
          this.g6Graph.changeSize(width, parseInt(this.containerHeight));
          this.g6Graph.fitCenter();
        }
      });
    },

    handleClick(model) {
      const label = model.properties._label;
      this.clickedLabel = label;
      this.clickedProperties = ValueFormatter.filterAndBeautifyProperties(model.properties, this.schema);
      this.clickedIsNode = !(model.properties._src && model.properties._dst);
      this.highlightNode(model);
      if (this.clickedIsNode) {
         this.isCurrentNodeExpanded = this.isNeighborExpanded(model);
      }
      if (!this.isSidePanelOpen) {
        // Add a small delay to avoid conflicting with double click
        window.setTimeout(() => {
          this.isSidePanelOpen = true;
          this.$nextTick(() => {
            this.handleResize();
          });
        }, 200);
      }
    },

    highlightNode(model) {
      if (!this.isHighlightedMode) {
        return;
      }
      if (model.properties._src || model.properties._dst) {
        return;
      }
      const srcDstSet = new Set();
      this.g6Graph.getEdges().forEach((edge) => {
        const sourceNode = edge.getModel().source;
        const targetNode = edge.getModel().target;
        if (!edge.getModel().labelBackup) {
          edge.getModel().labelBackup = edge.getModel().label;
        }
        if (sourceNode !== model.id && targetNode !== model.id) {
          this.g6Graph.setItemState(edge, 'opaque', true);
          this.g6Graph.setItemState(edge, 'click', false);
          edge.getModel().label = "";
          this.g6Graph.refreshItem(edge);
        } else {
          this.g6Graph.setItemState(edge, 'opaque', false);
          this.g6Graph.setItemState(edge, 'click', true);
          srcDstSet.add(sourceNode);
          srcDstSet.add(targetNode);
          if (edge.getModel().labelBackup) {
            edge.getModel().label = edge.getModel().labelBackup;
            delete edge.getModel().labelBackup;
            this.g6Graph.refreshItem(edge);
          }
        }
      });
      this.g6Graph.getNodes().forEach((node) => {
        if (node.getModel().id !== model.id && !srcDstSet.has(node.getModel().id)) {
          this.g6Graph.setItemState(node, 'opaque', true);
        } else {
          this.g6Graph.setItemState(node, 'opaque', false);
        }
      });
    },

    unhighlightEverything() {
      if (!this.isHighlightedMode) {
        return;
      }
      this.g6Graph.getNodes().forEach((node) => {
        this.g6Graph.setItemState(node, 'opaque', false);
      });
      this.g6Graph.getEdges().forEach((edge) => {
        this.g6Graph.setItemState(edge, 'opaque', false);
        this.g6Graph.setItemState(edge, 'click', false);
        if (edge.getModel().labelBackup) {
          edge.getModel().label = edge.getModel().labelBackup;
          delete edge.getModel().labelBackup;
          this.g6Graph.refreshItem(edge);
        }
      });
    },

    getInfoForExpansion(model) {
      const tableName = model.properties._label;
      const primaryKey = this.schema.nodeTables
        .find((table) => table.name === tableName)
        .properties
        .find((prop) => prop.isPrimaryKey);
      const primaryKeyValue = model.properties[primaryKey.name];
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
      }
      if (!neighbors) {
        return;
      }
      this.addDataWithQueryResult(neighbors);
      this.expansions.push({
        id: model.id, neighbors
      });
    },

    isNeighborExpanded(model) {
      const id = model.id;
      return this.expansions.some((e) => {
        return e.id === id;
      });
    },

    expandSelectedNode() {
      const currentSelectedNode = this.g6Graph.findAllByState('node', 'click')[0];
      if (!currentSelectedNode) {
        return;
      }
      this.expandOnNode(currentSelectedNode.getModel());
      this.deselectAll();
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
      const currentSelectedNode = this.g6Graph.findAllByState('node', 'click')[0];
      if (!currentSelectedNode) {
        return;
      }
      const id = currentSelectedNode.getModel().id;
      this.collapseNode(id);
      this.handleSettingsChange();
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
        if (this.g6Graph.findById(node.id)) {
          continue;
        }
        nodesToAdd.push(node);
        this.counters.node[node.properties._label] += 1;
        this.counters.total.node += 1;
      }
      const edgesToAdd = [];
      for (let key in edges) {
        const edge = edges[key];
        if (this.g6Graph.findById(edge.id)) {
          continue;
        }
        edgesToAdd.push(edge);
        this.counters.rel[edge.properties._label] += 1;
        this.counters.total.rel += 1;
      }
      const currentNodes = this.g6Graph.getNodes().map((node) => node.getModel());
      const currentEdges = this.g6Graph.getEdges().map((edge) => edge.getModel());
      const newData = {
        nodes: currentNodes.concat(nodesToAdd),
        edges: currentEdges.concat(edgesToAdd),
      };
      this.g6Graph.changeData(newData);
    },

    deselectAll() {
      if (!this.g6Graph) {
        return;
      }
      const currentSelectedNode = this.g6Graph.findAllByState('node', 'click')[0];
      if (currentSelectedNode) {
        this.g6Graph.setItemState(currentSelectedNode, 'click', false);
      }
      const currentSelectedEdge = this.g6Graph.findAllByState('edge', 'click')[0];
      if (currentSelectedEdge) {
        this.g6Graph.setItemState(currentSelectedEdge, 'click', false);
      }
      this.clickedLabel = "";
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

    handleSettingsChange() {
      const { nodes, edges, counters } = this.extractGraphFromQueryResult(this.queryResult);
      if (!this.g6Graph) {
        return;
      }
      this.g6Graph.changeData({ nodes, edges });
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

  .result_container__graph {
    height: 100%;
    flex: 1 1 0%;
    min-width: 0;
    padding: 1rem;
  }

  .graph-loading-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--bs-body-bg); /* Semi-transparent white background */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 10; /* Ensure it's above the graph */
    color: var(--bs-body-text);

    .spinner-border {
      margin-bottom: 10px;
      color: var(--bs-body-bg-accent);
    }
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

  .result-container__side-panel {
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

      &:hover, &:active {
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

      &:hover::after, &:active::after {
        opacity: 1;
      }
    }

    .result-container__side-panel-content {
      height: 100%;
      overflow-x: hidden;
      overflow-y: auto;
      padding: 1rem;
      padding-left: 1.5rem;
    }

    .close-sidebar-button {
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

    .sidebar-actions{
      width: calc(100% - 1rem);
      gap: 3px;
    }

    table {
      width: calc(100% - 1rem);
      table-layout: auto;
      border-collapse: collapse;
      border-radius: 1rem;
      overflow: hidden;
      background-color: var(--bs-body-bg);
      margin-bottom: 1rem;

      th {
        padding: 0.5rem 1rem;
        max-width: 120px;
        word-break: break-word;
        
      }

      td {
        padding: 0.5rem 1rem;
        max-width: 200px;
        word-break: break-word;
        
        
      }

      &.result-container__overview-table {
        table-layout: fixed;

        td {
          width: 120px;
        }
      }

      &.result-container__result-table {
        font-family: "Lexend", Lexend, sans-serif;

        td {
          word-break: break-all;
          
        }
      }
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
      background-color: var(--bs-body-bg-accent) !important;
      color: #fff !important;
      border-radius: 0.5rem;
      padding: 0.35em 0.65em;
      font-size: 0.875em;
      font-weight: 600;
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

  .open-sidebar-button {
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
