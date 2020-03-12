<template>
  <section id="kontakt" class="col">
    <div class="background-1">
      <div></div>
      <div></div>
      <div></div>
    </div>
    <header class="header">
      <h1>Kontakt.</h1>
    </header>
    <div class="row content">
      <div class="contact col">
        <picture>
          <map-1></map-1>
        </picture>
        <div class="col">
          <h3>
            Sprzedaż oraz Inwestycje Deweloperskie Polska
          </h3>
          <h3>Szymon Polak</h3>
          <h3>+48 795 755 925</h3>
          <h3>s.polak@segments.pl</h3>
        </div>
      </div>
      <div class="contact col">
        <picture><img src="/assets/mapa.png" alt=""/></picture>
        <div class="col">
          <h3>
            Sales and Development Investment European Union
          </h3>
          <h3>Jakub Duraj</h3>
          <h3>+48 795 755 925</h3>
          <h3>j.duraj@segments.pl</h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import map_1 from "../components/map-1.vue";

export default {
  components: {
    "map-1": map_1
  }
};
</script>

<style lang="scss" scoped>
#kontakt {
  position: relative;
  padding: 170px 0 40px 0;
  overflow: hidden;

  header {
    font-family: futura-pt, sans-serif;
  }
}
.content {
  padding: 0 280px;
  justify-content: space-between;
  align-items: flex-end;
  transform: translateY(-80px);
}
.contact {
  align-items: center;
  width: 50%;

  h3 {
    font-family: museo-slab, sans-serif;
    font-size: 24;
    line-height: 32px;
    font-weight: 500;
  }

  picture {
    z-index: 1;
    margin-bottom: 40px;
    width: 50%;
  }

  & .col {
    min-width: 450px;
    padding-left: 25px;
    border-left: 53px solid #084c80;
  }
}
.background-1 {
  padding: 0 470px 0 435px;
  // padding: 0 470px 0 435px;
  // div:nth-child(3) {
  //   margin-bottom: 0;
  //   height: 125px;
  // }
}
</style>
