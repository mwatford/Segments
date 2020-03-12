<template>
  <footer class="row">
    <logo class="asd"></logo>
    <div class="row">
      <!-- <a href="">
        <svg fill="#fff" width="20" height="20">
          <instagram-icon></instagram-icon>
        </svg>
      </a> -->
      <a href="https://www.facebook.com/segmentsdevelopment">
        <svg fill="#fff" width="20px" height="20px">
          <facebook-icon></facebook-icon>
        </svg>
      </a>
    </div>
  </footer>
</template>

<script>
import logo from "./logo.vue";
import fb from "./facebook.vue";
import ig from "./instagram.vue";

export default {
  components: {
    logo,
    "facebook-icon": fb,
    "instagram-icon": ig
  }
};
</script>

<style lang="scss" scoped>
footer {
  padding: 0 210px;
  background: #095590;
  color: #fff;
  justify-content: space-between;
  align-items: center;
}
a {
  margin: 10px 0 10px 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
