<template>
  <section id="kontakt" class="col">
    <div class="background-1">
      <div></div>
      <div></div>
      <div></div>
    </div>
    <header class="header" data-aos="fade-up">
      <h1>Kontakt.</h1>
    </header>
    <div class="row content">
      <div class="contact col" data-aos="fade-right">
        <picture>
          <map-1></map-1>
        </picture>
        <div class="col">
          <h3>
            Sprzedaż oraz Inwestycje Deweloperskie Polska
          </h3>
          <h3>Szymon</h3>
          <h3>+48 795 755 925</h3>
          <h3>kontakt@segments.pl</h3>
        </div>
      </div>
      <div class="contact col" data-aos="fade-right" data-aos-delay="150">
        <picture><img src="/assets/mapa.png" alt=""/></picture>
        <div class="col">
          <h3>
            Sales and Development Investment European Union
          </h3>
          <h3>Jakub</h3>
          <h3>+48 795 755 920</h3>
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
    margin-bottom: 25px;
  }
}
.content {
  @media (max-width: 1300px) {
    flex-wrap: wrap;
    transform: none;
  }
  justify-content: space-around;
  align-items: flex-end;
  transform: translateY(-80px);
}
.contact {
  @media (max-width: 1400px) {
    width: 100%;
  }
  align-items: center;
  width: 50%;

  &:nth-of-type(1) {
    @media (max-width: 1400px) {
      margin: 10px 8%;
    }
    margin-left: 200px;
  }
  &:nth-of-type(2) {
    @media (max-width: 1400px) {
      margin: 10px 8%;
    }
    margin-right: 260px;
  }

  h3 {
    @media (max-width: 1000px) {
      font-size: 20px;
      line-height: 1;
    }
    font-family: museo-slab, sans-serif;
    font-size: 24px;
    line-height: 32px;
    font-weight: 500;
    margin-bottom: 3px;
  }

  picture {
    z-index: 1;
    margin-bottom: 40px;
    width: 100%;
    display: flex;
    max-width: 400px;

    & > * {
      width: 100%;
      margin: auto;
    }
  }

  & .col {
    min-width: 300px;
    width: 100%;
    padding-left: 25px;
    border-left: 53px solid #084c80;
  }
}
.background-1 {
  @media (max-width: 1400px) {
    padding: 0 8%;
  }
}
</style>
