<template>
  <nav class="nav nav--sticky row">
    <a href="#intro">
      <img src="/assets/logo.svg" alt="" class="nav__logo" />
    </a>
    <nav-actions :active="active"></nav-actions>
  </nav>
</template>

<script>
import navActions from "./actions.vue";

export default {
  props: ["active"],
  components: {
    navActions,
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/scss/variables.scss";
@import "../../styles/scss/nav.scss";

.nav--sticky {
  background: #095590a1;
  position: fixed;
  height: 40px;

  .nav {
    &__logo {
      height: 20px;
      margin: 10px 0;
    }
  }
}
@media (max-width: $md) {
  .nav--sticky {
    display: flex;
    flex-direction: row;
    top: 15px;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    width: 30px;
    right: 0;
    padding: 0;
    background: #095590;
    box-shadow: 0px 0px 8px 2px #1c8fe7;
    justify-content: center;
    align-items: center;

    .nav__logo {
      display: none;
    }
  }
}
</style>
