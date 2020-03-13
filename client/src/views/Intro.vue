<template>
  <section class="col" id="intro">
    <navbar></navbar>
    <header class="col">
      <h1>Jakość, która<br /><strong>zaprocentuje.</strong></h1>
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
  @media (max-width: 1000px) {
    padding: 50px 0 100px 0;
  }
  color: #fff;
  height: 100vh;
  min-height: 600px;
  user-select: none;
  padding: 100px 0 200px 0;
  justify-content: space-between;
  background: linear-gradient(111deg, #042640, #084c80, #128be6);
  font-family: "futura-pt", sans-serif;
  box-shadow: -2px 25px 31px #00000029;
}
header {
  @media (max-width: 1400px) {
    margin: 8%;
  }
  margin: 0 300px;
}
strong {
  @media (max-width: 1000px) {
    font-size: 60px;
  }
  @media (max-width: 500px) {
    font-size: 42px;
  }
  font-size: 5.5vw;
}
h1 {
  @media (max-width: 1000px) {
    font-size: 28px;
    line-height: 28px;
  }
  font-size: 3vw;
  line-height: 3vw;
  font-weight: 700;
  letter-spacing: -0.46px;
}
</style>
