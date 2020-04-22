<template>
  <nav :class="['row', 'nav', { 'nav--sticky': sticky }]">
    <a href="#intro">
      <img src="/assets/logo.svg" alt="" class="nav__logo" />
    </a>
    <div class="row dropdown">
      <div class="dropdown__icon">
        <img src="/assets/icon-segments.svg" alt="" />
      </div>
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
        <a
          href="https://www.facebook.com/segmentsdevelopment"
          :class="[
            'nav__link mobile',
            { 'nav__link--active': active === 'kontakt' },
          ]"
        >
          <svg fill="#fff" width="20px" height="20px">
            <facebook-icon></facebook-icon>
          </svg>
        </a>
      </ul>
    </div>
  </nav>
</template>

<script>
import logo from "../components/logo.vue";
import fb from "../components/facebook.vue";

export default {
  props: ["sticky", "active"],
  components: {
    logo,
    "facebook-icon": fb,
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>

<style lang="scss" scoped>
* {
  outline: none;
}
ul {
  @media (max-width: 1000px) {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 100%;
    right: 0;
    align-items: flex-end;
    animation: slideDown 0.4s ease;
  }
  list-style-type: none;
  display: flex;
  align-items: center;
}
.nav {
  @media (max-width: 1400px) {
    padding: 0 10%;
  }
  @media (max-width: 500px) {
    height: auto;
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
    @media (max-width: 1000px) {
      height: 38px;
    }
    @media (max-width: 500px) {
      height: 20px;
    }
    display: flex;
    margin: 5px 0;
    height: 33px;
  }

  &__link {
    cursor: pointer;
    color: #fff;
    text-transform: uppercase;
    text-decoration: none;
    font-family: futura-pt, sans-serif;
    font-weight: 700;
    font-style: normal;
    font-size: 24px;
    letter-spacing: 0;
    width: auto;
    margin-left: 40px;
    position: relative;

    &--active,
    &:hover {
      &::after {
        @media (max-width: 1000px) {
          display: none;
        }
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
    @media (max-width: 1000px) {
      height: 50px;
      width: 100%;
      align-items: center;
      justify-content: flex-start;
      padding-left: 50px;
      display: flex;
      font-size: 14px;

      &:hover,
      &--active {
        background: #0c67ae;
      }
    }
  }

  &--sticky {
    @media (max-width: 1000px) {
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
    }
    margin: 0;
    background: #095590a1;
    position: fixed;
    top: 0;
    height: 40px;

    & ul {
      @media (max-width: 1000px) {
        background: #095590a1;
        animation: slideLeft 0.4s ease;
      }
    }
    .nav {
      width: auto;
      &__logo {
        @media (max-width: 1000px) {
          display: none;
        }
        margin: 10px 0;
        height: 20px;
      }
      &__link {
        @media (max-width: 1000px) {
          color: #fff;
          // margin-right: 5px;
          // margin-bottom: 5px;
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
  align-items: center;
  justify-content: center;
  height: 100%;

  img {
    // height: 30%;
    height: 14px;
  }
}

.dropdown {
  @media (max-width: 1000px) {
    justify-content: flex-end;
  }
  position: relative;
  height: 100%;

  &:hover ul {
    @media (max-width: 1000px) {
      background: #095590;
      // border: 1px solid #fff;
      width: 250px;
      // height: 335px;
      display: flex;
      position: fixed;
      top: 0;
      right: 0;
    }
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
