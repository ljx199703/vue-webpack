<template>
  <div class="wrap">
    <div class="border-1">Hover Me</div>
    <div class="border-2">Hover Me</div>
    <div class="border-3">
      <span class="text">Hover Me</span>
    </div>
    <div class="border-4">
      <span class="text">Hover Me</span>
    </div>
    <div class="border-5">Hover Me</div>
  </div>
</template>

<script>
  export default {
    name: 'fantasticBorder'
  }
</script>

<style lang="scss" scoped>
  .wrap {
    --var-mainColor: #03A9F3;
    width: 100%;
    height: 500px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
  }
  [class^=border] {
    cursor: pointer;
  }
  .border-1 {
    width: 200px;
    height: 100px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--var-mainColor);
    &::before,
    &::after {
      content: "";
      position: absolute;
      width: 20px;
      height: 20px;
      transition: width .6s ease-out, height .6s ease-out;
    }
    &::before {
      top: -5px;
      left: -5px;
      border-top: 1px solid var(--var-mainColor);
      border-left: 1px solid var(--var-mainColor);
    }
    &::after {
      right: -5px;
      bottom: -5px;
      border-right: 1px solid var(--var-mainColor);
      border-bottom: 1px solid var(--var-mainColor);
    }
    &:hover::before,
    &:hover::after {
      width: calc(100% + 10px);
      height: calc(100% + 10px);
    }
  }
  .border-2 {
    width: 200px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: 1px solid var(--var-mainColor);
    outline-offset: -1px;
    &:hover {
      outline: none;
      background-size: 10px 1px, 1px 10px, 10px 1px, 1px 10px;
      background-position: 0 0, 100% 0, 0 100%, 0 0;
      background-repeat: repeat-x, repeat-y, repeat-x, repeat-y;
      background-image:
        linear-gradient(90deg, var(--var-mainColor) 50%, transparent 0),
        linear-gradient(180deg, var(--var-mainColor) 50%, transparent 0),
        linear-gradient(90deg, transparent 50%, var(--var-mainColor) 0),
        linear-gradient(180deg, transparent 50%, var(--var-mainColor) 0);
      animation: backgroundPositionMove .5s infinite linear;
    }
  }
  @keyframes backgroundPositionMove {
    0% {
      background-position: 10px 0, 100% 10px, -10px 100%, 0 -10px;
    }
  }
  .border-3 {
    width: 200px;
    height: 100px;
    position: relative;
    .text {
      width: calc(100% - 46px);
      height: 60px;
      position: absolute;
      top: 50%;
      left: 23px;
      z-index: 1;
      margin-top: -30px;
      color: #fff;
      text-align: center;
      line-height: 60px;
      background-color: var(--var-mainColor);
      border-radius: 10px;
    }
    &::before, &::after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      border: 3px solid var(--var-mainColor);
      border-radius: 10px;
      display: none;
    }
    &:hover::before {
      display: block;
      animation: bottomBorderClipPath 4s linear infinite;  
    }
    &:hover::after {
      display: block;
      animation: topBorderClipPath 4s linear infinite;  
    }
  }
  @keyframes bottomBorderClipPath {
    0%,
    100% {
      clip-path: inset(calc(100% - 3px) 0 0 0);
    }
    25% {
      clip-path: inset(0 calc(100% - 3px) 0 0);
    }
    50% {
      clip-path: inset(0 0 calc(100% - 3px) 0);
    }
    75% {
      clip-path: inset(0 0 0 calc(100% - 3px));
    }
  }
  @keyframes topBorderClipPath {
    0%,
    100% {
      clip-path: inset(0 0 calc(100% - 3px) 0);
    }
    25% {
      clip-path: inset(0 0 0 calc(100% - 3px));
    }
    50% {
      clip-path: inset(calc(100% - 3px) 0 0 0);
    }
    75% {
      clip-path: inset(0 calc(100% - 3px) 0 0);
    }
  }
  .border-4 {
    width: 200px;
    height: 100px;
    position: relative;
    color: #fff;
    overflow: hidden;
    .text {
      width: calc(100% - 10px);
      height: 90px;
      position: absolute;
      top: 50%;
      left: 5px;
      margin-top: -45px;
      color: #fff;
      text-align: center;
      line-height: 90px;
      background-color: var(--var-mainColor);
      outline: 1px solid #fff;
    }
    &::before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      transform-origin: left top;
      transform: rotateZ(-90deg) translate(-100%, -100%);
      transition: transform .4s linear;
      background-color: var(--var-mainColor);
    }
    &:hover::before {
      transform: rotateZ(0) translate(0, 0);
    }
  }
  .border-5 {
    width: 200px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    clip-path: inset(0px round 10px);
    border: 10px solid;
    border-image: linear-gradient(26.6deg, var(--var-mainColor), hotpink);
    border-image-slice: 1;
    &:hover {
      animation: huerotate 4s infinite linear;
    }
  }
  @keyframes huerotate {
    0% {
      filter: hue-rotate(0deg);
    }
    100% {
      filter: hue-rotate(360deg);
    }
  }

  @keyframes rotateElement {
    100% {
      transform: rotate(1turn);
    }
  }
</style>