<template>
  <header :class="['col', 'commonHeader', { 'commonHeader--large': large }]">
    <div>
      <h1>{{ main || "asdasdasdasd" }}</h1>
      <h3>{{ subheader || "asdasdas" }}</h3>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    main: {
      type: String,
    },
    subheader: {
      type: String,
    },
    large: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.commonHeader {
  @media (max-width: 1400px) {
    padding: 0 10%;
  }
  @media (max-width: 1000px) {
    padding: 0 10%;
    font-size: 24px;
  }
  @media (max-width: 500px) {
    font-size: 20px;
  }
  @media (max-width: 359px) {
    font-size: 18px;
  }
  font-size: 39px;
  text-align: right;
  color: #fff;
  align-items: flex-start;
  padding-left: 280px;
  padding-top: 40px;
  font-family: futura-pt, sans-serif;
  user-select: none;

  &--large {
    @media (max-width: 1400px) {
      font-size: 40px;
    }
    @media (max-width: 1000px) {
      font-size: 24px;
      padding-top: 0;
    }
    @media (max-width: 500px) {
      font-size: 20px;
    }
    @media (max-width: 359px) {
      font-size: 18px;
    }
    font-size: 52.5px;
    padding-top: 60px;
  }

  h1 {
    font-size: 1.9em;
  }
  h3 {
    font-size: 1em;
  }
}
</style>
