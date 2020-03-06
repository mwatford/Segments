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
  background-color: #06406c;
}
:root {
  --pink: #ef529d;
  --yellow: #fbb040;
  --blue: #58c6d5;
  --gray: #707070;
  --lightGray: #a5a5a5;
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
