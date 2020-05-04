<template>
  <section id="produkty" class="col">
    <header class="header">
      <h1 class="text--header">Nasze produkty.</h1>
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
    product,
  },
  data() {
    return {
      products,
      active: null,
    };
  },
  methods: {
    openItem(product) {
      this.active = product;
    },
    closeItem() {
      this.active = null;
    },
  },
  mounted() {
    this.$eventBus.$on("closeItem", this.closeItem);
    document.addEventListener("keydown", (ev) => {
      if (ev.keyCode === 27) this.closeItem();
    });
  },
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
section {
  @media (max-width: 1400px) {
    padding: 0 10%;
  }
  padding-bottom: 40px;
  align-items: center;
  font-family: futura-pt, sans-serif;
  padding: 0 var(--gutters-lg);
  transform: translateY(-110px);
  z-index: 3;
}
.header {
  @media (max-width: 1400px) {
    margin: 130px 0 0 0;
  }
  @media (max-width: 1000px) {
    display: none;
  }
  margin: 190px 0 50px 0;
  align-self: flex-start;

  h1 {
    @media (max-width: 1400px) {
      font-size: 46px;
      margin: 40px 0;
    }
    @media (max-width: 1200px) {
      font-size: 40px;
    }
    font-size: 80px;
    padding: 0;
  }
}
ul {
  @media (max-width: 1000px) {
    z-index: 2;
  }
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;
}
</style>
