<template>
  <div
    ref="wrapper"
    class="schema-view__wrapper"
  >
    <div
      ref="toolsContainer"
      class="schema-view__tools_container"
      :style="{ minWidth: toolbarWidth + 'px' }"
    >
      <div class="schema-view__tools_container--bottom">
        <div class="schema-view__button">
          <i
            class="fa-lg fa-solid fa-magnifying-glass-plus"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            title="Zoom In"
            @click="zoomIn()"
          />
        </div>
        <div class="schema-view__button">
          <i
            class="fa-lg fa-solid fa-magnifying-glass-minus"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            title="Zoom Out"
            @click="zoomOut()"
          />
        </div>
        <div class="schema-view__button">
          <i
            class="fa-lg fa-solid fa-compress"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            title="Fit to View"
            @click="fitToView()"
          />
        </div>
        <div class="schema-view__button">
          <i
            class="fa-lg fa-solid fa-expand"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            title="Actual Size"
            @click="actualSize()"
          />
        </div>
      </div>
    </div>
    <div
      ref="graph"
      class="schema_graph__wrapper"
      :style="{ width: graphWidth + 'px' }"
    />
    <div
      ref="sidePanel"
      class="schema_side-panel__wrapper"
    >
      <div class="sidebar-content">
        <br>
        <SchemaSidebarOverview
          v-if="schema"
          v-show="!hoveredLabel && clickedLabel === null"
          ref="overview"
          :schema="schema"
          @drop-table="dropTable"
          @edit-table="enterEditTableMode"
          @add-node-table="enterAddNodeTableMode"
          @add-rel-table="enterAddRelTableMode"
        />
        <!-- Read only view for hovered label -->
        <!-- If edit view is shown, hovering over another label will not change the view -->
        <SchemaSidebarReadOnlyView
          v-if="hoveredLabel !== null && (clickedLabel === null || isClickedReadOnly())"
          :schema="schema"
          :label="hoveredLabel"
          :is-node="hoveredIsNode"
        />
        <!-- Read only view for clicked label (if it cannot be edited) -->
        <SchemaSidebarReadOnlyView
          v-if="clickedLabel !== null && hoveredLabel === null && isClickedReadOnly()"
          :schema="schema"
          :label="clickedLabel"
          :is-node="clickedIsNode"
        />
        <!-- Edit view for clicked label -->
        <SchemaSidebarEditView
          v-if="clickedLabel !== null && !clickedIsNewTable && !isClickedReadOnly()"
          ref="editView"
          :schema="schema"
          :label="clickedLabel"
          :is-node="clickedIsNode"
          @drop-property="dropProperty"
          @back="resetClick"
          @drop-table="dropTable"
          @rename-property="renameProperty"
          @rename-table="renameTable"
          @add-property="addProperty"
          @set-placeholder="setPlaceholder"
          @unset-placeholder="unsetPlaceholder"
          @set-placeholder-label="setPlaceholderLabelForEditView"
        />
        <SchemaSidebarAddView
          v-if="clickedLabel !== null && clickedIsNewTable"
          ref="addView"
          :schema="schema"
          :label="clickedLabel"
          :is-node="clickedIsNode"
          @discard="cancelAdd"
          @save="addNewTable"
          @update-node-table-label="updatePlaceholderNodeTableLabel"
          @update-placeholder-rel-table="updatePlaceholderRelTable"
        />
      </div>
    </div>
    <SchemaActionDialog
      ref="actionDialog"
      @reload-schema="reloadSchema"
      @action-completed="handleSchemaActionCompleted"
    />
  </div>
</template>

<script lang="js">
import { Graph, GraphEvent } from '@antv/g6';
import {
  UI_SIZE, SHOW_REL_LABELS_OPTIONS, SCHEMA_ACTION_TYPES, PLACEHOLDER_NODE_TABLE,
  PLACEHOLDER_REL_TABLE, LOOP_POSITIONS, ARC_CURVE_OFFSETS
} from "../../utils/Constants";
import G6Utils from "../../utils/G6Utils";
import { useSettingsStore } from "../../store/SettingsStore";
import { useModeStore } from "../../store/ModeStore";
import { mapStores } from 'pinia'
import SchemaSidebarEditView from './SchemaSidebarEditView.vue';
import SchemaSidebarAddView from './SchemaSidebarAddView.vue';
import SchemaSidebarReadOnlyView from './SchemaSidebarReadOnlyView.vue';
import SchemaSidebarOverview from './SchemaSidebarOverview.vue';
import SchemaActionDialog from './SchemaActionDialog.vue';


export default {
  name: "SchemaViewMain",
  components: {
    SchemaSidebarOverview, SchemaSidebarReadOnlyView, SchemaSidebarEditView,
    SchemaSidebarAddView, SchemaActionDialog
  },
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
    isVisible: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  emits: [
    "addPlaceholderNodeTable",
    "addPlaceholderRelTable",
    "setPlaceholder",
    "unsetPlaceholder",
    "updatePlaceholderNodeTableLabel",
    "updatePlaceholderRelTable",
    "reloadSchema",
  ],
  data: () => ({
    graphCreated: false,
    toolbarWidth: UI_SIZE.SHELL_TOOL_BAR_WIDTH,
    sidebarWidth: 510,
    graphWidth: 0,
    graphHeight: 0,
    borderWidth: UI_SIZE.DEFAULT_BORDER_WIDTH,
    hoveredLabel: null,
    hoveredIsNode: false,
    clickedLabel: null,
    clickedIsNode: false,
    clickedIsNewTable: false,
    toolbarDebounceTimeout: 100,
    toolbarDebounceTimer: null,
    drawPromise: null,
    isRendering: false,
  }),
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
    ...mapStores(useSettingsStore, useModeStore)
  },
  watch: {
    graphVizSettings() {
      this.updateVisualSettings();
    },

    async schema(value, oldValue) {
      const oldNodes = oldValue ? oldValue.nodeTables.map(n => n.name) : [];
      const newNodes = value ? value.nodeTables.map(n => n.name) : [];
      const oldEdges = oldValue ? oldValue.relTables.map(n => n.name) : [];
      const newEdges = value ? value.relTables.map(n => n.name) : [];

      const areSetsEqual = (a, b) => a.size === b.size && [...a].every(value => b.has(value));
      if (areSetsEqual(new Set(oldNodes), new Set(newNodes)) && areSetsEqual(new Set(oldEdges), new Set(newEdges))) {
        return;
      }
      if (!this.graphCreated || !this.isVisible) {
        return;
      }
      await this.resetClick();
      this.redrawGraph(true);
    },

    isVisible(newValue) {
      if (newValue && !this.g6Graph && this.schema) {
        this.initializeGraph();
      }
    },
  },
  mounted() {
    this.computeGraphWidth();
    this.computeGraphHeight();
    window.addEventListener("resize", this.handleResize);
    
    // Initialize graph if visible on mount and schema exists
    if (this.isVisible && this.schema && !this.g6Graph) {
      this.$nextTick(() => {
        this.initializeGraph();
      });
    }
  },

  beforeUnmount() {
    if (this.g6Graph) {
      this.g6Graph.destroy();
    }
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    initializeGraph() {
      if (this.g6Graph || !this.schema) {
        return;
      }
      this.drawGraph();
    },
    
    getColor(label) {
      return this.settingsStore.colorForLabel(label);
    },
    getRelTableDisplayLabel(relTableName) {
      const relTable = this.schema.relTables.find(t => t.name === relTableName);
      if (!relTable) {
        return relTableName;
      }
      return relTable.group ? relTable.group : relTableName;
    },
    drawGraph() {
      if (this.graphCreated && this.g6Graph) {
        this.g6Graph.destroy();
      }
      if (!this.schema) {
        return;
      }
      const { nodes, edges } = this.extractGraphFromSchema(this.schema);
      const container = this.$refs.graph;
      const width = container.offsetWidth;
      const height = container.offsetHeight;

      this.g6Graph = new Graph({
        container,
        width,
        height,
        layout: {
          type: 'd3-force',
          alphaMin: 0.2,
          alphaDecay: 0.03,
          link: {
            distance: edges.length * 15,
            strength: 1,
          },
          collide: {
            radius: (d) => {
              const degree = d.data.degree || 0;
              if (degree === 0) {
                return 10;
              }
              return 200;
            }
          },
          manyBody: {
            distanceMax: (d) => {
              const degree = d.data.degree || 0;
              if (degree === 0) {
                return 10;
              }
              return Infinity;
            },
          }
        },
        plugins: [
          {
            type: 'tooltip',
            key: 'tooltip',
            offsetX: 10,
            offsetY: 10,
            itemTypes: ['node', 'edge'],
            getContent: (e) => {
              const { itemId, itemType } = e;
              const model = itemType === 'node' ? this.g6Graph.getNodeData(itemId) : this.g6Graph.getEdgeData(itemId);
              const label = model?.data?._label || model?.data?.label || model?.label || '';
              return `<div style="max-width:400px;white-space:normal;word-break:break-all;"><b>${label}</b></div>`;
            },
          }
        ],
        node: {
          type: 'circle',
          style: {
            labelPlacement: 'center',
            size: 100,
            labelFill: "#ffffff",
            labelFontSize: 14,
            labelFontFamily: "Lexend, Helvetica Neue, Helvetica, Arial, sans-serif",
            labelFontWeight: 300,
            lineWidth: 4,
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
            endArrow: true,
            labelFontSize: 12,
            labelFontFamily: "Lexend,Helvetica Neue, Helvetica, Arial, sans-serif",
            labelFontWeight: 350,
            labelBackground: true,
            labelBackgroundFill: "#ffffff",
            labelBackgroundPadding: [2, 2, 2, 2],
            labelBackgroundRadius: 2,
            labelAutoRotate: true,
            labelTextBaseline: 'bottom',
          },
          state: {
            active: {
              stroke: '#1890FF',
              lineWidth: 10,
            },

          },
        },
        behaviors: [
          'zoom-canvas',
          'drag-canvas',
          {
            type: 'drag-element-force',
            fixed: true,
          },
        ],
      });

      this.g6Graph.setData({ nodes, edges, });

      // Fit the graph to view after rendering
      this.g6Graph.on(GraphEvent.AFTER_RENDER, () => {
        G6Utils.fitToView(this.g6Graph);
      });

      // Node hover events
      this.g6Graph.on('node:pointerenter', (e) => {
        const id = e.target.id;
        const nodeData = this.g6Graph.getNodeData(id);
        this.handleHover(nodeData.data._label, true);
      });

      this.g6Graph.on('node:pointerleave', () => {
        this.resetHover();
      });

      // Node click events
      this.g6Graph.on('node:click', async (e) => {
        if (this.clickedIsNewTable) {
          return;
        }
        await this.resetClick();
        const clickedId = e.target.config.id;
        const nodeData = this.g6Graph.getNodeData(clickedId);
        this.clickedLabel = nodeData.data._label;
        this.clickedIsNode = true;
        return this.setItemState({
          [clickedId]: ['active'],
        });
      });

      // Edge hover events
      this.g6Graph.on('edge:pointerenter', (e) => {
        const id = e.target.id;
        const edgeData = this.g6Graph.getEdgeData(id);
        if (this.settingsStore.schemaView.showRelLabels === SHOW_REL_LABELS_OPTIONS.HOVER) {
          this.g6Graph.updateEdgeData([{
            id: id,
            style: {
              labelText: this.getRelTableDisplayLabel(edgeData.data._label),
            }
          }]);
          this.g6Graph.frontElement(id);
        }
        this.handleHover(edgeData.data._label, false);
      });

      this.g6Graph.on('edge:pointerleave', (e) => {
        this.resetHover();
        if (this.settingsStore.schemaView.showRelLabels === SHOW_REL_LABELS_OPTIONS.HOVER) {
          const id = e.target.id;
          const currentSelectedEdges = this.g6Graph.getElementDataByState('edge', 'active');
          const isCurrentlySelected = currentSelectedEdges.some(edge => edge.id === id);

          if (!isCurrentlySelected) {
            this.g6Graph.updateEdgeData([{
              id: id,
              style: {
                labelText: "",
              }
            }]);
            this.draw();
          }
        }
      });

      // Edge click events
      this.g6Graph.on('edge:click', async (e) => {
        if (this.clickedIsNewTable) {
          return;
        }
        await this.resetClick();
        // Highlight all edges with the same label
        const clickedId = e.target.config.id;
        const clickedEdgeData = this.g6Graph.getEdgeData(clickedId);
        const clickedLabel = clickedEdgeData.data._label;
        const edgesWithSameLabel = this.g6Graph.getEdgeData().filter(edge => edge.data._label === clickedLabel);
        const activeIds = {};
        for (const edge of edgesWithSameLabel) {
          activeIds[edge.id] = ['active'];
          if (this.settingsStore.schemaView.showRelLabels === SHOW_REL_LABELS_OPTIONS.HOVER) {
            this.g6Graph.updateEdgeData([{
              id: edge.id,
              style: {
                labelText: this.getRelTableDisplayLabel(edge.data._label),
              }
            }]);
          }
        }
        this.clickedIsNode = false;
        this.clickedLabel = clickedLabel;
        await this.setItemState(activeIds);
      });

      // Canvas click events
      this.g6Graph.on('canvas:click', () => {
        if (this.clickedIsNewTable) {
          return;
        }
        return this.resetClick();
      });


      this.render();
      this.graphCreated = true;
    },

    getEdgeId(src, dst, label) {
      return `${src}-${dst}-${label}`;
    },

    extractGraphFromSchema(schema) {
      const overlapEdgeHash = {};
      let nodes = schema.nodeTables.map(n => {
        const fillColor = n.isPlaceholder ? this.getColor(PLACEHOLDER_NODE_TABLE) : this.getColor(n.name);
        const labelColor = G6Utils.getReadableTextColor(fillColor);
        let label = n.name;
        label = G6Utils.fittingString(label, 80, this.settingsStore.defaultNode.labelCfg.style.fontSize);
        const returnVal = {
          id: n.name,
          data: {
            _label: n.name,
            isPlaceholder: Boolean(n.isPlaceholder),
          },
          style: {
            fill: fillColor,
            stroke: G6Utils.shadeColor(fillColor),
            labelText: label,
            labelFill: labelColor,
            labelFontSize: this.settingsStore.defaultNode.labelCfg.style.fontSize,
            labelFontFamily: this.settingsStore.defaultNode.labelCfg.style.fontFamily,
            labelFontWeight: this.settingsStore.defaultNode.labelCfg.style.fontWeight,
          },
        };
        if (returnVal.data.isPlaceholder || returnVal.data._label === this.clickedLabel) {
          returnVal.states = ['active'];
        }
        return returnVal;
      });

      const getEdgeKey = (src, dst, sorted = false) => {
        return sorted ?
          (src < dst ? `${src}-${dst}` : `${dst}-${src}`) :
          `${src}-${dst}`;
      }
      const numberOfEdgesBetweenNodesHash = {};
      schema.relTables.forEach(r => {
        r.connectivity.forEach(conn => {
          if (!conn.src || !conn.dst) {
            return;
          }
          const key = getEdgeKey(conn.src, conn.dst);
          if (!numberOfEdgesBetweenNodesHash[key]) {
            numberOfEdgesBetweenNodesHash[key] = 0;
          }
          numberOfEdgesBetweenNodesHash[key] += 1;
        });
      });

      let edges = [];
      const isNoPlaceholderRel = schema.relTables.every(r => !r.isPlaceholder);
      for (const r of schema.relTables) {
        if (!r.connectivity || r.connectivity.length === 0) {
          continue;
        }
        for (const conn of r.connectivity) {
          const strokeColor = r.isPlaceholder ? this.getColor(PLACEHOLDER_REL_TABLE) : this.getColor(r.name);
          const fittedLabel = G6Utils.fittingString(r.name, 80, 12);
          const labelText = this.settingsStore.schemaView.showRelLabels === SHOW_REL_LABELS_OPTIONS.ALWAYS ?
            fittedLabel :
            "";
          const edge = {
            id: this.getEdgeId(conn.src, conn.dst, r.name),
            source: conn.src,
            target: conn.dst,
            data: {
              _label: r.name,
              isPlaceholder: Boolean(r.isPlaceholder),
            },
            style: {
              labelText,
              stroke: strokeColor,
            },
          };
          if (edge.data.isPlaceholder || (isNoPlaceholderRel && edge.data._label === this.clickedLabel)) {
            edge.states = ['active'];
            edge.style.labelText = fittedLabel;
          }
          if (!edge.source || !edge.target) {
            continue;
          }
          const sortedHashKey = getEdgeKey(edge.source, edge.target, true);
          if (!overlapEdgeHash[sortedHashKey]) {
            overlapEdgeHash[sortedHashKey] = 0;
          }
          overlapEdgeHash[sortedHashKey] += 1;

          if (edge.source === edge.target) {
            // Self-loop (do not set type, otherwise it will not work)
            edge.style.loopDist = 100;
            edge.style.loopPlacement = LOOP_POSITIONS[(overlapEdgeHash[sortedHashKey] - 1) % LOOP_POSITIONS.length];
          }
          else if (overlapEdgeHash[sortedHashKey] > 1) {
            edge.type = 'quadratic';
            edge.style.curveOffset = ARC_CURVE_OFFSETS[(overlapEdgeHash[sortedHashKey] - 1) % ARC_CURVE_OFFSETS.length];
            edge.style.curvePosition = 0.5;
          } else {
            edge.type = 'line';
          }
          edges.push(edge);
        }
      }
      edges = edges.filter(e => Boolean(e));
      nodes.forEach(n => {
        n.data.degree = edges.filter(e => e.source === n.id || e.target === n.id).length;
      });
      return { nodes, edges };
    },

    handleResize() {
      this.$nextTick(() => {
        const width = this.computeGraphWidth();
        const height = this.computeGraphHeight();
        if (this.g6Graph) {
          this.g6Graph.resize(width, height);
        }
      });
    },

    handleHover(label, isNode) {
      this.hoveredLabel = label;
      this.hoveredIsNode = isNode;
    },

    handleSchemaActionCompleted(action) {
      if (action.type === SCHEMA_ACTION_TYPES.RENAME_PROPERTY) {
        this.$refs.editView.cancelEditMode();
      }
      else if (action.type === SCHEMA_ACTION_TYPES.RENAME_NODE_TABLE) {
        this.settingsStore.renameNodeTable(PLACEHOLDER_NODE_TABLE, action.newLabel);
        this.$refs.editView.finishTableRename();
      }
      else if (action.type === SCHEMA_ACTION_TYPES.RENAME_REL_TABLE) {
        this.settingsStore.renameRelTable(PLACEHOLDER_REL_TABLE, action.newLabel);
        this.$refs.editView.finishTableRename();
      }
      else if (action.type === SCHEMA_ACTION_TYPES.ADD_PROPERTY) {
        this.$refs.editView.cancelAddMode();
      }
      else if (action.type === SCHEMA_ACTION_TYPES.ADD_NODE_TABLE) {
        this.settingsStore.renameNodeTable(PLACEHOLDER_NODE_TABLE, action.table);
        this.settingsStore.updateNodeTableLabel(action.table, action.primaryKey);
        this.$nextTick(() => {
          this.cancelAdd();
        });
      } else if (action.type === SCHEMA_ACTION_TYPES.ADD_REL_TABLE) {
        this.settingsStore.renameRelTable(PLACEHOLDER_REL_TABLE, action.table);
        this.$nextTick(() => {
          this.cancelAdd();
        });
      }
    },

    resetClick() {
      if (!this.g6Graph) {
        return;
      }

      // Clear node selections
      const selectedNodes = this.g6Graph.getElementDataByState('node', 'active');
      const nodeStates = {};
      selectedNodes.forEach((node) => {
        nodeStates[node.id] = [];
      });

      // Clear edge selections
      const selectedEdges = this.g6Graph.getElementDataByState('edge', 'active');
      const edgeStates = {};
      selectedEdges.forEach((edge) => {
        edgeStates[edge.id] = [];
        if (this.settingsStore.schemaView.showRelLabels === SHOW_REL_LABELS_OPTIONS.HOVER) {
          this.g6Graph.updateEdgeData([{
            id: edge.id,
            style: {
              labelText: "",
            }
          }]);
        }
      });
      this.clickedLabel = null;
      this.clickedIsNode = false;
      this.clickedIsNewTable = false;
      this.$nextTick(() => {
        if (this.$refs.editView) {
          this.$refs.editView.reset();
        }
      });
      return this.setItemState({ ...nodeStates, ...edgeStates });
    },

    resetHover() {
      this.hoveredLabel = null;
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

    async draw() {
      if (!this.g6Graph) {
        return
      }
      if (this.drawPromise) {
        await this.drawPromise;
      }
      this.drawPromise = this.g6Graph.draw();
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
      this.drawPromise =
        this.isRendering ?
          this.g6Graph.draw() :
          this.g6Graph.render();
      this.isRendering = true;
      await this.drawPromise;
      this.drawPromise = null;
      this.isRendering = false;
    },

    async setItemState(itemStates) {
      if (!this.g6Graph) {
        return;
      }
      if (this.drawPromise) {
        await this.drawPromise;
      }
      this.drawPromise = this.g6Graph.setElementState(itemStates);
      await this.drawPromise;
      this.drawPromise = null;
    },

    redrawGraph(rerender) {
      if (!this.g6Graph) {
        return;
      }
      const { nodes, edges, } = this.extractGraphFromSchema(this.schema);
      this.g6Graph.setData({ nodes, edges, });
      if (rerender) {
        this.render();
      } else {
        this.draw();
      }
    },

    enterEditTableMode(tableName) {
      let isTableNode = false;
      const table = this.schema.relTables.find(t => t.name === tableName);
      if (!table) {
        isTableNode = true;
      }
      this.clickedIsNode = isTableNode;
      this.clickedLabel = tableName;
      this.redrawGraph();
    },

    enterAddNodeTableMode() {
      let newTableName = "NewNodeTable";
      this.clickedIsNewTable = true;
      let counter = 1;
      while (this.schema.nodeTables.find(t => t.name === newTableName)) {
        newTableName = `NewNodeTable${counter}`;
        counter += 1;
      }
      this.$emit("addPlaceholderNodeTable", newTableName);
      this.settingsStore.addNewNodeTable(PLACEHOLDER_NODE_TABLE);
      this.$nextTick(() => {
        this.redrawGraph(true);
      });
      this.clickedLabel = newTableName;
      this.clickedIsNode = true;
      this.clickedIsNewTable = true;
    },

    enterAddRelTableMode() {
      let newTableName = "NewRelTable";
      this.clickedIsNewTable = true;
      let counter = 1;
      while (this.schema.relTables.find(t => t.name === newTableName)) {
        newTableName = `NewRelTable-${counter}`;
        counter += 1;
      }
      this.$emit("addPlaceholderRelTable", newTableName);
      this.settingsStore.addNewRelTable(PLACEHOLDER_REL_TABLE);
      this.clickedLabel = newTableName;
      this.clickedIsNode = false;
      this.clickedIsNewTable = true;
    },

    async cancelAdd() {
      if (this.clickedIsNode) {
        this.settingsStore.removeNodeTable(PLACEHOLDER_NODE_TABLE);
      }
      await this.resetClick();
      this.reloadSchema();
    },

    addNewTable(table, properties, connectivity) {
      this.$refs.actionDialog.addNewTable(table, properties, this.clickedIsNode, connectivity);
    },

    setPlaceholder({ label, isNode }) {
      this.$emit("setPlaceholder", { name: label, isNode });
      if (isNode) {
        try {
          const node = this.g6Graph.getNodeData(label);
          node.data.isPlaceholder = true;
          this.g6Graph.updateNodeData({
            id: node.id,
            data: node.data,
          });
        } catch (e) {
          console.error("Node not found in graph:", label);
          return;
        }
      } else {
        const allRels = this.g6Graph.getEdgeData().filter(e => e.data._label === label);
        if (allRels.length === 0) {
          return;
        }
        allRels.forEach(e => {
          e.data.isPlaceholder = true;
          this.g6Graph.updateEdgeData({
            id: e.id,
            data: e.data,
          });
        });
      }
    },

    setPlaceholderLabelForEditView({ newLabel, isNode }) {
      if (isNode) {
        this.updatePlaceholderNodeTableLabel(newLabel);
      } else {
        this.updatePlaceholderRelTable({ name: newLabel });
      }
    },

    unsetPlaceholder({ originalLabel, isNode }) {
      this.clickedLabel = originalLabel;
      this.$emit("unsetPlaceholder", { originalLabel, isNode });
    },

    async updatePlaceholderNodeTableLabel(newLabel) {
      if (this.clickedLabel === newLabel) {
        return;
      }
      this.$emit("updatePlaceholderNodeTableLabel", newLabel);
      const nodes = this.g6Graph.getNodeData();
      const placeholderNode = nodes.find(node => node.data.isPlaceholder);
      if (placeholderNode) {
        this.g6Graph.updateNodeData([{
          id: placeholderNode.id,
          style: {
            labelText: newLabel,
          }
        }]);
      }
      this.clickedLabel = newLabel;
      this.draw();
    },

    updatePlaceholderRelTable(newTable) {
      this.$emit("updatePlaceholderRelTable", newTable);
      this.clickedLabel = newTable.name;
      // Rerender the graph to update the edge
      this.$nextTick(() => {
        this.redrawGraph();
      });
    },

    dropTable(tableName) {
      this.$refs.actionDialog.dropTable(tableName);
    },

    dropProperty({ table, property }) {
      this.$refs.actionDialog.dropProperty(table, property);
    },

    renameTable({ oldLabel, newLabel, isNode }) {
      if (oldLabel === newLabel) {
        this.$refs.editView.cancelEditMode();
        return;
      }
      this.$refs.actionDialog.renameTable(oldLabel, newLabel, isNode);
    },

    renameProperty({ table, oldName, newName }) {
      if (oldName === newName) {
        this.$refs.editView.cancelEditMode();
        return;
      }
      this.$refs.actionDialog.renameProperty(table, oldName, newName);
    },

    addProperty({ table, property, defaultValue }) {
      this.$refs.actionDialog.addProperty(table, property, defaultValue);
    },

    isClickedReadOnly() {
      const clickedItem = this.clickedIsNode ?
        this.schema.nodeTables.find(t => t.name === this.clickedLabel) :
        this.schema.relTables.find(t => t.name === this.clickedLabel);
      return !this.modeStore.isReadWrite || (clickedItem && clickedItem.group);
    },

    async updateVisualSettings() {
      if (!this.g6Graph) {
        return;
      }
      const itemStates = {};
      const nodes = this.g6Graph.getNodeData();
      nodes.forEach(node => {
        const newFill = node.data.isPlaceholder ? this.getColor(PLACEHOLDER_NODE_TABLE) : this.getColor(node.data._label);
        if (node.style.fill === newFill) {
          return;
        }
        node.style.fill = newFill;
        node.style.stroke = G6Utils.shadeColor(node.style.fill);
        node.style.labelColor = G6Utils.getReadableTextColor(node.style.fill);
        this.g6Graph.updateNodeData({
          id: node.id,
          style: node.style,
        });
        itemStates[node.id] = node.states || [];
      });
      const edges = this.g6Graph.getEdgeData();
      edges.forEach(edge => {
        const newStroke = edge.data.isPlaceholder ? this.getColor(PLACEHOLDER_REL_TABLE) : this.getColor(edge.data._label);
        edge.style.stroke = newStroke;
        edge.style.labelColor = G6Utils.getReadableTextColor(edge.style.stroke);
        edge.style.labelText = (this.settingsStore.schemaView.showRelLabels === SHOW_REL_LABELS_OPTIONS.ALWAYS || edge.states?.includes('active')) ?
          this.getRelTableDisplayLabel(edge.data._label) :
          "";
        this.g6Graph.updateEdgeData({
          id: edge.id,
          style: edge.style,
        });
        itemStates[edge.id] = edge.states || [];
      });
      return this.setItemState(itemStates);

    },

    reloadSchema() {
      this.$emit("reloadSchema");
    },
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

  .badge {
    display: inline-block;
    background-color: var(--bs-body-bg-accent) !important;
    color: #fff !important;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: middle;
  }

  .schema_side-panel__wrapper {
    width: 360px;
    height: 100%;
    padding-left: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: flex;
    flex-direction: column;
    background-color: (var(--bs-body-bg-secondary));
    border-bottom-left-radius: 1rem;
    border-top-left-radius: 1rem;

    .sidebar-content {
      height: 100%;
      width: 100%;
      overflow-y: auto;
      overflow-x: hidden;
      padding: 1rem;

      :deep(table) {
        border-radius: 0.5rem;
        overflow: hidden;
        background-color: var(--bs-body-bg);
        width: calc(100% - 1rem);

        th,
        td {
          padding: 10px;
          max-width: 120px;
          word-break: break-word;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        td {
          padding-left: 10px;
          padding-right: 5px;
          max-width: 150px;
          word-break: break-word;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
  }
}

.schema-view__tools_container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-left: 4px;
  align-items: center;
  padding-bottom: 8px;

  .schema-view__tools_container--bottom {
    margin-top: auto;
    padding-bottom: 8px;

    .schema-view__button {
      >i {
        color: (var(--bs-body-text));
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
      color: var(--bs-body-accent);
    }
  }
}
</style>
