<template>
  <main class="popup row">
    <app-button @click.native="close"
      ><h4 slot="text" class="mobile--hide">
        WRÓĆ
      </h4>
      <app-arrow :color="'#095590'" class="mobile" slot="icon"></app-arrow>
    </app-button>
    <img
      src="/assets/logo-color.svg"
      alt="segments logo in color"
      class="logo mobile"
    />
    <section class="col">
      <picture>
        <img :src="images" alt="#" />
      </picture>
    </section>
    <section class="col">
      <div class="col details">
        <h3>{{ data.name }}</h3>
        <p class="price">{{ data.price }}</p>
      </div>
      <div class="wrapper">
        <div v-for="(content, index) in data.contents" :key="index">
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
        <a class="m-auto mobile" href="tel:+48795755920"
          >ZADZWOŃ I DOWIEDZ SIĘ WIĘCEJ</a
        >
      </div>
    </section>
  </main>
</template>

<script>
import button from "./button.vue";
import productList from "../products.js";
import arrow from "../components/arrow.vue";

export default {
  components: { "app-button": button, "app-arrow": arrow },
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
  @media (max-width: 1000px) {
    flex-direction: column;
    height: auto;
    position: static;
    transform: none;
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
    z-index: 1;
  }
  &:nth-of-type(2) {
    z-index: 0;
    overflow-y: scroll;
    padding: 0;
  }
}
.details {
  @media (max-width: 750px) {
    font-size: 18px;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px 0;
  font-family: futura-pt, sans-serif;
  font-size: 22px;
}
.wrapper {
  @media (max-width: 1000px) {
    border-radius: 84px;
    background: #095590;
    padding: 46px 38px;
    color: #fff;
    font-family: futura-pt, sans-serif;
    width: 95%;
  }
  @media (max-width: 500px) {
    border-radius: 60px;
  }
  font-family: museo-slab, sans-serif;
  display: flex;
  margin-bottom: 40px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  padding-right: 5px;
  height: auto;
  max-width: 700px;

  & .wrapper {
    padding: 0;

    & h3 {
      margin-top: 20px;
    }
  }

  h3 {
    @media (max-width: 1000px) {
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
    @media (max-width: 1000px) {
      font-size: 15px;
      font-weight: 500;
    }
    margin-top: 8px;
    font-size: 24px;
    line-height: 25px;
    font-weight: 300;
    width: 100%;
  }
  .price {
    @media (max-width: 1000px) {
      font-size: 18px;
    }
    font-family: futura-pt, sans-serif;
    font-size: 30px;
    line-height: 38px;
    margin-bottom: 58px;
    font-weight: 300;
    font-style: italic;
  }
  ul {
    list-style-type: "\2D";
  }
}
.button {
  position: fixed;
  top: 15px;
  left: 15px;
}
.logo {
  @media (max-width: 500px) {
    height: 16px;
  }
  height: 20px;
  position: absolute;
  top: 30px;
  right: 30px;
}
picture {
  @media (max-width: 1000px) {
    margin: 100px 0 50px 0;
  }
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 50%;
    height: 100%;
    min-width: 155px;
    max-width: 400px;
    object-fit: cover;
  }
}
hr {
  margin: 10px 0;
}
a.mobile {
  @media (max-width: 1000px) {
    display: flex;
  }
  height: 48px;
  min-width: 217px;
  border-radius: 4px;
  background-color: #0983e2;
  font-family: futura-pt, sans-serif;
  font-weight: 700;
  font-size: 12px;
  display: flex;
  border: none;
  align-items: center;
  justify-content: center;
  color: #fff;
  display: none;
  margin-top: 20px;
  text-decoration: none;
}
</style>
