<template>
  <div class="footer">
      <div class="main_footer">
          <ul class="tuto">
              <li class="title">YuTouch.com</li>
              <li>Qui sommes-nous</li>
              <li>Le Blog</li>
              <li>Nous recutons</li>
              <li class="langue">
                  <select class="select_langue">
                      <option value="0" class="france"><span><img src="../assets/drapeau_france.jpg" alt=""></span> Cours en Français</option>
                      <option value="1" class="anglais"><img src="../assets/drapeau_anglais.png" alt=""> Cours en Anglais</option>
                  </select>
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
    name: 'footer'
}
</script>

<style lang="scss" scoped>
.footer {
    background-color: #1b1d1f;
    color: #afccda;
    padding: 35px 0 0 0;

    .main_footer {
        display: flex;
        justify-content: space-between;
        width: 85%;
        margin: 0 auto 25px;
        padding-bottom: 15px;
        border-bottom: 1px solid #3e4247;

        ul li {
            margin-bottom: 10px;  
            font-size: 15px; 
        }

        ul li:hover:not(:first-child) {
            color: white; 
            cursor: pointer;
        }

        ul li.title {
            margin-bottom: 20px; 
            color: white;
            font-size: 20px;  
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

        ul li.langue {
            padding-top: 15px;

            select {
                border-radius: 2px;
                padding: 5px;
                font-size: 13px;
                width: fit-content;
                background-color: #111111;
                outline: none;

                option:hover{
                    background-color: transparent;
                }
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
        }
    }

    .facultative_footer {
        display: flex;
        justify-content: space-between;
        width: 85%;
        margin: 0 auto 3px;

        .copyright {
            font-size: 11px;
        }

        .sn i{
            font-size: 20px;
            margin-left: 10px;
        }
    }

   
}
</style>