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
  max-width: 446px;
  width: 100%;
  background: #095590;
  color: #fff;
  align-items: center;
  justify-content: space-around;
  font-family: futura-pt;
  cursor: pointer;
  padding: 24px 0 31px 0;
  margin-bottom: 20px;

  &__image {
    width: 379px;
    height: 309px;
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
