<template>
    <div class="container-category-origin w-full mt-10 lg:mt-96 lg:pt-52">
        <div class="category-title text-left w-4/5 mx-auto mb-2 md:flex md:justify-between md:mb-3">
            <h2 class="title text-2xl text-gray-700 mb-1">Tutos les plus populaires</h2>
            <a href="/" class="link_categories text-blue-500 text-base" v-if="true">voir tous les meilleurs atéliers</a>
        </div>
        <div class="categories-element text-left w-4/5 mx-auto grid grid-cols-1 md:grid-cols-3 md:gap-4">
            <category-element v-for="i in 9" :key="i"/>
        </div>
    </div>
</template>
<script>
import categoryElement from './category-element.vue'
export default {
    name:"containerCategoryOrigin",
    components: {categoryElement},
    setup() {
        
    },
}
</script>