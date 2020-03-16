<template>
  <main class="popup row">
    <section class="col">
      <app-button @click.native="close">WRÓĆ</app-button>
      <picture>
        <img :src="images" alt="#" />
      </picture>
    </section>
    <section class="col">
      <div class="h-100">
        <div class="wrapper">
          <h3>{{ data.name }}</h3>
          <p class="price">{{ data.price }}</p>
        </div>
        <div
          class="wrapper"
          v-for="(content, index) in data.contents"
          :key="index"
        >
          <div class="col" v-if="Array.isArray(content)">
            <p v-for="(item, itemIndex) in content" :key="itemIndex">
              {{ item }}
            </p>
          </div>
          <div class="col" v-if="content.type === 'nested'">
            <p>{{ content.header }}:</p>
            <div
              class="col"
              v-for="(list, listIn) in content.data"
              :key="listIn"
            >
              <p>{{ list.header }}:</p>
              <ul class="col">
                <li v-for="listItem in list.data" :key="listItem">
                  {{ listItem }}
                </li>
              </ul>
            </div>
          </div>
          <div class="col" v-else>
            <div
              class="wrapper"
              v-for="(list, listIndex) in content.lists"
              :key="listIndex"
            >
              <p>{{ list.header }}:</p>
              <ul class="col">
                <li
                  v-for="(listItem, listItemIndex) in list.data"
                  :key="listItemIndex"
                >
                  {{ listItem }}
                </li>
              </ul>
            </div>
          </div>
          <div class="col" v-if="content.products">
            <div
              class="wrapper"
              v-for="(product, productIn) in content.products"
              :key="productIn"
            >
              <h3>{{ product.name }}</h3>
              <p class="price">{{ product.price }}</p>
              <div class="col" v-for="(list, id) in product.lists" :key="id">
                <hr />
                <p>{{ list.header }}:</p>
                <ul
                  class="col"
                  v-for="(listItem, listItemId) in list.data"
                  :key="listItemId"
                >
                  <li>{{ listItem }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import button from "./button.vue";
import productList from "../products.js";

export default {
  components: { "app-button": button },
  computed: {
    name() {
      return this.$route.params.name;
    },
    data() {
      return productList.find(el => el.name === this.name);
    },
    products() {
      return this.data.products;
    },
    images() {
      return this.data.img;
    }
  },
  methods: {
    close() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
* {
  user-select: none;
}
.popup {
  @media (max-width: 850px) {
    flex-direction: column;
  }
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffffe3;
  overflow-y: auto;
  color: var(--header);
}
section {
  @media (max-width: 1400px) {
    width: 100%;
  }
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;

  &:nth-of-type(1) {
    justify-content: center;
  }
  &:nth-of-type(2) {
    overflow-y: scroll;
    padding: 20px 0;
  }
}

.h-100 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 90%;
  margin: auto;
  max-width: 650px;
  font-family: museo-slab, sans-serif;
}
.wrapper {
  display: flex;
  margin-bottom: 40px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  max-width: 700px;

  h3 {
    @media (max-width: 850px) {
      font-size: 24px;
    }
    font-family: futura-pt, sans-serif;
    text-transform: uppercase;
    font-size: 30px;
    line-height: 23px;
    font-weight: 500px;
  }
  p,
  ul {
    @media (max-width: 850px) {
      font-size: 18px;
    }
    margin-top: 8px;
    font-size: 24px;
    line-height: 32px;
    font-weight: 300;
    width: 100%;
  }
  .price {
    @media (max-width: 850px) {
      font-size: 21px;
    }
    font-family: futura-pt, sans-serif;
    font-size: 30px;
    line-height: 38px;
    margin-bottom: 58px;
    font-weight: 300;
    font-style: italic;
  }
  ul {
    list-style-type: "-";
  }
}
.button {
  position: absolute;
  top: 0;
  left: 0;
  margin: 20px 0 0 20px;
}
picture {
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    max-width: 400px;
    object-fit: cover;
  }
}
</style>
