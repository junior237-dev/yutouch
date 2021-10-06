<template>
    <inscription-connexion />
    <!-- <principal-banner />
    <container-category-origin />
    <container-category-second v-for="i in 3" :key="i" />
    <banner-footer /> -->
</template>

<script>
import inscriptionConnexion from "./inscriptionConnexion.vue"
// import principalBanner from "./principal-banner.vue"
// import containerCategoryOrigin from "./container-category-origin.vue"
// import containerCategorySecond from "./container-category-second.vue"
// import bannerFooter from "./banner-footer.vue"
export default {
    name: 'mainVuejs',
    components: {
        inscriptionConnexion,
        // containerCategorySecond,
        // containerCategoryOrigin,
        // bannerFooter,
        // principalBanner
    },
    setup() {
        
    },
}
</script>

