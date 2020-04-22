<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  created() {
    AOS.init();
  },
  mounted() {},
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background-color: #fff;
  scroll-behavior: smooth;
}
.header {
  user-select: none;
  display: flex;
  flex-direction: column;
  z-index: 2;

  h1 {
    @media (max-width: 1400px) {
      margin: 0 10vw;
      font-size: 56px;
      padding: 0;
      margin-bottom: 5px;
    }
    @media (max-width: 1000px) {
      font-size: 48px;
    }
    @media (max-width: 750px) {
      font-size: 24px;
    }
    margin-bottom: 25px;
    font-size: 80px;
    font-weight: 700;
    letter-spacing: 0;
    color: var(--header);
    padding: 0 300px;
  }
}
.paragraph {
  @media (max-width: 1400px) {
    font-family: futura-pt, sans-serif;
    margin: 0 10vw;
  }
  @media (max-width: 1000px) {
    font-size: 22px;
    font-weight: 400;
  }
  @media (max-width: 750px) {
    font-weight: 400;
    line-height: 21px;
    font-size: 16px;
  }
  margin: 15px 300px;
  max-width: 930px;
  font-family: museo-slab;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0;
  font-weight: 300;
}
.background-1 {
  @media (max-width: 1400px) {
    padding: 0 8%;
  }
  @media (max-width: 1000px) {
    display: none;
  }
  position: absolute;
  top: 0;
  left: 0;
  padding: 0 400px 0 360px;
  display: flex;
  width: 100%;
  flex-direction: column;
  z-index: -1;

  div {
    background: #f1f9ff;
    height: 25vw;
    max-height: 290px;
    width: 100%;
    margin-bottom: 145px;
  }
}
.background-2 {
  @media (max-width: 1400px) {
    padding: 0 8%;
  }
  @media (max-width: 500px) {
    padding: 0 6%;
  }
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 380px;
  display: flex;
  justify-content: space-between;
  opacity: 0.1;
  z-index: 0;

  & div {
    background: #ffffff;
    width: 25%;
    height: 100%;
    max-width: 300px;
  }
}
:root {
  --pink: #ef529d;
  --yellow: #fbb040;
  --blue: #58c6d5;
  --gray: #707070;
  --lightGray: #a5a5a5;
  --header: #231f20;
}
.row {
  display: flex;
  flex-direction: row;
}
.col {
  display: flex;
  flex-direction: column;
}
.j-end {
  justify-self: flex-end;
}
.j-start {
  justify-self: flex-start;
}
.a-end {
  align-self: flex-end;
}
.a-start {
  align-self: flex-start;
}
.mobile {
  display: none;
  @media (max-width: 1000px) {
    display: flex;
  }
  &--hide {
    @media (max-width: 1000px) {
      display: none;
    }
  }
}
.m-auto {
  margin: auto;
}
// animations ---------------------
@keyframes slideDown {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
}
@keyframes slideLeft {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
