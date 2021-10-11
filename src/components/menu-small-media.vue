<template>
    <div class="menu-icone inline-block h-auto mr-3 lg:hidden">
        <i class="material-icons text-white text-4xl font-bold cursor-pointer" @click="changeMenuForm">dehaze</i>
    </div>
    <transition name="showmenuicon">
        <div class="menu w-full overflow-scroll bg-gray-900 z-10 absolute top-24 left-0 right-0 pt-4" v-if="showmenu">
            <div class="searchbar w-5/6 h-12 bg-white mx-auto rounded-md">
                <form action="" method="">
                    <div class="w-4/5 mx-auto flex items-center py-2" >
                        <span class="inline-block w-1/6 text-left pr-2">
                            <i class="material-icons text-2xl text-black">search</i>
                        </span>
                        <label for="recherche" class="hidden">recherche de formations</label>
                        <input type="search" placeholder="Rechercher" class="text-center text-lg outline-none h-7 w-5/6 mb-2" id="search" name="search" >
                    </div>
                </form>
                <ul class="items-menu list-none text-left text-base text-white mt-5">
                    <li id="formations" class="p-item relative cursor-pointer" @click="showmenuformationfunction">Formations <i class="material-icons text-base">arrow_drop_down</i></li>
                        <div class="h-60 w-5/6 mx-auto overflow-y-scroll"  v-if="showmenuformation">
                            <div class="thematic w-4/5 mx-auto">
                                <h2 class="text-sm font-semibold">THEMATIQUES</h2>
                                <ul class="thematic w-1/2 ml-8">
                                    <li class="leading-8 text-xs w-40 font-light border-transparent cursor-pointer text-yellow-500" v-for="(item, index) in themElements" :key="index">{{item}}</li>
                                </ul>

                                <h2 class="text-sm font-semibold mt-8">COURS POPULAIRES</h2>
                                <ul class="popularLesson w-1/2 ml-8">
                                    <li class="leading-8 text-xs w-40 font-light border-transparent cursor-pointer text-yellow-500" v-for="(item, index) in popularLesson" :key="index">{{item}}</li>
                                </ul>

                                <h2 class="text-sm font-semibold mt-8">PARCOURS PRO</h2>
                                <ul class="proCourse w-1/2 ml-8">
                                    <li class="leading-8 text-xs w-40 font-light border-transparent cursor-pointer text-yellow-500" v-for="(item, index) in proCourse" :key="index">{{item}}</li>
                                </ul>
                            </div>
                        </div>
                    <li id="parcours_pro" class="p-item cursor-pointer">Parcours Pro</li>
                    <li id="promos" class="p-item cursor-pointer">Promos</li>
                    <li id="aide" class="p-item cursor-pointer">Aide <i class="material-icons text-base">arrow_drop_down</i></li>
                    <li id="connexion" class="p-item cursor-pointer">Connexion</li>
                    <li id="créer_un_compte" class="p-item cursor-pointer">Créer un Compte</li>
                </ul>
            </div>
        </div>
    </transition>
</template>

<script>
import {ref} from 'vue'
export default {
    name: "menu-small-media",
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
        ]
        let showmenu = ref(false),
        showmenuformation = ref(false),
        showmenuformationfunction = function() {
            showmenuformation.value = !showmenuformation.value
        }
        let changeMenuForm = function(e) {
            if(e.target.innerHTML === "dehaze") {
                e.target.innerHTML = "close"
                showmenu.value = true
            } else if (e.target.innerHTML === "close") {
                e.target.innerHTML = "dehaze"
                showmenu.value= false
            }
            
            console.log(showmenu.value)
        }
        return {
            showmenuformation,
            popularLesson,
            proCourse,
            themElements,
            showmenu,
            changeMenuForm,
            showmenuformationfunction
        }
    },
}
</script>
<style scoped>

    div.menu {
        height: 460px;
    }
    ul.items-menu li.p-item{
        line-height: 50px;
        border-bottom: solid gray 1px;
        margin: 7px 0;
        font-weight: bold;
        
    }
    

    .showmenuicon-enter-from, .showmenuicon-leave-to {
        opacity: 0;
        transform: translateX(-300px);

    }

    .showmenuicon-enter-active, .showmenuicon-leave-active {
        transition: opacity .7s ease, transform .7s ease;
    }
</style>