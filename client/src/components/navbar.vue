<template>
  <nav :class="['row', 'nav', { 'nav--sticky': sticky }]">
    <a href="#intro">
      <img src="/assets/logo.svg" alt="" class="nav__logo" />
    </a>
    <ul class="row">
      <li>
        <a
          href="#o_nas"
          :class="['nav__link', { 'nav__link--active': active === 'o_nas' }]"
        >
          o nas
        </a>
      </li>
      <li>
        <a
          href="#dostawa"
          :class="['nav__link', { 'nav__link--active': active === 'dostawa' }]"
        >
          dostawa
        </a>
      </li>
      <li>
        <a
          href="#produkty"
          :class="['nav__link', { 'nav__link--active': active === 'produkty' }]"
        >
          produkty
        </a>
      </li>
      <li>
        <a
          href="#kontakt"
          :class="['nav__link', { 'nav__link--active': active === 'kontakt' }]"
        >
          kontakt
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import logo from "../components/logo.vue";

export default {
  props: ["sticky", "active"],
  components: {
    logo
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {}
};
</script>

<style lang="scss" scoped>
.nav {
  width: 100%;
  padding: 0 300px;
  top: 0;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  transition: background-color 0.3s ease;
  z-index: 2;

  &__logo {
    display: flex;
    margin: 5px 0;
    height: 55px;
  }

  &__link {
    color: #fff;
    text-transform: uppercase;
    text-decoration: none;
    font-family: futura-pt, sans-serif;
    font-weight: 700;
    font-style: normal;
    overflow: hidden;
    letter-spacing: 0;

    &--active {
      text-decoration: underline;
    }
  }

  &--sticky {
    margin: 0;
    position: fixed;
    background: #095590a1;
    top: 0;

    .nav {
      &__logo {
        height: 30px;
      }
      &__link {
        font-size: 15px;
      }
    }
  }
}
ul {
  list-style-type: none;

  li {
    margin-left: 40px;
  }
}
@keyframes ul {
  0% {
    display: "flex";
    transform: translateX(-100%);
  }
  100% {
    display: "flex";
    transform: translateX(0%);
  }
}
</style>
