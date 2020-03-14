<template>
  <section class="col" id="dostawa">
    <div class="background-1 parallax">
      <div></div>
      <div></div>
      <div></div>
    </div>
    <header class="header">
      <h1>Dostawa.</h1>
      <p>
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
        ></Card>
      </div>
      <common-header
        main="Jak to wygląda"
        subheader="u nas?"
        :large="true"
      ></common-header>
      <div class="row info-2">
        <Card
          v-for="(card, index) in asd"
          :key="index"
          :type="card.type"
          :content="card"
          :number="index + 1"
          :extra="card.extra"
          :margin="card.margin"
          :outside="card.outside"
          :large="true"
          :icon="card.icon"
        ></Card>
      </div>
      <h1 class="wrap-up">Wybór jest prosty.</h1>
    </div>
    <div class="background-2 parallax">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </section>
</template>

<script>
import Card from "../components/Card.vue";
import header from "../components/header.vue";

export default {
  components: {
    Card,
    "common-header": header
  },
  data() {
    return {
      asd: [
        {
          header: "zamówienie",
          text: "Zamawiasz towar u nas, a my kontaktujemy się z producentem.",
          margin: true,
          type: "yellow",
          icon: "logo"
        },
        {
          header: "wysyłka",
          text:
            "Towar jest pakowany i wysyłany bezpośrednio od producenta w ciągu 2 dni roboczych.",
          type: "pink",
          margin: true,
          icon: "truck-2",
          extra: true
        },
        {
          header: "klient",
          text: "Zakupy są u Ciebie.",
          type: "blue",
          icon: "client",
          margin: true
        }
      ],
      cards: [
        {
          header: "zamówienie",
          text: "Zamawiasz towar.",
          icon: "text",
          margin: true
        },
        {
          margin: true,
          extra: true,
          header: "producent",
          icon: "truck-1",
          text:
            "Sklep zamawia towar w hurtowni, hurtownia zamawia towar u producenta."
        },
        {
          outside: true,
          extra: false,
          margin: false,
          icon: "truck-1",
          header: "hurtownia",
          text: `Materiały trafiaja do hurtowni, skąd wysyłane są do składu budowlanego.
          Dodatkowy koszt pracowników, magazynowania i transportu.`
        },
        {
          extra: true,
          margin: false,
          icon: "truck-1",
          header: "skład budowlany",
          text: `Dopiero tutaj produkty z Twojego zamównienia są kompletowany.
          Kolejny raz pokrywane są koszty pracowników transporu i magazynowania.`
        },
        {
          margin: true,
          icon: "client",
          header: "klient",
          text: `Zakupy są u Ciebie.`
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
#dostawa {
  @media (max-width: 1400px) {
    padding-top: 50px;
  }
  padding-top: 130px;
  background: #fff;
  font-family: futura-pt, sans-serif;
  position: relative;
  z-index: 1;
  width: 100%;
  min-height: 100vh;

  picture {
    @media (max-width: 1400px) {
      margin: 54px 8% 0 8%;
    }
    align-self: flex-end;
    margin: 115px 115px 0 0;
    z-index: 1;
    max-width: 755px;
    max-height: 505px;

    img {
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
    margin: 145px 0 135px 0;
    align-self: flex-start;
  }
}
.info-1 {
  margin: 0 10px;
  flex-wrap: wrap;
  justify-content: center;
}
.info-2 {
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 40px;
}
.wrap-up {
  @media (max-width: 1400px) {
    margin: 200px auto;
    font-size: 80px;
  }
  @media (max-width: 1000px) {
    font-size: 64px;
  }
  @media (max-width: 500px) {
    font-size: 30px;
  }
  color: #fff;
  margin: 450px 0 450px 280px;
  font-size: 113px;
  align-self: flex-start;
}
</style>
