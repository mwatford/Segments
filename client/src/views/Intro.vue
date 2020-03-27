<template>
  <section class="col" id="intro">
    <navbar></navbar>
    <header class="col">
      <h1>Buduj z nami<br /><strong>swoją przyszłość.</strong></h1>
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
    min-height: 700px;
  }
  @media (max-width: 500px) {
    padding: 20px 0 60px 0;
    min-height: 620px;
  }
  color: #fff;
  height: 100vh;
  user-select: none;
  padding: 100px 0 200px 0;
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
  }
  @media (max-width: 500px) {
    font-size: 34px;
  }
  font-size: 5.5vw;
  line-height: 0.7;
}
h1 {
  @media (max-width: 1000px) {
    font-size: 25px;
    line-height: 28px;
  }
  font-size: 3vw;
  line-height: 3vw;
  font-weight: 700;
  letter-spacing: -0.46px;
}
</style>
