<template>
  <header class="header col">
    <h1>{{ main || "asdasdasdasd" }}</h1>
    <h3>{{ subheader || "asdasdas" }}</h3>
  </header>
</template>

<script>
export default {
  props: ["main", "subheader"]
};
</script>

<style lang="scss" scoped>
.header {
  align-items: flex-end;
  font-size: 39px;
  color: #fff;

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
