<template>
  <section id="produkty" class="col">
    <header>
      <h1>Nasze produkty.</h1>
    </header>
    <ul>
      <li v-for="(item, index) in products" :key="index">
        <product :item="item"></product>
      </li>
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
      products
    };
  }
};
</script>

<style lang="scss" scoped>
section {
  padding-top: 40px;
  align-items: center;
}
h1 {
  font-family: futura-pt, sans-serif;
  margin: auto;
  font-size: 80px;
  font-weight: 700;
  color: var(--header);
  margin-bottom: 100px;
}
ul {
  @media (max-width: 1000px) {
    width: 100%;
    justify-content: space-evenly;
  }
  display: flex;
  list-style-type: none;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 1398px;

  li {
    min-width: 446px;
  }
}
</style>
