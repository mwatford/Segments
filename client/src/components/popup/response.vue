<template>
  <div class="notification col">
    <header class="header">
      <h1 class="text--blue2">{{ response.header }}</h1>
    </header>
    <p class="paragraph" v-html="response.message"></p>
    <input type="submit" value="WRÓĆ DO STRONY" @click="closePopup" />
  </div>
</template>

<script>
import { closePopup } from "./handlers.js";

export default {
  props: ["response"],
  methods: {
    closePopup,
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/scss/variables.scss";

.popup input {
  &[type="submit"] {
    margin-left: 0;
    margin-top: 24px;
  }
}
.notification {
  .header {
    h1,
    .paragraph {
      align-items: center;
      text-align: center;
    }
  }

  @media (max-width: $md) {
    justify-content: center;
  }
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
}
@media (max-width: $md) {
  .popup {
    .header {
      width: 90%;
    }
  }
}
</style>
