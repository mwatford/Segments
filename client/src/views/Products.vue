<template>
  <section id="produkty" class="col">
    <header class="header">
      <h1>Nasze produkty.</h1>
    </header>
    <ul>
      <router-link
        v-for="(item, index) in products"
        :key="index"
        :to="`/product/${item.name}`"
      >
        <product :item="item"></product>
      </router-link>
    </ul>
  </section>
</template>

<script>
import product from "../components/product-tile.vue";
import products from "../products";

export default {
  components: {
    product
  },
  data() {
    return {
      products,
      active: null
    };
  },
  methods: {
    openItem(product) {
      this.active = product;
    },
    closeItem() {
      this.active = null;
    }
  },
  mounted() {
    this.$eventBus.$on("closeItem", this.closeItem);
    document.addEventListener("keydown", ev => {
      if (ev.keyCode === 27) this.closeItem();
    });
  }
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
section {
  @media (max-width: 1400px) {
    padding-bottom: 10px;
  }
  padding: 0 0 40px 0;
  align-items: center;
  font-family: futura-pt, sans-serif;
}
.header {
  @media (max-width: 1400px) {
    margin: 30px;
  }
  @media (max-width: 1000px) {
    display: none;
  }
  margin: auto;
  margin: 50px 0;
}
ul {
  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
    transform: translateY(-75px);
    z-index: 2;
  }
  @media (max-width: 750px) {
    grid-template-columns: 1fr;
  }
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  grid-gap: 20px;
  margin: 0 8%;
}
.scale-enter-active,
.scale-leave-active {
  transition: all 0.3s;
}
.scale-leave-to,
.scale-enter {
  opacity: 0;
}
</style>
