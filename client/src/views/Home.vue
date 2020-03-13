<template>
  <div class="home col" name="home">
    <intro></intro>
    <navbar
      :sticky="true"
      :style="{
        visibility: showNav || active === 'o_nas' ? 'visible' : 'hidden'
      }"
      :active="active"
    ></navbar>
    <info></info>
    <delivery></delivery>
    <Products></Products>
    <Contact></Contact>
    <app-footer></app-footer>
  </div>
</template>

<script>
import header from "../components/header.vue";
import navbar from "../components/navbar.vue";
import intro from "./Intro.vue";
import info from "./Info.vue";
import delivery from "./Delivery.vue";
import Products from "./Products.vue";
import Contact from "./Contact.vue";
import Footer from "../components/Footer.vue";

export default {
  components: {
    "common-header": header,
    intro,
    navbar,
    info,
    delivery,
    Products,
    Contact,
    "app-footer": Footer
  },
  data() {
    return {
      scrollPos: "",
      introHeight: "",
      positions: undefined
    };
  },
  computed: {
    showNav() {
      return this.scrollPos > this.introHeight;
    },
    active() {
      if (this.positions) {
        for (let el in this.positions) {
          if (
            this.scrollPos >= this.positions[el][0] &&
            this.scrollPos <= this.positions[el][1]
          ) {
            return el;
          }
        }
      }
    }
  },
  methods: {
    setScrollPos() {
      this.scrollPos = Math.ceil(window.scrollY);
    },
    setIntroHeight() {
      this.introHeight = document.getElementById("intro").clientHeight;
    },
    getElementList() {
      let arr = Array.from(document.getElementsByName("home")[0].children);
      arr = arr.filter(el => el.id !== "");

      const reduced = arr.reduce((acc, current) => {
        acc[current.id] = [
          current.offsetTop,
          current.clientHeight + current.offsetTop - 1
        ];
        return acc;
      }, {});
      this.positions = reduced;
    },
    getAnimableElements() {
      return Array.from(
        document.querySelectorAll(`#${this.active} > .parallax`)
      );
    },
    animateElements() {
      const elements = this.getAnimableElements();
      const rate = 8;

      const [top, bot] = this.positions[this.active];
      const height = bot - top;
      const percent = (this.scrollPos - top) / height;

      for (let el of elements[0].children) {
        const index = Array.from(elements[0].children)
          .reverse()
          .indexOf(el);
        +1;
        el.style.transform = `translate3d(0, -${percent *
          100 *
          index *
          rate}px, 0)`;
      }
    }
  },
  mounted() {
    this.setIntroHeight();
    this.getElementList();
    document.addEventListener("scroll", this.setScrollPos);
  },
  beforeUpdate() {
    // this.animateElements();
    this.setIntroHeight();
    this.getElementList();
  }
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  scroll-behavior: smooth;
}
</style>
