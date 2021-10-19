import { createRouter, createWebHistory } from 'vue-router'

import home from "../components/home.vue"
import pageFormation from "../components/page_formation.vue"
import userPage from "../components/userpage.vue"
import tutoUserpage from "../components/tuto-userpage.vue"
import accueilUserpage from "../components/accueil-userpage.vue"
import parcoursUserpage from "../components/parcours-userpage.vue"
import notificationsUserpage from "../components/notifications-userpage.vue"
import favorisUserpage from "../components/favoris-userpage.vue"
import gestionAlerte from "../components/gestionAlert.vue"
import profilUserpage from "../components/profil-userpage.vue"
import infoPerso from "../components/profilComponent.vue"
import inscription from "../components/inscription.vue"
import connexion from "../components/connexion.vue"
import pageCategorie from "../components/page_categorie.vue"

const routes = [
    {
        name: "home",
        path: "/",
        component: home
    },
    {
        name: "page des catégories de formations",
        path: "/page_categorie",
        component: pageCategorie
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
        children: [
            {
                name: "profil",
                path: "profil",
                component: profilUserpage,
                children: [
                    {
                        name: "informations_personnelles",
                        path: "informations_personnelles",
                        component: infoPerso
                    },
                    {
                        name: "gestionAlerte",
                        path: "gestion_alerte",
                        component: gestionAlerte
                    }
                ]
            },
            {
                name: "favoris",
                path: "favoris",
                component: favorisUserpage
            },
            {
                name: "accueil",
                path: "accueil",
                component: accueilUserpage
            },
            {
                name: "mes_tutos",
                path: "mes_tutos",
                component: tutoUserpage
            },
            {
                name: "parcoursPro",
                path: "parcours_pro",
                component: parcoursUserpage
            },
            {
                name: "notifications",
                path: "notifications",
                component: notificationsUserpage
            }
        ]
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
