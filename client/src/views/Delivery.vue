<template>
  <section class="col" id="dostawa">
    <div class="background-1">
      <div></div>
      <div></div>
      <div></div>
    </div>
    <header class="header">
      <h1>Dostawa.</h1>
      <p class="paragraph">
        Bądź świadomy swojej odpowiedzialności ekologicznej za produkty które
        kupujesz. Dzięki dostawie produktów bezpośrednio od producenta
        redukujemy koszty magazynowania, pracowników oraz dodatkowych
        transportów. Nasze osiedla budowane są tylko z wysokiej jakości
        materiałów Polskich producentów, oraz dostarczane są na budowę
        bezpośrednio od nich.
      </p>
    </header>
    <picture>
      <img src="/assets/delivery.png" alt="" />
    </picture>
    <div class="info col">
      <common-header
        main="Jak to wygląda"
        subheader="u innych?"
      ></common-header>
      <div class="info-1 row">
        <Card
          v-for="(card, index) in cards"
          :key="index"
          :type="index % 2 === 0 ? 'gray' : 'lightGray'"
          :content="card"
          :number="index + 1"
          :extra="card.extra"
          :margin="card.margin"
          :outside="card.outside"
          :icon="card.icon"
          class="mobile--hide"
        ></Card>
        <mobile-card
          v-for="(card, index) in cards"
          :key="card.header"
          :content="card"
          :number="index + 1"
          :type="index % 2 === 0 ? 'gray' : 'lightGray'"
          class="mobile"
        ></mobile-card>
      </div>
      <common-header
        main="Jak to wygląda"
        subheader="u nas?"
        :large="true"
      ></common-header>
      <div class="row info-2">
        <Card
          v-for="(card, index) in asd"
          :key="card.header"
          :type="card.type"
          :content="card"
          :number="index + 1"
          :extra="card.extra"
          :margin="card.margin"
          :outside="card.outside"
          :large="true"
          :icon="card.icon"
          class="mobile--hide"
        ></Card>
        <component
          :class="['mobile card--round', index % 2 !== 0 ? 'a-end' : 'a-start']"
          v-for="(card, index) in asd"
          :key="index"
          :is="`cardRound${index + 1}`"
          alt="#"
        />
      </div>
      <div class="wrap-up">
        <div class="background-2">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <h1 data-aos="fade">Wybór jest prosty.</h1>
      </div>
    </div>
  </section>
</template>

<script>
import Card from "../components/Card.vue";
import mobileCard from "../components/MobileCard.vue";
import header from "../components/header.vue";
import cardRound1 from "../components/card-round-1.vue";
import cardRound2 from "../components/card-round-2.vue";
import cardRound3 from "../components/card-round-3.vue";

export default {
  components: {
    Card,
    "common-header": header,
    "mobile-card": mobileCard,
    cardRound1,
    cardRound2,
    cardRound3,
  },
  data() {
    return {
      asd: [
        {
          header: "Zamówienie",
          text: "Zamawiasz towar u nas, a my kontaktujemy się z producentem.",
          margin: true,
          type: "yellow",
          icon: "logo",
        },
        {
          header: "Wysyłka",
          text:
            "Towar jest pakowany i wysyłany bezpośrednio od producenta w ciągu 2 dni roboczych.",
          type: "pink",
          margin: true,
          icon: "truck-2",
          extra: true,
        },
        {
          header: "Klient",
          text: "Zakupy są u Ciebie.",
          type: "blue",
          icon: "client",
          margin: true,
        },
      ],
      cards: [
        {
          header: "Zamówienie",
          text: "Zamawiasz towar.",
          icon: "text",
          margin: true,
        },
        {
          margin: true,
          extra: true,
          header: "Producent",
          icon: "truck-1",
          text:
            "Sklep zamawia towar w hurtowni, hurtownia zamawia towar u producenta.",
        },
        {
          outside: true,
          extra: false,
          margin: false,
          icon: "truck-1",
          header: "Hurtownia",
          text: `Materiały trafiaja do hurtowni, skąd wysyłane są do składu budowlanego.
          Dodatkowy koszt pracowników, magazynowania i transportu.`,
        },
        {
          extra: true,
          margin: false,
          icon: "truck-1",
          header: "Skład budowlany",
          text: `Dopiero tutaj produkty z Twojego zamównienia są kompletowane.
          Kolejny raz pokrywane są koszty pracowników transporu i magazynowania.`,
        },
        {
          margin: true,
          icon: "client",
          header: "Klient",
          text: `Zakupy są u Ciebie.`,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
#dostawa {
  @media (max-width: 1400px) {
    padding-top: 40px;
  }
  padding-top: 80px;
  background: #fff;
  font-family: futura-pt, sans-serif;
  position: relative;
  z-index: 1;
  width: 100%;
  min-height: 100vh;

  picture {
    @media (max-width: 1400px) {
      margin: 54px 10% 0 10%;
    }
    @media (max-width: 1000px) {
      margin: 20px auto 10px auto;
    }
    align-self: flex-end;
    margin: 115px 115px 0 0;
    z-index: 1;
    max-width: 755px;
    max-height: 505px;

    img {
      @media (max-width: 1000px) {
        width: 60vw;
        box-shadow: none;
      }
      box-shadow: 7px 10px 16px #00000029;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}

.info {
  align-items: center;
  transform: translateY(-40px);
  background: linear-gradient(180deg, #042640, #084c80, #128be6);

  header {
    @media (max-width: 1000px) {
      &:nth-of-type(1) {
        margin: 90px auto 47px auto;
      }
      &:nth-of-type(2) {
        margin: 43px auto 25px auto;
      }
    }
    margin: 145px 0 135px 0;
    align-self: flex-start;
  }
}
.info-1 {
  @media (max-width: 1000px) {
    flex-direction: column;
  }
  margin: 0 10px;
  flex-wrap: wrap;
  justify-content: center;
}
.info-2 {
  @media (max-width: 1000px) {
    justify-content: space-around;
    width: 100%;
    padding: 0 10vw;
    align-items: center;
  }
  @media (max-width: 770px) {
    flex-direction: column;
    padding: 0 16vw;
  }
  @media (max-width: 500px) {
    padding: 0 10vw;
  }
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 40px;
}
.card--round {
  height: 190px;
  width: 215px;
}
.wrap-up {
  @media (max-width: 1400px) {
    height: 90vh;
    max-height: 600px;
  }
  @media (max-width: 1000px) {
    max-height: 500px;
    margin-bottom: 80px;
  }
  @media (max-width: 500px) {
    max-height: 240px;
  }
  color: #fff;
  justify-content: center;
  align-items: center;
  display: flex;
  width: 100%;
  position: relative;
  height: 850px;
  margin-bottom: 100px;
  text-align: center;

  h1 {
    @media (max-width: 1400px) {
      font-size: 90px;
    }
    @media (max-width: 1000px) {
      font-size: 54px;
    }
    @media (max-width: 750px) {
      font-size: 48px;
    }
    @media (max-width: 500px) {
      font-size: 32px;
    }
    font-size: 113px;
  }

  & .background-2 {
    top: 0;
  }
}
</style>
