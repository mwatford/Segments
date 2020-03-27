<template>
  <svg xmlns="http://www.w3.org/2000/svg" class="house" viewBox="0 0 1713.102 173.972">
    <path
      class="a"
      d="M-277.1,160.989l1087.582,1.36h207.381V111.3l-7.581,2.012,44.292-58.8-6.128,48.167-27.659,7.376,31.534-4.247,9.741-73.442,10.393,69.065,27.771-45.28.5-21.885-34.644-8.009,34.141,4.377V8.35l7.189-7.19,18.2,6.817V32.992l-20.265,20.265L1131,33.755l51.166-16.391L1109.857,94.29l-33.4,7.748,34.272-2.5,73.423-77.3,58.169,76.795-58.411-70.052L1121.5,94.29V171.14l-98.2-11.064,96.184.913,111.327,5.606.372-62.173h20.638l-49.526-64.8,57.908,6.128,59.472,64.2-83.351-1.285,83.8,5.141.13,5.364-.261,36.9-84.562,4,84.692,2.384v.317H1432.5"
      transform="translate(278.852 0.874)"
    />
  </svg>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.a {
  stroke-dasharray: 3760;
  stroke-dashoffset: 3760;
  fill: none;
  stroke: #fff;
  stroke-linecap: square;
  stroke-miterlimit: 5;
  stroke-width: 3.5px;
  animation: animation 3.5s cubic-bezier(.51,.43,.19,.97) forwards;
}
.house {
  width: 90vw;
  min-height: 170px;
}
@keyframes animation {
  to {
    stroke-dashoffset: 0;
  }
}
</style>
