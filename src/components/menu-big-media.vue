<template>
    <div class="menu-big-media w-5/6 h-auto my-5 hidden lg:flex lg:justify-between relative">
        <ul class="first-part w-1/2 flex justify-between text-white text-sm font-light mr-9">
            <li class="formations-li cursor-pointer flex items-center">Formations<i class="arrow_drop_down-formation material-icons tiny">arrow_drop_down</i></li>
            <transition name="transitionpanel">
                <formation-panel v-if="showpanel" @resetmenu="showformationpanel"/>
            </transition>
            <li class="cursor-pointer"><router-link to="">Parcours  Pro</router-link></li>
            <li class="cursor-pointer"><a>Promo</a></li>
            <li class="cursor-pointer rounded-full"><i class="search-icon material-icons">search</i></li>
        </ul>
        <ul class="second-part w-1/2 flex justify-around text-white text-sm font-light ml-3 mr-8 relative">
            <li class="help-li cursor-pointer flex items-center">Aide<i class="arrow_drop_down-help material-icons tiny">arrow_drop_down</i></li>
            <transition name="transitionhelp">
                <help v-if="showhelp" class="text-black absolute top-8 -left-16"/>
            </transition>
            <li class="cursor-pointer"><router-link to="/connexion">Connexion</router-link></li>
            <li class="cursor-pointer"><router-link to="/inscription">Créer Compte</router-link></li>
        </ul>
        <transition name="transitionsearchbar">
            <searchbar v-if="showsearchbar" class="text-black"/>
        </transition>
        {{lookatThistemplate()}}
    </div>
</template>

<script>
import {ref} from "vue"
import formationPanel from "./formation-panel.vue"
import searchbar from "./searchbar.vue"
import help from './help.vue'
export default {
    name: 'menuBigMedia',
    components: {formationPanel, searchbar, help},
    setup() {
        let showsearchbar = ref(false),
        showpanel = ref(false),
        showhelp = ref(false),
        showhelpfunction = function() {
            showhelp.value = !showhelp.value
            showsearchbar.value = false
            showpanel.value = false
        },
        showsearchbarfunction = function() {
            showsearchbar.value = !showsearchbar.value
            showpanel.value = false
            showhelp.value = false
        },
        showformationpanel = function() {
            showpanel.value = !showpanel.value
            showsearchbar.value = false
            showhelp.value = false
        },
        lookatThistemplate = function() {
            setTimeout(()=>{
                document.querySelector("nav.header_bar").addEventListener("click", function(e) {
                    
                    if (e.target.classList.contains("formations-li") || e.target.classList.contains("arrow_drop_down-formation")) {
                        showformationpanel()
                    } else if(e.target.classList.contains("search-icon")) {
                        showsearchbarfunction()
                    } else if(e.target.classList.contains("arrow_drop_down-help") || e.target.classList.contains("help-li")) {
                        showhelpfunction()
                    } else {
                        showhelp.value = false
                        showsearchbar.value = false
                        showpanel.value = false
                        console.log(e.target)
                        return 
                    }
                    
                    // console.log(e.target)
                })

                document.querySelector("div.main").addEventListener("click", function(e) {
                    showhelp.value = false
                    showsearchbar.value = false
                    showpanel.value = false
                    console.log(e.target)
                    return
                })
                
            }, 100)
           
        }

        return {
            showhelp,
            showpanel,
            showsearchbar,
            lookatThistemplate,
            showhelpfunction,
            showformationpanel,
            showsearchbarfunction
        }
    },
}
</script>
<style scoped>

    .transitionsearchbar-enter-from, .transitionsearchbar-leave-to, .transitionhelp-enter-from, .transitionhelp-leave-to {
        opacity: 0
    }
    .transitionsearchbar-enter-active, .transitionsearchbar-leave-active, .transitionhelp-enter-active, .transitionhelp-leave-active {
        transition: opacity .7s ease
    }

    .transitionpanel-enter-from, .transitionpanel-leave-to {
        opacity: 0;
        transform: translateX(-200px)
    }
    .transitionpanel-enter-active, .transitionpanel-leave-active {
        transition: opacity .7s ease, transform .7s ease
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