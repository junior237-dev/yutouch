<template>
    <div class="header w-full h-auto my-0">
        <div class="location small text-gray-400 text-xs mt-3 mb-6 mx-0 pl-4">
            <span>Vous êtes ici : </span>
            <span class="link">Accueil Apprenant</span>
            <span> > </span>
            <span class="link">Mes tutos</span>
        </div>
        <div class="modifications">
            <div class="container-mestutos w-4/5 mx-auto">
                <span class="mes-tutos block w-full font-semibold text-lg text-gray-700">
                    Mes tutos <span class="text-xs">(Toutes les langues <a href="" class="changelanguage font-normal text-blue-400 hover:underline">modifier la langue</a>)</span>
                </span>
                <div class="optionsAndArticles md:max-w-3xl md-mx-auto">
                    <div class="md:grid md:grid-cols-2 md:gap-3 md:w-full">
                        <div class="selectgroup my-5 w-full">
                            <select name="logiciels" id="logiciels" class="w-full h-10 border cursor-pointer rounded-md outline-none focus:border-blue-600 ">
                                <option value="tous_les_logiciels" class="w-4/5 max-auto">tous les logiciels</option>
                                <option value="illustrator">illustrator</option>
                            </select>
                        </div>
                        <div class="flitergroup my-5 w-full cursor-pointer">
                            <div class="filterdiv relative w-full h-10 bg-pink-600 rounded-md flex justify-between items-center" @click="showchoicefunction">
                                <span class="fiterspan text-white inline-block pl-2">filtrer</span>
                                <span class="arrowspan inline-block w-1 mr-3"></span>

                                <transition name="transitionchoice">
                                    <span class="filterchoice absolute top-10 left-0 right-28 inline-block bg-gray-100 h-auto border shadow-md rounded-md" v-if="showchoice">
                                        <ul class="text-xs pl-2 leading-8">
                                            <li v-for="(item,index) in choice" :key="index">{{item}}</li>
                                        </ul>
                                    </span>
                                </transition>
                                
                            </div>
                        </div>
                    </div>
                    <div class="products mt-14 md:w-5/6 md:mx-auto">
                        <div class="w-full mx-auto flex justify-between items-center shadow border my-6 py-2 px-2" v-for="item in 5" :key="item">
                            <img src="../assets/logo.png" alt="" class="h-16 w-16 object-cover">
                            <div class="descriptionAndprogession w-3/5">
                                <h2 class="font-bold text-gray-700 leading-4 text-sm">Apprendre à dessiner...</h2>
                                <small class="text-xs text-gray-500"><a>Noter ce tuto</a></small>
                                <br>
                                <div class="progression w-4/5 border h-3 relative rounded-md inline-block">
                                    <div class="completedprogress absolute top-0 left-0 bottom-0 w-10 rounded-md bg-yellow-500 border border-yellow-500"></div>
                                </div>
                                <span class="inline-block text-sm text-gray-500 ml-1">35%</span>
                            </div>
                            <div class="close">
                                <i class="material-icons font-extrabold text-sm text-gray-500">close</i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {ref} from "vue"
export default {
    name: "tutoUserpage",
    setup() {
        let choice = [
            "Tous les tutos",
            "Tutos gratuits",
            "Formations complètes"
        ],
        showchoice = ref(false),
        showchoicefunction = function() {
            showchoice.value = !showchoice.value
        }

        return {
            choice,
            showchoice,
            showchoicefunction
        }
    },
}
</script>

<style scoped>
    .arrowspan::after {
        content: "";
        display: inline-block;
        width: 0;
        border-top: 4px solid white;
        border-left: 4px solid transparent;
        border-bottom: 4px solid transparent;
        border-right: 4px solid transparent
    }

    .transitionchoice-enter-from, .transitionchoice-leave-to {
        opacity: 0;
        transform: translateY(10px);
    }
    .transitionchoice-enter-active, .transitionchoice-leave-active {
        transition: opacity .5s ease, transform .5s ease
    }
</style>