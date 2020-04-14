<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="house"
    viewBox="0 0 363.36 120.336"
    @click="length"
  >
    <path
      class="a"
      d="M341.027,168.168H299.976V139.647l-32.332-8.508v43.212L231.106,172.6V150.481l26.933-.377.194,26.173h7.593l.017-45.442-15.6,1.426-.046-1.21,16.637-1.54,20.026,5.546V93L249.58,58.5V146.61l-50.681,2-.308-26.8-19.1,4.005v16.021l31.17-1.786L210.414,90.6l4.66,2.1-.308,47.292,25.879-2.619L240.337,75.6l-32.349,13.71v56.726l39.744-2.051V57.264L202.288,80.833v23.107L175.8,113.053v35.624h15.307v20.149H-22.333"
      transform="translate(20, -56.441)"
    />
  </svg>
</template>

<script>
export default {
  methods: {
    length() {
      const asd = document.getElementsByClassName("a")[0].getTotalLength();
      console.log(asd);
    }
  }
};
</script>

<style lang="scss" scoped>
.a {
  stroke-dasharray: 1486;
  stroke-dashoffset: -1486;
  fill: none;
  stroke: #fff;
  stroke-linecap: square;
  stroke-miterlimit: 5;
  stroke-width: 1.2px;
  stroke-miterlimit: 10;
  animation: animation 3.5s cubic-bezier(0.51, 0.43, 0.19, 0.97) forwards;
}
.house {
  width: 100%;
  // min-height: 170px;
  // height: 120px;
}
@keyframes animation {
  to {
    stroke-dashoffset: 0;
  }
}
</style>
