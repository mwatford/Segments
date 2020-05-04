<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1696.247 311.391"
    class="house"
  >
    <path
      class="a"
      d="M647.561,388.949H541.979V315.592l-83.157-21.881v111.14l-93.975-4.512V343.457l69.271-.969.5,67.317h19.528l.043-116.875L414.063,296.6l-.117-3.112,42.79-3.962,51.506,14.263V195.623l-95.88-88.749V333.5l-130.35,5.151-.792-68.939-49.129,10.3v41.2l80.167-4.593-.631-127.188,11.986,5.394-.792,121.633,66.561-6.735-.792-158.876-83.2,35.262v145.9l102.219-5.275V103.7L290.727,164.323v59.43L222.6,247.194v91.624h39.37v51.823H-1048.687"
      transform="translate(800, -100.414)"
    />
  </svg>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.a {
  stroke-dasharray: 4582;
  stroke-dashoffset: -4582;
  fill: none;
  stroke: #fff;
  stroke-linecap: square;
  stroke-miterlimit: 10;
  stroke-width: 3.5px;
  stroke-width: 4px;
  animation: animation 3.5s cubic-bezier(0.51, 0.43, 0.19, 0.97) forwards;
}
.house {
  @media (max-width: 1000px) {
    position: static;
  }
  @media (max-height: 800px) {
    bottom: 160px;
  }
  width: 100%;
  position: absolute;
  bottom: 180px;
  left: 0;
  max-width: 1800px;
}
@keyframes animation {
  to {
    stroke-dashoffset: 0;
  }
}
</style>
