<template>
  <div class="popup" @click.self="closeForm">
    <close-icon class="popup__close" @click.native="closePopup"></close-icon>
    <slot ref="slot"></slot>
  </div>
</template>

<script>
import { closePopup } from "./handlers";
import closeIcon from "../close-icon.vue";

export default {
  components: { closeIcon },
  methods: {
    closePopup,
    closeForm(ev) {
      const el = document.getElementsByClassName("popup")[0];

      if (ev.target !== this.$refs["slot"]) {
        this.closePopup();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/scss/variables.scss";

.popup {
  @media (max-width: $md) {
    width: 100%;
    height: 100%;
  }
  position: fixed;
  background: #fff;
  box-shadow: 0 20px 40px #002d50;
  width: 815px;
  height: 510px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  z-index: 20;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100vw;
    height: 100vh;
    background: #ffffff41;
    z-index: -1;
  }

  &__close {
    display: flex;
    cursor: pointer;
    position: absolute;
    height: 20px;
    top: 0;
    right: 0;
    margin-top: 30px;
    right: 30px;
  }
}
</style>
