<template>
    <div class="header w-full h-auto my-0">
        <div class="first-container relative py-2.5 pl-5 h-20 border-b border-gray-300 bg-gray-200">
            <h2 class="text-xl text-gray-400">ACCUEIL APPRENANT</h2>
            <div class="status" @click="showstatusfunction">
                <span class="apprenant-formateur text-base font-light text-gray-600 cursor-pointer">{{status}}</span>
            </div>
            <transition name="transitionStatusChoice">
                <ul class="status-choice top-20 absolute left-0 right-0 bg-white md:right-96" v-if="showstatuschoice">
                    <li class="first-choice border-b pl-4 text-base font-light cursor-pointer" @click="changestatus">Accès Apprenant</li>
                    <li class="second-choice border-b pl-4 text-base font-light cursor-pointer" @click="changestatus">Accès Formateur</li>
                </ul>
            </transition>
        </div> 
        <div class="dashbord w-full mx-auto h-auto">
            <div class="location small text-gray-400 text-xs mt-3 mb-6 mx-0 pl-4">
                <span>Vous êtes ici : </span>
                <span class="link">Accueil</span>
                <span> > </span>
                <span class="link">Apprenant</span>
                <span> > </span>
                <span> Tuto </span>
            </div>
            <div class="hello mt-5 text-2xl  text-center text-yellow-500">Bonjour {{user}} ! 👋</div>
            <div class="dashbord-elements w-4/5 mt-10 mx-auto">
                <ul class="dashboard-element-range sm:w-2/3 sm:mx-auto grid grid-cols-3 gap-2">
                    <li><router-link to="mes_tutos"><span class="text-center h-8 w-8"><i class="material-icons inline-block w-4/5 mx-auto text-gray-500">ondemand_video</i><br><span class="label inline-block text-gray-500 w-4/5 mx-auto">mes tuto</span></span></router-link></li>
                    <li><router-link to="favoris"><span class="text-center h-8 w-8"><i class="material-icons inline-block w-4/5 mx-auto text-gray-500">favorite_border</i><br><span class="label inline-block text-gray-500 w-4/5 mx-auto">favoris</span></span></router-link></li>
                    <li><span class="text-center h-8 w-8"><i class="material-icons inline-block w-4/5 mx-auto text-gray-500">mic_none</i><br><span class="label inline-block text-gray-500 w-4/5 mx-auto">publier un tuto</span></span></li>
                </ul>
            </div>
        </div>
        <section class="new">
            <div class="containernew">
                <container-category-second :viewmoreText="'toutes les nouveautés'" :categoryTitle="'Nouveautés'" :colorTicket="['bg-blue-400']" :labelTicket="'nouveau'"/>
            </div>
        </section>
        <section class="promo mb-10">
            <div class="containerpromo">
                <container-category-second :viewmoreText="'toutes les promos'" :categoryTitle="'Promo...'" :colorTicket="['bg-yellow-600']" :labelTicket="'Promo!!!'"/>
            </div>
        </section>
    </div>
</template>
<script>
import {ref} from 'vue'
import containerCategorySecond from "./container-category-second.vue"
export default {
    name: "accueilUserpage",
    components: {containerCategorySecond},
    setup() {
        let user = 'user',
        status = ref('Accès Apprenant'),
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
                    
                }, 200)
                
            }
        }

        return {
            user,
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
    .dashboard-element-range i {
        font-size: 3.5em
    }

    li.first-choice, li.second-choice {
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