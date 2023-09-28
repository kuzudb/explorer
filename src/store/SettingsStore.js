import { defineStore } from "pinia";
import randomcolor from "randomcolor";

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
          color: "#5B8FF9",
          style: {
            lineWidth: 0,
            fill: "#C6E5FF",
          },
        },
        rel: {
          size: 3,
          color: "#e2e2e2",
          opacity: 1,
          style: {
            endArrow: true,
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
      maxNumberOfNodes: 500,
    },
    tableView: {
      rowsPerPage: 10,
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
          return node.g6Settings.color;
        }
        const rel = state.graphViz.rels[label];
        if (rel) {
          return rel.g6Settings.color;
        }
        return NULL_COLOR;
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
        g6Settings.color = color;
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
    },
  },
});
