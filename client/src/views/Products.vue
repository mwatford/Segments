<template>
  <section id="produkty" class="col">
    <header>
      <h1>Nasze produkty.</h1>
    </header>
    <ul>
      <li
        v-for="(item, index) in products"
        :key="index"
        @click="openItem(item)"
      >
        <product :item="item"></product>
      </li>
    </ul>
    <popup v-if="active" :data="active"></popup>
  </section>
</template>

<script>
import product from "../components/product-tile.vue";
import products from "../products";
import popup from "../components/popup.vue";

export default {
  components: {
    product,
    popup
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
section {
  padding: 40px 0;
  align-items: center;
  font-family: futura-pt, sans-serif;
}
h1 {
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
    margin: 0 10px;
  }
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
