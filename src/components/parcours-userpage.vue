<template>
    <div class="parcours w-full h-auto">
        <div class="banner">
            <div class="relative w-full sm:h-80 h-96">
                <div class="description pl-3 absolute top-0 left-0 right-0 md:flex md:items-center sm:h-80 h-96 bg-black bg-opacity-30">
                    <div class="proposition w-full text-center mx-auto font-extralight my-8 sm:mt-10">
                        <h2 class="text-3xl w-full mb-5 leading-8 text-gray-700">Vous rêvez d'évoluer ou de changer de carrière?</h2>
                        <p class="text-xl font-semibold text-gray-800">Découvrez nos parcours</p>
                        <button class="h-16  w-5/6 mx-auto mt-5 leaning-4 text-lg text-white bg-yellow-600"><router-link to="/parcours_pro"> AUX PARCOURS</router-link></button>
                    </div>
                    <img src="../assets/bannerImage.jpg" alt="Etudiante" class="object-cover h-full w-96 hidden md:inline-block">
                </div>
            </div>
        </div>
        <div class="bodyparcours">
            <div class="somedescriptions">
                <div class="first text-center my-10">
                    <div class="schoolIcon w-10 h-10 mx-auto"><i class="material-icons text-4xl text-gray-500">school</i></div>
                    <h2 class="title font-semibold text-gray-700 my-5 w-3/5 mx-auto">Des cours pro pour tout changer</h2>
                    <p class="bodyofFirstdescription w-4/5 mx-auto text-gray-600">
                        Grâce à nos parcours vous allez pouvoir devenir : motion designer, designer graphiste, développeur web, photographe, infographiste 3D, responsable e-marketing, animateur 2D, monteur vidéo, digital painter, administrateur réseaux ...
                    </p>
                </div>

                <div class="first text-center my-10">
                    <div class="schoolIcon w-10 h-10 mx-auto"><i class="material-icons text-4xl text-gray-500">headset_mic</i></div>
                    <h2 class="title font-semibold text-gray-700 my-5 w-3/5 mx-auto">100% à distance, à votre rythme & coaché par un mentor attitré</h2>
                    <p class="bodyofFirstdescription w-4/5 mx-auto text-gray-600">
                        Tous nos parcours sont 100% à distance. Vous évoluez à votre rythme, vous vous connectez quand vous le souhaitez. Un mentor expert vous accompagne dans votre progression, vous coache et réponds à vos questions. Vous plannifiez ensembe des sessions live lorsque vous en avez besoin.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "parcoursUserpage",
    setup() {
        
    },
}
</script>