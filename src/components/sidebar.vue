<template>
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
</template>

<script>
export default {
    name: 'sidebar',
    components: {
        
    }
}
</script>

<style lang="scss" scoped>
.sidebar {
    width: 255px;
    padding: 30px 0 30px 50px;

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
</style>