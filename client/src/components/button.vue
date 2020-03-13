<template>
  <button>
    <chevron-left></chevron-left>
    <slot></slot>
  </button>
</template>

<script>
import chevronLeft from "./chevron-left.vue";

export default {
  components: {
    "chevron-left": chevronLeft
  },
  props: ["icon"]
};
</script>

<style lang="scss" scoped>
button {
  box-sizing: border-box;
  font-family: futura-pt, sans-serif;
  background: none;
  border: none;
  border-radius: 25px;
  height: 50px;
  min-width: 150px;
  padding: 0 15px;
  background: #095590;
  color: #fff;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
