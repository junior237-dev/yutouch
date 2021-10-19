<template>
    <div class="formation-panel absolute top-8 left-3 rounded-lg h-96">
        <div class="categories-section my-5 mx-auto w-5/6 h-60 flex justify-between">
            <div class="thematiques text-left">
                <h2 class="font-semibold text-gray-800 text-xs mb-3">THEMATIQUES</h2>
                <ul class="thematic-elements grid grid-cols-1 w-auto">
                    <li class="leading-4 text-xs w-40 text-gray-600 font-light  cursor-pointer hover:text-yellow-600" v-for="(item, index) in themElements" :key="index"><router-link to="/page_categorie" @click="menureset">{{item}}</router-link></li>
                </ul>
                <a href="" class="text-xs text-blue-500 mt-3">voir tous les thèmes</a>
            </div>
            <div class="thematiques text-left">
                <h2 class="font-semibold text-gray-800 text-xs mb-3">COURS POPULAIRES</h2>
                <ul class="thematic-elements grid grid-cols-1 w-auto">
                    <li class="leading-6 text-xs w-40 text-gray-600 font-light  cursor-pointer hover:text-yellow-600" v-for="(item, index) in popularLesson" :key="index"><router-link to="/page_categorie" @click="menureset">{{item}}</router-link></li>
                </ul>
                <a href="" class="text-xs text-blue-500 mt-3">voir tous les cours populaires</a>
            </div>
            <div class="thematiques text-left">
                <h2 class="font-semibold text-gray-800 text-xs mb-3">PARCOURS PRO</h2>
                <ul class="thematic-elements grid grid-cols-1 w-auto">
                    <li class="leading-6 text-xs w-40 text-gray-600 font-light  cursor-pointer hover:text-yellow-600" v-for="(item, index) in proCourse" :key="index">{{item}}</li>
                </ul>
                <a href="" class="text-xs text-blue-500 mt-3">voir tous les parcours</a>
            </div>
        </div>
        <div class="panel-footer w-full h-20 mt-16 flex justify-between items-center px-14">
            <ul class="grid grid-cols-2 text-sm text-blue-500 gap-4">
                <li><a href="">Formations gratuites</a></li>
                <li><a href="">Formations en promo</a></li>
            </ul>
            <button class="bg-pink-700 text-white p-3 rounded-lg hover:bg-blue-500 transition-all">DEVENIR FORMATEUR</button>
        </div>
    </div>
</template>
<script>
export default {
    setup() {
        let themElements = [
            'Photographie & retouche',
            '3D',
            'Graphisme',
            'Web',
            'Vidéo',
            'Programmation',
            'Bureautique',
            'audio et MAO',
            'Système d\'exploitation',
            'E-commerce & E-marketing',
            'Serveur & Administration',
            'Droit',
            'Dessin',
            'Domotique & Objets',
            'Business',
            'Game Design'
        ],

        popularLesson = [
            'Photoshop',
            'Illustrator',
            'after Effects',
            'Premiere',
            'Excel',
            'Figma',
            'Indesign',
            'wordpress'
        ],
        proCourse = [
            'Motion Designer',
            'Développeur Front End',
            'Développeur Back End',
            'Photographe',
            'Designer Graphique',
            'Infographiste 3D Cinéma 4D',
            'Graphiste Photoshop',
            'Responsable Marketing',
            'Digital'
        ]

        return {
            proCourse,
            popularLesson,
            themElements,
        }
    },
    methods: {
        menureset() {
            this.$emit("resetmenu")
        }
    }
}
</script>

<style scoped>
    .formation-panel {
        background-color: rgba(255, 255, 255, 0.904); /*rgba(226, 55, 12, 0.972)*/
        width: 600px;
        height: 420px
    }
</style>