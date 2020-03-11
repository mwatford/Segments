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
  width: 100%;
  max-width: 930px;
  margin-left: 300px;
  user-select: none;

  h1 {
    margin-bottom: 40px;
    font-size: 80px;
    font-weight: 700;
    letter-spacing: 0;
    color: var(--header);
  }
  p {
    font-family: museo-slab;
    font-size: 24px;
    line-height: 32px;
    letter-spacing: 0;
    font-weight: 300;
  }
}
:root {
  --pink: #ef529d;
  --yellow: #fbb040;
  --blue: #58c6d5;
  --gray: #707070;
  --lightGray: #a5a5a5;
  --header: #231F20;
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
