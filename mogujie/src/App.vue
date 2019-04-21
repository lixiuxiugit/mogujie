<template>
  <div id="app">
    <navbar v-if="$route.meta.requiresAuth"></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import '@/assets/fonts/iconfont.css'
import navbar from './base/navbar'
import '@/assets/reset.css'
export default {
  name: 'App',
  components: {
    navbar
  }
}
</script>

<style>
#app{
  height: 100%;
}
</style>
