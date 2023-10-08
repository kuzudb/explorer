import { defineStore } from "pinia";
import randomcolor from "randomcolor";
import { SHOW_REL_LABELS_OPTIONS } from "../utils/Constants";

const COLOR_PALETTE = [
  "#4e79a7",
  "#d97f27",
  "#e15759",
  "#76b7b2",
  "#59a14f",
  "#d5b441",
  "#af7aa1",
  "#e58d96",
  "#9c755f",
];

const NULL_COLOR = "#d9d9d9";

export const useSettingsStore = defineStore("settings", {
  state: () => ({
    graphViz: {
      default: {
        node: {
          labelCfg: {
            style: {
              fontSize: 12,
              fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
              fontWeight: 600,
              fill: "#ffffff",
            },
          },
          size: 40,
          style: {
            lineWidth: 0,
            fill: "#FF0000",
          },
        },
        rel: {
          size: 3,
          opacity: 1,
          style: {
            endArrow: true,
            stroke: "#e2e2e2",
          },
          labelCfg: {
            style: {
              fontSize: 12,
              fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
              fontWeight: 600,
            },
            autoRotate: true,
          },
        },
      },
      nodes: {},
      rels: {},
    },
    performance: {
      maxNumberOfNodes: 300,
    },
    tableView: {
      rowsPerPage: 10,
    },
    schemaView: {
      showRelLabels: SHOW_REL_LABELS_OPTIONS.HOVER,
    },
    colors: COLOR_PALETTE,
  }),

  getters: {
    graphVizSettings(state) {
      return state.graphViz;
    },
    colorForLabel(state) {
      return (label) => {
        if (!label) {
          return NULL_COLOR;
        }
        const node = state.graphViz.nodes[label];
        if (node) {
          return node.g6Settings.style.fill;
        }
        const rel = state.graphViz.rels[label];
        if (rel) {
          return rel.g6Settings.style.stroke;
        }
        return NULL_COLOR;
      };
    },
    settingsForLabel(state) {
      return (label) => {
        if (!label) {
          return null;
        }
        const node = state.graphViz.nodes[label];
        if (node) {
          return node;
        }
        const rel = state.graphViz.rels[label];
        if (rel) {
          return rel;
        }
        return null;
      };
    },
    defaultNode(state) {
      return state.graphViz.default.node;
    },
    defaultRel(state) {
      return state.graphViz.default.rel;
    },
    allSettings(state) {
      return {
        graphViz: state.graphViz,
        performance: state.performance,
        tableView: state.tableView,
        schemaView: state.schemaView,
      };
    },
  },

  actions: {
    initDefaultSettings(schema) {
      const nodeDefault = this.graphViz.default.node;
      const relDefault = this.graphViz.default.rel;
      this.graphViz.nodes = {};
      this.graphViz.rels = {};
      schema.nodeTables.forEach((node) => {
        const name = node.name;
        const g6Settings = JSON.parse(JSON.stringify(nodeDefault));
        let color = this.colors.pop();
        if (!color) {
          color = randomcolor({ luminosity: "dark", hue: "random" });
        }
        g6Settings.style.fill = color;
        let primaryKey = node.properties.filter((p) => p.isPrimaryKey)[0];
        if (!primaryKey) {
          primaryKey = node.properties[0];
        }
        const label = primaryKey.name;
        const nodeSettings = {
          name,
          g6Settings,
          label,
        };
        this.graphViz.nodes[name] = nodeSettings;
      });

      schema.relTables.forEach((rel) => {
        const name = rel.name;
        const g6Settings = JSON.parse(JSON.stringify(relDefault));
        const label = "_label";
        const relSettings = {
          name,
          g6Settings,
          label,
        };
        this.graphViz.rels[name] = relSettings;
      });
    },

    updateSettings(settings) {
      this.graphViz = settings.graphViz;
      this.performance = settings.performance;
      this.tableView = settings.tableView;
      this.schemaView = settings.schemaView;
    },

    removeTablesBySchema(schema) {
      const nodeTables = new Set(schema.nodeTables.map((node) => node.name));
      for (let table in this.graphViz.nodes) {
        if (!nodeTables.has(table)) {
          delete this.graphViz.nodes[table];
        }
      }
      const relTables = new Set(schema.relTables.map((rel) => rel.name));
      for (let table in this.graphViz.rels) {
        if (!relTables.has(table)) {
          delete this.graphViz.rels[table];
        }
      }
    },

    addNewNodeTable(name) {
      const nodeDefault = this.graphViz.default.node;
      const g6Settings = JSON.parse(JSON.stringify(nodeDefault));
      let color = this.colors.pop();
      if (!color) {
        color = randomcolor({ luminosity: "dark", hue: "random" });
      }
      g6Settings.style.fill = color;
      const nodeSettings = {
        name,
        g6Settings,
        label: "_label",
      };
      this.graphViz.nodes[name] = nodeSettings;
    },

    removeNodeTable(label) {
      delete this.graphViz.nodes[label];
    },

    renameNodeTable(oldName, newName) {
      const node = this.graphViz.nodes[oldName];
      if (node) {
        node.name = newName;
        this.graphViz.nodes[newName] = node;
        delete this.graphViz.nodes[oldName];
      }
    },

    updateNodeTableLabel(name, label) {
      const node = this.graphViz.nodes[name];
      if (node) {
        node.label = label;
      }
    },
  },
});
