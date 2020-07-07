<template>
  <div class="col innerNav">
    <a
      :class="['item', { 'item--active': active === item }]"
      v-for="item in list"
      :key="item"
      :href="item"
    ></a>
  </div>
</template>

<script>
export default {
  props: ["list", "active"],
};
</script>

<style lang="scss" scoped>
.item {
  height: 20px;
  width: 20px;
  border-radius: 50%;
  margin: 20px;
  background: #00ccffd7;
  position: relative;
  transition: all 0.3s ease;

  &--active,
  &:hover {
    transform: scale(1.3);
  }

  &--active {
    background: #fac;
  }
}
.innerNav {
  position: fixed;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 15;
}
</style>
