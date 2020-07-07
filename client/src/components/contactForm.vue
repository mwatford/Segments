<template>
  <app-popup>
    <component :is="components[active]" :response="response"></component>
  </app-popup>
</template>

<script>
import appPopup from "./popup/container.vue";
import contact from "./popup/contact.vue";
import response from "./popup/response.vue";

export default {
  components: {
    appPopup,
  },
  data() {
    return {
      active: "contact",
      components: { contact, response },
      response: {},
    };
  },
  mounted() {
    this.$eventBus.$on("popup-component", this.changeComponent);
  },
  beforeDestroy() {
    this.$eventBus.$off("popup-component", this.changeComponent);
  },
  methods: {
    changeComponent({ component, props }) {
      this.active = component;
      this.response = props;
    },
  },
};
</script>

<style lang="scss" scoped></style>
