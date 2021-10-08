<template>
    <div class="big-intro-wrapper h-auto w-full relative md:mb-16 lg:20 lg:absolute lg:top-0 lg:z-20 lg:left-0 lg:right-0">
        <div class="banner w-full h-80 bg-cover bg-opacity-25 bg-center bg-no-repeat"></div>
        <div class="big-intro py-5 bg-black bg-opacity-40 text-white h-auto absolute top-0 right-0 left-0 bottom-0">
            <div class="content md:w-4/6 mx-auto md:mt-8 lg:mt-28">
                <h1 class="big-intro-title w-4/5 text-center md:w-full md:text-2xl  mx-auto font-light text-2xl leading-9">Développez vos compétences numériques avec nos cours 100% professionnels</h1>
                <div class="spacer h-8"></div>
                <h2 class="label w-4/6 mx-auto font-extralight text-xs text-center tex leading-5 hidden md:block md:text-base">
                    Grâce à nos formations en ligne, sécurisez votre avenir en misant sur vos compétences 
                    numériques. formez-vous à votre rythme aux côtés d'esperts et artistes passionnés.
                </h2>
                <button class="w-5/6 h-12 mt-4 mx-auto block rounded-md shadow-sm text-3xl md:w-80 md:mt-7" :style="{backgroundColor: '#3cc5aa'}">vidéos gratuites</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .banner {
        background-image: url(../assets/banner1.jpg);
        background-color: #232428;
    }

    @media screen and (max-width: 400px) {
        .banner {
            block-size: 25rem;
            height: 360px
        }

        h1 {
            width: 90%;
            font-size: 1.60rem
        }

        h2.label {
            font-size: .85rem
        }
    }

    @media screen and (max-width: 357px) {
        .banner {
            height: 260px
        }
    }

    @media screen and (min-width: 784px) {
        .banner {
            height: 400px
        }
    }

    @media screen and (min-width: 900px) {
        .banner {
            height: 500px
        }
    }

</style>