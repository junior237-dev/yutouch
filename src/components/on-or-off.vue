<template>
    <div class="on-or-off" @click="changeposition">
        <span class="on items-center flex justify-around w-16 h-7 rounded-full bg-gray-700 cursor-pointer" v-if="showonOroff"><span class="state inline-block text-white">ON</span> <span class="circle inline-block h-4 w-4 rounded-full bg-green-800"></span></span>
        <span class="off items-center flex justify-around w-16 h-7 rounded-full bg-gray-200 cursor-pointer" v-if="!showonOroff"><span class="circle inline-block h-4 w-4 rounded-full bg-gray-800"></span><span class="state inline-block text-gray-900">OFF</span></span>
    </div>
</template>
<script>
import {ref} from "vue"
export default {
    name: "on-or-off",
    props: {
        toggle: {
            type: String,
            default: "on"
        }
    },
    setup() {
        let showonOroff = ref(true),
        changeposition = function() {
            showonOroff.value = !showonOroff.value
            // console.log(e.currentTarget)
        }
        return {
            showonOroff,
            changeposition
        }
    },
    data() {
        return {
            flex: "flex",
            hidden: "hidden"
        }
    },

}
</script>

<style scoped>
    .on-enter-from, .on-leave-to, .off-enter-from, .off-leave-to {
        transform: translateX(5px)
    }
    .on-enter-active, .on-leave-active, .off-enter-active, .off-leave-active {
        transition: transform .5s ease
    }
</style>

