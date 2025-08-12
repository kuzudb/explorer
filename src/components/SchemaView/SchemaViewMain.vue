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
    clickedLabelDisplay: null,
    clickedIsNode: false,
    clickedIsNewTable: false,
    toolbarDebounceTimeout: 100,
    toolbarDebounceTimer: null,
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
      this.handleSettingsChange();
    },

    schema(value, oldValue) {
      const oldNodes = oldValue ? oldValue.nodeTables.map(n => n.name) : [];
      const newNodes = value ? value.nodeTables.map(n => n.name) : [];
      const oldEdges = oldValue ? oldValue.relTables.map(n => n.name) : [];
      const newEdges = value ? value.relTables.map(n => n.name) : [];

      const areSetsEqual = (a, b) => a.size === b.size && [...a].every(value => b.has(value));
      if (areSetsEqual(new Set(oldNodes), new Set(newNodes)) && areSetsEqual(new Set(oldEdges), new Set(newEdges))) {
        return;
      }
      if (!this.graphCreated) {
        return;
      }
      this.resetClick();
      this.handleSettingsChange(true);
    },
  },
  mounted() {
    this.computeGraphWidth();
    this.computeGraphHeight();
    window.addEventListener("resize", this.handleResize);
  },

  beforeUnmount() {
    if (this.g6Graph) {
      this.g6Graph.destroy();
    }
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
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
          link: {
            distance: edges.length * 15,
            strength: 1,
          },
          collide: {
            radius: 200,
          },

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
          {
            type: 'click-select',
            key: 'click-select-element',
            degree: 0,
            state: 'active',
            enable: true,
          },
        ],
      });

      this.g6Graph.setData({ nodes, edges, });
      this.g6Graph.render();

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
      this.g6Graph.on('node:click', (e) => {
        if (this.clickedIsNewTable) {
          return;
        }
        this.resetClick();
        const clickedId = e.target.config.id;
        const nodeData = this.g6Graph.getNodeData(clickedId);
        this.clickedLabel = nodeData.data._label;
        this.clickedLabelDisplay = nodeData.data.label;
        this.clickedIsNode = true;
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
            this.g6Graph.draw();
          }
        }
      });

      // Edge click events
      this.g6Graph.on('edge:click', (e) => {
        if (this.clickedIsNewTable) {
          return;
        }
        this.resetClick();
        const clickedId = e.target.config.id;
        const edgeData = this.g6Graph.getEdgeData(clickedId);
        if (this.settingsStore.schemaView.showRelLabels === SHOW_REL_LABELS_OPTIONS.HOVER) {
          this.g6Graph.updateEdgeData([{
            id: clickedId,
            style: {
              labelText: this.getRelTableDisplayLabel(edgeData.data._label),
            }
          }]);
        }
        this.clickedIsNode = false;
        this.clickedLabel = edgeData.data._label;
        this.clickedLabelDisplay = edgeData.data.label;
      });

      // Canvas click events
      this.g6Graph.on('canvas:click', () => {
        if (this.clickedIsNewTable) {
          return;
        }
        this.resetClick();
      });

      // Render is already called after setData
      this.graphCreated = true;
    },

    getEdgeId(src, dst, label) {
      return `${src}-${dst}-${label}`;
    },

    extractGraphFromSchema(schema) {
      const overlapEdgeHash = {};
      function getReadableTextColor(bgColor) {
        const color = bgColor.charAt(0) === '#' ? bgColor.substring(1) : bgColor;
        const r = parseInt(color.substring(0, 2), 16);
        const g = parseInt(color.substring(2, 4), 16);
        const b = parseInt(color.substring(4, 6), 16);
        const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
        return luminance > 0.6 ? '#000000' : '#ffffff';
      }
      let nodes = schema.nodeTables.map(n => {
        const fillColor = n.isPlaceholder ? this.getColor(PLACEHOLDER_NODE_TABLE) : this.getColor(n.name);
        const labelColor = getReadableTextColor(fillColor);
        let label = n.name;
        label = G6Utils.fittingString(label, 80, this.settingsStore.defaultNode.labelCfg.style.fontSize);
        const returnVal = {
          id: n.name,
          data: {
            label: label,
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

      for (const r of schema.relTables) {
        if (!r.connectivity || r.connectivity.length === 0) {
          continue;
        }
        for (const conn of r.connectivity) {
          const strokeColor = r.isPlaceholder ? this.getColor(PLACEHOLDER_REL_TABLE) : this.getColor(r.name);
          const labelText = this.settingsStore.schemaView.showRelLabels === SHOW_REL_LABELS_OPTIONS.ALWAYS ? G6Utils.fittingString(this.getRelTableDisplayLabel(r.name), 80, 12) : "";
          const edge = {
            id: this.getEdgeId(conn.src, conn.dst, r.name),
            source: conn.src,
            target: conn.dst,
            data: {
              label: labelText,
              _label: r.name,
              isPlaceholder: Boolean(r.isPlaceholder),
            },
            style: {
              stroke: strokeColor,
            },
          };
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
      
      // Apply state changes
      this.g6Graph.setElementState({ ...nodeStates, ...edgeStates });
      
      this.clickedLabel = null;
      this.clickedLabelDisplay = null;
      this.clickedIsNode = false;
      this.clickedIsNewTable = false;
      this.$nextTick(() => {
        if (this.$refs.editView) {
          this.$refs.editView.reset();
        }
      });
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

    handleSettingsChange(rerender) {
      const { nodes, edges, } = this.extractGraphFromSchema(this.schema);
      if (!this.g6Graph) {
        return;
      }
      this.g6Graph.setData({ nodes, edges, });
      if (rerender) {
        this.g6Graph.render();
      } else {
        this.g6Graph.draw();
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
    },

    enterAddNodeTableMode() {
      let newTableName = "NewNodeTable";
      this.clickedIsNewTable = true;
      let counter = 1;
      while (this.schema.nodeTables.find(t => t.name === newTableName)) {
        newTableName = `NewNodeTable-${counter}`;
        counter += 1;
      }
      this.$emit("addPlaceholderNodeTable", newTableName);
      this.settingsStore.addNewNodeTable(PLACEHOLDER_NODE_TABLE);
      this.$nextTick(() => {
        this.handleSettingsChange(true);
      });
      this.clickedLabel = newTableName;
      this.clickedLabelDisplay = newTableName;
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
      this.clickedLabelDisplay = newTableName;
      this.clickedIsNode = false;
      this.clickedIsNewTable = true;
    },

    cancelAdd() {
      if (this.clickedIsNode) {
        this.settingsStore.removeNodeTable(PLACEHOLDER_NODE_TABLE);
      }
      this.resetClick();
      this.reloadSchema();
    },

    addNewTable(table, properties, connectivity) {
      this.$refs.actionDialog.addNewTable(table, properties, this.clickedIsNode, connectivity);
    },

    setPlaceholder(label) {
      if (!this.g6Graph) {
        this.$emit("setPlaceholder", label);
        return;
      }
      
      if (this.clickedIsNode) {
        const nodes = this.g6Graph.getNodeData();
        const matchingNodes = nodes.filter(node => node.data._label === label);
        const updatedNodes = matchingNodes.map(node => {
          const updatedNode = { ...node };
          updatedNode.data = { ...updatedNode.data, isPlaceholder: true };
          return updatedNode;
        });
        if (updatedNodes.length > 0) {
          this.g6Graph.updateData('node', updatedNodes);
        }
      } else {
        const edges = this.g6Graph.getEdgeData();
        const matchingEdges = edges.filter(edge => edge.data._label === label);
        const updatedEdges = matchingEdges.map(edge => {
          const updatedEdge = { ...edge };
          updatedEdge.data = { ...updatedEdge.data, isPlaceholder: true };
          return updatedEdge;
        });
        if (updatedEdges.length > 0) {
          this.g6Graph.updateData('edge', updatedEdges);
        }
      }
      this.$emit("setPlaceholder", label);
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
      this.clickedLabelDisplay = originalLabel;
      this.$emit("unsetPlaceholder", { originalLabel, isNode });
    },

    updatePlaceholderNodeTableLabel(newLabel) {
      if (this.clickedLabel === newLabel) {
        return;
      }
      
      if (this.g6Graph) {
        const nodes = this.g6Graph.getNodeData();
        const placeholderNode = nodes.find(node => node.data.isPlaceholder);
        if (placeholderNode) {
          const updatedNode = { ...placeholderNode };
          updatedNode.data = { ...updatedNode.data, label: newLabel };
          updatedNode.style = { ...updatedNode.style, labelText: newLabel };
          this.g6Graph.updateData('node', [updatedNode]);
        }
      }
      
      this.$emit("updatePlaceholderNodeTableLabel", newLabel);
      this.clickedLabel = newLabel;
    },

    updatePlaceholderRelTable(newTable) {
      this.$emit("updatePlaceholderRelTable", newTable);
      this.clickedLabel = newTable.name;
      this.clickedLabelDisplay = newTable.name;
      // Rerender the graph to update the edge
      this.$nextTick(() => {
        this.handleSettingsChange();
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
        th, td {
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
