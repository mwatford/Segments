<template>
  <div class="product col">
    <picture class="product__image">
      <img :src="item.img" alt="" />
    </picture>
    <div class="col product__text ">
      <h3 class="text-lg--black">{{ item.name }}</h3>
      <h4 class="text--blue2">{{ item.price }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  props: ["img", "item"],
};
</script>

<style lang="scss" scoped>
.product {
  @media (max-width: 1000px) {
    width: 320px;
  }
  @media (max-width: 750px) {
    max-width: 280px;
    padding: 10px 20px;
  }
  @media (max-width: 500px) {
    margin: 10px auto;
  }
  cursor: pointer;
  border-radius: 17px;
  width: 380px;
  background: #fff;
  box-shadow: #00000029 4px 1px 15px;
  padding: 10px 50px;
  max-width: 370px;
  margin: 20px 15px;

  &__image {
    @media (max-width: 1400px) {
      width: 165px;
    }
    @media (max-width: 750px) {
      width: 140px;
    }
    width: 100%;
    height: auto;
    background: #fff;
    margin: 0 auto;

    & img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }

  &__text {
    @media (max-width: 750px) {
      justify-content: flex-start;
    }
    width: 100%;
    height: 100px;
    justify-content: space-between;
    align-items: center;
  }
  h3 {
    @media (max-width: 1400px) {
      font-size: 20px;
    }
    @media (max-width: 1000px) {
      font-size: 16px;
      line-height: 21px;
    }
    font-size: 22px;
    line-height: 29px;
    text-align: center;
    letter-spacing: 0;
    margin-top: 16px;
  }

  h4 {
    @media (max-width: 1400px) {
      font-size: 18px;
    }
    @media (max-width: 1000px) {
      font-size: 16px;
    }
    font-size: 22px;
    line-height: 29px;
    font-weight: 400;
  }
}
</style>
