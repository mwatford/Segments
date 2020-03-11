<template>
  <section class="col" id="dostawa">
    <div class=""></div>
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
        ></Card>
      </div>
      <h1 class="wrap-up">Wybór jest prosty.</h1>
    </div>

    <div class="background">
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
          type: "yellow"
        },
        {
          header: "wysyłka",
          text:
            "Towar jest pakowany i wysyłany bezpośrednio od producenta w ciągu 2 dni roboczych.",
          type: "pink",
          margin: true,
          extra: true
        },
        {
          header: "klient",
          text: "Zakupy są u Ciebie.",
          type: "blue",
          margin: true
        }
      ],
      cards: [
        { header: "zamówienie", text: "Zamawiasz towar.", margin: true },
        {
          margin: true,
          extra: true,
          header: "producent",
          text:
            "Sklep zamawia towar w hurtowni, hurtownia zamawia towar u producenta."
        },
        {
          outside: true,
          extra: !true,
          margin: false,
          header: "hurtownia",
          text: `Materiały trafiaja do hurtowni, skąd wysyłane są do składu budowlanego.
          Dodatkowy koszt pracowników, magazynowania i transportu.`
        },
        {
          extra: true,
          margin: false,
          header: "skład budowlany",
          text: `Dopiero tutaj produkty z Twojego zamównienia są kompletowany.
          Kolejny raz pokrywane są koszty pracowników transporu i magazynowania.`
        },
        {
          margin: true,
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
  padding-top: 40px;
  background: #fff;
  font-family: futura-pt;
  position: relative;

  picture {
    align-self: flex-end;
    margin: 115px 115px 0 0;
    z-index: 1;
  }

  picture:nth-child(3) {
    width: 755px;
    height: 505px;
    box-shadow: -12px 13px 19px #00000029;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
.info {
  align-items: center;
  transform: translateY(-90px);
  background: linear-gradient(180deg, #042640, #084c80, #128be6);

  header {
    margin: 145px 0 135px 0;
    align-self: flex-start;
  }
}
.info-1 {
  margin: 0 auto;
}
.info-2 {
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 40px;
}
.wrap-up {
  color: #fff;
  margin: 450px 0 450px 280px;
  font-size: 113px;
  align-self: flex-start;
}
.background {
  position: absolute;
  bottom: 190px;
  width: 100%;
  padding: 0 380px;
  display: flex;
  justify-content: space-between;
  opacity: 0.1;
  z-index: 0;

  & div {
    background: #ffffff;
    width: 290px;
    height: 850px;
  }
}
</style>
