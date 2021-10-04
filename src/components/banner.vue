<template>
    <!-- <headerVue /> -->
  <div class="banner">
    <div class="video_container">
        <div class="video">
            <video src="../assets/photoshop.mp4" controls></video>
        </div>
        <span class="favori"><i class="fas fa-heart" style="color:rgb(255, 136, 0)"></i> ajouter ce cours aux favoris</span>
    </div>

    <div class="infos">
        <h1>Tuto Le Noir&Blanc sublimé et les LUTs grâce aux xalques de réglages dans Photoshop CC <span class="text-small"> avec Photoshop</span></h1>
        <button>ajouter au panier</button> <span class="prix">9,00 <i class="fas fa-euro-sign"></i></span>
        <ul>
            <li><i class="fas fa-circle"></i> Une formation vidéo de 1h02m</li>
            <li><i class="fas fa-circle"></i> Téléchargement immédiat et visionnage illimité à vie</li>
            <li><i class="fas fa-circle"></i> Satisfait ou remboursé</li>
            <li><i class="fas fa-circle"></i> Fichiers sources inclus</li>
            <li><i class="fas fa-circle"></i> Découvrez pourquoi vous former avec <a href="#">Yutouch.com</a></li>
        </ul>
    </div>
  </div>
</template>

<script>
// import headerVue from "./header.vue"

export default {
    name: 'banner',
    components: {
    //    headerVue 
    }
}
</script>

<style lang="scss" scoped>
.banner {
    display: flex;
    justify-content: center;
    padding: 20px 5px 10px 20px;
    background-color: #3f4348;
    color: white;

    .video_container {
        width: 50%;
        text-align: center;

        .favori {
            margin-top: 20px;
            display: block;
        }

        .video {
            overflow: hidden;
            height: 40vh;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;

            video {
                position: absolute;
                top: 0;
                left: 0;
                object-fit: cover;
                height: 100%;
                width: 100%;
            }
        }
    }

    .infos {
        width: 355px;
        margin-left: 30px;

        h1 {
            font-size: 25px;

            .text-small {
                font-size: 15px;
            }
        }

        button {
            padding: 10px;
            background-color: #00a9f0;
            margin: 25px 0;
            width: 45%;
            border-radius: 5px;
        }

        .prix {
            font-size: 25px;
            font-weight: bold;
            margin-left: 4%;
        }

        ul {
            font-size: 14px;

            li i {
                font-size: 8px;
            }

            li a {
                color: #009fc5;
            }
        }
    }

    @media screen and (max-width: 975px) {
        flex-direction: column;
        justify-content: center;
        padding: 25px;

        .video_container {
            width: 100%;
            margin-bottom: 15px;
        }

        .infos {
            width: 90%;
            margin-left: 0;
        }
    }

    @media screen and (max-width: 678px) {
        .video_container {
            .video {
                height: 35vh;
            }
        }
    }

    @media screen and (max-width: 574px) {
        .video_container {
            .video {
                height: 30vh;
            }
        }
    }

    @media screen and (max-width: 495px) {
        .video_container {
            .video {
                height: 27vh;
            }
        }
    }

     @media screen and (max-width: 433px) {
        .video_container {
            .video {
                height: 25vh;
            }
        }
    }

    @media screen and (max-width: 396px) {
        .infos {
            button {
                width: 65%;
                padding: 6px;
                font-size: 15px;
            }
        }
    }

    @media screen and (max-width: 359px) {
        .video_container {
            .video {
                height: 21vh;
            }
        }

        .infos {
            button {
                width: 60%;
            }
        }    
    }

    @media screen and (max-width: 284px) {
        .video_container {
            .video {
                height: 18vh;
            }
        }

        .infos {
            .prix {
                font-size: 10px;
                color: #3f4348;
            }
        }    
    }
}
</style>