<template>
  <div class="home col" name="home">
    <Contact-Form v-if="form"></Contact-Form>
    <Intro></Intro>
    <sticky-nav
      :style="{
        visibility: showNav || active === 'o_nas' ? 'visible' : 'hidden',
      }"
      :active="active"
    ></sticky-nav>
    <Info></Info>
    <Delivery></Delivery>
    <Products></Products>
    <Contact></Contact>
    <app-footer></app-footer>
  </div>
</template>

<script>
import header from "../components/header.vue";
import Intro from "./Intro.vue";
import Info from "./Info.vue";
import Delivery from "./Delivery.vue";
import Products from "./Products.vue";
import Contact from "./Contact.vue";
import Footer from "../components/Footer.vue";
import navController from "../mixins/navController";
import ContactForm from "../components/contactForm.vue";
import stickyNav from "../components/nav/sticky-nav.vue";

export default {
  mixins: [navController("home", "intro")],
  components: {
    commonHeader: header,
    Intro,
    Info,
    Delivery,
    Products,
    Contact,
    appFooter: Footer,
    ContactForm,
    stickyNav,
  },
  data: () => ({
    form: false,
  }),
  computed: {
    showNav() {
      return this.scrollPos > this.parentHeight;
    },
  },
  created() {
    this.$eventBus.$on("open-popup", this.openForm);
    this.$eventBus.$on("close-popup", this.closeForm);
  },
  beforeDestroy() {
    this.$eventBus.$off("open-popup", this.openForm);
    this.$eventBus.$on("close-popup", this.closeForm);
  },
  methods: {
    openForm() {
      this.form = true;
    },
    closeForm() {
      this.form = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  scroll-behavior: smooth;
  position: relative;
}
</style>
