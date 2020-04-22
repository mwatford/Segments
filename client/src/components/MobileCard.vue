<template>
  <div class="mobileCard col">
    <header
      :class="`mobileCard__header mobileCard__header--${type} row`"
      @click="visible = !visible"
    >
      <h3>{{ number }}.&ensp;</h3>
      <h3>
        {{ content.header }}
      </h3>
    </header>
    <div class="mobileCard__content" v-if="visible">
      <p class="paragraph">{{ content.text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["content", "number", "type"],
  data() {
    return {
      visible: false
    };
  }
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  box-sizing: border-box;
}
.mobileCard {
  color: #fff;
  margin: 0 auto 7px auto;
  width: 210px;

  &__header {
    cursor: pointer;
    justify-content: flex-start;
    border: 2px solid;
    padding: 5px 20px;
    border-radius: 8px;

    & h3 {
      font-size: 20px;
      letter-spacing: -0.21px;
      font-weight: 400;
    }

    &--gray {
      border-color: var(--gray);
    }
    &--lightGray {
      border-color: var(--lightGray);
    }
  }
}
.paragraph {
  margin: 15px 5px;
  text-align: center;
  font-size: 16px;
  line-height: 21px;
  font-weight: 400;
}
</style>
