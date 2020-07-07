<template>
  <section class="row" id="o_nas">
    <div class="row info-background">
      <picture class="grid">
        <img src="/assets/Repeat Grid 4.png" alt="" />
      </picture>
    </div>
    <header class="header text--white text-md--black header--padded">
      <h1 class="text-md--header">
        Chcemy zostawić świat lepszym, niż go zastaliśmy.
      </h1>
      <p class="paragraph">
        To nasza misja. Realizujemy ją poprzez budowę ekologicznych,
        samowystarczalnych „osiedli jutra” oraz dzięki sprzedaży materiałów
        budowlanych, służących do budowy domów pasywnych. Prowadzimy inwestycje
        deweloperskie z zakresu mieszkalnictwa jednorodzinnego - budujemy domy
        pasywne <br />i plus energetyczne, zasilane w 100% energią pochodzącą ze
        źródeł naturalnych. Zajmujemy się również hurtową sprzedażą materiałów
        budowlanych w Polsce i na terenie Unii Europejskiej.
      </p>
    </header>
    <figure class="col">
      <picture><img src="/assets/o_nas-1.jpg" alt=""/></picture>
      <picture>
        <img src="/assets/o_nas-2.jpg" alt="" />
      </picture>
      <picture>
        <img src="/assets/o_nas-3.png" alt="" />
      </picture>
      <figcaption>
        Projekt deweloperski "Wędrowców" w Bielsku-Białej
      </figcaption>
    </figure>
  </section>
</template>

<script>
import animationSvg from "../components/animations-svg.vue";

export default {
  components: {
    "animation-svg": animationSvg,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/scss/variables.scss";

#o_nas {
  @media (min-width: 1920px) {
    height: 950px;
  }
  @media (max-width: $xl) {
    padding-top: 50px;
  }
  @media (max-width: $md) {
    padding: 37px 0 0 0;
    justify-content: center;
  }
  @media (max-width: $xs) {
    padding: 0;
  }
  padding: 0 0 20px 0;
  position: relative;
  font-family: futura-pt;
  flex-wrap: wrap;
}

.info-background {
  @media (min-width: 1920px) {
    clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
  }
  @media (max-width: $xl) {
    padding: 0 10%;
  }
  @media (max-width: $md) {
    display: none;
  }
  width: 100%;
  height: 75%;
  position: absolute;
  top: 0;
  left: 0;
  background: #042640;
  clip-path: polygon(0 0, 100% 0, 100% 70%, 0 85%);
  overflow: hidden;

  div {
    height: 100%;
    width: 25%;
    max-width: 290px;
    background: #f1f9ff;
  }
}
header {
  @media (max-width: $xs) {
    margin-top: 37px;
  }
  margin-top: 60px;
  position: relative;
}
.grid {
  @media (min-width: 1900px) {
    display: flex;
  }
  display: none;
  position: absolute;
  right: -50px;
  top: 0;
  transform: translateY(-15%);
  z-index: 20;
}
figure {
  @media (min-width: 1920px) {
    transform: translateY(-270px);
  }
  @media (max-width: $xl) {
    transform: none;
    margin: 35px 10% 0 auto;
  }
  @media (max-width: $md) {
    position: relative;
    border: none;
    margin: 35px 10%;
    height: auto;
  }
  @media (max-width: $xs) {
    margin: 23px 10%;
  }
  align-items: center;
  justify-content: flex-end;
  display: flex;
  max-width: 465px;
  width: 100%;
  height: 700px;
  margin-left: auto;
  margin-right: 180px;
  border: 15px solid #084c80;
  position: relative;
  margin-top: 35px;
  z-index: 2;

  picture {
    min-width: 215px;
    max-width: 484px;
    width: 150%;
    position: absolute;

    &:nth-child(1) {
      @media (max-width: $md) {
        position: static;
        max-width: 430px;
        width: 60vw;
        margin-right: auto;
      }
      top: 20px;
      right: 80px;
    }
    &:nth-child(2) {
      @media (max-width: $md) {
        position: static;
        max-width: 430px;
        width: 60vw;
        order: 2;
        margin-left: auto;
      }
      max-width: 480px;
      top: 160px;
      left: 55px;
    }
    &:nth-child(3) {
      @media (max-width: $md) {
        position: static;
        max-width: 430px;
        width: 60vw;
        display: none;
      }
      top: 330px;
      right: 415px;
      max-width: 347px;
    }
  }

  img {
    @media (max-width: $md) {
      width: 100%;
      box-shadow: none;
    }
    box-shadow: -13px -16px 18px #00000029;
    width: 100%;
    object-fit: cover;
  }

  figcaption {
    @media (max-width: $md) {
      margin: 10px auto 0 auto;
      font-size: 14px;
      line-height: 18px;
      text-align: center;
      font-weight: 400;
      width: 100%;
      max-width: 200px;
      border: none;

      &::after {
        content: "";
        display: flex;
        background-color: #095590a1;
        height: 2px;
        width: 60%;
        margin: 5px auto 0 auto;
      }
    }
    position: relative;
    max-width: 320px;
    font-size: 22px;
    line-height: 31px;
    font-weight: 300;
    text-align: left;
    font-style: italic;
    border-bottom: 4px solid #084c80;
    margin-bottom: 40px;
    padding-bottom: 15px;
  }
}
.paragraph {
  &:nth-of-type(1) {
    @media (max-width: $md) {
      order: 2;
    }
  }
}
</style>
