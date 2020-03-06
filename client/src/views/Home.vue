<template>
  <div class="home col">
    <div class="row">
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
  </div>
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
.row {
  margin-top: 50px;
  width: 90%;
}
</style>
