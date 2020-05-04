<template>
  <div :class="['card-outer-box', 'col', { 'card-outer-box--large': large }]">
    <div :class="[`card card--${type} col`]">
      <div class="card__border"></div>
      <h2 class="card__number">{{ number }}</h2>
      <h4 class="card__header">{{ content.header }}</h4>
      <p
        v-html="content.text"
        v-if="!outside"
        :class="[
          'card__text',
          { 'card__text--extra': extra },
          { 'card__text--no-margin': !margin },
        ]"
      ></p>
      <div :class="['card__icon', { 'card__icon--client': icon === 'client' }]">
        <img :src="`/assets/${icon}.svg`" alt="" v-if="icon !== 'text'" />
        <h3 v-else>SKLEP BUDOWLANY</h3>
      </div>
    </div>
    <p
      v-html="content.text"
      v-if="outside"
      :class="[
        'card__text',
        'card__text--outside',
        { 'card__text--extra': extra },
        { 'card__text--no-margin': !margin },
      ]"
    ></p>
  </div>
</template>

<script>
export default {
  props: [
    "icon",
    "type",
    "content",
    "number",
    "extra",
    "margin",
    "outside",
    "large",
  ],
};
</script>

<style lang="scss">
@mixin card($type) {
  .card {
    &__border {
      border-color: var($type);

      &::before,
      &::after {
        border-color: var($type);
      }
    }

    &__icon {
      border-color: var($type);
    }

    &__header {
      background-color: var($type);
    }
  }
}
@mixin large() {
  width: 400px;
  margin-bottom: 100px;

  .card {
    &__border {
      border-width: 6px;
      width: 60px;
      border-bottom-left-radius: 18px;

      &::before,
      &::after {
        border-width: 6px;
      }

      &::before {
        transform: translate(calc(-50% - 3px), 1px);
      }
    }

    &__number {
      font-size: 35px;
    }

    &__header {
      height: 70px;
      font-size: 24px;
    }

    &__text {
      margin-bottom: 100px;
      &--extra {
        margin-top: 120px;
      }
    }

    &__icon {
      border-width: 6px;
      width: 150px;
      height: 150px;
    }
  }
}

.card {
  background: transparent;
  width: 100%;
  min-height: 200px;
  display: flex;
  position: relative;
  font-size: 16px;
  z-index: 1;
  font-family: futura-pt, sans-serif;

  &__border {
    position: absolute;
    width: 40px;
    height: 100%;
    bottom: 0;
    border-left: 4px solid;
    border-bottom: 4px solid;
    border-bottom-left-radius: 16px;
    transform: translateX(-3px);
    z-index: -1;

    &::before,
    &::after {
      content: "";
      display: flex;
      width: 8px;
      height: 8px;
      border: 4px solid;
      border-radius: 50%;
      position: absolute;
      bottom: 100%;
      left: 0%;
      transform: translate(calc(-50% - 2px), 1px);
    }

    &::after {
      top: 100%;
      left: unset;
      right: 0;
      transform: translate(calc(100% - 1px), calc(-50% + 2px));
    }
  }

  &__number {
    position: absolute;
    bottom: 100%;
    left: 10px;
    font-size: 42px;
    margin-left: 5px;
  }

  &__header {
    margin-top: 20px;
    width: 100%;
    display: flex;
    height: 50px;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
  }

  &__text {
    margin: 80px auto;
    width: 100%;
    max-width: 267px;
    text-align: center;
    word-wrap: break-word;
    font-family: museo-slab;
    font-size: 20px;
    font-weight: 300;

    &--extra {
      padding: 30px 0;
    }
    &--no-margin {
      margin: 0 auto 80px auto;
    }
    &--outside {
      margin: 80px auto 0 auto;
    }
  }

  &__icon {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 120px;
    width: 120px;
    border: 4px solid;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 13px;
    padding: 15px;

    img {
      width: 100%;
    }

    &--client {
      padding: 30px;
    }
  }

  &--gray {
    @include card(--gray);
  }
  &--lightGray {
    @include card(--lightGray);
  }
  &--pink {
    @include card(--pink);
  }
  &--blue {
    @include card(--blue);
  }
  &--yellow {
    @include card(--yellow);
  }
}
.card-outer-box {
  width: 300px;
  padding: 0px 6px;
  margin: 20px 0 80px 0;
  color: #fff;
  align-items: center;
  user-select: none;

  &--large {
    @media (min-width: 1400px) {
      @include large;
    }
  }
}
</style>
