<template>
  <div>
    <topNav />
  </div>
</template>

<script>
  import topNav from '@/components/topNav.vue'

  export default {
    name: 'home',
    components: {
      topNav
    },
    beforeRouteEnter (to, from, next) {
      console.log('component guard')
      next()
    }
  }
</script>

<style lang="less" scoped>
</style>