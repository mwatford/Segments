<template>
  <header :class="['col', 'commonHeader', { 'commonHeader--large': large }]">
    <div>
      <h1>{{ main || "asdasdasdasd" }}</h1>
      <h3>{{ subheader || "asdasdas" }}</h3>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    main: {
      type: String
    },
    subheader: {
      type: String
    },
    large: {
      type: Boolean,
      required: false,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
.commonHeader {
  font-size: 39px;
  text-align: right;
  color: #fff;
  align-items: flex-start;
  padding-left: 280px;
  font-family: futura-pt, sans-serif;
  user-select: none;

  &--large {
    font-size: 52.5px;
  }

  h1 {
    font-size: 2em;
  }
  h3 {
    font-size: 1.077em;
  }
  // h3 {
  //   font-size: 42px;
  // }
}
</style>
