<template>
  <div
    ref="wrapper"
    class="result-error__wrapper"
  >
    <div
      v-if="!isInfo"
      class="alert alert-danger"
      role="alert"
    >
      <div>
        <i class="fa-solid fa-circle-exclamation" />
        The evaluation of this cell failed with the following error:
        <br>
        <pre>{{ errorMessage }}</pre>
      </div>
    </div>

    <div
      v-if="isInfo"
      class="alert alert-info"
      role="alert"
    >
      <div>
        <i class="fa-solid fa-circle-info" />
        The evaluation of this cell succeeded with the following message:
        <br>
        <pre>{{ errorMessage }}</pre>
      </div>
    </div>
  </div>
</template>

<script lang="js">

export default {
  name: "ResultError",
  props: {
    errorMessage: {
      type: String,
      required: false,
      default: ""
    },
    isInfo: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data: () => ({

  }),
};
</script>

<style lang="scss" scoped>
.result-error__wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  div.alert {
    border-radius: 0;
    border: none;
    margin: 0;

    pre {
      margin-bottom: 0;
    }
  }
}
</style>
