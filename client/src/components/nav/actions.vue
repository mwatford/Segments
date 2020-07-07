<template>
  <div class="row dropdown">
    <div class="dropdown__icon">
      <img src="/assets/icon-segments.svg" alt="" />
    </div>
    <ul class="row ul">
      <slot></slot>
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
        :class="['nav__link mobile']"
      >
        <svg fill="#fff" width="20px" height="20px">
          <facebook-icon></facebook-icon>
        </svg>
      </a>
    </ul>
  </div>
</template>

<script>
import facebookIcon from "../facebook.vue";

export default {
  props: ["active"],
  components: { facebookIcon },
};
</script>

<style lang="scss" scoped>
@import "../../styles/scss/variables.scss";

@mixin navBreak($bp) {
  @media (max-width: $bp) {
    ul {
      display: none;
      flex-direction: column;
      position: absolute;
      top: 100%;
      right: 0;
      align-items: flex-end;
      animation: slideDown 0.4s ease;
    }
    .dropdown {
      justify-content: flex-end;
      position: relative;
      height: 100%;

      &:hover ul {
        background: #095590;
        width: 250px;
        display: flex;
        position: fixed;
        top: 0;
        right: 0;
      }
    }
    .dropdown__icon {
      display: flex;
    }
    .nav {
      &__button {
        border: none;
        border-radius: 0;
      }

      &__button,
      &__link {
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

        &--active,
        &:hover {
          &::after {
            display: none;
          }
        }
      }
    }
  }
}
ul {
  list-style-type: none;
  display: flex;
  align-items: center;
}

.dropdown__icon {
  cursor: pointer;
  display: none;
  align-items: center;
  justify-content: center;
  height: 100%;

  img {
    height: 14px;
  }
}

.nav {
  &__link {
    width: auto;
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
      }
    }
  }

  &__button,
  &__link {
    cursor: pointer;
    color: #fff;
    text-transform: uppercase;
    text-decoration: none;
    font-family: futura-pt, sans-serif;
    font-weight: 700;
    font-style: normal;
    font-size: 20px;
    letter-spacing: 0;
    margin-left: 40px;
    z-index: 20;
  }

  &__button {
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    background: transparent;
    height: 48px;
    width: 228px;
    border-radius: 8px;
    border: 2px solid #fff;

    &:hover {
      background: #9ebcd3;
    }
  }
}

.nav--main {
  @include navBreak($lg);
}
.nav--sticky {
  @include navBreak($md);

  & ul {
    animation: slideLeft 0.4s ease;
  }

  .nav {
    &__link {
      font-size: 15px;
    }
  }
}
</style>
