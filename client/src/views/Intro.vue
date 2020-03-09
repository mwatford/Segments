<template>
  <section class="col" id="intro">
    <navbar></navbar>
    <header class="col">
      <h1>Jakość, która <br /><strong>zaprocentuje.</strong></h1>
    </header>
    <house></house>
  </section>
</template>

<script>
import house from "../components/house-svg.vue";
import navbar from "../components/navbar.vue";

export default {
  components: {
    house,
    navbar
  }
};
</script>

<style lang="scss" scoped>
section {
  color: #fff;
  min-height: 100vh;
  user-select: none;
  padding: 100px 0 200px 0;
  justify-content: space-between;
  background: linear-gradient(111deg, #042640, #084c80, #128be6);
}
header {
  margin: 0 300px;
}
strong {
  font-size: 5.5vw;
}
h1 {
  font-size: 3vw;
  line-height: 74px;
  letter-spacing: -0.46px;
}
</style>
