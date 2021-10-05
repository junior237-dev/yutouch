<template>
    <div class="menu-big-media w-5/6 h-auto my-5 hidden lg:flex lg:justify-between relative">
        <ul class="first-part w-1/2 flex justify-between text-white text-sm font-light mr-9">
            <li class=" cursor-pointer flex items-center" @click='showformationpanel'><a>Formations</a><i class="material-icons tiny">arrow_drop_down</i></li>
            <li class=" cursor-pointer"><a>Parcours  Pro</a></li>
            <li class=" cursor-pointer"><a>Promo</a></li>
            <li class=" cursor-pointer rounded-full active-item-menu" @click='showsearchbarfunction'><i class="material-icons">search</i></li>
        </ul>
        <ul class="second-part w-1/2 flex justify-around text-white text-sm font-light ml-3 mr-8">
            <li class="cursor-pointer flex items-center"><a>Aide</a><i class="material-icons tiny">arrow_drop_down</i></li>
            <li class="cursor-pointer"><a>Connexion</a></li>
            <li class="cursor-pointer"><a>Créer Compte</a></li>
        </ul>
        <transition name="transitionpanel">
            <div class="formation-panel absolute top-8 left-3 rounded-lg h-96" v-if="showpanel">
                <div class="categories-section my-5 mx-auto w-5/6 h-60 flex justify-between">
                    <div class="thematiques text-left">
                        <h2 class="font-semibold text-gray-800 text-xs mb-3">THEMATIQUES</h2>
                        <ul class="thematic-elements grid grid-cols-1 w-auto">
                            <li class="leading-4 text-xs w-40 text-gray-600 font-light  cursor-pointer hover:text-yellow-600" v-for="(item, index) in themElements" :key="index">{{item}}</li>
                        </ul>
                        <a href="" class="text-xs text-blue-500 mt-3">voir tous les thèmes</a>
                    </div>
                    <div class="thematiques text-left">
                        <h2 class="font-semibold text-gray-800 text-xs mb-3">COURS POPULAIRES</h2>
                        <ul class="thematic-elements grid grid-cols-1 w-auto">
                            <li class="leading-6 text-xs w-40 text-gray-600 font-light  cursor-pointer hover:text-yellow-600" v-for="(item, index) in popularLesson" :key="index">{{item}}</li>
                        </ul>
                        <a href="" class="text-xs text-blue-500 mt-3">voir tous les cours populaires</a>
                    </div>
                    <div class="thematiques text-left">
                        <h2 class="font-semibold text-gray-800 text-xs mb-3">PARCOURS PRO</h2>
                        <ul class="thematic-elements grid grid-cols-1 w-auto">
                            <li class="leading-6 text-xs w-40 text-gray-600 font-light  cursor-pointer hover:text-yellow-600" v-for="(item, index) in proCourse" :key="index">{{item}}</li>
                        </ul>
                        <a href="" class="text-xs text-blue-500 mt-3">voir tous les parcours</a>
                    </div>
                </div>
                <div class="panel-footer w-full h-20 bg-gray-200 mt-16 flex justify-between items-center px-14">
                    <ul class="grid grid-cols-2 text-sm text-blue-500 gap-4">
                        <li><a href="">Formations gratuites</a></li>
                        <li><a href="">Formations en promo</a></li>
                    </ul>
                    <button class="bg-pink-700 text-white p-3 rounded-lg hover:bg-blue-500 transition-all">DEVENIR FORMATEUR</button>
                </div>
            </div>
        </transition>
        <transition name="transitionsearchbar">
            <div class="searchbar absolute top-8 rounded-lg h-12 w-96 bg-white" v-if="showsearchbar">
                <div class="w-4/5 mx-auto flex justify-around items-center" >
                    <span class="inline-block w-1/6 text-right pr-2">
                        <i class="material-icons">search</i>
                    </span>
                    <label for="recherche" class="hidden">recherche de categories</label>
                    <input type="search" placeholder="Que voulez-vous étudier aujourd'hui?" class="outline-none w-5/6 h-12 text-sm" id="search" name="search" >
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import {ref} from "vue"
export default {
    name: 'menuBigMedia',
    setup() {
        let themElements = [
            'Photographie & retouche',
            '3D',
            'Graphisme',
            'Web',
            'Vidéo',
            'Programmation',
            'Bureautique',
            'audio et MAO',
            'Système d\'exploitation',
            'E-commerce & E-marketing',
            'Serveur & Administration',
            'Droit',
            'Dessin',
            'Domotique & Objets',
            'Business',
            'Game Design'
        ],

        popularLesson = [
            'Photoshop',
            'Illustrator',
            'after Effects',
            'Premiere',
            'Excel',
            'Figma',
            'Indesign',
            'wordpress'
        ],
        proCourse = [
            'Motion Designer',
            'Développeur Front End',
            'Développeur Back End',
            'Photographe',
            'Designer Graphique',
            'Infographiste 3D Cinéma 4D',
            'Graphiste Photoshop',
            'Responsable Marketing',
            'Digital'
        ],
        showsearchbar = ref(false),
        showpanel = ref(false),
        showsearchbarfunction = function() {
            showsearchbar.value = !showsearchbar.value
        },
        showformationpanel = function(e) {
            showpanel.value = !showpanel.value
            console.log(e.currentTarget)
        }

        return {
            themElements,
            popularLesson,
            proCourse,
            showpanel,
            showsearchbar,
            showformationpanel,
            showsearchbarfunction
        }
    },
}
</script>
<style scoped>

    .searchbar {
        left: 140px
    }

    .transitionsearchbar-enter-from, .transitionsearchbar-leave-to {
        opacity: 0
    }
    .transitionsearchbar-enter-active, .transitionsearchbar-leave-active {
        transition: opacity .7s ease
    }

    .transitionpanel-enter-from, .transitionpanel-leave-to {
        opacity: 0;
        transform: translateX(-200px)
    }
    .transitionpanel-enter-active, .transitionpanel-leave-active {
        transition: opacity .7s ease, transform .7s ease
    }
    .formation-panel {
        background-color: rgba(255, 255, 255, 0.904); /*rgba(226, 55, 12, 0.972)*/
        width: 600px;
        height: 420px
    }
    .active-item-menu {
        height: 30px;
        padding: 5px 3px;
        border-radius: 20px;
        background-color: rgba(226, 55, 12, 0.972)
    }
    div.menu-big-media ul.first-part li, div.menu-big-media ul.second-part li{
        height: 30px;
        padding: 5px 3px;
        border-radius: 20px;
        transition: background-color .4s ease
    }
    div.menu-big-media ul.first-part li:hover, div.menu-big-media ul.second-part li:hover{
        background-color: rgba(226, 55, 12, 0.603);
    }
</style>