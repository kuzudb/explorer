<template>
  <div class="result-error__wrapper" ref="wrapper">
    <div class="alert alert-danger" role="alert">
      <div>
        <i class="fa-solid fa-circle-exclamation"></i>
        The query has failed to execute with the following error:
        <br>
        <b>
          {{ errorMessage }}
        </b>
      </div>
    </div>
  </div>
</template>
    
<script lang="js">

export default {
  name: "ResultError",
  data: () => ({

  }),
  props: {
    errorMessage: {
      type: String,
      required: false,
      default: ""
    },
  },
};
</script>
    
<style lang="scss" scoped>
.result-error__wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  div.alert.alert-danger {
    border-radius: 0;
    border: none;
    margin: 0;
  }
}
</style>
    