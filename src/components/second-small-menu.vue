<template>
    <div class="second-small-menu w-full bg-white h-72 z-10 absolute top-24 left-0 right-0">
        <ul class="items-menu list-none text-left text-base text-gray-600 mt-2">
            <li id="accueil" class="p-item relative py-3 border-b border-gray-300 shadow-md text-yellow-500 pl-5 font-light cursor-pointer" @click="menureset"><router-link to="" @click="menureset">Accueil</router-link></li>
            <li id="mes_tutos" class="p-item py-3 border-b border-gray-300 shadow-md pl-5 font-light cursor-pointer"><router-link to="" @click="menureset">Mes tutos</router-link></li>
            <li id="parcours" class="p-item py-3 border-b border-gray-300 shadow-md pl-5 font-light cursor-pointer"><router-link to="" @click="menureset">Parcours</router-link></li>
            <li id="notifications" class="p-item py-3 border-b border-gray-300 shadow-md pl-5 font-light cursor-pointer"><router-link to="" @click="menureset">Notifications</router-link></li>
            <li id="favoris" class="p-item py-3 border-b border-gray-300 shadow-md pl-5 font-light cursor-pointer"><router-link to="" @click="menureset">Favoris</router-link></li>
            <li id="profil" class="p-item py-3 border-b border-gray-300 shadow-md pl-5 font-light cursor-pointer"><router-link to="" @click="menureset">Profil</router-link></li>
        </ul>
    </div>
</template>