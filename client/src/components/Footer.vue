<template>
  <footer class="row">
    <logo class="asd"></logo>
    <div class="row">
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
  @media (max-width: 1400px) {
    padding: 0 8%;
  }
  padding: 0 210px;
  background: #095590;
  color: #fff;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
}
a {
  margin: 10px 0 10px 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
