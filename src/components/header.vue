<template>
    <nav class="header_bar w-full left-0 h-24 bg-red-700 mb-0 lg:bg-transparent lg:absolute lg:top-0 lg:left-0 lg:right-0 lg:z-30">
        <div class="navbar w-full h-full py-4 relative lg:flex lg:justify-between lg:item">
            <div class="menu_and_logo w-auto float-left ml-3 lg:float-none">
                <menu-small-media/>
                <a href="/" class="logo inline-block"><img src="../assets/yutouch.jpg" alt="logo" class="object-cover h-14 w-14 rounded-full"></a>
            </div>
            <div class="menu-big-media w-5/6 h-auto my-5 hidden lg:flex lg:justify-between">
                <ul class="first-part w-1/2 flex text-white text-base font-light text-left">
                    <li class="mr-7 cursor-pointer">Formations</li>
                    <li class="mr-7 cursor-pointer">Parcours  Pro</li>
                    <li class="mr-7 cursor-pointer">Promo</li>
                    <li class="mr-7 cursor-pointer"><i class="material-icons">search</i></li>
                </ul>
                <ul class="first-part w-1/2 flex text-white text-base font-light">
                    <li class="mr-7 cursor-pointer">Aide</li>
                    <li class="mr-7 cursor-pointer">Connexion</li>
                    <li class="mr-7 cursor-pointer">Créer Compte</li>
                </ul>
            </div>
            <a href="" class="block float-right mr-3 my-4 relative lg:float-none">
                <i class="material-icons text-white font-bold text-3xl inline-block absolute  right-10">shopping_cart</i>
                <span class="inline-block h-7 w-7 text-black bg-white text-lg rounded-full absolute top-1 right-3">3</span>
            </a>
        </div>
    </nav>
</template>

<script>
import menuSmallMedia from "./menu-small-media.vue"
export default {
    name: 'headVuejs',
    components: {
        menuSmallMedia
    },
    
}
</script>

<style scoped>
    
    li.mr-7 {
        transition: color .4s ease
    }
    li.mr-7:hover {
        color: #42ddbe; 
    }
</style>
