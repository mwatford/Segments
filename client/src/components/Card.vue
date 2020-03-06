<template>
  <div class="card col">
    <div :class="`card__border card__border--${type}`"></div>
    <h2 :class="'card__number'">{{ number }}</h2>
    <h4 :class="`card__header card__header--${type}`">{{ content.header }}</h4>
    <p
      :class="[
        'card__text',
        { 'card__text--extra': extra },
        { 'card__text--no-margin': !margin },
        { 'card__text--outside': outside }
      ]"
    >
      {{ content.text }}
    </p>
    <div :class="`card__icon card__icon--${type}`">#</div>
  </div>
</template>

<script>
export default {
  props: ["type", "content", "number", "extra", "margin", "outside"]
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
@mixin borderColor($type) {
  border-color: var($type);

  &::before,
  &::after {
    border-color: var($type);
  }
}
@mixin backgroundColor($type) {
  background-color: var($type);
}

.card {
  background: transparent;
  width: 250px;
  min-height: 200px;
  height: 100%;
  display: flex;
  color: #fff;
  position: relative;
  margin-left: 20px;
  font-size: 16px;

  // margin-top: 20px;

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
      width: 7px;
      height: 7px;
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

    &--pink {
      @include borderColor(--pink);
    }
    &--yellow {
      @include borderColor(--yellow);
    }
    &--blue {
      @include borderColor(--blue);
    }
    &--gray {
      @include borderColor(--gray);
    }
    &--lightGray {
      @include borderColor(--lightGray);
    }
  }

  &__number {
    position: absolute;
    bottom: 100%;
    left: 10px;
  }

  &__header {
    margin-top: 20px;
    width: 100%;
    display: flex;
    height: 50px;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;

    &--pink {
      @include backgroundColor(--pink);
    }
    &--yellow {
      @include backgroundColor(--yellow);
    }
    &--blue {
      @include backgroundColor(--blue);
    }
    &--gray {
      @include backgroundColor(--gray);
    }
    &--lightGray {
      @include backgroundColor(--lightGray);
    }
  }

  &__text {
    margin: 80px auto;
    width: 95%;
    text-align: center;

    &--extra {
      padding-top: 30px;
    }
    &--no-margin {
      margin: 0 auto 80px auto;
    }
    &--outside {
      position: absolute;
      top: 100%;
      // margin-top: 100px;
      margin-top: 80px;
    }
  }

  &__icon {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 100px;
    width: 100px;
    border: 4px solid;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    &--pink {
      border-color: var(--pink);
    }
    &--yellow {
      border-color: var(--yellow);
    }
    &--blue {
      border-color: var(--blue);
    }
    &--gray {
      border-color: var(--gray);
    }
    &--lightGray {
      border-color: var(--lightGray);
    }
  }
}
</style>
