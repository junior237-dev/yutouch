<template>
    <div class="banner-footer relative w-full mt-10">
        <div class="banner2 w-full h-96 bg-cover bg-opacity-25 bg-center bg-no-repeat"></div>
        <div class="description absolute h-96 top-0 left-0 right-0 bg-black bg-opacity-40">
            <div class="proposition w-2/3 text-left mx-auto text-white my-8 sm:mt-10">
                <h2 class="text-xl w-full mb-5">Proposez vos propres cours</h2>
                <p class="text-base">Lorem ipsum quia minima tenetur alias,quia minima tenetur alias, accusamus commodi sequi odit vitae? Minima pariatur voluptatum tenetur minus porro voluptatibus at culpa.</p>
                <button class="h-12 px-2 w-5/5 mx-auto mt-5 leaning-4 text-lg rounded-md bg-pink-700">Devenez Formateur</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .banner2 {
        background-image: url(../assets/banner2.jpg);
        background-color: #232428;
    }

    @media screen and (max-width: 272px) {
        .banner-footer p.text-base {
            font-size: .85em;
            line-height: 20px;
        }

        .banner-footer .proposition {
            margin: 0 auto;
            padding: 0;
        }

        .banner-footer button {
            font-size: .9em;
            line-height: 15px;
            height: 40px
        }
    }

    @media screen and (min-width: 370px) {
        .banner2 {
            height: 300px
        }
        .description {
            height: 300px
        }
    }

    @media screen and (min-width: 600px) {
        .banner2 {
            height: 280px;
        }
        .description {
            height: 280px
        }

        p.text-base {
            max-width: 494px
        }
    }
</style>