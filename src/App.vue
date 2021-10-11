<template>
  <div id="appvue">
    <head-vuejs />
    <main-vuejs />
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
    footVuejs, 
  }
}
</script>

<style scoped>
 #appvue {
   padding: 0;
   margin: 0;
   box-sizing: border-box;
   font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
/*    font-size: 14px;
   line-height: 1.428571429;
   text-align: center; */
 }
</style>