<template>
  <div class="footerapp" v-if="false">
      <div class="main_footer">
          <ul class="tuto">
              <li class="title">YuTouch.com</li>
              <li>Qui sommes-nous</li>
              <li>Le Blog</li>
              <li>Nous recutons</li>
              <li class="select_box">
                    <div class="options_container" ref="options_container">
                        <div class="option" v-for="option in options" :key="option.id" @click="select">
                            <span> <img :src="require('../assets/' + option.img + '.jpg' )" :alt="option.alt">{{option.title}}</span>
                        </div>
                    </div>
                    
                    <div class="selected" ref="selected" @click="toggleDropdown">
                        <span> <img src="../assets/drapeau_france.jpg" alt="">Cours en Français</span> 
                    </div>
              </li>
          </ul>
          <ul class="liens">
              <li class="title">Liens Utiles</li>
              <li>Abonnement</li>
              <li>Formations</li>
              <li>Vidéos Gratuites</li>
              <li>Entreprises</li>
          </ul>
          <ul class="aide">
              <li class="title">Aide</li>
              <li>Aide en ligne</li>
              <li>Devenir Formateur</li>
          </ul>
          <ul class="info">
              <li>34 246 197 <span>de cours en ligne suivis!</span></li>
              <li>1 168 445 <span>apprenants</span></li>
              <li>88 978 <span>tuto vidéo</span></li>
          </ul>
      </div>
      <div class="facultative_footer">
          <div class="copyright"> Copyright © YuTouch</div>
          <div class="sn">
            <i class="fab fa-twitter"></i>
            <i class="fab fa-facebook-f"></i>
            <i class="fab fa-instagram-square"></i>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'page_footer',

    setup() {
        return {
            isDown: false,

            options: [
                {
                    id: 1,
                    img: 'drapeau_france',
                    alt: 'Français',
                    title: 'Cours en Français',
                    content: '<span> <img :src="require(`../assets/' + 'drapeau_france' + '.jpg`)" alt="Français">Cours en Français</span>'
                },

                {
                    id: 2,
                    img: 'drapeau_anglais',
                    alt: 'Anglais',
                    title: 'Cours en Anglais',
                    content: '<span> <img :src="require(`../assets/' + 'drapeau_anglais' + '.png`)" alt="Anglais">Cours en Anglais</span>'
                }
            ]
        }
    },

    methods: {
        getImgUrl() {
            return require('../assets/drapeau_france.jpg')
        },

        select(option) {
            this.$refs.selected.innerHTML = option.currentTarget.innerHTML
        },

        toggleDropdown() {
            this.$refs.options_container.classList.toggle('active')
        }
    }
}
</script>

<style lang="scss" scoped>
.footerapp {
    background-color: #1b1d1f;
    color: #afccda;
    padding: 23px 0 15px 0;
    margin-top: 10px;

    .main_footer {
        display: flex;
        justify-content: space-between;
        width: 85%;
        margin: 0 auto 8px;
        padding-bottom: 0px;
        border-bottom: 1px solid #3e4247;

        ul li {
            margin-bottom: 10px;  
            font-size: 12px; 
        }

        ul li:hover:not(:first-child) {
            color: white; 
            cursor: pointer;
        }

        ul li.title {
            margin-bottom: 20px; 
            color: white;
            font-size: 18px;  
        }

        ul li span {
            display: block;
            font-size: 15px;
            color: #afccda;
        }

        .info li{
            text-align: right;
            font-size: 20px;
            color: white;
        }

        .select_box {
            display: flex;
            width: 198px;
            
            flex-direction: column;

            .options_container {
                background-color: #1b1d1f;
                color: #afccda;
                max-height: 0;
                width: 100%;
                opacity: 0;
                transition: all 0.4s;
                border-radius: 7px;
                overflow: hidden;

                order: 1;
            }

            .active {
                max-height: 100px;
                opacity: 1;
            }  

            .option, .selected {
                padding: 6px 12px;
                cursor: pointer;

                span {
                    display: inline-block;
                }

                img {
                    display: inline-block;
                    height: 18px;
                    width: 22px;
                    margin-right: 10px;
                }

                i {
                    margin-left: 5px;
                }
            }

            .selected {
                background-color: black;
                position: relative;
                
                order: 0;

                &::after {
                    content: '';
                    background: url("../assets/Caret_down.png");
                    background-size: contain;
                    background-repeat: no-repeat;

                    position: absolute;
                    height: 24px;
                    width: 24px;
                    right: 1px;
                    

                    transition: all 0.4s;
                }
            }

            .active + .selected::after {
                transform: rotateX(180deg);
                top: 5px;
            }

            .option:hover {
                background-color: #414b57;
                opacity: 0.5;
            }          
        }

         @media screen and (max-width: 836px) {
            flex-direction: column;
            text-align: center;

            ul {
                margin-bottom: 25px;
            }

            .info {
                width: fit-content;
                margin: auto;

                li {
                    text-align: center;
                }
            }

            li.select_box {
                margin: auto;
            }
        }
    }

    .facultative_footer {
        display: flex;
        justify-content: space-between;
        width: 85%;
        margin: 0 auto;

        .copyright {
            font-size: 9px;
        }

        .sn i{
            font-size: 10px;
            margin-left: 9px;
        }
    }

   
}
</style>