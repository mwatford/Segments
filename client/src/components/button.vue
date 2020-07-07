<template>
  <button class="button">
    <chevron-left class="mobile--hide"></chevron-left>
    <slot name="text"></slot>
    <slot name="icon"></slot>
  </button>
</template>

<script>
import chevronLeft from "./chevron-left.vue";

export default {
  components: {
    "chevron-left": chevronLeft
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/scss/variables.scss";
.button {
  @media (max-width: $md) {
    background: #fff;
    width: auto;
    min-width: 50px;
  }
  cursor: pointer;
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
  z-index: 5;
}
</style>
