<template>
    <nav class="header_bar w-full left-0 h-24 bg-red-700 mb-0 ">
        <div class="navbar w-full h-full py-4">
            <div class="menu_and_logo w-auto float-left ml-3">
                <div class="menu inline-block h-auto mr-3">
                    <i class="material-icons text-white text-4xl font-bold">dehaze</i>
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
export default {
    name: 'headVuejs',
    setup() {
        
    },
}
</script>
