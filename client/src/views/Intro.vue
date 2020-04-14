<template>
  <section class="col" id="intro">
    <navbar></navbar>
    <header class="col">
      <h1>Buduj z nami swoją<br /><strong> przyszłość.</strong></h1>
    </header>
    <house class="mobile--hide"></house>
    <house-mobile class="mobile"></house-mobile>
  </section>
</template>

<script>
import house from "../components/house-svg.vue";
import houseMobile from "../components/house-mobile-svg.vue";
import navbar from "../components/navbar.vue";

export default {
  components: {
    house,
    'house-mobile': houseMobile,
    navbar
  }
};
</script>

<style lang="scss" scoped>
section {
  @media (max-width: 1000px) {
    padding: 50px 0 100px 0;
    min-height: 700px;
  }
  @media (max-width: 500px) {
    padding: 20px 0 73px 0;
    min-height: 410px;
  }
  color: #fff;
  height: 100vh;
  user-select: none;
  padding: 50px 0 200px 0;
  align-items: flex-start;
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
    font-size: 53px;
    line-height: 1;
  }
  @media (max-width: 500px) {
    font-size: 40px;
  }
  font-size: 5.5vw;
  line-height: 1;
}
h1 {
  @media (max-width: 1000px) {
    font-size: 36px;
  }
  @media (max-width: 500px) {
    font-size: 30px;
  }
  font-size: 3.8vw;
  line-height: 1.3;
  font-weight: 700;
  letter-spacing: -0.46px;
}
</style>
