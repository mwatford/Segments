<template>
  <div class="home col" name="home">
    <Intro></Intro>
    <navbar
      :sticky="true"
      :style="{
        visibility: showNav || active === 'o_nas' ? 'visible' : 'hidden',
      }"
      :active="active"
    ></navbar>
    <Info></Info>
    <Delivery></Delivery>
    <Products></Products>
    <Contact></Contact>
    <app-footer></app-footer>
  </div>
</template>

<script>
import header from "../components/header.vue";
import navbar from "../components/navbar.vue";
import Intro from "./Intro.vue";
import Info from "./Info.vue";
import Delivery from "./Delivery.vue";
import Products from "./Products.vue";
import Contact from "./Contact.vue";
import Footer from "../components/Footer.vue";
import navController from "../mixins/navController";

export default {
  mixins: [navController("home", "intro")],
  components: {
    commonHeader: header,
    Intro,
    navbar,
    Info,
    Delivery,
    Products,
    Contact,
    appFooter: Footer,
  },
  computed: {
    showNav() {
      return this.scrollPos > this.parentHeight;
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  scroll-behavior: smooth;
}
</style>
