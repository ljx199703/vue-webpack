<template>
  <div class="conic-gradient-1"></div>
</template>

<script>
  export default {
    name: 'gradient'
  }
</script>

<style lang="scss" scoped>
  @function randomNumber ($max, $min: 0, $u: 1) {
    @return ($min + random($max)) * $u;
  }
  @function randomConicGradient () {
    $n: 18;
    $list: ();

    @for $i from 1 to $n {
      $list: $list, rgba(0, 0, 0, randomNumber(100, 0, 0.01));
    }

    @return conic-gradient($list, nth($list, 1));
  }
  .conic-gradient-1 {
    width: 100vw;
    height: 100vh;
    position: relative;
    overflow: hidden;
    background-image: radial-gradient(#fff, #000);
    &::before, &::after {
      content: "";
      width: 300%;
      height: 300%;
      position: absolute;
      left: -100%;
      top: -100%;
      animation: rotateElement 10s linear infinite;
      background-image: randomConicGradient();
      opacity: .5;
    }
    &::after {
      animation-direction: reverse;
    }
  }
  @keyframes rotateElement {
    100% {
      transform: rotate(1turn);
    }
  }
</style>