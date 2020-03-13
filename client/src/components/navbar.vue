<template>
  <nav :class="['row', 'nav', { 'nav--sticky': sticky }]">
    <a href="#intro">
      <img src="/assets/logo.svg" alt="" class="nav__logo" />
    </a>
    <div class="row dropdown">
      <div class="dropdown__icon">&equiv;</div>
      <ul class="row ul">
        <a
          href="#o_nas"
          :class="['nav__link', { 'nav__link--active': active === 'o_nas' }]"
        >
          o nas
        </a>
        <a
          href="#dostawa"
          :class="['nav__link', { 'nav__link--active': active === 'dostawa' }]"
        >
          dostawa
        </a>
        <a
          href="#produkty"
          :class="['nav__link', { 'nav__link--active': active === 'produkty' }]"
        >
          produkty
        </a>
        <a
          href="#kontakt"
          :class="['nav__link', { 'nav__link--active': active === 'kontakt' }]"
        >
          kontakt
        </a>
      </ul>
    </div>
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
  @media (max-width: 1400px) {
    padding: 0 8%;
  }
  width: 100%;
  padding: 0 300px;
  top: 0;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  transition: background-color 0.3s ease;
  z-index: 3;
  font-family: futura-pt, sans-serif;
  height: 65px;

  &__logo {
    @media (max-width: 500px) {
      height: 30px;
    }
    display: flex;
    margin: 5px 0;
    height: 55px;
  }

  &__link {
    cursor: pointer;
    color: #fff;
    text-transform: uppercase;
    text-decoration: none;
    font-family: futura-pt, sans-serif;
    font-weight: 700;
    font-style: normal;
    letter-spacing: 0;
    width: auto;
    margin-left: 40px;
    position: relative;

    &--active,
    &:hover {
      &::after {
        content: "";
        position: absolute;
        display: flex;
        width: 100%;
        left: 0;
        top: 100%;
        height: 2px;
        background: #9ebcd3;
        z-index: 2;
      }
    }
  }

  &--sticky {
    margin: 0;
    position: fixed;
    background: #095590a1;
    top: 0;
    height: 40px;

    .nav {
      &__logo {
        margin: 10px 0;
        height: 20px;
      }
      &__link {
        @media (max-width: 1000px) {
          color: #9ebcd3;
        }
        font-size: 15px;
      }
    }
  }
}
.dropdown__icon {
  @media (max-width: 1000px) {
    display: flex;
  }
  cursor: pointer;
  display: none;
  font-size: 26px;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.dropdown {
  @media (max-width: 1000px) {
    justify-content: flex-end;
  }
  position: relative;
  height: 100%;

  &:hover ul {
    display: flex;
  }
}
ul {
  @media (max-width: 1000px) {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 100%;
    right: 0;
    align-items: flex-end;
  }
  list-style-type: none;
  display: flex;
  align-items: center;

  a {
    margin: 5px 0;
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
