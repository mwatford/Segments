<template>
  <section id="produkty" class="col">
    <div class="wrapper">
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
    </div>
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
@import "../styles/scss/variables.scss";

a {
  text-decoration: none;
}
section {
  @media (max-width: $xl) {
    padding: 0 10%;
  }
  @media (max-width: $md) {
    transform: translateY(-110px);
  }
  padding-bottom: 40px;
  align-items: center;
  font-family: futura-pt, sans-serif;
  padding: 0 var(--gutters-lg);
  z-index: 0;
}
.wrapper {
  @media (max-width: $md) {
    transform: translateY(0);
  }
  transform: translateY(-110px);
}
.header {
  @media (max-width: $xl) {
    margin: 130px 0 0 0;
  }
  @media (max-width: $md) {
    display: none;
  }
  margin: 150px 0 50px 0;
  align-self: flex-start;

  h1 {
    @media (max-width: $xl) {
      font-size: 46px;
      margin: 40px 0;
    }
    @media (max-width: $lg) {
      font-size: 40px;
    }
    font-size: 80px;
    padding: 0;
  }
}
ul {
  @media (max-width: $md) {
    z-index: 2;
  }
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;
}
a {
  all: unset;
}
</style>
