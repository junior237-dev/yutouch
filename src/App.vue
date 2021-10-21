<template>
  <div id="appvue">
     <!-- <head-vuejs /> -->
    <!--<main-vuejs/>
    <foot-vuejs /> -->
    <!-- <PageFormation />  -->
    <!-- <PageCategorie /> -->
    <!-- <foot-vuejs /> -->
    <!-- <TousLesParcours /> -->
    <PageParcours />
  </div>
</template>

<script>
import PageParcours from './components/pageParcours.vue'
// import PageCategorie from './components/pageCategorie.vue'
// import TousLesParcours from './components/tousLesParcours.vue'
//  import headVuejs from './components/header.vue'
// import mainVuejs from './components/main.vue'
// import footVuejs from './components/footer.vue' 
// import PageFormation from './components/pageFormation.vue'
/*import headVuejs from './components/header.vue'
import mainVuejs from './components/main.vue' 
import footVuejs from './components/footerVuejs.vue'*/


export default {
  name: 'App',
  components: {
    // headVuejs,
    // mainVuejs, 
    // footVuejs, 
    // footVuejs,
    // PageFormation, 
    // PageCategorie,
    // TousLesParcours,
    PageParcours,
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