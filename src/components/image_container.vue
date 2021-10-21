<template>
    <div :class="{tousLesParcours: component === 'tousLesParcours', page_parcours: component === 'page_parcours'}">
        <div class="image_container">
            <img :src="require('../assets/' + img + `.jpg`)" :alt="alt">
            <div class="background">
                <div class="text_bloc">
                    <h1 class="text-lg">{{heading1}}</h1>
                    <h3 class="text-xl">{{heading3}}</h3>
                    <button>{{btn}}</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'image_container',
    props: ['img', 'alt', 'heading1', 'heading3', 'btn', 'component']
}
</script>

<style lang="scss" scoped>
$gray: #AFB5BA;
$blue: #00A9F0;

.tousLesParcours {
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
}

.page_parcours {
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
                    font-size: 24px;
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
}

</style>