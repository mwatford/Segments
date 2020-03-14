<template>
  <section class="row" id="o_nas">
    <div class="row background parallax">
      <div></div>
      <div></div>
      <div></div>
    </div>
    <header class="header">
      <h1>O nas.</h1>
      <p>
        Misją firmy SEGMENTS jest zostawić świat lepszym niż go zastaliśmy
        poprzez budowę ekologicznych, samowystarczalnych ‘’osiedli jutra’’ oraz
        sprzedaż materiałów do budowy domów pasywnych.
      </p>
      <br />
      <p>
        Firma SEGMENTS prowadzi inwestycje Deweloperskie z zakresu
        mieszkalnictwa jednorodzinnego, budując domy pasywne lub plus
        energetyczne, zasilane w 100% energią ze źródeł naturalnych.
        <br />
        Zajmujemy się również hurtową sprzedażą materiałów budowlanych w Polsce
        oraz Unii Europejskiej.
      </p>
    </header>
    <div class="wrapper col">
      <figure class="col parallax">
        <picture><img src="/assets/o_nas-1.jpg" alt=""/></picture>
      </figure>
      <figure class="row parallax">
        <figcaption>
          Projekt deweloperski "Wędrowców" w Bielsku-Białej
        </figcaption>
        <picture>
          <img src="/assets/o_nas-2.jpg" alt="" />
        </picture>
      </figure>
    </div>
  </section>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
#o_nas {
  @media (max-width: 1400px) {
    padding-top: 50px;
  }
  padding: 230px 0 20px 0;
  position: relative;
  font-family: futura-pt;
  flex-wrap: wrap;
}
.background {
  @media (max-width: 1400px) {
    padding: 0 8%;
  }
  width: 100%;
  height: 75%;
  justify-content: space-around;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  padding: 0 300px;

  div {
    height: 100%;
    width: 25%;
    max-width: 290px;
    background: #f1f9ff;
  }
}
.wrapper {
  @media (min-width: 1920px) {
    transform: translateY(-200px);
  }
  @media (max-width: 1400px) {
    margin: 0 8%;
  }
  align-self: flex-end;
  justify-content: flex-end;
  display: flex;
  width: 100%;
  margin-right: 115px;
}
figure {
  align-items: flex-end;
  justify-content: flex-end;
  display: flex;
  width: 100%;

  &:nth-of-type(1) {
    & picture {
      max-width: 461px;
      max-height: 260px;
      margin: 54px 0;
    }
  }
  &:nth-of-type(2) {
    @media (max-width: 1000px) {
      flex-wrap: wrap-reverse;
    }
    picture {
      @media (max-width: 1000px) {
        margin: 0 0 10px 0;
      }
      max-width: 566px;
      margin-left: 10px;
      width: 100%;
    }
  }
  picture {
    img {
      box-shadow: 7px 10px 16px #00000029;
      width: 100%;
      object-fit: cover;
    }
  }

  figcaption {
    position: relative;
    max-width: 360px;
    font-size: 24px;
    line-height: 31px;
    font-weight: 300;
    text-align: right;
    border-bottom: 4px solid #095590;
    padding-bottom: 15px;
  }
}
</style>
