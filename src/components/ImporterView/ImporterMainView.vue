<template>
  <div
    v-if="schema"
    ref="wrapper"
    class="import-view__wrapper"
  >
    <div
      v-show="filesLength === 0"
      class="container p-5"
    >
      <importer-view-drop-zone
        ref="dropzone"
        @files-selected="handleFilesSelected"
        @load-bundled-dataset="loadBundledDataset"
      />
    </div>
    <div
      v-if="filesLength > 0"
      class="main-wrapper"
    >
      <importer-view-sidebar
        :files="files"
        @table-type-change="handleTableTypeChange"
        @add-files="addFiles"
        @drop-files="handleFilesSelected"
        @remove-file="removeFile"
        @preview-file="previewFile"
        @set-csv-format="openCsvFormatModal"
      />
      <div class="outer-wrapper">
        <button
          class="btn btn-success"
          @click="startImport"
        >
          <i class="fa-solid fa-upload" />
          Start Import
        </button>
        <div class=" table-wrapper">
          <importer-view-node-tables
            :files="nodeFiles"
            :schema="schema"
            @expand="handleExpand"
            @set-csv-format="openCsvFormatModal"
            @set-table-is-new="setTableIsNew"
            @set-table-name="setTableName"
            @set-primary-key="setPrimaryKey"
            @set-column-user-defined-name="setColumnUserDefinedName"
            @set-column-type="setColumnType"
            @set-column-ignore="setColumnIgnore"
          />
          <importer-view-rel-tables
            :files="relFiles"
            :schema="schema"
            :node-files="nodeFiles"
            @expand="handleExpand"
            @set-csv-format="openCsvFormatModal"
            @set-table-is-new="setTableIsNew"
            @set-table-name="setTableName"
            @set-from-table="setFromTable"
            @set-to-table="setToTable"
            @set-from-key="setFromKey"
            @set-to-key="setToKey"
            @set-column-user-defined-name="setColumnUserDefinedName"
            @set-column-type="setColumnType"
            @set-column-ignore="setColumnIgnore"
          />
        </div>
      </div>
    </div>
    <importer-view-processing-modal
      ref="fileProcessingModal"
      :items="processingFiles"
      processing-title="Processing Files..."
      done-title="Files Processed"
      @close="clearProcessingFiles"
    />
    <importer-view-processing-modal
      ref="importProcessingModal"
      :items="importProgress"
      :number-of-warnings="currentJob ? currentJob.numberOfWarnings : 0"
      :warnings="currentJob ? currentJob.warnings : []"
      processing-title="Importing Files..."
      done-title="Steps Processed"
      @close="finishImport"
    />
    <importer-view-csv-format-modal
      ref="csvFormatModal"
      @save="updateCsvFormat"
    />
    <importer-view-preview ref="previewModal" />
    <importer-view-validation-modal
      ref="validationModal"
      @close="abortCurrentJob"
      @execute="executeCurrentJob"
    />
    <importer-view-error-modal
      ref="errorModal"
      :error-message="errorMessage"
    />
  </div>
</template>

<script lang="js">
import Axios from "@/utils/AxiosWrapper";
import { v4 as uuidv4 } from 'uuid';
import { mapStores } from 'pinia';
import { useModeStore } from '../../store/ModeStore';
import { DATA_TYPES, IMPORT_ACTIONS, JOB_STATUS } from '../../utils/Constants';
import DuckDB from '../../utils/DuckDB';
import Kuzu from '../../utils/KuzuWasm';
import ImporterViewDropZone from './ImporterViewDropZone.vue';
import ImporterViewSidebar from './ImporterViewSidebar.vue';
import ImporterViewNodeTables from './ImporterViewNodeTables.vue';
import ImporterViewRelTables from './ImporterViewRelTables.vue';
import ImporterViewProcessingModal from './ImporterViewProcessingModal.vue';
import ImporterViewCsvFormatModal from './ImporterViewCsvFormatModal.vue';
import ImporterViewPreview from './ImporterViewPreview.vue';
import ImporterViewValidationModal from './ImporterViewValidationModal.vue';
import ImporterViewErrorModal from './ImporterViewErrorModal.vue';
import DataImportUtils from '@/utils/DataImport';
import ddl from '@/utils/DataDefinitionLanguage';

export default {
  name: "ImporterMainView",
  components: {
    ImporterViewDropZone,
    ImporterViewSidebar,
    ImporterViewNodeTables,
    ImporterViewRelTables,
    ImporterViewProcessingModal,
    ImporterViewCsvFormatModal,
    ImporterViewPreview,
    ImporterViewValidationModal,
    ImporterViewErrorModal,
  },
  props: {
    schema: {
      type: Object,
      default: null,
    },
    navbarHeight: {
      type: Number,
      default: 0,
    },
  },
  emits: ["reloadSchema", "loadBundledDataset"],
  data: () => ({
    files: {},
    processingFiles: [],
    currentJob: null,
    errorMessage: "",
  }),
  computed: {
    isSchemaEmpty() {
      return this.schema.nodeTables.length === 0 && this.schema.relTables.length === 0;
    },

    filesLength() {
      return Object.values(this.files).length;
    },

    dataTypes() {
      return Object.keys(DATA_TYPES);
    },

    shouldShowFilesTable() {
      if (this.filesLength === 0) {
        return false;
      }
      for (const key in this.files) {
        if (this.files[key].type === 'none') {
          return true;
        }
      }
      return false;
    },

    nodeFiles() {
      const nodeFiles = {};
      for (const key in this.files) {
        if (this.files[key].type === 'node') {
          nodeFiles[key] = this.files[key];
        }
      }
      return nodeFiles;
    },

    relFiles() {
      const relFiles = {};
      for (const key in this.files) {
        if (this.files[key].type === 'rel') {
          relFiles[key] = this.files[key];
        }
      }
      return relFiles;
    },
    numberOfRelFiles() {
      return Object.keys(this.relFiles).length;
    },
    importProgress() {
      if (!this.currentJob || !this.currentJob.plan) {
        return [];
      }
      return this.currentJob.plan.map((job) => {
        return {
          status: job.status,
          name: `${job.action}\t${job.displayName}`,
          error: job.error,
        }
      });

    },
    ...mapStores(useModeStore),
  },
  watch: {
  },
  mounted() {
  },
  methods: {
    addFiles() {
      this.$refs.dropzone.selectFiles();
    },

    removeFile(key) {
      const file = this.files[key];
      delete this.files[key];
      if (file.type === 'node') {
        for (const key in this.files) {
          if (this.files[key].type === 'rel') {
            if (this.files[key].from && this.files[key].from.key === file.id) {
              this.files[key].from = null;
            }
            if (this.files[key].to && this.files[key].to.key === file.id) {
              this.files[key].to = null;
            }
          }
        }
      }
    },

    escapeName(name) {
      let nameSplit = name.split('.');
      name = nameSplit.join('_');
      nameSplit = name.split('-');
      name = nameSplit.join('_');
      nameSplit = name.split(' ');
      name = nameSplit.join('_');
      nameSplit = name.split('"');
      name = nameSplit.join('_');
      nameSplit = name.split("'");
      name = nameSplit.join('_');
      return name;
    },

    async handleFilesSelected(files) {
      this.$refs.fileProcessingModal.showModal();
      const filesHash = {};
      this.processingFiles = [];
      for (let i = 0; i < files.length; ++i) {
        const file = files[i];
        const id = uuidv4().toString();
        filesHash[id] = {
          id,
          file,
          type: 'none',
          header: 0,
          expanded: false,
        }
        this.processingFiles.push({
          id,
          status: JOB_STATUS.PROCESSING,
          name: file.name,
        });
      }
      for (const key in filesHash) {
        const processingFile = this.processingFiles.find(f => f.id === key);
        const currentFile = filesHash[key];
        const extension = (
          currentFile.file.name.toLowerCase().endsWith('.csv') ||
          currentFile.file.name.toLowerCase().endsWith('.txt') ||
          currentFile.file.name.toLowerCase().endsWith('.tsv')
        ) ? 'csv' :
          currentFile.file.name.toLowerCase().endsWith('.parquet') ? 'parquet' :
            'unsupported';
        currentFile.extension = extension;
        if (extension === 'unsupported') {
          processingFile.status = JOB_STATUS.ERROR;
          processingFile.error = 'Unsupported file format';
          delete filesHash[key];
          continue;
        }
        let detectedFormat;
        try {
          await DuckDB.registerFile(key, currentFile.file, extension);
          detectedFormat = extension === 'parquet' ?
            (await DuckDB.sniffParquetFile(key, currentFile.file)) :
            (await DuckDB.sniffCsvFile(key, currentFile.file));
        } catch (error) {
          currentFile.status = JOB_STATUS.ERROR;
          currentFile.error = error.message;
          continue;
        }
        currentFile.detectedFormat = detectedFormat;
        let tableNameSplit = currentFile.file.name.split('.');
        tableNameSplit.pop();
        currentFile.tableName = tableNameSplit.join('.');
        currentFile.tableName = this.escapeName(currentFile.tableName);
        currentFile.format = JSON.parse(JSON.stringify(detectedFormat));
        if (extension === 'csv') {
          currentFile.format.ListStart = '[';
          currentFile.format.ListEnd = ']';
          currentFile.format.Parallelism = true;
          currentFile.format.IgnoreErrors = true;
        }
        currentFile.format.Columns.forEach((c, i) => {
          c.type = DuckDB.convertDuckDBTypeToKuzuType(c.type);
          c.userDefinedName = this.escapeName(c.name);
          c.name = currentFile.format.HasHeader ? c.name : `column${i}`;
          c.isPrimaryKey = false;
        });
        processingFile.status = JOB_STATUS.SUCCESS;
      }
      this.files = { ...this.files, ...filesHash };
    },

    clearProcessingFiles() {
      this.processingFiles = [];
    },

    handleTableTypeChange(fileKey, fileType) {
      const file = this.files[fileKey];
      file.type = fileType;
      file.isNew = true;
      delete file.from;
      delete file.to;
      file.format.Columns.forEach(c => {
        delete c.isPrimaryKey;
        delete c.isFromKey;
        delete c.isToKey;
      });
      if (fileType === 'node') {
        if (file.format.Columns[0]) {
          file.format.Columns[0].isPrimaryKey = true;
        }
      }
      if (fileType === 'rel') {
        file.from = null;
        file.to = null;
        if (file.format.Columns[0]) {
          file.format.Columns[0].isFromKey = true;
        }
        if (file.format.Columns[1]) {
          file.format.Columns[1].isToKey = true;
        }
      }
    },

    handleExpand(key) {
      const file = this.files[key];
      file.expanded = !file.expanded;
    },

    openCsvFormatModal(file) {
      const key = file.id;
      const delimiter = file.format.Delimiter;
      const quote = file.format.Quote;
      const escape = file.format.Escape;
      const hasHeader = file.format.HasHeader ? 'true' : 'false';
      const listBegin = file.format.ListStart;
      const listEnd = file.format.ListEnd;
      const parallelism = file.format.Parallelism ? 'true' : 'false';
      const ignoreErrors = file.format.IgnoreErrors ? 'true' : 'false';
      this.$refs.csvFormatModal.setFormat(
        key, delimiter, quote, escape, hasHeader, listBegin, listEnd, parallelism, ignoreErrors
      );
      this.$refs.csvFormatModal.showModal();
    },

    async updateCsvFormat(key, format) {
      const file = this.files[key];
      const delimiter = format.delimiter;
      const quote = format.quote;
      const escape = format.escape;
      const hasHeader = format.hasHeader;
      const listBegin = format.listBegin;
      const listEnd = format.listEnd;
      const parallelism = format.parallelism;
      const ignoreErrors = format.ignoreErrors;

      let columns;
      try {
        columns = await DuckDB.getCsvHeaderWithCustomSettings(key, delimiter, quote, escape, hasHeader);
      } catch (error) {
        this.errorMessage = `Could not detect the columns with the given CSV format settings for file ${file.file.name}. Please check the settings and try again.`;
        this.$refs.errorModal.showModal();
        return;
      }
      columns.forEach((c, i) => {
        c.type = DuckDB.convertDuckDBTypeToKuzuType(c.type);
        c.name = hasHeader ? c.name : `column${i}`;
        c.userDefinedName = this.escapeName(c.name);
      });
      file.format.Delimiter = delimiter;
      file.format.Quote = quote;
      file.format.Escape = escape;
      file.format.HasHeader = hasHeader;
      file.format.ListStart = listBegin;
      file.format.ListEnd = listEnd;
      file.format.Parallelism = parallelism;
      file.format.Columns = columns;
      file.format.IgnoreErrors = ignoreErrors;
      file.detectedFormat.Columns = columns;
      if (file.type === 'node') {
        if (file.format.Columns[0]) {
          file.format.Columns[0].isPrimaryKey = true;
        }
      }
      if (file.type === 'rel') {
        if (file.format.Columns[0]) {
          file.format.Columns[0].isFromKey = true;
        }
        if (file.format.Columns[1]) {
          file.format.Columns[1].isToKey = true;
        }
      }
    },

    setTableName(fileKey, tableName) {
      this.files[fileKey].tableName = tableName;
    },

    setColumnUserDefinedName(fileKey, columnIndex, userDefinedName) {
      const file = this.files[fileKey];
      const column = file.format.Columns[columnIndex];
      column.userDefinedName = userDefinedName;
    },

    setColumnType(fileKey, columnIndex, type) {
      const file = this.files[fileKey];
      const column = file.format.Columns[columnIndex];
      column.type = type;
    },

    setTableIsNew(fileKey, isNew) {
      const file = this.files[fileKey];
      file.isNew = isNew;
    },

    setPrimaryKey(fileKey, columnIndex) {
      const file = this.files[fileKey];
      file.format.Columns.forEach((c) => {
        delete c.isPrimaryKey;
      });
      const column = file.format.Columns[columnIndex];
      column.isPrimaryKey = true;
    },

    setFromTable(fileKey, fromTable) {
      if (!fromTable.key) {
        fromTable = null;
      }
      else {
        fromTable = { ...fromTable };
        delete fromTable.text;
      }
      const file = this.files[fileKey];
      file.from = fromTable;
    },

    setToTable(fileKey, toTable) {
      if (!toTable.key) {
        toTable = null;
      }
      else {
        toTable = { ...toTable };
        delete toTable.text;
      }
      const file = this.files[fileKey];
      file.to = toTable;
    },

    setFromKey(fileKey, columnIndex, checked) {
      const file = this.files[fileKey];
      file.format.Columns.forEach((c) => {
        delete c.isFromKey;
      });
      if (checked) {
        file.format.Columns[columnIndex].isFromKey = true;
        file.format.Columns[columnIndex].isToKey = false;
        delete file.format.Columns[columnIndex].ignore;
      }
    },

    setToKey(fileKey, columnIndex, checked) {
      const file = this.files[fileKey];
      file.format.Columns.forEach((c) => {
        delete c.isToKey;
      });
      if (checked) {
        file.format.Columns[columnIndex].isToKey = true;
        file.format.Columns[columnIndex].isFromKey = false;
        delete file.format.Columns[columnIndex].ignore;
      }
    },

    setColumnIgnore(fileKey, columnIndex, ignore) {
      const file = this.files[fileKey];
      delete file.format.Columns[columnIndex].ignore;
      if (ignore) {
        file.format.Columns[columnIndex].ignore = true;
      }
    },

    async previewFile(key) {
      const file = this.files[key];
      const result = file.extension === 'csv' ?
        await DuckDB.loadCsvFile(key, file.format.Delimiter, file.format.Quote, file.format.Escape, file.format.HasHeader) :
        await DuckDB.loadParquetFile(key);
      const resultArray = result.toArray().map(row => row.toArray());
      this.$refs.previewModal.preview(resultArray, file.format.Columns.map(c => {
        return c.isFromKey ? 'From' :
          c.isToKey ? 'To' : c.userDefinedName;
      }));
    },

    getImportSummary() {
      const summary = [];
      for (let key in this.files) {
        const rawFile = this.files[key];
        if (rawFile.type === 'none') {
          continue;
        }
        const file = {
          id: rawFile.id,
          name: rawFile.file.name,
          extension: rawFile.extension,
          isNewTable: rawFile.isNew,
          type: rawFile.type,
          columns: [],
        };
        let foundMatch = null;
        if (rawFile.isNew) {
          file.tableName = rawFile.tableName;
          if (rawFile.type === 'rel') {
            file.from = rawFile.from;
            file.to = rawFile.to;
          }
        }
        else {
          if (rawFile.type === 'node') {
            foundMatch = this.schema.nodeTables.find(t => t.name === rawFile.tableName);
            file.tableName = foundMatch ? rawFile.tableName : null;
          }
          if (rawFile.type === 'rel') {
            foundMatch = this.schema.relTables.find(t => t.name === rawFile.tableName);
            file.tableName = foundMatch ? rawFile.tableName : null;
          }
        }
        for (let rawColumn of rawFile.format.Columns) {
          const column = {
            rawName: rawColumn.name,
          };
          if (rawColumn.ignore) {
            column.ignore = true;
          }
          if (rawFile.isNew) {
            column.name = rawColumn.userDefinedName;
            column.type = rawColumn.type;
            if (rawColumn.isPrimaryKey) {
              column.isPrimaryKey = true;
            }
          }
          else {
            const matchedProperty = foundMatch ?
              foundMatch.properties.find(p => p.name.toLowerCase() === rawColumn.userDefinedName.toLowerCase()) :
              null;
            column.name = matchedProperty ? matchedProperty.name : null;
          }
          if (rawColumn.isFromKey) {
            column.isFromKey = true;
            column.name = 'from';
          }
          if (rawColumn.isToKey) {
            column.isToKey = true;
            column.name = 'to';
          }
          file.columns.push(column);
        }
        if (file.extension === 'csv') {
          file.csvFormat = {
            delimiter: rawFile.format.Delimiter,
            quote: rawFile.format.Quote,
            escape: rawFile.format.Escape,
            hasHeader: rawFile.format.HasHeader,
            listBegin: rawFile.format.ListStart,
            listEnd: rawFile.format.ListEnd,
            parallelism: rawFile.format.Parallelism,
            ignoreErrors: rawFile.format.IgnoreErrors,
          }
        }
        summary.push(file);
      }
      return {
        id: uuidv4().toString(),
        config: summary,
      }
    },

    async getImportPlanFromWasm(summary) {
      const schema = await Kuzu.getSchema();
      const config = summary.config;
      const { success, errors } = DataImportUtils.validateImport(config, schema);
      if (!success) {
        return { success, errors };
      }
      const plan = DataImportUtils.createImportPlan(config, null, schema, ddl);
      return { success: true, plan, jobId: summary.id };
    },

    async startImport() {
      this.$refs.validationModal.showModal();
      this.$refs.validationModal.setState(true, [], []);
      const summary = this.getImportSummary();
      if (this.modeStore.isWasm) {
        try {
          const { success, plan, errors } = await this.getImportPlanFromWasm(summary);
          if (!success) {
            this.$refs.validationModal.setState(false, errors, []);
            return;
          }
          this.currentJob = { plan, jobId: summary.id, };
          this.$refs.validationModal.setState(false, [], plan);
          return;
        } catch (error) {
          console.error(error);
          this.$refs.validationModal.setState(false, [error.message], []);
          return;
        }
      }
      const url = `/api/import/${summary.id}`;
      try {
        const res = await Axios.post(url, summary);
        const plan = res.data.plan;
        this.currentJob = { plan, jobId: res.data.jobId, };
        this.$refs.validationModal.setState(false, [], plan);
      } catch (error) {
        const res = error.response;
        if (res && res.data && res.data.errors) {
          this.$refs.validationModal.setState(false, res.data.errors, []);
        }
        else {
          this.$refs.validationModal.setState(false, [error.message], []);
          console.error(error);
        }
      }
    },

    abortCurrentJob() {
      this.$refs.validationModal.setState(false, [], []);
      if (!this.modeStore.isWasm) {
        this.deleteCurrentJob();
      }
    },

    async deleteCurrentJob() {
      if (!this.currentJob) {
        return;
      }
      if (this.modeStore.isWasm) {
        await this.deleteCurrentJobFromWasm();
      }
      const jobId = this.currentJob.jobId;
      const api = `/api/import/${jobId}`;
      try {
        await Axios.delete(api);
      } catch (error) {
        console.error(error);
      }
    },

    async deleteCurrentJobFromWasm() {
      const FS = Kuzu.getFS();
      const plan = this.currentJob.plan.filter(j => j.action === IMPORT_ACTIONS.UPLOAD);
      for (let i = 0; i < plan.length; ++i) {
        const job = plan[i];
        const virtualFileName = job.fileName;
        try {
          await FS.unlink(virtualFileName);
        } catch (error) {
          console.error(error);
        }
      }
    },

    async executeCurrentJob() {
      this.$refs.importProcessingModal.showModal();
      await this.processUploads();
      if (!this.modeStore.isWasm) {
        await this.startJobExecution();
        this.pollJobStatus();
      } else {
        await this.executeImportWasm();
      }
    },

    async executeImportWasm() {
      const plan = this.currentJob.plan.filter(j => j.action !== IMPORT_ACTIONS.UPLOAD);
      const db = await Kuzu.getDb();
      const conn = new Kuzu.kuzu.Connection(db);
      try {
        await conn.query("CALL clear_warnings();");
      } catch (error) {
        console.error(error);
      }
      for (let i = 0; i < plan.length; ++i) {
        const job = plan[i];
        job.status = JOB_STATUS.PROCESSING;
        const cypher = job.cypher;
        try {
          await conn.query(cypher);
          job.status = JOB_STATUS.SUCCESS;
        } catch (error) {
          console.error(error);
          job.status = JOB_STATUS.ERROR;
          job.error = error.message;
          for (let j = i + 1; j < plan.length; ++j) {
            plan[j].status = JOB_STATUS.ERROR;
            plan[j].error = 'Previous step failed';
          }
          await this.deleteCurrentJobFromWasm();
          break;
        }
      }
      try {
        const numberOfWarningsQueryResult = await conn.query("CALL SHOW_WARNINGS() RETURN COUNT(*) AS count;");
        const numberOfWarnings = (await numberOfWarningsQueryResult.getNext())[0];
        this.currentJob.numberOfWarnings = numberOfWarnings;
        if (numberOfWarnings > 0) {
          const fileNameHash = {};
          for (let i = 0; i < this.currentJob.plan.length; ++i) {
            const job = this.currentJob.plan[i];
            if (job.action === IMPORT_ACTIONS.UPLOAD) {
              fileNameHash[job.fileName] = job.displayName;
            }
          }
          const warningsQueryResult = await conn.query("CALL SHOW_WARNINGS() RETURN * LIMIT 100;");
          const warnings = await warningsQueryResult.getAllObjects();
          this.currentJob.warnings = warnings.map(warning => {
            const message = warning.message;
            const lineNumber = warning.line_number;
            const fileNameOnDisk = warning.file_path.replace("/", "");
            const fileName = fileNameHash[fileNameOnDisk] ? fileNameHash[fileNameOnDisk] : fileNameOnDisk;
            return {
              message,
              lineNumber,
              fileName,
            };
          })
        }
      } catch (error) {
        console.error(error);
      }
      await conn.close();
    },

    async startJobExecution() {
      const api = `/api/import/${this.currentJob.jobId}/exec`;
      try {
        await Axios.post(api);
      } catch (error) {
        console.error(error);
        this.currentJob.plan.forEach(j => {
          if (!j.action === IMPORT_ACTIONS.UPLOAD) {
            j.status = JOB_STATUS.ERROR;
            j.error = error.message;
          }
        });
      }
    },

    async processUploads() {
      const uploadJobs = this.currentJob.plan.filter(j => j.action === IMPORT_ACTIONS.UPLOAD);
      for (let i = 0; i < uploadJobs.length; ++i) {
        const job = uploadJobs[i];
        job.status = JOB_STATUS.PROCESSING;
        const virtualFileName = job.fileName;
        const file = Object.values(this.files).find(
          (f) => DuckDB.getFileName(f.id, f.extension) === virtualFileName
        );

        try {
          if (!this.modeStore.isWasm) {
            const api = `/api/import/${this.currentJob.jobId}/${virtualFileName}`;
            const formData = new FormData();
            formData.append('file', file.file);
            await Axios.post(api, formData, {
              headers: {
                'Content-Type': 'multipart/form-data',
              }
            });
          } else {
            const FS = Kuzu.getFS();
            const fileData = await file.file.arrayBuffer();
            await FS.writeFile(virtualFileName, new Uint8Array(fileData));
          }
          job.status = JOB_STATUS.SUCCESS;
        } catch (error) {
          console.error(error);
          job.status = JOB_STATUS.ERROR;
          job.error = error.message;
          const currentUploadJobIndex = this.currentJob.plan.findIndex(j => j.fileName === virtualFileName);
          for (let j = currentUploadJobIndex + 1; j < this.currentJob.plan.length; ++j) {
            this.currentJob.plan[j].status = JOB_STATUS.ERROR;
            this.currentJob.plan[j].error = 'Previous step failed';
          }
          break;
        }
      }
    },

    pollJobStatus() {
      const interval = window.setInterval(async () => {
        try {
          const res = await Axios.get(`/api/import/${this.currentJob.jobId}`);
          const isAllDone = res.data.plan.every(j => j.status !== JOB_STATUS.PROCESSING && j.status !== JOB_STATUS.PENDING);
          this.currentJob.plan = res.data.plan;
          this.currentJob.numberOfWarnings = res.data.numberOfWarnings;
          this.currentJob.warnings = res.data.warnings;
          if (isAllDone) {
            window.clearInterval(interval);
          }
        } catch (error) {
          console.error(error);
          window.clearInterval(interval);
        }
      }, 500);
    },

    async finishImport() {
      const isAllSuccess = this.currentJob.plan.every(j => j.status === JOB_STATUS.SUCCESS);
      await this.deleteCurrentJob();
      this.currentJob = null;
      this.$emit('reloadSchema');
      if (isAllSuccess) {
        this.files = {};
      }
    },

    loadBundledDataset() {
      this.$emit('loadBundledDataset');
    },
  },
}
</script>

<style lang="scss" scoped>
.import-view__wrapper {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.add-more-files__btn {
  width: 100%;
  margin-bottom: 20px;
}

.main-wrapper {
  display: flex;
  flex-direction: row;
  height: 100%;
}

.outer-wrapper {
  flex: 1;
  overflow: scroll;
  display: flex;
  flex-direction: column;

  .table-wrapper {
    overflow: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  .btn.btn-success {
    width: 100%;
    margin-bottom: 20px;
  }

  padding: 16px;
}
</style>
