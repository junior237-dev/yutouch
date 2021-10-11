<template>
    <div class="container-category-second w-full mt-20">
        <div class="category-title text-left w-4/5 mx-auto mb-2 md:flex md:justify-between md:mb-3">
            <h2 class="title text-lg text-gray-900 mb-1">{{categoryTitle}}</h2>
            <a href="/" class="link_categories text-blue-500 text-base" v-if="viewmore">{{viewmoreText}}</a>
        </div>
        <div class="categories-element text-left w-4/5 mx-auto grid grid-cols-1 sm:grid-cols-3 sm:gap-4">
            <div class="h-auto w-auto div-element-category" v-for="i in 9" :key="i">
                <router-link :to="'/page_formation/45'"><category-element :colorTicket="colorTicket" :labelTicket="labelTicket"/></router-link>
            </div>
        </div>
    </div>
</template>
<script>
import categoryElement from "./category-element.vue"
export default {
    name: "container-category-second",
    components: {
        categoryElement
    },
    props: {
        labelTicket: {
            type: String,
            default: "labelTicket"
        },
        colorTicket: {
            type: Array,
            default: function() {
                return ["bg-blue-500"]
            }
        },
        viewmore: {
            type: Boolean,
            default: true
        },
        categoryTitle: {
            type: String,
            default: "Category_Title"
        },
        viewmoreText: {
            type: String,
            default: "view_more_text"
        }

    },
    setup() {
        
    },
}
</script>