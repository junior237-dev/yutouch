import { createRouter, createWebHistory } from 'vue-router'

// import headerVue from "../components/header.vue"
// import mainVue from "../components/main.vue"
import home from "../components/home.vue"
import pageFormation from "../components/page_formation.vue"
import userPage from "../components/userpage.vue"
import inscription from "../components/inscription.vue"
import connexion from "../components/connexion.vue"

const routes = [
    {
        name: "accueil",
        path:"/",
        component: home
    },
    {
        name: "page des formations",
        path: "/page_formation",
        component: pageFormation
    },
    {
        name: "page utilisateur",
        path: "/page_utilisateur",
        component: userPage,
    },
    {
        name: "inscription",
        path: "/inscription",
        component: inscription
    },
    {
        name: "connexion",
        path: "/connexion",
        component: connexion
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
