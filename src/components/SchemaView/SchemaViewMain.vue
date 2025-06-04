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
import G6 from '@antv/g6';
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
    sidebarWidth: 500,
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
      this.handleSettingsChange();
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
    getLayoutConfig(edges) {
      let nodeSpacing = edges.length * 8;
      nodeSpacing = nodeSpacing < 80 ? 80 : nodeSpacing;
      nodeSpacing = nodeSpacing > 500 ? 500 : nodeSpacing;
      const config = {
        nodeSpacing,
        type: 'force',
        preventOverlap: true,

      };
      return config;
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

      this.g6Graph = new G6.Graph({
        container,
        width,
        height,
        linkCenter: false,
        groupByTypes: false,
        layout: this.getLayoutConfig(edges),
        defaultNode: {
          shape: "circle",
          labelCfg: {
            style: {
              fontSize: 14,
              fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
              fontWeight: 500,
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
            endArrow: true,
            // TODO: investigate why the endArrow causes rendering issues
            // endArrow: {
            //   path: G6.Arrow.triangle(),
            //   fill: "#e2e2e2",
            // }
          },
          labelCfg: {
            style: {
              fontSize: 12,
              fontFamily: "Lexend,Helvetica Neue, Helvetica, Arial, sans-serif",
              fontWeight: 350,
              background: {
                fill: "#ffffff",
                padding: [2, 2, 2, 2],
                radius: 2,
              },
            },
            refY: -14,
            autoRotate: true,
          },

        },
        edgeStateStyles: {
          hover: {
            stroke: '#1890FF',
            // endArrow: {
            //   path: G6.Arrow.triangle(),
            //   fill: "#1890FF",
            // },
          },
          click: {
            stroke: '#1848FF',
            // endArrow: {
            //   path: G6.Arrow.triangle(),
            //   fill: "#1848FF",
            // },
          },
        },
        modes: {
          default: ['drag-canvas', 'zoom-canvas', 'drag-node']
        },
      });

      this.g6Graph.data({ nodes, edges, });

      this.g6Graph.on('node:mouseenter', (e) => {
        const nodeItem = e.item;
        this.g6Graph.setItemState(nodeItem, 'hover', true);
        this.handleHover(nodeItem._cfg.model.label, true);
      });

      this.g6Graph.on('node:mouseleave', (e) => {
        const nodeItem = e.item;
        this.g6Graph.setItemState(nodeItem, 'hover', false);
        this.resetHover();
      });

      this.g6Graph.on('node:click', (e) => {
        if (this.clickedIsNewTable) {
          return;
        }
        this.resetClick();
        const nodeItem = e.item;
        this.g6Graph.setItemState(nodeItem, 'click', true);
        this.clickedLabel = nodeItem._cfg.model.label;
        this.clickedIsNode = true;
      });

      this.g6Graph.on('edge:mouseenter', (e) => {
        const edgeItem = e.item;
        this.g6Graph.setItemState(edgeItem, 'hover', true);
        if (this.settingsStore.schemaView.showRelLabels === SHOW_REL_LABELS_OPTIONS.HOVER) {
          this.g6Graph.updateItem(edgeItem, {
            label: this.getRelTableDisplayLabel(edgeItem._cfg.model._label)
          });
          edgeItem.toFront();
        }
        this.handleHover(edgeItem._cfg.model._label, false);
      });

      this.g6Graph.on('edge:mouseleave', (e) => {
        const edgeItem = e.item;
        this.g6Graph.setItemState(edgeItem, 'hover', false);
        this.resetHover();
        if (this.settingsStore.schemaView.showRelLabels === SHOW_REL_LABELS_OPTIONS.HOVER) {
          const currentSelectedEdge = this.g6Graph.findAllByState('edge', 'click')[0];
          if (currentSelectedEdge && currentSelectedEdge._cfg.id === edgeItem._cfg.id) {
            return;
          }
          this.g6Graph.updateItem(edgeItem, {
            label: ""
          });
        }
      });

      this.g6Graph.on('edge:click', (e) => {
        if (this.clickedIsNewTable) {
          return;
        }
        this.resetClick();
        const edgeItem = e.item;
        this.g6Graph.setItemState(edgeItem, 'click', true);
        if (this.settingsStore.schemaView.showRelLabels === SHOW_REL_LABELS_OPTIONS.HOVER) {
          this.g6Graph.updateItem(edgeItem, {
            label: this.getRelTableDisplayLabel(edgeItem._cfg.model._label)
          });
          edgeItem.toFront();
        }
        this.clickedIsNode = false;
        this.clickedLabel = edgeItem._cfg.model._label;
      });

      this.g6Graph.on('canvas:click', () => {
        if (this.clickedIsNewTable) {
          return;
        }
        this.resetClick();
      });

      // Auto layout after drag
      this.g6Graph.on('node:dragstart', (e) => {
        this.refreshDraggedNodePosition(e);
      });

      this.g6Graph.on('node:drag', (e) => {
        this.g6Graph.layout();
        this.refreshDraggedNodePosition(e);
      });

      this.g6Graph.on('node:dragend', (e) => {
        e.item.get('model').fx = null;
        e.item.get('model').fy = null;
      });

      this.g6Graph.render();
      this.graphCreated = true;
    },

    getEdgeId(src, dst, label) {
      return `${src}-${dst}-${label}`;
    },

    extractGraphFromSchema(schema) {
      const overlapEdgeHash = {};
      const nodes = schema.nodeTables.map(n => {
        const returnVal = {
          id: n.name,
          label: n.name,
          _label: n.name,
          isPlaceholder: Boolean(n.isPlaceholder),
          style: {
            fill:
              n.isPlaceholder ? this.getColor(PLACEHOLDER_NODE_TABLE) : this.getColor(n.name),
            lineWidth: 4,

          },
        };
        returnVal.style.stroke = G6Utils.shadeColor(returnVal.style.fill);
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
          const edge = {
            id: this.getEdgeId(conn.src, conn.dst, r.name),
            source: conn.src,
            target: conn.dst,
            label: this.settingsStore.schemaView.showRelLabels === SHOW_REL_LABELS_OPTIONS.ALWAYS ? this.getRelTableDisplayLabel(r.name) : "",
            _label: r.name,
            isPlaceholder: Boolean(r.isPlaceholder),
            style: {
              stroke: r.isPlaceholder ? this.getColor(PLACEHOLDER_REL_TABLE) : this.getColor(r.name),
            }
          };
          if (!edge.source || !edge.target) {
            continue;
          }
          const hashKey = getEdgeKey(edge.source, edge.target);
          const sortedHashKey = getEdgeKey(edge.source, edge.target, true);
          if (!overlapEdgeHash[sortedHashKey]) {
            overlapEdgeHash[sortedHashKey] = 0;
          }
          overlapEdgeHash[sortedHashKey] += 1;

          if (edge.source === edge.target) {
            edge.type = 'loop';
            edge.loopCfg = {
              position: LOOP_POSITIONS[(overlapEdgeHash[sortedHashKey] - 1) % LOOP_POSITIONS.length],
              dist: 100,
            };
          }
          else {
            edge.type = 'quadratic';
            edge.curveOffset = ARC_CURVE_OFFSETS[(overlapEdgeHash[sortedHashKey] - 1) % ARC_CURVE_OFFSETS.length];
            if (sortedHashKey !== hashKey) {
              // There is a second edge between the same nodes, but in the opposite direction
              // In this case, G6 by default draws the second edge with a slightly different start and end point
              // Which looks weird, so we add a workaround

              // Exchange source and target
              const temp = edge.source;
              edge.source = edge.target;
              edge.target = temp;

              // Set start arrow to true
              edge.style.startArrow = true;
              // Set end arrow to false
              edge.style.endArrow = false;
            }
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
          this.g6Graph.changeSize(width, height);
          this.layoutGraph();
          this.g6Graph.fitCenter();
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
      const currentSelectedNode = this.g6Graph.findAllByState('node', 'click')[0];
      if (currentSelectedNode) {
        this.g6Graph.setItemState(currentSelectedNode, 'click', false);
      }
      const currentSelectedEdge = this.g6Graph.findAllByState('edge', 'click')[0];
      if (currentSelectedEdge) {
        this.g6Graph.setItemState(currentSelectedEdge, 'click', false);
        if (this.settingsStore.schemaView.showRelLabels === SHOW_REL_LABELS_OPTIONS.HOVER) {
          this.g6Graph.updateItem(currentSelectedEdge, {
            label: ""
          });
        }
      }
      this.clickedLabel = null;
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

    layoutGraph() {
      if (!this.g6Graph) {
        return;
      }
      this.g6Graph.layout();
    },

    refreshDraggedNodePosition(e) {
      const model = e.item.get('model');
      model.fx = e.x;
      model.fy = e.y;
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

    handleSettingsChange() {
      const { nodes, edges, } = this.extractGraphFromSchema(this.schema);
      if (!this.g6Graph) {
        return;
      }
      this.g6Graph.changeData({ nodes, edges, });
      const layoutConfig = this.getLayoutConfig(edges);
      this.g6Graph.updateLayout(layoutConfig);
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

    setG6Click(tableName) {
      const g6Items = this.g6Graph ? this.g6Graph.findAll(
        this.clickedIsNode ? 'node' : 'edge',
        item => item._cfg.model._label === tableName
      ) : [];
      g6Items.forEach(g6Item => {
        this.g6Graph.setItemState(g6Item, 'click', true);
        if (this.settingsStore.schemaView.showRelLabels === SHOW_REL_LABELS_OPTIONS.HOVER) {
          this.g6Graph.updateItem(g6Item, {
            label: this.getRelTableDisplayLabel(tableName),
          });
          g6Item.toFront();
        }
      });
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
        this.handleSettingsChange();
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
      const g6Items = this.g6Graph.findAll(
        this.clickedIsNode ? 'node' : 'edge',
        item => item._cfg.model._label === label
      );
      if (g6Items.length > 0) {
        for (const g6Item of g6Items) {
          this.g6Graph.updateItem(g6Item, {
            isPlaceholder: true,
          });
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
      this.$emit("unsetPlaceholder", { originalLabel, isNode });
    },

    updatePlaceholderNodeTableLabel(newLabel) {
      if (this.clickedLabel === newLabel) {
        return;
      }
      const g6Item = this.g6Graph ? this.g6Graph.find('node', node => node._cfg.model.isPlaceholder) : null;
      if (g6Item) {
        this.g6Graph.updateItem(g6Item, {
          label: newLabel,
        });
      }
      this.$emit("updatePlaceholderNodeTableLabel", newLabel);
      this.clickedLabel = newLabel;
    },

    updatePlaceholderRelTable(newTable) {
      this.$emit("updatePlaceholderRelTable", newTable);
      this.clickedLabel = newTable.name;
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

  .schema_side-panel__wrapper {
    width: 500px;
    height: 100%;
    padding-left: 12px;
    padding-right: 12px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    border-left: 2px solid (var(--bs-body-inactive));
    background-color: (var(--bs-body-bg-secondary));
    border-bottom-left-radius: 1rem;
    border-top-left-radius: 1rem;
  }

  .sidebar-content {
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
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
