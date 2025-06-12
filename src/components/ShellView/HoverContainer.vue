<template>
  <div>
    <div
      v-show="tooltipVisible"
      class="result-graph__graph-tooltip"
      :style="{ left: tooltipX + 'px', top: tooltipY + 'px' }"
    >
      <div class="result-graph__tooltip-header">
        <span
          class="badge bg-primary"
          :style="{
            backgroundColor: `${getColor(hoveredLabel)} !important`,
            color: `${getTextColor(hoveredLabel)} !important`,
            textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
            fill: '#FFFFFF'
          }"
        >
          {{ hoveredLabel }}</span>
      </div>
      <p>{{ hoveredIsNode ? 'Node' : 'Rel' }}</p>
      <hr>
      <table class="table table-sm table-borderless">
        <tbody>
          <tr
            v-for="property in hoveredProperties"
            :key="property.name"
          >
            <th scope="row">
              {{ property.name }}
            </th>
            <td>{{ property.value }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="js">
import { useSettingsStore } from "../../store/SettingsStore";
import { mapStores } from 'pinia'
import ValueFormatter from "../../utils/ValueFormatter";

export default {
    props: {
        g6Graph: {
            type: Object,
            required: true
        },
        schema: {
            type: Object,
            required: true
        }
    },
    data: () => ({
        tooltipVisible: false,
        tooltipX: 0,
        tooltipY: 0,
        currentHoveredModel: null,
        hoveredLabel: "",
        hoveredProperties: [],
        hoveredIsNode: false,
        isCurrentNodeExpanded: false
    }), 
    computed: {
        ...mapStores(useSettingsStore)
    },
    methods: {
        getColor(label) {
            return this.settingsStore.colorForLabel(label);
        },
        getTextColor(label) {
            return "#ffffff";
        },
        
        handleHover(model, event) {
            const label = model.properties._label;
            this.hoveredLabel = label;
            this.hoveredProperties = ValueFormatter.filterAndBeautifyProperties(model.properties, this.schema);
            this.hoveredIsNode = !(model.properties._src && model.properties._dst);
            if (this.hoveredIsNode) {
                this.isCurrentNodeExpanded = this.isNeighborExpanded(model);
            }
            this.currentHoveredModel = model;
            this.showTooltip(model, event);
        },

        resetHover() {
            this.hoveredLabel = "";
            this.hoveredProperties = [];
            this.hoveredIsNode = false;
            this.currentHoveredModel = null;
            this.hideTooltip();
        },

        showTooltip(model, event) {
            const mousePos = this.g6Graph.getPointByClient(event.clientX, event.clientY);
            const point = this.g6Graph.getCanvasByPoint(mousePos.x, mousePos.y);
            this.tooltipX = point.x + 50;
            this.tooltipY = point.y + 20;
            this.tooltipVisible = true;
        },

        hideTooltip() {
            this.tooltipVisible = false;
            this.tooltipX = 0;
            this.tooltipY = 0;
        },

        updateTooltipPosition(event) {
            const mousePos = this.g6Graph.getPointByClient(event.clientX, event.clientY);
            const point = this.g6Graph.getCanvasByPoint(mousePos.x, mousePos.y);
            this.tooltipX = point.x + 10;
            this.tooltipY = point.y + 20;
        },

        isNeighborExpanded(model) {
            // This method should be implemented in ResultGraph and passed as a prop
            return false;
        }
    }
}


</script>

<style>
.result-graph__graph-tooltip {
  position: absolute;
  z-index: 1000;
  background-color: var(--bs-body-bg-secondary);
  border: 1px solid var(--bs-body-inactive);
  border-radius: 0.5rem;
  padding: 10px;
  pointer-events: none;
  max-width: 300px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--bs-body-color);

  .result-graph__tooltip-header {
    margin-bottom: 5px;
    .badge {
        font-size: 1em;
        padding: 0.4em 0.6em;
        color: #ffffff;
    }
  }

  p {
      font-size: 0.9em;
      margin-top: 0;
      margin-bottom: 5px;
      color: var(--bs-secondary-color);
  }

  hr {
      margin-top: 5px;
      margin-bottom: 5px;
      border-color: var(--bs-body-inactive);
  }

  table {
    max-width: 280px;
    margin-bottom: 0;
    table-layout: fixed;
    
    th,
    td {
      padding: 5px;
      border: none;
      color: var(--bs-body-color);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    th {
        font-weight: normal;
        padding-left: 10px;
        padding-right: 10px;
    }

    td {
        padding-right: 10px;
    }
  }
}

</style>
