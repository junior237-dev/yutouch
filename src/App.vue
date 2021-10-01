<template>
  <div id="app">
    <head-vuejs />
    <main-vuejs class="siteContainer"/>
    <foot-vuejs />
  </div>
</template>

<script>
import headVuejs from './components/header.vue'
import mainVuejs from './components/main.vue'
import footVuejs from './components/footer.vue'

export default {
  name: 'App',
  components: {
    headVuejs, 
    mainVuejs, 
    footVuejs
  }
}
</script>

<style scoped>
 #app {
   padding: 0;
   margin: 0;
   box-sizing: border-box;
   font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
   font-size: 14px;
   line-height: 1.428571429;
   text-align: center;
 }
</style>