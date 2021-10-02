<template>
    <nav class="header_bar w-full left-0 h-24 bg-red-700 mb-0 ">
        <div class="navbar w-full h-full py-4 relative">
            <div class="menu_and_logo w-auto float-left ml-3">
                <div class="menu-icone inline-block h-auto mr-3">
                    <i class="material-icons text-white text-4xl font-bold" @click="changeMenuForm">dehaze</i>
                </div>
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
                        <ul class="items-menu list-none text-left text-lg text-white mt-5">
                            <li id="formations">Formations <i class="material-icons text-base">arrow_drop_down</i></li>
                            <li id="parcours_pro">Parcours Pro</li>
                            <li id="promos">Promos</li>
                            <li id="aide">Aide <i class="material-icons text-base">arrow_drop_down</i></li>
                            <li id="connexion">Connexion</li>
                            <li id="créer un compte">Créer un Compte</li>
                        </ul>
                    </div>

                </div>
                <a href="/" class="logo inline-block"><img src="../assets/yutouch.jpg" alt="logo" class="object-cover h-14 w-14 rounded-full"></a>
            </div>
            <a href="" class="block float-right mr-3 my-4 relative">
                <i  class="material-icons text-white font-bold text-3xl inline-block absolute  right-10">shopping_cart</i>
                <span class="inline-block h-7 w-7 text-black bg-white text-lg rounded-full absolute top-1 right-3">3</span>
            </a>
        </div>
    </nav>
</template>

<script>
import {ref} from 'vue'
export default {
    name: 'headVuejs',
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
</style>
