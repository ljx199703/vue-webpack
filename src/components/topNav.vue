<template>
  <div class="top-nav">
    <ul>
      <li
        v-for="(routeNav, key) in routesNavMap"
        :key="key">
        <router-link :to="routeNav.path">{{routeNav.name || '-'}}</router-link>
      </li>
    </ul>
    <div class="author">Author: Alvis Lee</div>
  </div>
</template>

<script>
  import { routesNavMap } from '@/router'

  export default {
    name: 'topNav',
    data () {
      return {
        routesNavMap
      }
    },
    computed: {
      routeNav () {
        return this.$route
      }
    }
  }
</script>

<style lang="scss" scoped>
  .top-nav {
    width: 100%;
    height: 100px;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    display: flex;
    > ul {
      flex: 0 0 80%;
      display: flex;
      > li {
        flex: 1 0 0;
        cursor: pointer;
        text-align: center;
        a {
          display: inline-block;
          line-height: 100px;
          color: var(--var-themeColor);
          font-weight: bold;
          transition: transform .4s linear;
        }
        &:hover > a {
          transform: scale(1.4);
          color: var(--var-textHoverColor);
        }
      }
    }
    .author {
      flex: 1 0 0;
      display: flex;
      justify-content: center;
      align-items: center;
      color: var(--var-importantColor);
      font-weight: bold;
    }
  }
</style>