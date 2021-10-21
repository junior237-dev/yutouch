<template>
    <div class="profil-userpage w-full">
        <div class="header w-full h-auto my-0">
            <div class="first-container relative py-2.5 pl-8 h-20 border-b border-gray-300 bg-gray-200">
                <h2 class="text-xl text-gray-400">PROFIL</h2>
                <div class="status" @click="showstatusfunction">
                    <span class="apprenant-formateur text-base font-light text-gray-600 cursor-pointer">{{status}}</span>
                </div>
                <transition name="transitionStatusChoice">
                    <ul class="status-choice top-20 absolute left-0 right-0 md:right-96 bg-white" v-if="showstatuschoice">
                        <li class="first-choice cursor-pointer border-b pl-4 text-base font-light" ><router-link to= "informations_personnelles" @click="changestatus">Informations personnelles</router-link></li>
                        <li class="second-choice cursor-pointer border-b pl-4 text-base font-light" @click="changestatus">Moyens de paiement</li>
                        <li class="third-choice cursor-pointer border-b pl-4 text-base font-light"><router-link to= "gestion_alerte" @click="changestatus">Gestion alertes</router-link></li>
                    </ul>
                </transition>
            </div> 
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
import {ref} from "vue"
export default {
    setup() {
        let status = ref('Informations personnelles'),
        showstatuschoice = ref(false),
        changestatus = function(e) {
            status.value = e.currentTarget.innerHTML
            showstatuschoice.value = false
        },
        showstatusfunction = function(e) {
            showstatuschoice.value = !showstatuschoice.value
            if (showstatuschoice.value === true) {

                setTimeout(() => {
                    let choices = document.querySelectorAll("ul.status-choice li")

                    for(let i=0; i < choices.length; i++) {
                        if(choices[i].innerText === e.target.innerText) {
                            choices[i].classList.add("text-yellow-500")
                        }
                    }
                    
                }, 150)
                
            }
        }

        return {
            status,
            showstatuschoice,
            showstatusfunction,
            changestatus
        }
    },
}
</script>
<style scoped>
    .header span.apprenant-formateur::after {
        content: "";
        display: inline-block;
        width: 0;
        margin-left: 6px;
        border-top: 4px solid rgb(167, 164, 164);
        border-left: 4px solid transparent;
        border-bottom: 4px solid transparent;
        border-right: 4px solid transparent
    }

    li.first-choice, li.second-choice, .third-choice {
        line-height: 5em
    }

    .transitionStatusChoice-enter-from, .transitionStatusChoice-leave-to {
        opacity: 0;
        transform: translateY(-22px)
    }

    .transitionStatusChoice-enter-active, .transitionStatusChoice-leave-active {
        transition:opacity .7s ease, transform .3s ease
    }
</style>