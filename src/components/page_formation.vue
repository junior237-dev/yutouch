<template>
    <div class="page-formation w-full mx-auto">
        <div class="fixed_navbar" v-show="scrollNav">
            <ul class="navbar_info">
                <li class="nb_telechargement">106 <span class="text">Télécgargement</span></li> 
                <li class="note">4.8/5 <span class="text">Note</span></li>
                <li class="duree">1h02m <span class="text">Durée</span></li>
                <li class="fav"><i class="fas fa-heart"></i> <span class="text">favoris</span></li>
            </ul>

            <div class="btn_prix">
                <button>ajouter au panier</button>
                <span class="prix">9,00 <i class="fas fa-euro-sign"></i></span>
            </div>
        </div>

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

        <div class="body">
            <div class="sidebar">
                <div class="duree_note">
                    <div class="duree">Durée <span class="heure">1h02m</span></div>
                    <div class="note">Note 
                        <div class="star">
                            <i class="fas fa-star checked"></i>
                            <i class="fas fa-star checked"></i>
                            <i class="fas fa-star checked"></i>
                            <i class="fas fa-star checked"></i>
                            <i class="fas fa-star"></i>
                        </div>
                    </div>
                </div>

                <div class="logiciel_version">
                    <span class="title">Logiciel & version</span>
                    <span class="software">Photoshop CC</span>
                    <span class="version">compatible avec ma version ?</span>
                </div>

                <div class="niveau">
                    <span class="niveau_tuto">Niveau de ce tuto</span>
                    <span class="intermediare">intermédiare</span>
                </div>

                <div class="partager">
                    <span class="partager_cours">Partager ce cours</span>
                    <div class="like">
                        <button class="nb">0</button>
                        <button class="like_btn">LIKE</button>
                    </div>
                </div>

                <div class="autres_infos">
                    <span class="autres">Autres infos</span>
                    <ul>
                        <li>Téléchargement illimité</li>
                        <li>Publié le 31/08/2020</li>
                        <li>Téléchargé 122 fois</li>
                        <li>Fichiers sources : fournis</li>
                        <li>Catégorie : <span>Calques</span></li>
                        <li>Langue : français</li>
                        <li>QCM : oui / non</li>
                    </ul>
                </div>

                <div class="appareil">
                    <span class="compatibilite">Compatibilité</span>
                    <div class="device">
                        <i class="fas fa-laptop" style="font-size: 40px"></i>
                        <i class="fas fa-tablet-alt" style="font-size: 38px"></i>
                        <i class="fas fa-mobile-alt" style="font-size: 36px"></i>
                    </div>
                </div>
            </div>

            <div class="main_details">
                <p class="title">Le Noir&Blanc Sublimé et les LUTs grâce aux calques de reglages</p>

                <p>Bonjour je suis <a>Pascal Gauch</a> bienvenue dans ce nouveau tutoriel sur le Noir&Blanc sublimé et les LUTs grâce aux calques de réglages</p>
            
                <p>Cette formation fait partie d'une <a>formation complete sur les calques de réglage</a></p>

                <span class="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum voluptas doloribus eius harum natus praesentium laborum dicta deleniti commodi consequatur? Dolore ex id iure illo sit itaque eius aliquid nobis labore voluptatem. Earum, veritatis?</span>
            
                <ul>
                    <li><i class="fas fa-circle"></i> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam id non facilis aliquam ipsam eaque voluptatum fuga velit asperiores? Quasi accusantium odit labore, nesciunt repudiandae cum minima incidunt animi saepe ducimus, explicabo neque! Cumque quos ad, totam molestias nemo dolorum fuga minima.</li>
                    <li><i class="fas fa-circle"></i> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, quia aperiam iste reiciendis architecto voluptatem soluta, quos facere esse omnis deleniti! Corporis adipisci veritatis libero hic.</li>
                    <li><i class="fas fa-circle"></i> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus at velit accusantium ut! Illo, aperiam, magni error pariatur excepturi est officiis minus obcaecati iste voluptatum exercitationem unde! Dignissimos, assumenda.</li>
                </ul>

                <div class="tm">
                    <h2>Table des matières de cette formation Photoshop <span class="gray">(durée : 1h02m)</span></h2>

                    <div class="chapters">
                        <div class="chapter"> 
                            <div class="title" @click="toggleDropdown">
                                <i class="fas fa-plus-circle gray" v-show="!open"></i> <i class="fas fa-minus-circle" v-show="open"></i> <span>Introduction</span>
                            </div>
                            <div class="cache" ref="cache">
                                <i class="fas fa-play-circle"></i> <span class="topic">Introduction les calques de réglages Noir&Blanc et sur les LUTs <sup>gratuit</sup><span class="dot">...............................</span></span>00:01:19
                            </div>
                        </div>

                        <div class="chapter"> 
                            <div class="title" @click="toggleDropdown">
                                <i class="fas fa-plus-circle gray" v-show="!open"></i> <i class="fas fa-minus-circle" v-show="open"></i> <span>Le Noir&Blanc</span>
                            </div>
                            <div class="cache">
                                <span class="topic_normal">0501 Le Noir&Blanc Sublimé <span class="dot">.................................................................................................</span> 00:12:28</span>
                                <span class="topic_normal">0502 Noir&Blanc et Virage Partiel <span class="dot">........................................................................................</span> 00:09:06</span>
                                <span class="topic_normal">0503 Rétablir des couleurs dans du Noir&Blanc <span class="dot">..............................................................</span> 00:08:48</span>
                                <span class="topic_normal">0504 Blanchiment et contraste : effet bleach bypass <span class="dot">......................................................</span> 00:05:46</span>
                                <span class="topic_normal">0505 Noir&Blanc et LUTs <span class="dot">.........................................................................................................</span> 00:08:14</span>
                            </div>
                        </div>

                        <div class="chapter"> 
                            <div class="title" @click="toggleDropdown">
                                <i class="fas fa-plus-circle gray" v-show="!open"></i> <i class="fas fa-minus-circle" v-show="open"></i> <span>Les LUTs et la correspondance de couleur</span>
                            </div>
                        </div>

                        <div class="chapter"> 
                            <div class="title" @click="toggleDropdown">
                            <i class="fas fa-plus-circle gray" v-show="!open"></i> <i class="fas fa-minus-circle" v-show="open"></i> <span>Conclusion de chapitre</span>
                            </div>
                        </div>

                        <button>Fichiers sources <i class="fas fa-download"></i></button>
                    </div>
                </div>

                <div class="formateur">
                    <img src="../assets/cover2.jpg" alt="">
                    <div class="info">
                        <h1>Formateur : <span class="name">Pascal Gauch</span></h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, officiis repellat quos nemo et maiores. Voir les autres <span class="formation">formations de Pascal Gauch</span></p>
                    </div>
                </div>

                <div class="questions">
                    <div class="titre">QUESTIONS SUR LE TUTO</div>

                    <div class="question">
                        <div class="title" @click="toggleDropdown">
                            <i class="fas fa-plus-circle gray" v-show="!open"></i> <i class="fas fa-minus-circle" v-show="open"></i> <span>Avec quelle version de logiciel ce tuto est-il compatible ?</span>
                        </div>
                        <div class="cache" ref="cache">
                            <span class="response">Photoshop CC</span>
                            <span class="gray">La réponse vous a t-elle été utile ? <span class="blue">OUI</span> - <span class="blue">NON</span> </span>
                        </div>
                    </div>

                    <div class="question">
                        <div class="title" @click="toggleDropdown">
                            <i class="fas fa-plus-circle gray" v-show="!open"></i> <i class="fas fa-minus-circle" v-show="open"></i> <span>Quel est le niveau requis pour suivre ce tuto ?</span>
                        </div>
                        <div class="cache" ref="cache">
                            <span class="response">intermédiare</span>
                            <span class="gray">La réponse vous a t-elle été utile ? <span class="blue">OUI</span> - <span class="blue">NON</span> </span>
                        </div>
                    </div>

                    <button>poser une question au formateur</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'page_formation',
    data() {
        return {
            scrollNav: false,
            open: false
        }
    },

    mounted() {
        window.addEventListener("scroll", this.updateScroll)
    },

    methods: {
        updateScroll() {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 320) {
                this.scrollNav = true;
                return;
            }
            this.scrollNav = false
        }, 

        toggleDropdown() {
            this.$refs.cache.classList.toggle('open')
            this.open = !this.open
            console.log('clicked')
        }
    }
}
</script>

<style lang="scss" scoped>
$gray: #b4bac0;
$blue: #00a9f0;
.gray {
    color: $gray;
}

.blue {
    color: $blue;
}

.hover:hover {
    color: $blue;
    cursor: pointer;
    border-bottom: 1px solid $blue;
}
.fixed_navbar {
    display: flex;
    justify-content: space-around;
    padding: 12px 0;
    width: 100%;
    background-color: #3f4348;
    position: fixed;

    .navbar_info {
        display: flex;
        color: #87898c;

        li {
            text-align: center;
            padding: 0 15px;
            font-size: 25px;
        }

        span {
            display: block;
            font-size: 12px;
        }

        .fav {
            border-left: 1px solid #87898c;
        }

        @media screen and (max-width: 828px) {
            display: none;
        }
    }

    .btn_prix {
        display: flex;
        width: 50%;
        align-items: center;
        color: white;

        button {
            padding: 10px;
            background-color: #00a9f0;
            margin: 0 25px 0 0;
            width: 50%;
            border-radius: 5px;
        }

        .prix {
            font-size: 23px;
            font-weight: bold;
        }

        @media screen and (max-width: 828px) {
            width: 100%;
            justify-content: center;

            button {
                width: 40%;
            }
        }

        @media screen and (max-width: 550px) {
            button {
                width: 50%;
            }
        }

        @media screen and (max-width: 350px) {
            button {
                width: 60%;
            }
        }
    }
}

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
            height: fit-content;

            video {
                object-fit: cover;
                max-height: 40vh;
                width: 100%; 

                @media screen and (max-height: 717px) {
                    height: 90vh;
                }
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

    @media screen and (max-width: 396px) {
        .infos {
            button {
                width: 65%;
                
            }
        }
    }

    @media screen and (max-width: 321px) {
        .infos {
            button {
                width: 65%;
            }
            .prix {
                font-size: 18px;
            }
        }    
    }

    @media screen and (max-width: 310px) {
        .infos {
            button {
                width: 70%;
            }

            .prix {
                font-size: 16px;
            } 
        }    
    }
}

.body {
    display: flex;
    justify-content: space-around;
    width: 85%;
    margin: auto;
}

.body .sidebar {
    padding: 30px 0 30px 0;

    .duree_note {
        border-bottom: 1px solid #a7a7aa;
        display: flex;
        padding-bottom: 15px;
        margin-bottom: 15px;
        width: fit-content;

        .duree {
            margin-right: 15px;
            font-size: 20px;

            .heure {
                display: block;
                margin-top: 10px;
                font-size: 15px;
                color: #a7a7aa;
            }
        }

        .note {
            font-size: 20px;
            .star {
                margin-top: 10px;
                font-size: 15px;

                .checked {
                    color: #ffc241;
                }
            }
        }
    }

    .logiciel_version{
        border-bottom: 1px solid #a7a7aa;
        margin-bottom: 15px;
        width: fit-content;

        span {
            margin-bottom: 15px;
            display: block;
        }

        .software, .version {
            color: #00a9f0;
        }

        .version {
            font-size: smaller;
        }
    }

    .niveau {
        border-bottom: 1px solid #a7a7aa;
        margin-bottom: 15px;
        width: fit-content;

        span {
            margin-bottom: 15px;
            display: block;
        }
        .intermediare {
            color: #a7a7aa;
        }
    }

    .partager {
        border-bottom: 1px solid #a7a7aa;
        margin-bottom: 15px;
        width: fit-content;

        .partager_cours {
            margin-bottom: 15px;
            display: block;
        }

        .like {
            width: 50px;
            cursor: pointer;

            button {
                width: 100%;
                border-radius: 5px;
            }

            .nb {
                background-color: white;
                padding: 10px;
            }

            .like_btn {
                background-color: #3d569c;
                color: white;
                margin-bottom: 15px;
                font-size: 12px;
                padding: 5px 10px 5px 10px ;
            }
        }
    }

    .autres_infos {
        border-bottom: 1px solid #a7a7aa;
        margin-bottom: 15px;
        width: fit-content;

        .autres {
            margin-bottom: 15px;
            display: block;
        }

        ul li{
            font-size: 14px;
            color: #5d5d5e;
            margin-bottom: 7px;
        }

        ul li span {
            color: #00a9f0;
            cursor: pointer;
        }

        ul li span:hover {
            border-bottom: 1px solid #00a9f0;
        }
    }

    .appareil {
        width: fit-content;

        .compatibilite {
            margin-bottom: 15px;
            display: block;
        }

        .device {
            margin-bottom: 15px;
        }

        .device i {
            margin-left: 12px;
            color: #9da6ac;
        }
    }
}

.body .main_details {
    width: calc(100% - 255px);
    padding: 30px 0 0 4%;

    p {
        margin-bottom: 20px;
        width: 90%;
    }

    p a {
        color: #3bb6fe;
        cursor: pointer;
    }

    p a:hover {
        border-bottom: 1px solid #3bb6fe;
    }

    p.title {
        font-size: 30px;
        font-weight: bold;
    }

    .p {
        margin-bottom: 20px;
        display: block;
    }

    ul {
        width: 80%;
        margin-left: 10%;
    }

    ul li {
        margin-bottom: 15px;
    }

    ul li i {
        font-size: 10px;
        margin-left: -25px;
        margin-right: 12px;
        color: #a7a7a7;
    }

    h2 {
        font-size: 25px;
        margin-bottom: 20px;
    }

    .tm {
        border-bottom: 1px solid $gray;
        margin: 0 0 30px 0;

        .chapters {
            font-size: 18px;
            width: 80%;
            padding: 0 0 20px 0;
            margin: 0 0 0 7.5%;

            .chapter {
                margin-bottom: 10px;

                .title {
                    width: fit-content;
                    border-bottom: 1px solid transparent;
                    cursor: pointer;
                }
                .title:hover {
                    color: #3bb6fe;
                    
                    span {
                        border-bottom: 1px solid #3bb6fe;
                    }

                    .gray {
                        color: #3bb6fe;
                    }
                }

                .cache {
                    font-size: 15px;
                    padding: 15px 0 0 25px;
                    display: none;

                    sup, i {
                        color: #2fc5a9;
                    }

                    .topic:hover {
                        color: #2fc5a9;
                        cursor: pointer;
                    }

                    .dot {
                        font-size: smaller;
                        color: #87898c;
                    }

                    .topic_normal {
                        display: block;
                        margin-bottom: 5px;
                    }
                }

                .cache.open {
                    display: block;
                }
            }

            button {
                background-color: #00a9f0;
                padding: 7px;
                border-radius: 4px;
                color: white;
                margin: 10px 0 0 0;
            }
        }
    }

    .formateur {
        display: flex;
        border-bottom: 1px solid $gray;
        padding: 30px 0 55px 45px;

        img {
            width: 140px;
            height: 140px;
            border-radius: 70px;
            margin: 0 25px 0 0;
        }

        .info h1{
            font-size: 30px;
            margin: 0 0 10px 0;

            span:hover {
                color: #00a9f0;
                border-bottom: 1px solid #00a9f0;
                cursor: pointer;
            }
        }

        p .formation {
            color: #00a9f0;
            cursor: pointer;

            &:hover {
                border-bottom: 1px solid #00a9f0;
            }
        }
    }

    .questions {
        .titre {
            background-color: gray;
            color: white;
            width: fit-content;
            padding: 5px;
            margin: auto;
        }

        .question {
            margin: 30px 0 20px 0;

            .title {
                width: fit-content;
                font-size: 17.5px;

                &:hover {
                    color: $blue;
                    cursor: pointer;
                }

                span:hover {
                    border-bottom: 1px solid $blue;
                }
            }

            .title:hover {
                .gray {
                    color: $blue;
                }
            }

            .cache {
                span.response {
                    margin: 15px 0 15px 22px;
                    font-size: 15px;
                    display: block;
                }

                .gray {
                    font-size: 13px;
                    margin: 0 0 0 22px;
                }
            }
        }

        button {
            background-color: #00a9f0;
            padding: 8px;
            border-radius: 4px;
            color: white;
            margin: 10px 0 20px 0;
        }
    }
}
</style>