<template>
    <div class="gestionAlerte">
        <div class="location small text-gray-400 text-xs mt-3 mb-6 mx-0 pl-8">
            <span>Vous êtes ici : </span>
            <span class="link">Accueil Apprenant</span>
            <span> > </span>
            <span class="link">Profil</span>
            <span> > </span>
            <span class="link">Gestion Alerte</span>
        </div>

        <div class="body">
            <div class="alert pl-8 mb-10" v-for="(item, indice) in alertBlock" :key="indice">
                <h3 class="text-lg mb-4 font-bold text-gray-700">{{item.title}}</h3>
                <div class="toggle">
                    <div class="mb-3 sm:flex sm:items-center" v-for="(label, indice) in item.label" :key="indice">
                        <onor-off />
                        <div class="label-toggle text-gray-600 text-sm sm:pl-2">{{label}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import onorOff from "./on-or-off.vue"
export default {
    name: "gestionAlert",
    components: {onorOff},
    setup() {
        let alertBlock = [
            {
                title: "Newsletter",
                label: [
                   "Sélection de tuto, code promo, actu (...)" 
                ]
            },
            {
                title: "Tuto gratuits",
                label: [
                    "Nouveaux tuto gratuits"
                ]
            },
            {
                title: "Alertes produit",
                label: [
                    "Illustrator"
                ]
            },
            {
                title: "Communauté",
                label: [
                    "Recevoir les alertes utilisateurs (relance panier, confirmation achat, etc.)",
                    "Recevoir les alertes 'coupon gratuit'",
                    "Recevoir les alertes 'coupon réduction'",
                    "Recevoir les alertes 'coupon' sur vos tutos favoris"
                ]
            },
            {
                title: "Contributeur",
                label: [
                    "Récap de vos ventes (1 fois par jour)",
                    "Récap des téléchargement gratuits (1 fois par jour)",
                    "Alerte nouvel avis & note (live)",
                    "Alerte nouvelle question FAQ (live)",
                ]
            }
        ]

        return {
            alertBlock
        }
        
    },
}
</script>