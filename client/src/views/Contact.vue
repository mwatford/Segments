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
      <a class="contact col" href="tel:+48798755925">
        <picture>
          <img class="mobile--hide" src="/assets/map-1.svg" />
          <img class="mobile contact__icon" src="/assets/Phone.svg" alt="#" />
        </picture>
        <div class="col">
          <h3 class="mobile--hide">
            Sprzedaż oraz Inwestycje Deweloperskie Polska
          </h3>
          <h3 class="mobile">Polska</h3>
          <h3>Mateusz</h3>
          <h3 class="contact__number">+48 795 755 925</h3>
          <h3>kontakt@segments.pl</h3>
        </div>
      </a>
      <a class="contact col" href="tel:+48795755920">
        <picture>
          <img class="mobile--hide" src="/assets/mapa.png" />
          <img class="mobile contact__icon" src="/assets/Phone.svg" alt="#" />
        </picture>
        <div class="col">
          <h3 class="mobile--hide">
            Sales and Development Investment European Union
          </h3>
          <h3 class="mobile">European Union</h3>
          <h3>Jakub</h3>
          <h3 class="contact__number">+48 795 755 920</h3>
          <h3>j.duraj@segments.pl</h3>
        </div>
      </a>
    </div>
  </section>
</template>

<script>
import map_1 from "../components/map-1.vue";

export default {
  components: {
    "map-1": map_1,
  },
};
</script>

<style lang="scss" scoped>
#kontakt {
  @media (max-width: 1400px) {
    padding: 60px 0 50px 0;
  }
  @media (max-width: 1000px) {
    padding: 0 0 10px 0;
    transform: translateY(-40px);
  }
  position: relative;
  padding: 170px 0 50px 0;
  overflow: hidden;

  header {
    @media (max-width: 1000px) {
      margin: 0;
    }
    font-family: futura-pt, sans-serif;
    margin-bottom: 25px;
  }
}
a {
  text-decoration: none;
  color: #000;
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
    justify-content: center;
  }
  @media (max-width: 1000px) {
    flex-direction: row;
  }
  align-items: center;
  width: 50%;

  &:nth-of-type(1) {
    @media (max-width: 1400px) {
      margin: 10px 8%;
    }
    @media (max-width: 1000px) {
      margin-top: 40px;
    }
    margin-left: 200px;
  }
  &:nth-of-type(2) {
    @media (max-width: 1400px) {
      margin: 10px 8%;
    }
    @media (max-width: 1000px) {
      margin-top: 40px;
    }
    margin-right: 260px;
  }

  &__icon {
    height: 22px;
  }

  h3 {
    @media (max-width: 1000px) {
      font-size: 20px;
      line-height: 1;
      font-family: futura-pt, sans-serif;
      font-weight: 400;
    }
    @media (max-width: 500px) {
      font-size: 14px;
      line-height: 16px;
    }
    font-family: museo-slab, sans-serif;
    font-size: 24px;
    line-height: 32px;
    font-weight: 500;
    margin-bottom: 3px;

    &.contact__number {
      @media (max-width: 1000px) {
        font-weight: 600;
      }
    }
  }

  picture {
    @media (max-width: 1000px) {
      width: 40px;
      margin: auto;
    }
    @media (max-width: 500px) {
      width: 30px;
      margin: auto;
    }
    z-index: 1;
    margin-bottom: 40px;
    width: 100%;
    display: flex;
    max-width: 400px;
    height: 100%;

    & > img {
      width: 100%;
      margin: auto;
    }
  }

  & .col {
    @media (max-width: 1000px) {
      border-left: 3px solid #084c80;
      width: 75%;
    }
    width: 100%;
    padding-left: 25px;
    border-left: 53px solid #084c80;
  }
}
</style>
