<template>
    <principal-banner />
    <container-category-origin />
    <container-category-second v-for="i in 3" :key="i" />
    <banner-footer />
</template>
<script>
import principalBanner from "./principal-banner.vue"
import containerCategoryOrigin from "./container-category-origin.vue"
import containerCategorySecond from "./container-category-second.vue"
import bannerFooter from "./banner-footer.vue"
export default {
    name: "home",
    components: {
        principalBanner,
        containerCategoryOrigin,
        containerCategorySecond,
        bannerFooter
    },
    setup() {
        
    },
}
</script>