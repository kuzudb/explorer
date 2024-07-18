<template>
  <div class="row">
    <div class="col-md-3" />
    <div class="col-md-6 mt-5">
      <div class="bg-white p-5 rounded shadow-sm border">
        <div class="dropzone d-block">
          <label
            ref="dropzone"
            for="files"
            class="dropzone-container"
          >
            <div class="file-icon"><i class="fa-solid fa-file-circle-plus text-primary" /></div>
            <div class="text-center pt-3 px-5">
              <p class="w-80 h5 text-dark fw-bold">Drag your CSV or Parquet files here to get started.
              </p>
              <div class="hr-sect">or</div>
              <button
                class="btn btn-primary mb-2"
                @click="selectFiles"
              >Browse Files</button>
            </div>
          </label>
          <input
            ref="fileInput"
            type="file"
            multiple
            class="file-input"
            @change.prevent="handleFilesSelected"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import Dropzone from "dropzone";

export default {
  name: "ImporterViewDropZone",
  emits: ["filesSelected"],
  data() {
    return {
      dropzone: null,
    };
  },

  mounted() {
    this.dropzone = new Dropzone(this.$refs.dropzone, {
      url: "/",
      autoProcessQueue: false,
      uploadMultiple: true,
      disablePreviews: true,
    });
    this.dropzone.on("drop", (e) => {
      e.preventDefault();
      const files = e.dataTransfer.files;
      this.$emit("filesSelected", files);
    });
  },

  beforeUnmount() {
    this.dropzone.destroy();
  },

  methods: {
    selectFiles() {
      this.$refs.fileInput.click();
    },
    handleFilesSelected(e) {
      this.$emit("filesSelected", e.target.files);
    },
  },
};

</script>

<style lang="scss" scoped>
.dropzone {
  border: dashed 4px #ddd !important;
  background-color: #f2f6fc;
  border-radius: 15px;

  .dropzone-container {
    padding: 2rem 0;
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #8c96a8;
    z-index: 20;
  }

  .file-input {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    visibility: hidden;
    cursor: pointer;
  }

  .file-icon {
    font-size: 60px;
  }

  .hr-sect {
    display: flex;
    flex-basis: 100%;
    align-items: center;
    margin: 8px 0px;
  }

  .hr-sect:before,
  .hr-sect:after {
    content: "";
    flex-grow: 1;
    background: #ddd;
    height: 1px;
    font-size: 0px;
    line-height: 0px;
    margin: 0px 8px;
  }
}
</style>
