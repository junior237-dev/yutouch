<template>
    <div class="category-element w-full mb-2 cursor-pointer" :id="id">
        <div class="banner-category-element relative">
            <img :src="require('../assets/lolid.png')" alt="" class="object-cover w-max h-auto">
            <img :src="require('../assets/yutouch.jpg')" alt="" class="absolute rounded-full h-14 w-14 border-4 border-white -bottom-5 right-10">
        </div>
        <h3 class="description-category-element w-full text-gray-800 leading-4 text-sm mt-4">Photo de paysage à l'iphone: retouche professionnelle grâce au format ProRaw d'Apple !</h3>
        <div class="author-category-element mt-1 text-sm">
            By <strong class="text-blue-500">{{author_name}}</strong><span class="datetime text-gray-500"> - Durée: {{listingDatetime}}</span>
        </div>
        <div class="stars mt-1">
            <i class="material-icons text-base text-yellow-400" v-for="i in stars" :key="i">star</i>
        </div>
    </div>
</template>
<script>
export default {
    name: "category-element",
    props: {
        bannerImage: {
            type: String,
            default: ""
        },
        authorProfilImage: {
            type: String,
            default: ""
        },
        authorName: {
            type: String,
            default: "author_name"
        },
        listingDatetime: {
            type: String,
            default: ""
        },
        stars: {
            type: [String, Number],
            default: 5
        },
        id: {
            type: String,
            default: ""
        }
    },
    setup() {
    },
}
</script>