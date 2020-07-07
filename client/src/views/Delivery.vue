<template>
  <section class="col" id="dostawa" name="dostawa">
    <header class="header header--padded" id="bs">
      <h1>Bądź świadomy.</h1>
      <p class="paragraph">
        Ponoś odpowiedzialność ekologiczną za produkty, które kupujesz. Dzięki
        dostawie produktów prosto od producenta, redukujemy koszty
        magazynowania, pracowników <br />i dodatkowych transportów. Nasze
        osiedla budujemy wyłącznie z wysokiej jakości materiałów polskich
        producentów, dostarczanych na budowę bezpośrednio od nich.
      </p>
    </header>
    <div class="animation">
      <picture>
        <img src="/assets/delivery.png" alt="" />
      </picture>
      <app-animation></app-animation>
    </div>
    <div class="bkg"></div>
    <div class="info col" id="inni">
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
          class="show--1500"
        ></Card>
        <mobile-card
          v-for="(card, index) in cards"
          :key="card.header"
          :content="card"
          :number="index + 1"
          :type="index % 2 === 0 ? 'gray' : 'lightGray'"
          class="hide--1500"
        ></mobile-card>
      </div>
      <common-header
        id="my"
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
import animation from "../components/animations-svg.vue";

export default {
  components: {
    Card,
    "common-header": header,
    "mobile-card": mobileCard,
    cardRound1,
    cardRound2,
    cardRound3,
    "app-animation": animation,
  },
  data() {
    return {
      asd: [
        {
          header: "Zamówienie",
          text:
            "Zamawiasz towar u nas, <br />a my kontaktujemy się <br />z producentem.",
          margin: true,
          type: "yellow",
          icon: "logo",
        },
        {
          header: "Wysyłka",
          text:
            "Towar jest pakowany <br />i wysyłany bezpośrednio od producenta w ciągu <br />2 dni roboczych.",
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
            "Sklep zamawia towar <br />w hurtowni, hurtownia zamawia towar <br />u producenta.",
        },
        {
          outside: true,
          extra: false,
          margin: false,
          icon: "truck-1",
          header: "Hurtownia",
          text: `Materiały trafiaja do hurtowni, skąd wysyłane są do składu budowlanego.
          Dodatkowy koszt pracowników, magazynowania <br /> i transportu.`,
        },
        {
          extra: true,
          margin: false,
          icon: "truck-1",
          header: "Skład budowlany",
          text: `Dopiero tutaj produkty <br />z Twojego zamównienia <br />są kompletowane.
          Kolejny raz pokrywane są koszty pracowników transporu <br />i magazynowania.`,
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
@import "../styles/scss/variables.scss";
#dostawa {
  @media (max-width: $xl) {
    padding-top: 40px;
  }
  @media (max-width: $xs) {
    padding-top: 0;
  }
  background: #fff;
  font-family: futura-pt, sans-serif;
  position: relative;
  z-index: -1;
  width: 100%;
  min-height: 100vh;
}
.bkg {
  @media (max-width: $md) {
    display: none;
  }
  width: 100%;
  position: relative;
  background: #042640;
  height: 300px;
  transform: rotateZ(180deg) translateY(-30px);

  &::before {
    content: "";
    background: #fff;
    clip-path: ellipse(80% 51% at 29% 65%);
    width: 100%;
    height: 100%;
    height: 400px;
    top: 0;
    left: 0;
    position: absolute;
  }
}

.animation {
  @media (max-width: $xl) {
    justify-content: center;
    margin: 0px 10%;
  }
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  position: relative;
  align-items: center;
  margin: 0 var(--gutters-lg);
  flex-wrap: wrap;

  picture {
    @media (max-width: $xl) {
      margin: 54px 10% 0 10%;
    }
    @media (max-width: $md) {
      margin: 20px auto 10px auto;
    }
    @media (max-width: $sm) {
      margin: 20px auto;
    }
    margin: 115px 0 0 0;
    z-index: 1;
    max-width: 755px;
    max-height: 505px;

    img {
      @media (max-width: $md) {
        width: 60vw;
        box-shadow: none;
      }
      box-shadow: 7px 10px 16px #00000029;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  svg {
    @media (min-width: 1920px) {
      bottom: 200px;
      right: 0;
      display: flex;
      max-width: 800px;
    }
    display: none;
    position: absolute;
    bottom: 130px;
    max-width: 500px;
  }
}
.header {
  @media (max-width: $md) {
    padding-top: 0;
    margin-top: 0;
  }
  padding-top: 60px;
}
.info {
  @media (max-width: $md) {
    transform: translateY(-50px);
  }
  align-items: center;
  background: linear-gradient(180deg, #042640, #084c80, #128be6);

  header {
    @media (max-width: $md) {
      &:nth-of-type(1) {
        margin: 90px auto 47px auto;
      }
      &:nth-of-type(2) {
        margin: 43px auto 25px auto;
      }
    }
    margin: 60px 0 135px 0;
    align-self: flex-start;
  }
}
.info-1 {
  @media (max-width: 1550px) {
    flex-direction: column;
  }
  @media (max-width: $md) {
    flex-direction: column;
    margin-bottom: 0;
  }
  margin: 0 10px 130px 10px;
  flex-wrap: wrap;
  justify-content: center;
}
.info-2 {
  @media (max-width: $md) {
    justify-content: space-around;
    width: 100%;
    padding: 0 10vw;
    align-items: center;
  }
  @media (max-width: 770px) {
    flex-direction: column;
    padding: 0 16vw;
  }
  @media (max-width: $xs) {
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
  @media (max-width: $xl) {
    height: 90vh;
    max-height: 600px;
  }
  @media (max-width: $md) {
    max-height: 500px;
    margin-bottom: 80px;
  }
  @media (max-width: $xs) {
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
    @media (max-width: $xl) {
      font-size: 90px;
    }
    @media (max-width: $md) {
      font-size: 54px;
    }
    @media (max-width: $sm) {
      font-size: 48px;
    }
    @media (max-width: $xs) {
      font-size: 32px;
    }
    font-size: 113px;
  }

  & .background-2 {
    top: 0;
  }
}
</style>
