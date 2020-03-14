<template>
  <div class="product col">
    <picture class="product__image">
      <img :src="item.img" alt="" />
    </picture>
    <h3>{{ item.name }}</h3>
    <h4>{{ item.price }}</h4>
  </div>
</template>

<script>
export default {
  props: ["img", "item"]
};
</script>

<style lang="scss" scoped>
.product {
  min-width: 300px;
  width: 100%;
  height: 100%;
  background: #095590;
  color: #fff;
  align-items: center;
  font-family: futura-pt;
  cursor: pointer;
  padding: 5% 5% 31px 5%;

  &__image {
    width: 100%;
    background: #fff;

    & img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }

  h3 {
    font-size: 22px;
    line-height: 29px;
    text-align: center;
    letter-spacing: 0;
    margin-top: 16px;
  }

  h4 {
    font-size: 22px;
    line-height: 29px;
    font-weight: 400;
  }
}
</style>
