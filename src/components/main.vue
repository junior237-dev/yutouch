<template>
    <div class="main py-0">
        <!-- <userpage /> -->
        <!-- <connexion /> -->
        <!-- <page-formation /> -->
        <!-- <inscription /> -->
        <principal-banner />
        <container-category-origin />
        <container-category-second v-for="i in 3" :key="i" />
        <banner-footer />
    </div>
</template>

<script>
// import connexion from './connexion.vue'
// import pageFormation from './page_formation.vue'
// import inscription from "./inscription.vue"
// import userpage from "./userpage.vue"
import principalBanner from "./principal-banner.vue"
import containerCategoryOrigin from "./container-category-origin.vue"
import containerCategorySecond from "./container-category-second.vue"
import bannerFooter from "./banner-footer.vue"
export default {
    name: 'mainVuejs',
    components: {
        // userpage
        // connexion
        // pageFormation,
        // inscription,
        containerCategorySecond,
        containerCategoryOrigin,
        bannerFooter,
        principalBanner
    },
    setup() {
        
    },
}
</script>

