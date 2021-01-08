<template>
  <div>home page</div>
</template>

<script>
  export default {
    beforeRouteEnter (to, from, next) {
      console.log('component guard')
      next()
    }
  }
</script>

<style lang="less" scoped>
</style>