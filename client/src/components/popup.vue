<template>
  <div class="popup row">
    <section class="col">
      <app-button :icon="'asd'" @click.native="close">WRÓĆ</app-button>
    </section>
    <section>
      <h3>{{ data.name }}</h3>
    </section>
  </div>
</template>

<script>
import button from "./button.vue";

export default {
  components: { "app-button": button },
  props: ["data"],
  methods: {
    close() {
      this.$eventBus.$emit("closeItem");
    }
  }
};
</script>

<style lang="scss" scoped>
.popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffffe3;
  z-index: 2;
}
section {
  position: relative;
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
