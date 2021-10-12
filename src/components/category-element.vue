<template>
    <div class="category-element w-full mb-4 cursor-pointer" :id="id">
        <div class="banner-category-element relative bg-black">
            <img :src="require('../assets/lidigital.jpg')" alt="" class="object-cover w-max h-auto hover:opacity-40">
            <img :src="require('../assets/play.png')" alt="" class="absolute top-10 rounded-full left-1/3 bg-white h-20 w-20 opacity-0 hover:opacity-100">
            <img :src="require('../assets/yutouch.jpg')" alt="" class="absolute rounded-full h-14 w-14 border-4 border-white -bottom-5 right-10">
            <div class="newticket absolute top-3 -left-2 z-10 w-28 h-7 text-center text-white" :class="colorTicket" v-if="showticket">
                {{labelTicket}}
            </div>
        </div>
        <h3 class="description-category-element w-full text-gray-800 leading-4 text-sm mt-4 font-light">Photo de paysage à l'iphone: retouche professionnelle grâce au format ProRaw d'Apple !</h3>
        <div class="author-category-element mt-1 text-sm">
            By <strong class="text-blue-500">{{authorName}}</strong><span class="datetime text-gray-500"> - Durée: {{listingDatetime}}</span>
        </div>
        <div class="stars mt-1" v-if="showstars">
            <i class="material-icons text-base text-yellow-400" v-for="i in stars" :key="i">star</i>
        </div>
    </div>
</template>
<script>
export default {
    name: "category-element",
    props: {
        colorTicket: {
            type: Array,
            default: function() {
                return  ["bg-blue-500"]
            }
        },
        labelTicket: {
            type: String,
            default: "Nouveau"
        },
        showticket: {
            type: Boolean,
            default: true,
        },
        showstars: {
            type: Boolean,
            default: false
        },
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