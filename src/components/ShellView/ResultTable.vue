<template>
  <div
    class="result-table__wrapper"
    :style="{ height: containerHeight }"
  >
    <div
      v-if="totalPages > 1"
      class="result-table__pagination__wrapper"
    >
      <nav>
        <ul class="pagination">
          <li :class="['page-item', { disabled: isPrevDisabled }]">
            <a
              class="page-link"
              href="#"
              @click="page -= 1"
            >
              <span>&laquo;</span>
            </a>
          </li>
          <li
            v-for="currPage in pageList"
            :key="currPage"
            :class="['page-item', { active: currPage === page }]"
          >
            <a
              v-if="currPage > 0"
              class="page-link"
              href="#"
              @click="page = currPage"
            >
              {{ currPage }}
            </a>
            <span
              v-else
              class="page-link"
            >...</span>
          </li>
          <li :class="['page-item', { disabled: isNextDisabled }]">
            <a
              class="page-link"
              href="#"
              @click="page += 1"
            >
              <span>&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>

    <div class="result-table__table__wrapper">
      <table class="table table-hover">
        <thead class="fixed-top">
          <tr>
            <th
              v-for="header in tableHeaders"
              :key="header.text"
            >
              {{ header.text }}
              <span class="badge bg-[var(--bs-body-accent)]">{{ header.type }}</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(row, i) in rows"
            :key="i"
          >
            <td
              v-for="(cell, j) in row"
              :key="j"
              :style="{ 'white-space': 'pre-wrap' }"
            >
              <ul
                v-if="Array.isArray(cell)"
                class="list-group"
              >
                <li
                  v-for="(item, k) in cell"
                  :key="k"
                  class="list-group-item"
                >
                  <b>{{ item.name }}:</b> {{ item.value }}
                </li>
              </ul>
              <div
                v-else-if="isColumnRecursiveRel(j)"
                class="result-table__recursive-rel__wrapper"
              >
                <div
                  v-for="(subcolumn, subcolumnId) in cell"
                  :key="subcolumnId"
                >
                  <div
                    v-for="(item, k) in subcolumn"
                    :key="k"
                  >
                    <ul class="list-group">
                      <li
                        v-for="(field, m) in item"
                        :key="m"
                        class="list-group-item"
                      >
                        <b>{{ m === 0 ? field.value : field.name + ":" }}</b>
                        <span v-if="m > 0">{{ field.value }}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <span v-else>{{ cell }}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="js">
import ValueFormatter from "../../utils/ValueFormatter";
import { UI_SIZE, DATA_TYPES } from "../../utils/Constants";
import { useSettingsStore } from "../../store/SettingsStore";
import { mapStores } from 'pinia'
export default {
  name: "ResultTable",
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
      default: "auto"
    },
  },
  data: () => ({
    page: 1,
    maxLength: 8,
    rows: [],
    tableHeaders: [],
    tableWidth: 0,
  }),
  computed: {
    totalPages() {
      const numRows = this.queryResult ? this.queryResult.rows.length : 0;
      return Math.ceil(numRows / this.itemsPerPage);
    },
    pageList() {
      const page = this.page;
      const totalPages = this.totalPages;
      const maxLength = this.maxLength;
      const range = (start, end) => {
        return Array.from(Array(end - start + 1), (_, i) => i + start);
      }

      const sideWidth = maxLength < 9 ? 1 : 2;
      const leftWidth = (maxLength - sideWidth * 2 - 3) >> 1;
      const rightWidth = (maxLength - sideWidth * 2 - 2) >> 1;
      if (totalPages <= maxLength) {
        return range(1, totalPages);
      }
      if (page <= maxLength - sideWidth - 1 - rightWidth) {
        return range(1, maxLength - sideWidth - 1)
          .concat(0, range(totalPages - sideWidth + 1, totalPages));
      }
      if (page >= totalPages - sideWidth - 1 - rightWidth) {
        return range(1, sideWidth)
          .concat(0, range(totalPages - sideWidth - 1 - rightWidth - leftWidth, totalPages));
      }
      return range(1, sideWidth)
        .concat(0, range(page - leftWidth, page + rightWidth),
          0, range(totalPages - sideWidth + 1, totalPages));
    },
    isPrevDisabled() {
      return this.page === 1;
    },
    isNextDisabled() {
      return this.page === this.totalPages;
    },
    itemsPerPage() {
      return this.settingsStore && this.settingsStore.tableView ? this.settingsStore.tableView.rowsPerPage : 10;
    },
    ...mapStores(useSettingsStore),
  },
  watch: {
    page() {
      this.renderTable();
    },
    itemsPerPage(newVal, oldVal) {
      if (newVal > oldVal) {
        const numberOfPagesNew = Math.ceil(this.queryResult.rows.length / newVal);
        if (this.page > numberOfPagesNew) {
          this.page = numberOfPagesNew;
        }
      }
      this.renderTable();
    }
  },
  mounted() {
    this.computeTableWidth();
    window.addEventListener("resize", this.computeTableWidth);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.computeTableWidth);
  },
  methods: {
    isColumnRecursiveRel(columnIndex) {
      return this.tableHeaders[columnIndex].type === DATA_TYPES.RECURSIVE_REL;
    },
    renderTable() {
      if (!this.queryResult) {
        return;
      }
      this.tableHeaders = [];
      this.rows = [];
      if (this.queryResult.rows.length === 0) {
        return;
      }
      const tableFields = Object.keys(this.queryResult.rows[0]);
      const tableTypes = this.queryResult.dataTypes;
      tableFields.forEach((field) => {
        this.tableHeaders.push({
          text: field,
          type: tableTypes[field],
        });
      });
      const numRows = this.queryResult.rows.length;
      const start = (this.page - 1) * this.itemsPerPage;
      const end = Math.min(start + this.itemsPerPage, numRows);
      const rowsForPage = this.queryResult.rows.slice(start, end);
      rowsForPage.forEach((row) => {
        this.rows.push([]);
        for (let key in row) {
          if (row[key] === null || row[key] === undefined) {
            this.rows[this.rows.length - 1].push('NULL');
          }
          else if (tableTypes[key] === DATA_TYPES.RECURSIVE_REL) {
            // Value is a recursive relationship
            this.rows[this.rows.length - 1].push(ValueFormatter.beautifyRecursiveRelValue(row[key], this.schema));
          }
          else if (tableTypes[key] === DATA_TYPES.NODE || tableTypes[key] === DATA_TYPES.REL) {
            // Value is a node or relationship
            this.rows[this.rows.length - 1].push(ValueFormatter.filterAndBeautifyProperties(row[key], this.schema));
          }
          else {
            // Value is a primitive type
            this.rows[this.rows.length - 1].push(ValueFormatter.beautifyValue(row[key], tableTypes[key]));
          }
        }
      });
    },

    computeTableWidth() {
      let mainContainerWidth = document.documentElement.clientWidth;
      mainContainerWidth -= UI_SIZE.DEFAULT_MARGIN * 2; 
      mainContainerWidth -= UI_SIZE.SHELL_TOOL_BAR_WIDTH; 

      this.tableWidth = mainContainerWidth;

      return mainContainerWidth;
    },
  },
};
</script>

<style lang="scss" scoped>
.result-table__wrapper {
  /* Width is set by style binding from tableWidth */
  width: v-bind(tableWidth)px; /* Use v-bind to link to the data property */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.result-table__pagination__wrapper {
  display: flex;
  justify-content: center;
  align-items: center;

  nav {
    padding-top: 8px;
    padding-bottom: 8px;

    ul {
      margin-bottom: 0;
    }
  }
}

.result-table__table__wrapper {
  flex: 1;
  overflow-y: scroll;
  overflow-x: auto; 
  border-top: 1px solid (var(--bs-body-inactive));
  border-bottom: 1px solid (var(--bs-body-inactive));
  border-radius: 10px;

  table {
    width: 100%; 
    thead {
      position: sticky;
      border: 0;
      top: 0;

      th {
        background-color: (var(--bs-body-bg-secondary));
        border-bottom: 0;
      }
    }

    tbody {
      tr {
        border-style: none;
      }
    }

    margin-bottom: 0;

    .result-table__recursive-rel__wrapper {
      display: flex;

      > div {
        flex: 1;

        &:not(:last-child) {
          margin-right: 4px;
        }
      }
    }
  }
}
</style>
