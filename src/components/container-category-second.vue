<template>
    <div class="container-category-origin w-full mt-20">
        <div class="category-title text-left w-4/5 mx-auto mb-2 md:flex md:justify-between md:mb-3">
            <h2 class="title text-2xl text-gray-700 mb-1">{{categoryTitle}}</h2>
            <a href="/" class="link_categories text-blue-500 text-base" v-if="viewmore">{{viewmoreText}}</a>
        </div>
        <div class="categories-element text-left w-4/5 mx-auto grid grid-cols-1 md:grid-cols-3 md:gap-4">
            <div class="category-element w-full mb-2">
                <div class="banner-category-element relative">
                    <img src="../assets/yutouch_image.jpg" alt="" class="object-cover w-max h-auto">
                    <img src="../assets/yutouch.jpg" alt="" class="absolute rounded-full h-14 w-14 border-4 border-white -bottom-5 right-10">
                </div>
                <h3 class="description-category-element w-full text-gray-800 leading-4 text-sm mt-4">Photo de paysage à l'iphone: retouche professionnelle grâce au format ProRaw d'Apple !</h3>
                <div class="author-category-element mt-1 text-sm">
                    By <strong class="text-blue-500">name_author</strong><span class="datetime text-gray-500"> - Durée: 06h07m</span>
                </div>
                <div class="stars mt-1">
                    <i class="material-icons text-base text-yellow-400" v-for="i in 5" :key="i">star</i>
                </div>
            </div>
            <div class="category-element w-full mb-2">
                <div class="banner-category-element relative">
                    <img src="../assets/lolid.png" alt="" class="object-cover w-max h-auto">
                    <img src="../assets/yutouch.jpg" alt="" class="absolute rounded-full h-14 w-14 border-4 border-white -bottom-5 right-10">
                </div>
                <h3 class="description-category-element w-full text-gray-800 leading-4 text-sm mt-4">Photo de paysage à l'iphone: retouche professionnelle grâce au format ProRaw d'Apple !</h3>
                <div class="author-category-element mt-1 text-sm">
                    By <strong class="text-blue-500">name_author</strong><span class="datetime text-gray-500"> - Durée: 06h07m</span>
                </div>
                <div class="stars mt-1">
                    <i class="material-icons text-base text-yellow-400" v-for="i in 5" :key="i">star</i>
                </div>
            </div>
            <div class="category-element w-full mb-2">
                <div class="banner-category-element relative">
                    <img src="../assets/pennseeK.jpg" alt="" class="object-cover w-max h-auto">
                    <img src="../assets/yutouch.jpg" alt="" class="absolute rounded-full h-14 w-14 border-4 border-white -bottom-5 right-10">
                </div>
                <h3 class="description-category-element w-full text-gray-800 leading-4 text-sm mt-4">Photo de paysage à l'iphone: retouche professionnelle grâce au format ProRaw d'Apple !</h3>
                <div class="author-category-element mt-1 text-sm">
                    By <strong class="text-blue-500">name_author</strong><span class="datetime text-gray-500"> - Durée: 06h07m</span>
                </div>
                <div class="stars mt-1">
                    <i class="material-icons text-base text-yellow-400" v-for="i in 5" :key="i">star</i>
                </div>
            </div>
            <div class="category-element w-full mb-2">
                <div class="banner-category-element relative">
                    <img src="../assets/rykel.png" alt="" class="object-cover w-max h-auto">
                    <img src="../assets/yutouch.jpg" alt="" class="absolute rounded-full h-14 w-14 border-4 border-white -bottom-5 right-10">
                </div>
                <h3 class="description-category-element w-full text-gray-800 leading-4 text-sm mt-4">Photo de paysage à l'iphone: retouche professionnelle grâce au format ProRaw d'Apple !</h3>
                <div class="author-category-element mt-1 text-sm">
                    By <strong class="text-blue-500">name_author</strong><span class="datetime text-gray-500"> - Durée: 06h07m</span>
                </div>
                <div class="stars mt-1">
                    <i class="material-icons text-base text-yellow-400" v-for="i in 5" :key="i">star</i>
                </div>
            </div>
            <div class="category-element w-full mb-2">
                <div class="banner-category-element relative">
                    <img src="../assets/touch.jpg" alt="" class="object-cover w-max h-auto">
                    <img src="../assets/yutouch.jpg" alt="" class="absolute rounded-full h-14 w-14 border-4 border-white -bottom-5 right-10">
                </div>
                <h3 class="description-category-element w-full text-gray-800 leading-4 text-sm mt-4">Photo de paysage à l'iphone: retouche professionnelle grâce au format ProRaw d'Apple !</h3>
                <div class="author-category-element mt-1 text-sm">
                    By <strong class="text-blue-500">name_author</strong><span class="datetime text-gray-500"> - Durée: 06h07m</span>
                </div>
                <div class="stars mt-1">
                    <i class="material-icons text-base text-yellow-400" v-for="i in 5" :key="i">star</i>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "container-category-second",
    props: {
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