<template>
    <div class="notifications">
        <div class="header w-full h-auto my-0">
            <div class="location small text-gray-400 text-xs mt-3 mb-6 mx-0 pl-4">
                <span>Vous êtes ici : </span>
                <span class="link">Accueil Apprenant</span>
                <span> > </span>
                <span class="link">Notifications</span>
            </div>
        </div>
        <div class="flux-echanges w-full pl-4 md:grid md:grid-cols-2">
            <h2 class="mx-auto w-5/6 md:w-52 md:text-2xl text-gray-600 text-xl">Flux d'échanges</h2>
            <div class="flitergroup my-2 w-auto cursor-pointer">
                <div class="filterdiv relative w-5/6 md:w-72 mx-auto h-10 bg-pink-600 rounded-md flex justify-between items-center" @click="showchoicefunction">
                    <span class="fiterspan text-white text-sm inline-block pl-2">{{choice[0]}}</span>
                    <span class="arrowspan inline-block w-1 mr-3"></span>

                    <transition name="transitionchoice">
                        <span class="filterchoice absolute top-10 left-0 right-28 inline-block bg-gray-100 h-auto border shadow-md rounded-md" v-if="showchoice">
                            <ul class="text-xs my-3 px-2 leading-8">
                                <li class="choice pl-2" v-for="(item,index) in choice" :key="index" @click="todoAchoice">{{item}}</li>
                            </ul>
                        </span>
                    </transition>

                </div>
            </div>
        </div>
        <div class="alert w-5/6 mx-auto mt-5">
            <p class="pl-4 text-gray-500 text-left">Vous n'avez aucun échange à afficher pour l'instant.</p>
        </div>
    </div>
</template>

<script>
import {ref} from "vue"
export default {
    name: "notificationsUserpage",
    setup() {
        let choice = [
            "Tous les types",
            "Publications",
            "Promo"
        ],
        showchoice = ref(false),
        showchoicefunction = function(e) {
            showchoice.value = !showchoice.value
            if (showchoice.value === true) {

                setTimeout(() => {
                    let choices = document.querySelectorAll("li.choice")

                    for(let i=0; i < choices.length; i++) {
                        if(choices[i].innerText === e.target.innerText) {
                            choices[i].classList.add("bg-yellow-500")
                        }
                    }
                    
                }, 200)
                
            }
        },
        todoAchoice = function(e) {
            let filterspan = document.querySelector('span.fiterspan')
            filterspan.innerHTML = e.target.innerHTML


        }

        return {
            choice,
            showchoice,
            todoAchoice,
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