<template>
  <section class="col" id="o_nas">
    <div class="row background">
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
    <figure class="col">
      <picture><img src="/assets/o_nas-1.jpg" alt=""/></picture>
    </figure>
    <figure class="row">
      <figcaption>
        Projekt deweloperski "Wędrowców" w Bielsku-Białej
      </figcaption>
      <picture>
        <img src="/assets/o_nas-2.jpg" alt="" />
      </picture>
    </figure>
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
  padding-top: 230px;
  position: relative;
  font-family: futura-pt;
}
.background {
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
    width: 290px;
    background: #f1f9ff;
  }
}
figure {
  align-self: flex-end;
  align-items: flex-end;
  margin: 0;
  margin-right: 115px;
  transform: translateY(-200px);

  &:nth-of-type(1) {
    & picture {
      width: 461px;
      height: 260px;
      margin-bottom: 54px;
    }
  }
  &:nth-of-type(2) {
    picture {
      width: 566px;
      height: 364px;
      margin-left: 10px;
    }
  }
  picture {
    box-shadow: 7px 10px 16px #00000029;
    img {
      width: 100%;
    }
  }

  figcaption {
    position: relative;
    width: 360px;
    font-size: 24px;
    line-height: 31px;
    font-weight: 300;
    text-align: right;
    border-bottom: 4px solid #095590;
    padding-bottom: 15px;
  }
}
</style>
