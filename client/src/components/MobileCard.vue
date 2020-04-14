<template>
  <div class="mobileCard col">
    <header
      :class="`mobileCard__header mobileCard__header--${type} row`"
      @click="visible = !visible"
    >
      <h3>{{ number }}.&ensp;</h3>
      <h3>
        {{ content.header.toUpperCase() }}
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
  margin: 10px auto;
  width: 280px;

  &__header {
    cursor: pointer;
    justify-content: flex-start;
    border: 2px solid;
    padding: 10px 20px;
    border-radius: 8px;

    & h3 {
      font-size: 16px;
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
  margin: 10px;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
}
</style>
