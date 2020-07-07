<template>
  <nav class="row nav nav--main">
    <a href="#intro">
      <img src="/assets/logo.svg" alt="" class="nav__logo" />
    </a>
    <nav-actions>
      <button class="nav__button" v-if="!sticky" @click.stop="openForm">
        umów rozmowę
      </button>
    </nav-actions>
  </nav>
</template>

<script>
import logo from "../logo.vue";
import facebookIcon from "../facebook.vue";
import navActions from "./actions.vue";

export default {
  props: ["sticky", "active"],
  components: {
    logo,
    facebookIcon,
    navActions,
  },
  methods: {
    openForm() {
      this.$eventBus.$emit("open-popup");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/scss/nav.scss";
@import "../../styles/scss/variables.scss";

.nav--main {
  height: 65px;

  .nav {
    &__logo {
      height: 38px;
    }
  }
}
@media (max-width: $md) {
  .nav--main {
    .nav {
      &__logo {
        height: 33px;
      }
    }
  }
}
@media (max-width: $xs) {
  .nav--main {
    height: auto;
    .nav {
      &__logo {
        height: 20px;
        margin: 5px 0;
      }
    }
  }
}
// .nav {
//   @media (max-width: $xl) {
//     padding: 0 10%;
//   }
//   @media (max-width: $xs) {
//     height: auto;
//   }
//   padding: 0 var(--gutters-lg);
//   top: 0;
//   justify-content: space-between;
//   align-items: center;
//   color: #fff;
//   transition: background-color 0.3s ease;
//   z-index: 10;
//   font-family: futura-pt, sans-serif;
//   height: 65px;

// @keyframes ul {
//   0% {
//     display: "flex";
//     transform: translateX(-100%);
//   }
//   100% {
//     display: "flex";
//     transform: translateX(0%);
//   }
// }
</style>
