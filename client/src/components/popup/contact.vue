<template>
  <form class="contactForm col" @submit.prevent="submitForm">
    <header class="header">
      <h1 class="text--blue2">
        Chcesz dowiedzieć się więcej <br />
        lub złożyć zamówienie?
      </h1>
      <p class="paragraph">
        Zostaw nam swój numer, a skontaktujemy<br />
        się z Tobą w dogodnym terminie.
      </p>
    </header>
    <input type="date" v-model="date" required />
    <div class="row">
      <input
        type="tel"
        placeholder="Numer telefonu"
        v-model="number"
        required
      />
      <input type="submit" value="UMÓW" />
    </div>
  </form>
</template>

<script>
import { changeComponent } from "./handlers";

export default {
  data() {
    return {
      number: "",
      date: "",
    };
  },
  methods: {
    changeComponent,
    submitForm() {
      const d = new FormData();
      d.append("number", this.number);
      d.append("date", this.date);

      fetch("http://localhost:3000/contact", {
        method: "post",
        body: d,
      })
        .then(() => {
          const props = {
            header: "Rozmowa została umówiona!",
            message: `Dziękujemy za zainteresowanie naszą ofertą. <br />
      Konsultant wkrótce się z Państwem skontaktuje.`,
          };
          this.changeComponent("response", props);
        })
        .catch(() => {
          const props = {
            header: "Wystąpił nieoczekiwany błąd.",
            message: `Spróbuj ponownie.`,
          };
          this.changeComponent("response", props);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/scss/variables.scss";

.contactForm {
  @media (max-width: $sm) {
    justify-content: center;
    align-items: center;
    padding: 0;
  }
  width: 100%;
  height: 100%;
  padding-left: 100px;
  padding-top: 50px;

  .row {
    @media (max-width: $sm) {
      flex-direction: column;
    }
  }
}
.header {
  width: 100%;

  h1 {
    padding: 0;
  }
  .paragraph {
    margin: 0;
  }
}
@media (max-width: $sm) {
  br {
    display: none;
  }
  .popup {
    input {
      max-width: 200px;
    }
  }
  .header {
    align-items: center;
    text-align: center;
    width: 90%;
  }
}
</style>
