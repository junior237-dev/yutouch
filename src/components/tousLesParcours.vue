<template>
  <div class="image_container">
      <Header class="header"/>
      <img src="../assets/numeric.jpg" alt="Numeric">
      <div class="background">
        <div class="text_bloc">
            <h1 class="text-lg">Parcours de formation</h1>
            <h3 class="text-xl">Développez vos compétences dans les métiers du numérique aux côtées de nos meilleurs experts et offrez-vous de nouvelles opportunités</h3>
            <button>Parler à un conseiller</button>
        </div>
      </div>
  </div>

  <div class="head">
      <h1>Nos parcours</h1>
      <h3>Nos parcours peuvent être pris en charge par votre CPF, votre OPCO ou par Pôle Emploi</h3>
  </div>

    <div class="tabs">
        <div class="active">Tous</div>
        <div>éligible cpf</div>
        <div>vidéo</div>
        <div>graphisme</div>
        <div>photo</div>
        <div>bureautique</div>
        <div>programmation</div>
        <div>marketing digital</div>
        <div>3d</div>
        <div>sytemes et reseaux</div>
    </div>

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
            <img src="../assets/startUp.png" alt="StartUp Academy">
            <img src="../assets/jureEntrepreneur.png" alt="Cabinet Jure Entrepreneur">
            <img src="../assets/eagleVision.png" alt="Eagle Vision">
        </div>
    </div>

    <Footer />
</template>

<script>
import Footer from './footer.vue'
import Header from './header.vue'
export default {
  components: { Header, Footer },
    name: 'tousLesParcours',

    data() {
        return {
            visible: false,
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

.image_container {
    position: relative;

    .header {
        position: absolute;
        width: 100%;
        top: 12px;
        background-color: transparent;
    }

    img {
        width: 100%;
        max-height: 656px;
        object-fit: cover;
    }

    .background {
        position: absolute;
        text-align: center;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background-color: rgba($color: #000000, $alpha: 0.3);

        .text_bloc {
            color: white;
            margin-top: 12%;

            h1 {
                font-size: 50px;
                margin: 0 0 2% 0;
            }

            h3 {
                width: 82%;
                font-size: 32px;
                line-height: 38px;
                margin: 0 auto 2%;
            }

            button {
                background-color: #00A9F0;
                font-size: 22px;
                padding: 12px 40px;
                border-radius: 5px;
            }
        }
    }

    @media screen and (max-width: 1333px) {
        .background {
            .text_bloc {
                h3 {
                    font-size: 2.2vw;
                }

                h1 {
                    font-size: 3.2vw;
                }
            }
        }
    }

    @media screen and (max-width: 1160px) {
        .background {
            .text_bloc {
                margin-top: 15%;

                h3 {
                    font-size: 2.4vw;
                }

                h1 {
                    font-size: 3.4vw;
                }
            }
        }
    }

    @media screen and (max-width: 960px) {
        .background {
            .text_bloc {
                margin-top: 17%;

                h3 {
                    font-size: 2.6vw;
                }

                h1 {
                    font-size: 3.6vw;
                }
            }
        }
    }

    @media screen and (max-width: 812px) {
        .background {
            .text_bloc {

                h3 {
                    font-size: 2.8vw;
                }

                h1 {
                    font-size: 3.8vw;
                }

                button {
                    font-size: 2.4vw;
                }
            }
        }
    }

    @media screen and (max-width: 799px) {
        .background {
            .text_bloc {

                h3 {
                    font-size: 3vw;
                }

                h1 {
                    font-size: 4vw;
                }

                button {
                    font-size: 2.4vw;
                }
            }
        }
    }

    @media screen and (max-width: 699px) {
        .background {
            .text_bloc {

                h3 {
                    font-size: 3.2vw;
                    line-height: 4vw;
                    width: 90%;
                }

                h1 {
                    font-size: 4.2vw;
                }

                button {
                    font-size: 2.6vw;
                }
            }
        }
    }

    @media screen and (max-width: 589px) {
        img {
            max-height: 387px;
        }

        .background {
            .text_bloc {
                margin-top: 21%;
                // background-color: red;

                h3 {
                    font-size: 20.5px;
                    line-height: 24px;
                    margin-bottom: 3.5%;
                    width: 96%;
                }

                h1 {
                    font-size: 27px;
                    margin: 0 0 3.5% 0;
                }

                button {
                    font-size: 18px;
                }
            }
        }
    }

    @media screen and (max-width: 479px) {
        img {
            height: 510px;
        }

        .background {
            .text_bloc {
                margin-top: 28%;

                h3 {
                    margin-bottom: 4.5%;
                }

                h1 {
                    margin-bottom: 4.5%;
                }
            }
        }
    }

    @media screen and (max-width: 410px) {
        .background {
            .text_bloc {
                margin-top: 35%;
            }
        }
    }

    @media screen and (max-width: 299px) {
        img {
            height: 580px;
        }

        .background {
            .text_bloc {
                margin-top: 40%;
            }
        }
    }
}

.head {
    width: fit-content;
    margin: auto;
    margin-top: 45px;
    margin-bottom: 45px;
    text-align: center;
    color: #3F4348;

    h1 {
        color: #3F4348;
        font-size: 30px;
        margin-bottom: 15px;
    }

    h3 {
        font-size: 20px;
        padding: 0 2% 0;
    }

}

.tabs {
    width: 90%;
    margin: auto;
    text-align: center;

    div {
        width: fit-content;
        margin: 0 10px 30px;
        display: inline-block;
        text-transform: uppercase;
        border: 1px solid #AFB5BA;
        background-color: white;
        border-radius: 5px;
        padding: 2px 9px;
        font-size: 15px;
        color: #AFB5BA;
    }

    .active {
        background-color: #00A9F0;
        color: white;
    }
}

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
        padding: 0;
        margin: 0 0 0 15px;
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
    text-align: center;

    h1 {
        font-size: 30px;
        margin: 0 0 20px 0;
        color: #3F4348;
    }

    span {
        font-size: 20px;
        width: 68%;
        display: block;
        margin: auto;
        color: #5D6065;
    }

    .enterpriseLog {
        padding: 40px;
        display: flex;
        text-align: center;
        width: fit-content;
        margin: auto;

        img {
            width: 110px;
            margin: 0 0 0;
        }
    }

    @media screen and (max-width: 510px) {
        .enterpriseLog {
            flex-direction: column;

            img {
                margin: 0 0 15px 0;
            }
        }
    }
}
</style>