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
};
</script>

<style lang="scss">
@import "./styles/scss/variables.scss";

body {
  background-color: #fff;
  scroll-behavior: smooth;
  max-width: 100vw;
}
section {
  z-index: 0;
}
.hide--1500 {
  @media (max-width: 1550px) {
    display: flex;
  }
  @media (min-width: 1550px) {
    display: none !important;
  }
}
.show--1500 {
  @media (max-width: 1550px) {
    display: none !important;
  }
  @media (min-width: 1550px) {
    display: flex;
  }
}
.header {
  user-select: none;
  display: flex;
  flex-direction: column;
  z-index: 0;
  font-family: futura-pt, sans-serif;

  h1 {
    @media (max-width: $xl) {
      font-size: 40px;
    }
    @media (max-width: $md) {
      font-size: 34px;
    }
    @media (max-width: $sm) {
      font-size: 24px;
      margin-bottom: 15px;
    }
    margin-bottom: 35px;
    font-size: 40px;
    font-weight: 700;
    letter-spacing: 0;
  }

  &--padded {
    h1 {
      padding: 0 var(--gutters-lg);
      @media (max-width: $xl) {
        margin-left: 10vw;
        margin-right: 10vw;
        padding: 0;
      }
    }
    p {
      @media (max-width: $xl) {
        margin: 0 10vw;
      }
      margin: 0 var(--gutters-lg);
    }
  }
}
.paragraph {
  @media (max-width: $md) {
    font-size: 22px;
    font-weight: 400;
  }
  @media (max-width: $sm) {
    font-weight: 400;
    line-height: 21px;
    font-size: 16px;
  }
  max-width: 705px;
  font-family: futura-pt;
  font-size: 28px;
  line-height: 30px;
  letter-spacing: 0;
  font-weight: 400;
}
.background-1 {
  @media (max-width: $xl) {
    padding: 0 8%;
  }
  @media (max-width: $md) {
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
  @media (max-width: 1600px) {
    padding: 0 8%;
  }
  @media (max-width: $xs) {
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
  @media (max-width: $md) {
    display: flex;
  }
  &--hide {
    @media (max-width: $md) {
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
