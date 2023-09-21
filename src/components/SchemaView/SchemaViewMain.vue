<template>
  <div class="schema-main-view__wrapper">
    <div class="buttons-container" style="
        display: block;
        position: absolute;
        z-index: 3;
        top: 50px;
        left: 0px;
        padding: 10px;
      ">
      <v-btn @click="isSidebarOpen = !isSidebarOpen">History</v-btn>
      <br /><br />
      <v-btn @click="handleAddNode">Add Node</v-btn>
      <br /><br />
      <v-btn @click="handleAddRelTable">Add Rel</v-btn>
    </div>
    <div class="schema-main-view__network-container" ref="network" />

    <div class="schema-main-view__sidebar" v-if="isSidebarOpen">
      <div class="schema-main-view__sidebar-node-table-view" v-if="selectedNode !== null">
        <h2>Node Table: {{ selectedNode.name }}</h2>
        <br />

        <v-divider></v-divider>
        <div class="v-table__wrapper">
          <v-table>
            <thead>
              <tr>
                <th class="text-left">
                  Property &nbsp;
                  <font-awesome-icon icon="add" @click="isEditMode = true" />
                </th>

                <th class="text-left">Type</th>

                <th class="text-left">Actions</th>
              </tr>

              <tr v-for="(property, i) in selectedNode.properties" :key="property.name">
                <td class="text-left">
                  {{ property.name }}

                  <v-chip class="ma-2" color="green" v-show="property.isPrimaryKey">
                    PK
                  </v-chip>
                </td>

                <td class="text-left">
                  {{ property.type }}
                </td>

                <td class="text-left">
                  <font-awesome-icon icon="trash" @click="handleDeleteProperty(i)" />
                </td>
              </tr>

              <tr v-show="isEditMode">
                <td>
                  <v-text-field label="Property Name" v-model="newPropertyName" />
                </td>

                <td>
                  <v-select :items="types" label="Type" v-model="newPropertyType" />
                </td>

                <td>
                  <font-awesome-icon icon="check" @click="handleAddProperty" />
                  &nbsp;
                  <font-awesome-icon icon="cancel" @click="cancelAdd" />
                </td>
              </tr>
            </thead>
          </v-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import { Network as VisNetwork } from "vis-network/peer";
import Axios from "axios";
import ColorManager from "../../utils/ColorManager.js";

export default {
  data: () => ({
    network: null,
    schema: {
      nodeTables: [],
      relTables: [],
    },
    isSidebarOpen: false,
    selectedNode: null,
    isEditMode: false,
    types: [
      "BOOL",
      "INT64",
      "INT32",
      "INT16",
      "DOUBLE",
      "FLOAT",
      "DATE",
      "TIMESTAMP",
      "INTERVAL",
      "FIXED_LIST",
      "STRING",
      "BLOB",
      "VAR_LIST",
      "STRUCT",
      "UNION",
    ],
    newPropertyName: "",
    newPropertyType: "",
  }),

  methods: {
    async getSchema() {
      const response = await Axios.get("/api/schema");
      this.schema = response.data;
      this.schema.relTables.forEach((table) => {
        table.src = table.properties.src;
        table.dst = table.properties.dst;
        table.properties = table.properties.props;
      });
    },

    drawNetwork() {
      if (this.network) {
        this.network.destroy();
      }
      const container = this.$refs.network;
      const data = {
        nodes: this.schema.nodeTables.map((table) => ({
          id: table.name,
          label: table.name,
          color: ColorManager.getColor(table.name),
        })),
        edges: this.schema.relTables.map((table) => ({
          from: table.src,
          to: table.dst,
          title: `${table.name}`,
          id: table.name,
        })),
      };
      const options = {
        nodes: {
          font: {
            size: 20,
            color: "#333",
          },
          margin: 10,
          shape: "box",
        },
        edges: {
          arrows: {
            to: {
              enabled: true,
            },
          },
        },
        layout: {
          randomSeed: 1,
          improvedLayout: true,
        },
        physics: {
          enabled: true,
          barnesHut: {
            springLength: this.getSpringLength(),
          },
        },
      };
      this.network = new VisNetwork(container, data, options);
      this.network.on("click", (params) => {
        if (params.nodes.length > 0) {
          const node = this.schema.nodeTables.find(
            (table) => table.name === params.nodes[0]
          );
          return this.handleNodeClick(node);
        } else if (params.edges.length > 0) {
          const edge = this.schema.relTables.find(
            (table) => table.name === params.edges[0]
          );
          return this.handleEdgeClick(edge);
        } else {
          return this.handleBackgroundClick();
        }
      });
    },

    handleNodeClick(node) {
      this.isSidebarOpen = true;
      console.log(node);
      this.selectedNode = node;
    },

    handleEdgeClick(edge) {
      this.isSidebarOpen = true;
      console.log(edge);
      this.selectedNode = edge;
    },

    handleBackgroundClick() {
      this.isSidebarOpen = false;
    },

    cancelAdd() {
      this.isEditMode = false;
      this.newPropertyName = "";
      this.newPropertyType = "";
    },

    handleAddProperty() {
      this.selectedNode.properties.push({
        name: this.newPropertyName,
        type: this.newPropertyType,
      });
      this.cancelAdd();
    },

    handleDeleteProperty(index) {
      this.selectedNode.properties.splice(index, 1);
    },

    handleAddRelTable() {
      this.network.enableEditMode();
      this.network.addEdgeMode();
    },

    handleAddNode() { },

    getSpringLength() {
      const canvasWidth = this.$refs.network.offsetWidth;
      const canvasHeight = this.$refs.network.offsetHeight;
      const springLength = Math.min(canvasWidth, canvasHeight) / 4;
      return springLength;
    },
  },

  mounted() {
    this.getSchema().then(() => {
      this.drawNetwork();
    });
  },

  beforeUnmount() {
    this.network.destroy();
  },
};
</script>

<style lang="scss" scoped>
.schema-main-view__wrapper {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
}

.schema-main-view__network-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.schema-main-view__sidebar {
  height: 100%;
  width: 600px;

  display: flex;
  flex-direction: column;

  flex-direction: row;
  border-left: 2px solid #e0e0e0;
  padding: 10px;
}

.schema-main-view__sidebar-node-table-view {
  width: 100%;

  table {
    svg {
      cursor: pointer;
    }
  }
}
</style>
