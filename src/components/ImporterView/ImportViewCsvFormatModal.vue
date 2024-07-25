<template>
  <div>
    <h5>Format</h5>
    <div class="input-group mb-3">
      <span class="input-group-text">Delimiter</span>
      <input
        v-model="file.format.Delimiter"
        type="text"
        class="form-control"
      >
      <span class="input-group-text">Quote</span>
      <input
        v-model="file.format.Quote"
        type="text"
        class="form-control"
      >

      <span class="input-group-text">Escape</span>
      <input
        v-model="file.format.Escape"
        type="text"
        class="form-control"
      >

      <span class="input-group-text">Header?</span>
      <select
        v-model="file.format.HasHeader"
        class="form-select"
      >
        <option value="true">
          Yes
        </option>
        <option value="false">
          No
        </option>
      </select>
    </div>
  </div>
</template>
