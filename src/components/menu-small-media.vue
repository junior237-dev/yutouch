<template>
    <div class="menu-icone inline-block h-auto mr-3 lg:hidden">
        <i class="material-icons text-white text-4xl font-bold" @click="changeMenuForm">dehaze</i>
    </div>
    <transition name="showmenuicon">
        <div class="menu w-full h-80 overflow-scroll bg-gray-900 z-10 absolute top-24 left-0 right-0 pt-4" v-if="showmenu">
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
                    <li id="formations relative">Formations <i class="material-icons text-base">arrow_drop_down</i></li>
                    <li id="parcours_pro">Parcours Pro</li>
                    <li id="promos">Promos</li>
                    <li id="aide">Aide <i class="material-icons text-base">arrow_drop_down</i></li>
                    <li id="connexion">Connexion</li>
                    <li id="créer un compte">Créer un Compte</li>
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
        let showmenu = ref(false)
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
            showmenu,
            changeMenuForm
        }
    },
}
</script>
<style scoped>
    ul.items-menu li{
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