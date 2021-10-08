<template>
    <div class="space-user w-full mx-auto mt-0">
        <div class="header w-full h-auto my-3">
            <div class="first-container pl-5 bg-gray-200">
                <h2 class="text-2xl text-gray-500">ACCUEIL APPRENANT</h2>
                <div class="status">
                    <span class="text-lg">Accès Apprenant</span>
                </div>
            </div> 
            <div class="dashbord w-full mx-auto h-28">
                <div class="hello mt-5 ml-5 text-2xl text-gray-600">Bonjour {{user}} !</div>
                <div class="dashbord-element w-4/5 mx-auto"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    setup() {
        let user = 'user'

        return {
            user
        }
    },
}
</script>

<style lang="scss" scoped>
    .header span::after {
        content: "";
        display: inline-block;
        width: 0;
        margin-left: 6px;
        border-top: 7px solid gray;
        border-left: 7px solid transparent;
        border-bottom: 7px solid transparent;
        border-right: 7px solid transparent
    }
</style>