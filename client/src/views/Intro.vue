<template>
  <section class="col" id="intro">
    <navbar></navbar>
    <header class="col" data-aos="fade-left">
      <h1>Buduj z nami swoją<br /><strong> przyszłość.</strong></h1>
    </header>
    <house class="mobile--hide"></house>
    <house-mobile class="mobile"></house-mobile>
    <picture class="intro-background">
      <img src="/assets/background.svg" />
    </picture>
  </section>
</template>

<script>
import house from "../components/house-svg.vue";
import houseMobile from "../components/house-mobile-svg.vue";
import navbar from "../components/navbar.vue";

export default {
  components: {
    house,
    "house-mobile": houseMobile,
    navbar,
  },
};
</script>

<style lang="scss" scoped>
section {
  @media (max-width: 1000px) {
    padding: 50px 0 30px 0;
    min-height: 600px;
    box-shadow: none;
    justify-content: space-between;

    @media (max-height: 730px) {
      justify-content: flex-start;

      header {
        margin-top: 80px;
      }
    }
  }
  @media (max-width: 500px) {
    padding: 24px 0 70px 0;
    min-height: unset;
    height: 410px;
  }
  color: #fff;
  height: 100vh;
  user-select: none;
  padding: 70px 0 0 0;
  align-items: flex-start;
  background: #042640;
  width: 100%;
  overflow: hidden;
  z-index: 1;
  position: relative;
  // background: linear-gradient(111deg, #042640, #084c80, #128be6);
  font-family: "futura-pt", sans-serif;
}
.intro-background {
  @media (max-width: 1000px) {
    height: 100%;
  }
  @media (max-width: 500px) {
    height: 320px;
  }
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  height: auto;
  width: 100%;
  overflow: hidden;
  width: 100%;
  z-index: -1;

  & img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
}
header {
  @media (max-width: 1400px) {
    margin: 8% 10%;
  }
  @media (max-width: 500px) {
    margin: 20px 10%;
  }
  margin: 120px var(--gutters-lg);
}
strong {
  @media (max-width: 1000px) {
    font-size: 53px;
    line-height: 1;
  }
  @media (max-width: 500px) {
    font-size: 29px;
  }
  font-size: 5vw;
  line-height: 1;
}
h1 {
  @media (max-width: 1000px) {
    font-size: 36px;
  }
  @media (max-width: 500px) {
    font-size: 21px;
  }
  font-size: 3.4vw;
  line-height: 1.3;
  font-weight: 700;
  letter-spacing: -0.46px;
}
</style>
