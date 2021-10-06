<template>
    <div class="menu-big-media w-5/6 h-auto my-5 hidden lg:flex lg:justify-between relative">
        <ul class="first-part w-1/2 flex justify-between text-white text-sm font-light mr-9">
            <li class="cursor-pointer flex items-center" @click='showformationpanel'><a>Formations</a><i class="material-icons tiny">arrow_drop_down</i></li>
            <transition name="transitionpanel">
                <formation-panel v-if="showpanel"/>
            </transition>
            <li class="cursor-pointer"><a>Parcours  Pro</a></li>
            <li class="cursor-pointer"><a>Promo</a></li>
            <li class="cursor-pointer rounded-full" @click='showsearchbarfunction'><i class="material-icons">search</i></li>
        </ul>
        <ul class="second-part w-1/2 flex justify-around text-white text-sm font-light ml-3 mr-8 relative">
            <li class="cursor-pointer flex items-center active-item-menu"  @click='showhelpfunction'>Aide<i class="material-icons tiny">arrow_drop_down</i></li>
            <transition name="transitionhelp">
                <help v-if="showhelp" class="text-black absolute top-8 -left-16"/>
            </transition>
            <li class="cursor-pointer"><a>Connexion</a></li>
            <li class="cursor-pointer"><a>Créer Compte</a></li>
        </ul>
        <transition name="transitionsearchbar">
            <searchbar v-if="showsearchbar" class="text-black fixed top-20 left-0 right-0 mx-auto"/>
        </transition>
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
        showformationpanel = function(e) {
            showpanel.value = !showpanel.value
            showsearchbar.value = false
            showhelp.value = false

            console.log(e.currentTarget)
        }

        return {
            showhelp,
            showpanel,
            showsearchbar,
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