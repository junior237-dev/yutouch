<template>
    <div class="main py-0">
        <!-- <userpage /> -->
        <!-- <connexion /> -->
        <!-- <page-formation /> -->
        <!-- <page-categorie /> -->
        <tous-les-parcours />
        <!-- <inscription /> -->
        <!-- <principal-banner />
        <container-category-origin />
        <container-category-second v-for="i in 3" :key="i" />
        <banner-footer /> -->
        <!-- <touslesparcours /> -->
    </div>
</template>

<script>
// import touslesparcours from './touslesparcours.vue'
// import connexion from './connexion.vue'
// import pageFormation from './page_formation.vue'
// import inscription from "./inscription.vue"
// import userpage from "./userpage.vue"
// import principalBanner from "./principal-banner.vue"
// import containerCategoryOrigin from "./container-category-origin.vue"
// import containerCategorySecond from "./container-category-second.vue"
// import bannerFooter from "./banner-footer.vue"
// import pageCategorie from './page_categorie.vue'
import TousLesParcours from './tousLesParcours.vue'
export default {
    name: 'mainVuejs',
    components: {
        // pageCategorie,
        TousLesParcours
        // touslesparcours
        // userpage
        // connexion
        // pageFormation,
        // inscription,
        // containerCategorySecond,
        // containerCategoryOrigin,
        // bannerFooter,
        // principalBanner,
        
    },
    setup() {
        
    },
}
</script>

