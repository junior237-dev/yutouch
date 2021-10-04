<template>
    <div class="menu-big-media w-5/6 h-auto my-5 hidden lg:flex lg:justify-between">
        <ul class="first-part w-1/2 flex justify-between text-white text-sm font-light mr-9">
            <li class=" cursor-pointer">Formations</li>
            <li class=" cursor-pointer">Parcours  Pro</li>
            <li class=" cursor-pointer">Promo</li>
            <li class=" cursor-pointer"><i class="material-icons">search</i></li>
        </ul>
        <ul class="second-part w-1/2 flex justify-around text-white text-sm font-light ml-3 mr-8">
            <li class="cursor-pointer">Aide</li>
            <li class="cursor-pointer">Connexion</li>
            <li class="cursor-pointer">Créer Compte</li>
        </ul>
    </div>
</template>
<style scoped>
    ul.first-part li:first-child::after, ul.second-part li:first-child::after {
        content: '';
        display: inline-block;
        width: 8px;
        margin-left: 5px;
        border-top: 5px solid white;
        border-bottom: 4px solid transparent;
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
    }

    div.menu-big-media li {
        transition: color .4s ease
    }
    div.menu-big-media li:hover {
        color: #e2288b; 
    }
</style>