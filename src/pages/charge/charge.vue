<template>
  <div class="wrap">
    <div class="charge-1">
      <div class="head"></div>
      <div class="battery">
        <div class="wave"></div>
        <div class="wave"></div>
      </div>
    </div>
    <div class="charge-2">
      <div class="number"></div>
      <div class="container">
        <div class="circle"></div>
        <ul class="bubble">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'charge'
  }
</script>

<style lang="scss" scoped>
  .wrap {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #000;
  }
  .charge-1 {
    position: relative;
    .head {
      width: 30px;
      height: 10px;
      position: absolute;
      left: 50%;
      top: 0;
      transform: translate(-50%, -10px);
      background-color: #fff;
      border-radius: 2px 2px 0 0;
    }
    .battery {
      width: 200px;
      height: 300px;
      position: relative;
      background-color: #fff;
      border-radius: 15px 15px 5px 5px;
      overflow: hidden;
      .wave {
        width: 400px;
        height: 400px;
        position: absolute;
        left: 50%;
        bottom: 7%;
        transform: translate(-50%, 0);
        background-color: rgba(255, 255, 255, 1);
        border-radius: 45% 47% 44% 42%;
        animation: waveRotate 10s linear infinite;
      }
      .wave:nth-child(2) {
        background-color: rgba(255, 255, 255, .7);
        border-radius: 38% 46% 43% 47%;
        transform: translate(-50%, 0) rotate(-135deg);
      }
      &::before {
        content: "";
        position: absolute;
        top: 90%;
        right: 0;
        bottom: 0;
        left: 0;
        background-image: linear-gradient(180deg, #7abcff 0%, #00BCD4 44%, #2196F3 100%);
        border-radius: 0 0 5px 5px;
        animation: charging 10s linear infinite;
        filter: hue-rotate(90deg);
      }
    }
    @keyframes charging {
      95% {
        top: 5%;
        border-radius: 0 0 5px 5px;
        filter: hue-rotate(0deg);
      }
      100% {
        top: 0%;
        border-radius: 15px 15px 5px 5px;
        filter: hue-rotate(0deg);
      }
    }
    @keyframes waveRotate {
      100% {
        bottom: 97%;
        transform: translate(-50%, 0) rotateZ(-2turn);
      }
    }
  }
  .charge-2 {
    position: relative;
    .number {}
    .container {
      width: 200px;
      height: 300px;
      // filter: contrast(15) hue-rotate(0);
      .circle {
        width: 200px;
        height: 200px;
        position: relative;
        // filter: blur(8px);
        &::before {
          content: "";
          width: 140px;
          height: 140px;
          position: absolute;
          top: 50%;
          left: 50%;
          z-index: 1;
          transform: translate(-50%, -50%);
          background-color: #000;
          border-radius: 50%;
        }
        &::after {
          content: "";
          width: 160px;
          height: 160px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(0);
          background-color: #00ff6f;
          border-radius: 42% 38% 62% 49% / 45%;
          // animation: rotate 10s infinite linear;
        }
      }
    }
  }
</style>