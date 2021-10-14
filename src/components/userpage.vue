<template>
    <div class="space-user w-full mx-auto mt-0 md:flex md:items-stretch">
        <div class="divsidebar w-1/5 white hidden md:block md:min-h-screen border-r border-b border-gray-300 bg-gray-100">
            <ul class="sidebar pl-3 ">
                <li class="h-11 flex items-center text-gray-600 cursor-pointer hover:text-yellow-300 active-menu"><span class="block"><i class="material-icons">home</i></span><span class="block text-sm ml-2">Accueil</span></li>
                <li class="h-11 flex items-center text-gray-600 cursor-pointer hover:text-yellow-300"><span class="block"><i class="material-icons">ondemand_video</i></span><span class="block text-sm ml-2">Mes tutos</span></li>
                <li class="h-11 flex items-center text-gray-600 cursor-pointer hover:text-yellow-300"><span class="block"><i class="material-icons">school</i></span><span class="block text-sm ml-2">Parcours</span></li>
                <li class="h-11 flex items-center text-gray-600 cursor-pointer hover:text-yellow-300"><span class="block"><i class="material-icons">notifications</i></span><span class="block text-sm ml-2">Notifications</span></li>
                <li class="h-11 flex items-center text-gray-600 cursor-pointer hover:text-yellow-300"><span class="block"><i class="material-icons">favorite_border</i></span><span class="block text-sm ml-2">Favoris</span></li>
                <li class="h-11 flex items-center text-gray-600 cursor-pointer hover:text-yellow-300"><span class="block"><i class="material-icons">person</i></span><span class="block text-sm ml-2">Profil</span></li>
            </ul>
        </div>
        <!-- <accueil-userpage /> -->
        <tuto-userpage />
    </div>

    {{parcoursDOM()}}
</template>

<script>
import tutoUserpage from "./tuto-userpage.vue"
// import accueilUserpage from "./accueil-userpage.vue"
export default {
    name: "userpage",
    components: {
        // accueilUserpage,
        tutoUserpage
    },
    setup() {
        
        let parcoursDOM = function() {
            let sidebar
            let topsidebar

            window.setTimeout(()=>{ // initialissation des variables sidebar et topsidebar après 200ms
                sidebar = document.querySelector('ul.sidebar')
                topsidebar = sidebar.getBoundingClientRect().top + window.scrollY
            }, 200)

            let fixedsidebarfunction = function() {
                
                if(window.scrollY > topsidebar && !sidebar.classList.contains("fixedsidebar")) {
                    sidebar.classList.add("fixedsidebar")
                } else if(window.scrollY < topsidebar && sidebar.classList.contains("fixedsidebar")) {
                    sidebar.classList.remove("fixedsidebar")
                }
            }
            window.addEventListener('scroll', fixedsidebarfunction)
        }
        

        return {
            parcoursDOM,
        }
    },
    
    
}
</script>

<style lang="scss" scoped>
    $pourcentwidthsidebar: 137*100 / 822;
    .fixedsidebar {
        position: fixed;
        top: 0;
        left: 0;
        width: $pourcentwidthsidebar + 0%;
        padding-top: 30px
    }

    .active-menu {
        color: rgba(245, 158, 11);
    }

    .active-status-choice {
        color: rgba(241, 80, 16, 0.945)
    }
</style>