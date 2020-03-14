<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
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
  @media (max-width: 1400px) {
    margin: 0 8%;
  }
  margin-left: 300px;
  user-select: none;
  display: flex;
  flex-direction: column;

  h1 {
    @media (max-width: 750px) {
      font-size: 34px;
    }
    margin-bottom: 25px;
    font-size: 80px;
    font-weight: 700;
    letter-spacing: 0;
    color: var(--header);
  }
  p {
    @media (max-width: 750px) {
      font-size: 18px;
    }
    margin-top: 15px;
    max-width: 930px;
    font-family: museo-slab;
    font-size: 24px;
    line-height: 32px;
    letter-spacing: 0;
    font-weight: 300;
  }
}
.background-1 {
  @media (max-width: 1400px) {
    padding: 0 8%;
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
  position: absolute;
  bottom: 190px;
  width: 100%;
  padding: 0 380px;
  display: flex;
  justify-content: space-between;
  opacity: 0.1;
  z-index: 0;

  & div {
    background: #ffffff;
    width: 25%;
    height: 850px;
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
</style>
