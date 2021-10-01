<template>
    <div class="big-intro-wrapper h-auto w-full relative">
        <div class="banner w-full h-80 bg-cover bg-opacity-25 bg-center bg-no-repeat"></div>
        <div class="big-intro py-5 bg-black bg-opacity-40 text-white h-auto absolute top-0 right-0 left-0 bottom-0">
                <h1 class="big-intro-title w-4/5 mx-auto font-light text-2xl leading-9">Développez vos compétences numériques avec nos cours 100% professionnels</h1>
                <div class="spacer h-8"></div>
                <h2 class="w-4/6 mx-auto font-extralight text-xs leading-5">
                    Grâce à nos fromations en ligne, sécurisez votre avenir en misant sur vos compétences 
                    numériques. formez-vous à votre rythme aux côtés d'esperts et artistes passionnés.
                </h2>
                <button class="w-5/6 h-10 mt-4 rounded-md shadow-sm text-2xl" :style="{backgroundColor: '#3cc5aa'}">vidéos gratuites</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'mainVuejs',
    setup() {
        
    },
}
</script>

<style scoped>
    .banner {
        background-image: url(../assets/yutouch_image.jpg);
        background-color: #232428;
    }

    @media screen and (max-width: 400px) {
        .banner {
            height: 360px
        }

        h1 {
            width: 90%;
            font-size: 1.75rem
        }

        h2 {
            font-size: .85rem
        }
    }

    @media screen and (max-width: 357px) {
        .banner {
            height: 420px
        }
    }
</style>