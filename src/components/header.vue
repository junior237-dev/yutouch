<template>
    <nav class="header_bar w-full left-0 h-24 bg-pink-700 mb-0 lg:bg-transparent lg:absolute lg:top-0 lg:left-0 lg:right-0 lg:z-30">
        <div class="navbar w-full h-full py-4 relative lg:flex lg:justify-between lg:mx-auto lg:w-5/6">
            <div class="small_menu_and_logo w-auto float-left ml-3 lg:float-none">
                <menu-small-media v-if="false"/>
                <a href="/" class="logo inline-block"><img src="../assets/yutouch.jpg" alt="logo" class="object-cover h-14 w-14 rounded-full"></a>
            </div>
            <menu-big-media />
            <a href="" class="basket block float-right mr-3 my-4 relative lg:float-none" v-if="false">
                <i class="material-icons text-white font-bold text-3xl inline-block absolute  right-10">shopping_cart</i>
                <span class="inline-block h-7 w-7 text-black bg-white text-lg rounded-full absolute top-1 right-3">0</span>
            </a>
        </div>
    </nav>
</template>

<script>
import menuSmallMedia from "./menu-small-media.vue"
import menuBigMedia from "./menu-big-media.vue"
export default {
    name: 'headVuejs',
    components: {
        menuSmallMedia,
        menuBigMedia
    },
    
}
</script>

<style scoped>
    a.basket i {
        transition: color .4s ease
    }
    a.basket i:hover {
        color: rgba(226, 55, 12, 0.883); 
    }
</style>
