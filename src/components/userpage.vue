<template>
    <div class="space-user w-full mx-auto mt-0 md:flex">
        <div class="w-1/5 white hidden md:block">
            <ul class="sidebar pl-3 border-r border-b border-gray-300 bg-gray-100">
                <li class="h-20 flex items-center text-gray-600 cursor-pointer hover:text-yellow-300"><span class="block"><i class="material-icons">home</i></span><span class="block text-sm">Accueil</span></li>
                <li class="h-20 flex items-center text-gray-600 cursor-pointer hover:text-yellow-300"><span class="block"><i class="material-icons">ondemand_video</i></span><span class="block text-sm">Mes tutos</span></li>
                <li class="h-20 flex items-center text-gray-600 cursor-pointer hover:text-yellow-300 active-menu"><span class="block"><i class="material-icons">school</i></span><span class="block text-sm">Parcours</span></li>
                <li class="h-20 flex items-center text-gray-600 cursor-pointer hover:text-yellow-300"><span class="block"><i class="material-icons">notifications</i></span><span class="block text-sm">Notifications</span></li>
                <li class="h-20 flex items-center text-gray-600 cursor-pointer hover:text-yellow-300"><span class="block"><i class="material-icons">favorite_border</i></span><span class="block text-sm">Favoris</span></li>
                <li class="h-20 flex items-center text-gray-600 cursor-pointer hover:text-yellow-300"><span class="block"><i class="material-icons">person</i></span><span class="block text-sm">Profil</span></li>
            </ul>
        </div>
        <div class="header w-full h-auto my-3">
            <div class="first-container relative py-2.5 pl-5 h-20 border-b border-gray-300 bg-gray-200">
                <h2 class="text-xl text-gray-400">ACCUEIL APPRENANT</h2>
                <div class="status" @click="showstatusfunction">
                    <span class="apprenant-formateur text-base font-light text-gray-600">{{status}}</span>
                </div>
                <transition name="transitionStatusChoice">
                    <ul class="status-choice top-20 absolute left-0 right-0 bg-white" v-if="showstatuschoice">
                        <li class="first-choice border-b pl-4 text-base font-light" @click="changestatus">Accès Apprenant</li>
                        <li class="second-choice border-b pl-4 text-base font-light" @click="changestatus">Accès Formateur</li>
                    </ul>
                </transition>
            </div> 
            <div class="dashbord w-full mx-auto h-auto">
                <div class="hello mt-5 text-2xl  text-center text-yellow-500">Bonjour {{user}} !</div>
                <div class="dashbord-elements w-4/5 mt-10 mx-auto">
                    <ul class="dashboard-element-range sm:w-2/3 sm:mx-auto grid grid-cols-3 gap-2">
                        <li v-for="(item, indice) in dashboardElements" :key="indice"><span class="text-center h-8 w-8"><i class="material-icons inline-block w-4/5 mx-auto text-gray-500">{{item.iconName}}</i><br><span class="label inline-block text-gray-500 w-4/5 mx-auto">{{item.iconLabel}}</span></span></li>
                    </ul>
                </div>
            </div>
            <section class="new">
                <div class="containernew">
                    <container-category-second :viewmoreText="'toutes les nouveautés'" :categoryTitle="'Nouveautés'" :colorTicket="['bg-blue-400']" :labelTicket="'nouveau'"/>
                </div>
            </section>
            <section class="promo">
                <div class="containerpromo">
                    <container-category-second :viewmoreText="'toutes les promos'" :categoryTitle="'Promo...'" :colorTicket="['bg-yellow-600']" :labelTicket="'Promo!!!'"/>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import {ref} from 'vue'
import containerCategorySecond from "./container-category-second.vue"
export default {
    name: "userpage",
    components: {
        containerCategorySecond
    },
    setup() {
        let user = 'user',
        status = ref('Accès Apprenant'),
        showstatuschoice = ref(false),
        changestatus = function(e) {
            // e.currentTarget.classList.add("active-status-choice")
            status.value = e.currentTarget.innerHTML
            showstatuschoice.value = false
            // console.log(e.currentTarget.innerHTML)
        }, //active-status-choice
        showstatusfunction = function() {
            showstatuschoice.value = !showstatuschoice.value
            // if (showstatuschoice.value === true && e.currentTarget.firstChild.innerHTML === "Accès Apprenant") {
            //     console.log(e.currentTarget.parentNode.lastChild.firstChild)
            //     e.currentTarget.parentNode.lastChild.firstChild.classList.add("active-status-choice")
            // } else if (showstatuschoice.value === true && e.currentTarget.firstChild.innerHTML === "Accès Formateur") {
            //     e.currentTarget.parentNode.lastChild.lastChild.classList.add("active-status-choice")
            // }
        },
        dashboardElements = [
            {
                iconName: "ondemand_video",
                iconLabel: "mes tutos"
            },
            {
                iconName: "favorite_border",
                iconLabel: "favoris"
            },
            {
                iconName: "mic_none",
                iconLabel: "Publier un tuto"
            }
        ]

        return {
            user,
            status,
            dashboardElements,
            showstatuschoice,
            showstatusfunction,
            changestatus
        }
    },
    mounted() {
        window.addEventListener("scroll", this.updateScroll)
    },
    methods: {
        updateScroll() {
            const scrollPosition = window.scrollY;
            let header_bar = document.querySelector("nav.header_bar").style.height
            // if (scrollPosition > 96 && document.querySelector('ul.sidebar')) {
            //     let sidebar = document.querySelector('ul.sidebar')
            //     sidebar.classList.add('fixedsidebar')
            //     this.scrollNav = true;
            //     return;
            // } else {}
            // this.scrollNav = false
            console.log('la h du header est:'+header_bar)
            console.log(`le scroll de la est: ${scrollPosition}`)
            return ''
        },
    }
}
</script>

<style lang="scss" scoped>

    .fixedsidebar {
        position: fixed;
        top: 0;
        left: 0;
    }
    .header span.apprenant-formateur::after {
        content: "";
        display: inline-block;
        width: 0;
        margin-left: 6px;
        border-top: 4px solid rgb(167, 164, 164);
        border-left: 4px solid transparent;
        border-bottom: 4px solid transparent;
        border-right: 4px solid transparent
    }

    .active-menu {
        color: rgba(245, 158, 11);
    }

    .dashboard-element-range i {
        font-size: 3.5em
    }

    li.first-choice, li.second-choice {
        line-height: 5em
    }

    .transitionStatusChoice-enter-from, .transitionStatusChoice-leave-to {
        opacity: 0;
        transform: translateY(-22px)
    }

    .transitionStatusChoice-enter-active, .transitionStatusChoice-leave-active {
        transition:opacity .7s ease, transform .3s ease
    }

    .active-status-choice {
        color: rgba(241, 80, 16, 0.945)
    }
</style>