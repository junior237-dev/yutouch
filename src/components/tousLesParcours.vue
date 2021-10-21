<template>
    <Image_container img="numeric" alt="Numeric" :heading1="heading1" :heading3="heading3" :btn="btn" component="tousLesParcours"/>

    <HeadEtTabs :h3="h3" h1="Nos parcours" :tabs="tabs" component="tousLesParcours"/>

    <div class="cards">
        <div class="card" @mouseenter="toggleVisibility" @mouseleave="toggleVisibility" v-for="i in 11" :key="i" title="Formation Motion Designer">
            <div class="image">
                <img src="../assets/gil.jpg" alt="Foramtion Motion Designer">
                <span>Eligible CPF</span>
                <transition name="fade">
                    <i class="fas fa-eye" v-show="visible"></i>
                </transition>
            </div>

            <div class="info">
                <span>Parcours</span>
                <h1>Formation Motion Designer</h1>
                <h4>Durée totale : 485h</h4>
            </div>
        </div>
    </div>

    <div class="confiance">
        <h1>Ils nous font confiance</h1>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit molestiae aliquam quo eum quis aliquid ducimus eveniet, quaerat perferendis excepturi adipisci ut accusamus voluptates atque culpa necessitatibus quibusdam iusto labore inventore facere autem? Pariatur facilis necessitatibus, beatae adipisci laudantium harum. Esse nesciunt temporibus facere aliquam!</span>
        <div class="enterpriseLog">
            <div class="img"><img src="../assets/startUp.png" alt="StartUp Academy"></div>
            <div class="img"><img src="../assets/jureEntrepreneur.png" alt="Cabinet Jure Entrepreneur"></div>
            <div class="img"><img src="../assets/eagleVision.png" alt="Eagle Vision"></div>
        </div>
    </div>

    <Footer />
</template>

<script>
import Footer from './footerVuejs.vue'
import HeadEtTabs from './headEtTabs.vue'
import Image_container from './imageContainer.vue'
export default {
    components: { Footer, Image_container, HeadEtTabs },
    name: 'tousLesParcours',

    data() {
        return {
            visible: false,
            heading1: 'Parcours de formation',
            heading3: 'Développez vos compétences dans les métiers du numérique aux côtées de nos meilleurs experts et offrez-vous de nouvelles opportunités',
            btn: 'Parler à un conseiller',

            h3:'Nos parcours peuvent être pris en charge par votre CPF, votre OPCO ou par Pôle Emploi',

            component:"tousLesParcours",

            tabs: [
                {tab: 'Tous', active: true}, 
                {tab: 'éligible cpf', active: false}, 
                {tab: 'vidéo', active: false}, 
                {tab: 'graphisme', active: false}, 
                {tab: 'photo', active: false}, 
                {tab: 'bureautique', active: false}, 
                {tab: 'programmation', active: false}, 
                {tab: 'marketing digital', active: false}, 
                {tab: '3d', active: false}, 
                {tab: 'sytemes et reseaux', active: false}
            ]
        }
    },

    methods: {
        toggleVisibility(e) {
            if (e.currentTarget) {
                this.visible = ! this.visible
            }
        }
    }
}
</script>

<style lang="scss" scoped>
$gray: #AFB5BA;
$blue: #00A9F0;

.cards {
    width: 92%;
    margin: 20px auto;
    padding: 0 0 0 8%;

    .card {
        background-color: white;
        width: 390px;
        border-radius: 4px;
        box-shadow: 2px 4px #DEDEDE;
        display: inline-block;
        margin: 0 20px 55px;
        cursor: pointer;
        text-align: left;

        .image {
            width: 100%;
            position: relative;

            img {
                width: 100%;
                border-top-right-radius: 4px;
                border-top-left-radius: 4px;
                max-height: 200px;
                object-fit: cover;
            }

            span {
                background-color: $blue;
                color: white;
                padding: 2px 15px;
                position: absolute;
                top: 15px;
                left: 5px;
            }

            i {
                position: absolute;
                font-size: 65px;
                color: white;
                top: 36%;
                left: 40%;
            }
        }

        .info {
            margin: 25px 7px 0 7%;
            color: #55585D;

            span {
                font-size: 20px;
            }

            h1 {
                font-size: 21px;
                margin: 3px 0 90px 0;
            }

            h4 {
               font-size: 19px; 
               color: $gray;
               padding: 0 0 38px 0;
            }
        }
    }

    .fade-enter-from {
        opacity: 0;
    }

    .fade-leave-to {
        opacity: 1;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .4s ease;
    }

    @media screen and (max-width: 1536px) {
        padding: 0 0 0 5%;
        .card {
            // background-color: red;
            width: 28%;
        }
    }

    @media screen and (max-width: 1130px) {
        padding: 0 0 0 5%;
        .card {
            // background-color: red;
            width: 42%;
        }
    }

    @media screen and (max-width: 787px) {
        .card {
            // background-color: red;
            width: 40%;
        }
    }

    @media screen and (max-width: 630px) {
        text-align: center;
        .card {
            // background-color: red;
            width: 84%;
        }
    }

    @media screen and (max-width: 430px) {
        text-align: center;
        padding-left: 17px;
        margin: 0 0 0 0;
        .card {
            // background-color: red;
            width: 100%;
            margin-left: 0;
        }
    }
}

.confiance {
    background-color: white;
    padding: 55px 0 45px 0;

    h1 {
        font-size: 30px;
        margin: 0 0 20px 0;
        text-align: center;
        color: #3F4348;
    }

    span {
        font-size: 20px;
        text-align: center;
        width: 68%;
        display: block;
        margin: auto;
        color: #5D6065;
    }

    .enterpriseLog {
        display: flex;
        width: fit-content;
        margin: 8em auto;

        div {
            width: 17em;
            height: 13em;

            img {
            width: 100%;
            height: 100%;
            }
        }

        @media screen and (max-width: 838px) {
            flex-direction: column;
            margin: 5em auto;

            div {
            margin: 1em;
            }
        }

        @media screen and (max-width: 320px) {
            div {
            width: 15em;
            height: 11em;
            }
        }
    }
}
</style>