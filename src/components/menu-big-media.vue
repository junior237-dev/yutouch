<template>
    <div class="menu-big-media w-5/6 h-auto my-5 hidden lg:flex lg:justify-between relative">
        <ul class="first-part w-1/2 flex justify-between text-white text-sm font-light mr-9">
            <li class="cursor-pointer flex items-center" @click='showformationpanel'><a>Formations</a><i class="material-icons tiny">arrow_drop_down</i>
                <transition name="transitionpanel">
                    <formation-panel v-if="showpanel"/>
                </transition>
            </li>
            <li class="cursor-pointer"><a>Parcours  Pro</a></li>
            <li class="cursor-pointer"><a>Promo</a></li>
            <li class="cursor-pointer rounded-full active-item-menu relative" @click='showsearchbarfunction'><i class="material-icons">search</i>
                <transition name="transitionsearchbar">
                    <searchbar v-if="showsearchbar" class="text-black absolute top-8 -left-40"/>
                </transition>
            </li>
        </ul>
        <ul class="second-part w-1/2 flex justify-around text-white text-sm font-light ml-3 mr-8">
            <li class="cursor-pointer flex items-center"><a>Aide</a><i class="material-icons tiny">arrow_drop_down</i></li>
            <li class="cursor-pointer"><a>Connexion</a></li>
            <li class="cursor-pointer"><a>Créer Compte</a></li>
        </ul>
    </div>
</template>

<script>
import {ref} from "vue"
import formationPanel from "./formation-panel.vue"
import searchbar from "./searchbar.vue"
export default {
    name: 'menuBigMedia',
    components: {formationPanel, searchbar},
    setup() {
        let showsearchbar = ref(false),
        showpanel = ref(false),
        showsearchbarfunction = function() {
            showsearchbar.value = !showsearchbar.value
            showpanel.value = false
        },
        showformationpanel = function(e) {
            showpanel.value = !showpanel.value
            showsearchbar.value = false
            console.log(e.currentTarget)
        }

        return {
            showpanel,
            showsearchbar,
            showformationpanel,
            showsearchbarfunction
        }
    },
}
</script>
<style scoped>

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