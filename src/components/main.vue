<template>
    <div class="big-intro-wrapper h-auto w-full relative md:mb-16 lg:20 lg:absolute lg:top-0 lg:z-20 lg:left-0 lg:right-0">
        <div class="banner w-full h-80 bg-cover bg-opacity-25 bg-center bg-no-repeat"></div>
        <div class="big-intro py-5 bg-black bg-opacity-40 text-white h-auto absolute top-0 right-0 left-0 bottom-0">
            <div class="content md:w-4/6 mx-auto md:mt-8 lg:mt-28">
                <h1 class="big-intro-title w-4/5 md:w-full md:text-2xl  mx-auto font-light text-2xl leading-9">Développez vos compétences numériques avec nos cours 100% professionnels</h1>
                <div class="spacer h-8"></div>
                <h2 class="label w-4/6 mx-auto font-extralight text-xs leading-5 hidden md:block md:text-base">
                    Grâce à nos formations en ligne, sécurisez votre avenir en misant sur vos compétences 
                    numériques. formez-vous à votre rythme aux côtés d'esperts et artistes passionnés.
                </h2>
                <button class="w-5/6 h-12 mt-4 rounded-md shadow-sm text-3xl md:w-80 md:mt-7" :style="{backgroundColor: '#3cc5aa'}">vidéos gratuites</button>
            </div>
        </div>
    </div>
    <div class="container-category-origin w-full mt-10 lg:mt-96 lg:pt-52">
        <div class="category-title text-left w-4/5 mx-auto mb-2 md:flex md:justify-between md:mb-3">
            <h2 class="title text-2xl text-gray-700 mb-1">Tutos les plus populaires</h2>
            <a href="/" class="link_categories text-blue-500 text-base" v-if="true">voir tous les meilleurs atéliers</a>
        </div>
        <div class="categories-element text-left w-4/5 mx-auto grid grid-cols-1 md:grid-cols-3 md:gap-4">
            <category-element v-for="i in 9" :key="i"/>
        </div>
    </div>

    <container-category-second v-for="i in 3" :key="i"/>

    <div class="banner-footer relative w-full mt-10">
        <div class="banner2 w-full h-96 bg-cover bg-opacity-25 bg-center bg-no-repeat"></div>
        <div class="description absolute h-96 top-0 left-0 right-0 bg-black bg-opacity-40">
            <div class="propostions w-2/3 text-left mx-auto text-white my-8 sm:mt-10">
                <h2 class="text-xl w-full mb-5">Proposez vos propres cours</h2>
                <p class="text-base">Lorem ipsum quia minima tenetur alias,quia minima tenetur alias,quia minima tenetur alias, accusamus commodi sequi odit vitae? Minima pariatur voluptatum tenetur minus porro voluptatibus at culpa.</p>
                <button class="h-12 px-2 w-5/5 mx-auto mt-5 leaning-4 text-lg rounded-md bg-pink-700">Devenez Formateur</button>
            </div>
        </div>
    </div>
</template>

<script>
import CategoryElement from './category-element.vue'
import containerCategorySecond from "./container-category-second.vue"
export default {
    name: 'mainVuejs',
    components: {
        containerCategorySecond,
        CategoryElement
    },
    setup() {
        
    },
}
</script>

<style scoped>
    .banner {
        background-image: url(../assets/banner1.jpg);
        background-color: #232428;
    }

    .banner2 {
        background-image: url(../assets/banner2.jpg);
        background-color: #232428;
    }

    @media screen and (min-width: 370px) {
        .banner2 {
            height: 300px
        }
        .description {
            height: 300px
        }
    }

    @media screen and (min-width: 600px) {
        .banner2 {
            height: 280px;
        }
        .description {
            height: 280px
        }

        p.text-base {
            max-width: 494px
        }
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

    @media screen and (min-width: 900px) {
        .banner {
            height: 500px
        }
    }

</style>