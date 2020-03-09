<template>
  <section class="row" id="dostawa">
    <header>
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

    <!-- <Card
      v-for="(card, index) in cards"
      :key="index"
      :type="index % 2 === 0 ? 'gray' : 'lightGray'"
      :content="card"
      :number="index + 1"
      :extra="card.extra"
      :margin="card.margin"
      :outside="card.outside"
    ></Card> -->
  </section>
</template>

<script>
import Card from "../components/Card.vue";

export default {
  components: {
    Card
  },
  data() {
    return {
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
  padding: 40px 20px;
  background: #fff;
  padding-top: 100px;
}
header {
  width: 40%;

  h1 {
    margin-bottom: 40px;
    font-family: futura-pt;
    font-size: 80px;
    font-weight: 700;
    letter-spacing: 0;
  }
  p {
    font-family: museo-slab;
    font-size: 24px;
    line-height: 32px;
    letter-spacing: 0;
    font-weight: 300;
  }
}
// background: linear-gradient(180deg, #042640, #084c80, #128be6);
</style>
