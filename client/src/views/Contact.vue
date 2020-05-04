<template>
  <section id="kontakt" class="col">
    <header class="header text--blue3">
      <h1>Doradzimy.</h1>
      <h1>Dobierzemy ofertę dostosowaną <br />do Twoich potrzeb.</h1>
      <h1>Skompletujemy zamówienie.</h1>
    </header>
    <div class="row content">
      <a class="contact row" href="tel:+48798755925">
        <picture>
          <img class="contact__icon" src="/assets/Phone.svg" alt="#" />
        </picture>
        <div class="contact__details col">
          <h3>Polska</h3>
          <h3>Mateusz</h3>
          <h3 class="contact__number">
            <strong>
              +48 795 755 925
            </strong>
          </h3>
          <h3>kontakt@segments.pl</h3>
        </div>
      </a>
      <a class="contact row" href="tel:+48795755920">
        <picture>
          <img class="contact__icon" src="/assets/Phone.svg" alt="#" />
        </picture>
        <div class="contact__details col">
          <h3>European Union</h3>
          <h3>Jakub</h3>
          <h3>
            <strong>
              +48 795 755 920
            </strong>
          </h3>
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
  }
  position: relative;
  padding: 0 0 50px 0;
  overflow: hidden;
  font-family: futura-pt, sans-serif;

  header {
    @media (max-width: 1000px) {
      margin: 0;
    }
    font-family: futura-pt, sans-serif;
    margin-bottom: 25px;
    margin-top: 170px;
  }
}
a {
  text-decoration: none;
  color: #000;
}
.content {
  @media (max-width: 1400px) {
    flex-wrap: wrap;
    transform: none;
    padding: 0 10%;
  }
  margin: 70px 0;
  padding: 0 var(--gutters-lg);
  align-items: center;
}

br {
  @media (max-width: 500px) {
    display: none;
  }
}

.contact {
  @media (max-width: 1000px) {
    margin-bottom: 40px;
    width: 100%;

    &:last-child {
      margin-bottom: 0;
    }
  }

  align-items: center;
  width: 50%;

  picture {
    @media (max-width: 500px) {
      width: 50px;
    }
    width: 80px;
  }

  &__icon {
    @media (max-width: 500px) {
      height: 26px;
    }
    margin-left: auto;
    height: 32px;
  }

  &__details {
    border-left: 1px solid var(--blue2);
    padding-left: 40px;
    width: 100%;

    h3 {
      @media (max-width: 750px) {
        font-size: 20px;
      }
      font-weight: 400;
      font-size: 26px;
    }
  }
}
</style>
