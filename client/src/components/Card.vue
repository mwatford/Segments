<template>
  <div class="asd col">
    <div :class="`card card--${type} col`">
      <div class="card__border"></div>
      <h2 class="card__number">{{ number }}</h2>
      <h4 class="card__header">{{ content.header }}</h4>
      <p
        v-if="!outside"
        :class="[
          'card__text',
          { 'card__text--extra': extra },
          { 'card__text--no-margin': !margin }
        ]"
      >
        {{ content.text }}
      </p>
      <div class="card__icon">#</div>
    </div>
    <p
      v-if="outside"
      :class="[
        'card__text',
        'card__text--outside',
        { 'card__text--extra': extra },
        { 'card__text--no-margin': !margin }
      ]"
    >
      {{ content.text }}
    </p>
  </div>
</template>

<script>
export default {
  props: ["type", "content", "number", "extra", "margin", "outside"]
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

.card {
  background: transparent;
  width: 100%;
  min-height: 200px;
  height: 100%;
  display: flex;
  position: relative;
  margin: 20px;
  font-size: 16px;
  z-index: 1;

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
  }

  &__text {
    margin: 80px auto;
    width: 95%;
    text-align: center;
    word-wrap: break-word;

    &--extra {
      padding-top: 30px;
    }
    &--no-margin {
      margin: 0 auto 80px auto;
    }
    &--outside {
      margin-top: 40px;
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
.asd {
  height: 100%;
  width: 300px;
  padding: 40px 20px;
  color: #fff;
  align-items: center;
}
</style>
