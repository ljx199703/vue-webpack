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
      <div class="number">98.7%</div>
      <div class="container">
        <div class="circle"></div>
        <ul class="bubble">
          <li
            v-for="(item, index) in 10"
            :key="index"></li>
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
    width: 200px;
    height: 300px;
    .number {
      position: absolute;
      top: 100px;
      left: 50%;
      z-index: 2;
      transform: translate(-50%, -50%);
      color: #fff;
      font-size: 22px;
      font-weight: bold;
    }
    .container {
      width: 200px;
      height: 300px;
      position: relative;
      background-color: #000;
      animation: hueRotate 10s linear infinite;
      filter: contrast(10) hue-rotate(0);
      .circle {
        width: 200px;
        height: 200px;
        position: relative;
        filter: blur(4px);
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
          animation: fusionRotate 10s infinite linear;
        }
      }
      .bubble {
        width: 100px;
        height: 40px;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 0);
        background-color: #00ff6f;
        border-radius: 100px 100px 0 0;
        filter: contrast(5) blur(3px);
        li {
          position: absolute;
          background-color: #00ff6f;
          filter: blur(3px);
          border-radius: 50%;
        }
        @for $i from 1 through 10 {
          li:nth-child(#{$i}) {
            $width: 15 + random(15) + px;
            width: $width;
            height: $width;
            top: 50%;
            left: 15 + random(70) + px;
            transform: translate(-50%, -50%);
            animation: moveTop #{3 + random(6)}s ease-in-out -#{random(5000)/1000}s infinite;
          }
        }
      }
    }
    @keyframes hueRotate {
      100% {
        filter: contrast(10) hue-rotate(360deg);
      }
    }
    @keyframes fusionRotate {
      50% {
        border-radius: 45% / 42% 38% 62% 49%;
      }
      100% {
        transform: translate(-50%, -50%) rotate(2turn);
      }
    }
    @keyframes moveTop {
      90% {
        opacity: 1;
      }
      100% {
        opacity: .1;
        transform: translate(-50%, -120px);
      }
    }
  }
</style>