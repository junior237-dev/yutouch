<template>
    <div class="big-intro-wrapper h-auto w-full relative md:mb-16">
        <div class="banner w-full h-80 bg-cover bg-opacity-25 bg-center bg-no-repeat"></div>
        <div class="big-intro py-5 bg-black bg-opacity-40 text-white h-auto absolute top-0 right-0 left-0 bottom-0">
            <div class="content md:w-4/6 mx-auto md:mt-8">
                <h1 class="big-intro-title w-4/5 md:w-full md:text-3xl  mx-auto font-light text-2xl leading-9">Développez vos compétences numériques avec nos cours 100% professionnels</h1>
                <div class="spacer h-8"></div>
                <h2 class="label w-4/6 mx-auto font-extralight text-xs leading-5 hidden md:block md:text-base">
                    Grâce à nos formations en ligne, sécurisez votre avenir en misant sur vos compétences 
                    numériques. formez-vous à votre rythme aux côtés d'esperts et artistes passionnés.
                </h2>
                <button class="w-5/6 h-12 mt-4 rounded-md shadow-sm text-3xl md:w-80 md:mt-7" :style="{backgroundColor: '#3cc5aa'}">vidéos gratuites</button>
            </div>
        </div>
    </div>
    <div class="container-category w-full mt-10">
        <div class="category-title text-left w-4/5 mx-auto mb-2 md:flex md:justify-between md:mb-3">
            <h2 class="title text-2xl text-gray-700 mb-1">Tutos les plus populaires</h2>
            <a href="/" class="link_categories text-blue-500 text-base">voir tous les meilleurs atéliers</a>
        </div>
        <div class="categories-element text-left w-4/5 mx-auto grid grid-cols-1 md:grid-cols-3 md:gap-2">
            <div class="category-element w-full mb-2">
                <div class="banner-category-element relative">
                    <img src="../assets/yutouch_image.jpg" alt="" class="object-cover w-max h-auto">
                    <img src="../assets/yutouch.jpg" alt="" class="absolute rounded-full h-16 w-16 border-4 border-white -bottom-5 right-10">
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
                    <img src="../assets/yutouch.jpg" alt="" class="absolute rounded-full h-16 w-16 border-4 border-white -bottom-5 right-10">
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
                    <img src="../assets/yutouch.jpg" alt="" class="absolute rounded-full h-16 w-16 border-4 border-white -bottom-5 right-10">
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
                    <img src="../assets/yutouch.jpg" alt="" class="absolute rounded-full h-16 w-16 border-4 border-white -bottom-5 right-10">
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
                    <img src="../assets/yutouch.jpg" alt="" class="absolute rounded-full h-16 w-16 border-4 border-white -bottom-5 right-10">
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
    name: 'mainVuejs',
    setup() {
        
    },
}
</script>

<style scoped>
    .banner {
        background-image: url(../assets/yutouch_image.jpg);
        background-color: #232428;
    }

    @media screen and (max-width: 400px) {
        .banner {
            block-size: 25rem;
            height: 360px
        }

        h1 {
            width: 90%;
            font-size: 1.60rem
        }

        h2.label {
            font-size: .85rem
        }
    }

    @media screen and (max-width: 357px) {
        .banner {
            height: 260px
        }
    }

    @media screen and (min-width: 784px) {
        .banner {
            height: 400px
        }
    }

</style>