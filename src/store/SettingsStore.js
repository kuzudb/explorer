import { defineStore } from "pinia";
import chroma, { random } from 'chroma-js';
import Axios from "axios";
import {
  SHOW_REL_LABELS_OPTIONS,
  PLACEHOLDER_NODE_TABLE,
  PLACEHOLDER_REL_TABLE,
  GPT_MODELS,
  IRI_PROPERTY_NAME,
} from "../utils/Constants";
import G6Utils from "../utils/G6Utils";
import G6 from "@antv/g6";

const COLOR_PALETTE = [
  "#76b7b2", // teal
  "#9c755f", // brown
  "#e58d96", // pink
  "#d5b441", // yellow
  "#af7aa1", // purple
  "#d97f27", // orange
  "#e15759", // red
  "#59a14f", // green
  "#4e79a7", // blue
];

function randomChromaColor(){
  const randomSaturation = Math.random() * 0.2 + 0.6;  //Sets saturation to a random value between 0.6 and 0.8
  const randomLightness = Math.random() * 0.2 + 0.6;   //Sets lightness to a random value between 0.6 and 0.8
  return chroma.random().set('hsl.s', randomSaturation).set('hsl.l', randomLightness).hex();
}

const NULL_COLOR = "#d9d9d9";
const DEFAULT_NUMBER_OF_NODES_TO_EXPAND = 100;

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
          size: 75,
          style: {
            lineWidth: 3,
            fill: "#FF0000",
          },
        },
        rel: {
          size: 3,
          opacity: 1,
          style: {
            endArrow: {
              path: G6.Arrow.triangle(),
              fill: "#e2e2e2",
            },
            stroke: "#e2e2e2",
          },
          labelCfg: {
            style: {
              fontSize: 12,
              fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
              fontWeight: 300,
              background: {
                fill: "#ffffff",
                padding: [2, 2, 2, 2],
                radius: 2,
              },
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
      maxNumberOfNodesToExpand: DEFAULT_NUMBER_OF_NODES_TO_EXPAND,
    },
    tableView: {
      rowsPerPage: 10,
    },
    schemaView: {
      showRelLabels: SHOW_REL_LABELS_OPTIONS.ALWAYS,
    },
    colors: COLOR_PALETTE,
    gpt: {
      apiToken: null,
      model: GPT_MODELS[0],
    },
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
        gpt: state.gpt,
      };
    },
  },

  actions: {
    initDefaultNode(node) {
      const nodeDefault = this.graphViz.default.node;
      const name = node.name;
      const g6Settings = JSON.parse(JSON.stringify(nodeDefault));
      let color = this.colors.pop();
      if (!color) {
        color = randomChromaColor();
      }
      g6Settings.style.fill = color;
      g6Settings.style.stroke = G6Utils.shadeColor(color);
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
      if (node.rdf) {
        const isIriPropertyExist = node.properties.some(
          (property) => property.name === IRI_PROPERTY_NAME
        );
        if (isIriPropertyExist) {
          nodeSettings.label = IRI_PROPERTY_NAME;
        }
      }
      return nodeSettings;
    },

    initDefaultRel(rel) {
      const relDefault = this.graphViz.default.rel;
      const name = rel.name;
      const g6Settings = JSON.parse(JSON.stringify(relDefault));
      const label = "_label";
      const relSettings = {
        name,
        g6Settings,
        label,
      };
      if (rel.rdf) {
        const isIriPropertyExist = rel.properties.some(
          (property) => property.name === IRI_PROPERTY_NAME
        );
        if (isIriPropertyExist) {
          relSettings.label = IRI_PROPERTY_NAME;
        }
      }
      return relSettings;
    },

    initSettings(schema, storedSettings) {
      const storedSettingsCopy = JSON.parse(JSON.stringify(storedSettings));
      if (storedSettingsCopy.graphViz) {
        this.graphViz = storedSettingsCopy.graphViz;
      }
      if (storedSettingsCopy.performance) {
        if (!storedSettingsCopy.performance.maxNumberOfNodesToExpand) {
          // Migrate old settings
          storedSettingsCopy.performance.maxNumberOfNodesToExpand =
            DEFAULT_NUMBER_OF_NODES_TO_EXPAND;
        }
        this.performance = storedSettingsCopy.performance;
      }
      if (storedSettingsCopy.tableView) {
        this.tableView = storedSettingsCopy.tableView;
      }
      if (storedSettingsCopy.schemaView) {
        this.schemaView = storedSettingsCopy.schemaView;
      }
      if (storedSettingsCopy.gpt) {
        // Migrate old settings
        if (storedSettingsCopy.gpt.model === "gpt-3.5-turbo") {
          storedSettingsCopy.gpt.model = "gpt-4o";
        }
        this.gpt.model = storedSettingsCopy.gpt.model;
      }
      if (storedSettingsCopy.colors) {
        this.colors = storedSettingsCopy.colors;
      }
      // The schema may be changed outside of Kùzu Explorer, so we reset the
      // graphViz settings and merge the stored settings with current schema.
      this.graphViz.nodes = {};
      this.graphViz.rels = {};
      const storedGraphViz = storedSettings.graphViz || { nodes: {}, rels: {} };
      schema.nodeTables.forEach((node) => {
        const nodeSettings =
          storedGraphViz.nodes[node.name] || this.initDefaultNode(node);
        this.graphViz.nodes[node.name] = nodeSettings;
        // Migrate old settings
        this.graphViz.nodes[node.name].g6Settings.style.stroke =
          G6Utils.shadeColor(
            this.graphViz.nodes[node.name].g6Settings.style.fill
          );
        this.graphViz.nodes[node.name].g6Settings.style.lineWidth = 3;
      });

      schema.relTables.forEach((rel) => {
        const relSettings =
          storedGraphViz.rels[rel.name] || this.initDefaultRel(rel);
        this.graphViz.rels[rel.name] = relSettings;
        // Migrate old settings
        if (!this.graphViz.rels[rel.name].g6Settings.style.endArrow) {
          this.graphViz.rels[rel.name].g6Settings.style.endArrow = {
            path: G6.Arrow.triangle(),
            fill: "#e2e2e2",
          };
        }
        if (
          !this.graphViz.rels[rel.name].g6Settings.labelCfg.style.background
        ) {
          this.graphViz.rels[rel.name].g6Settings.labelCfg.style.background = {
            fill: "#ffffff",
            padding: [2, 2, 2, 2],
            radius: 2,
          };
        }
        this.graphViz.rels[rel.name].g6Settings.labelCfg.style.fontWeight = 300;
      });
      this.loadGptApiTokenFromLocalStorage();
      this.uploadSettings();
    },

    updateSettings(settings) {
      this.graphViz = settings.graphViz;
      this.performance = settings.performance;
      this.tableView = settings.tableView;
      this.schemaView = settings.schemaView;
      this.gpt = settings.gpt;
      this.saveGptApiTokenToLocalStorage();
      this.uploadSettings();
    },

    handleSchemaReload(schema) {
      const nodeTables = new Set(schema.nodeTables.map((node) => node.name));
      for (let table in this.graphViz.nodes) {
        if (!nodeTables.has(table)) {
          delete this.graphViz.nodes[table];
        }
      }
      schema.nodeTables.forEach((node) => {
        if (!this.graphViz.nodes[node.name]) {
          const nodeSettings = this.initDefaultNode(node);
          this.graphViz.nodes[node.name] = nodeSettings;
        }
      });
      const relTables = new Set(schema.relTables.map((rel) => rel.name));
      for (let table in this.graphViz.rels) {
        if (!relTables.has(table)) {
          delete this.graphViz.rels[table];
        }
      }
      schema.relTables.forEach((rel) => {
        if (!this.graphViz.rels[rel.name]) {
          const relSettings = this.initDefaultRel(rel);
          this.graphViz.rels[rel.name] = relSettings;
        }
      });
      this.uploadSettings();
    },

    addNewNodeTable(name) {
      const nodeDefault = this.graphViz.default.node;
      const g6Settings = JSON.parse(JSON.stringify(nodeDefault));
      let color = this.colors.pop();
      if (!color) {
        color = randomChromaColor();
      }
      g6Settings.style.fill = color;
      const nodeSettings = {
        name,
        g6Settings,
        label: "_label",
      };
      this.graphViz.nodes[name] = nodeSettings;
    },

    addNewRelTable(name) {
      const relDefault = this.graphViz.default.rel;
      const g6Settings = JSON.parse(JSON.stringify(relDefault));
      const relSettings = {
        name,
        g6Settings,
        label: "_label",
      };
      this.graphViz.rels[name] = relSettings;
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

    removeRelTable(label) {
      delete this.graphViz.rels[label];
    },

    renameRelTable(oldName, newName) {
      const rel = this.graphViz.rels[oldName];
      if (rel) {
        rel.name = newName;
        this.graphViz.rels[newName] = rel;
        delete this.graphViz.rels[oldName];
      }
    },

    setPlaceholderNodeTable(label) {
      this.renameNodeTable(label, PLACEHOLDER_NODE_TABLE);
    },

    setPlaceholderRelTable(label) {
      this.renameRelTable(label, PLACEHOLDER_REL_TABLE);
    },

    unsetPlaceholderNodeTable(originalLabel) {
      this.renameNodeTable(PLACEHOLDER_NODE_TABLE, originalLabel);
    },

    unsetPlaceholderRelTable(originalLabel) {
      this.renameRelTable(PLACEHOLDER_REL_TABLE, originalLabel);
    },

    loadGptApiTokenFromLocalStorage() {
      const token = localStorage.getItem("gptApiToken");
      if (token) {
        this.gpt.apiToken = token;
      } else {
        this.gpt.apiToken = null;
      }
    },

    saveGptApiTokenToLocalStorage() {
      if (!this.gpt.apiToken) {
        localStorage.removeItem("gptApiToken");
      } else {
        localStorage.setItem("gptApiToken", this.gpt.apiToken);
      }
    },

    clearGptApiToken() {
      localStorage.removeItem("gptApiToken");
    },

    loadSettingsFromLocalStorage() {
      const settings = localStorage.getItem("settings");
      if (settings) {
        return JSON.parse(settings);
      }
      return {};
    },

    uploadSettings() {
      const settings = JSON.parse(JSON.stringify(this.allSettings));
      settings.colors = this.colors;
      delete settings.gpt.apiToken;
      localStorage.setItem("settings", JSON.stringify(settings));
      return Axios.post("/api/session/settings", settings).then((response) => {
        return response.data;
      });
    },
  },
});
