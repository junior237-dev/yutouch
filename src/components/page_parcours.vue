<template>
  <Image_container img="numeric" alt="Numeric" :heading1="heading1" :heading3="heading3" :btn="btn" component="page_parcours"/>

  <HeadEtTabs :h3="h3" h1='“ Apprenez, codez, optimisez et créez des applications web modernes ”' :tabs="tabs" component="page_parcours"/>

  <div class="text-center">
    <h1>Au programme de cette <b>formation Développeur Web</b></h1>
    <h3>Durée totale : 415h / Prix : 2075€ HT</h3>
    <span>(financement Pôle Emploi, plan de formation, OPCA...)</span>
  </div>

  <div class="chapters_container">
    <div class="chapters">
      <div class="item_bullet">
        <span class="label">50M</span>
        <div class="bullet_circle"><span class="bullet"></span></div>
        <span class="label">Intro</span>
      </div>

      <div class="description_wrapper">
        <div class="title">INTRODUCTION : VOTRE PARCOURS COMMENCE MAINTENANT</div>
        <div class="description">Accédez à notre communauté privée d'apprenants qui suivent actuellement un Parcours Pro. Vous pourrez ainsi poser vos questions librement aux mentors et échanger avec vos camarades de "classe" !</div>
      </div>
    </div>

    <div class="chapters" v-for="i in 5" :key="i">
      <div class="item_bullet">
        <span class="label">4h</span>
        <div class="bullet_circle"><span class="bullet"></span></div>
        <span class="label">cours</span>
      </div>

      <div class="description_wrapper">
        <div class="title">MODULE 1 : LES GRANDS PRINCIPES DE LA PROGRAMMATION WEB</div>
        <div class="description">Avant de nous lancer dans le code et le monde du développement, il est primordial de bien comprendre comment fonctionne Internet et quelles sont les différentes technologies offertes pour mener à bien vos projets de création de sites web.</div>
        <span v-show="isOpen" @click="showDetails">voir les détails</span>
        <div class="voir_les_detail" v-show="!isOpen">
          <ul class="item">
            <h1>les notions de bases</h1>
            <li><i class="fas fa-circle"></i> La programmation c'est quoi ? Les métiers (différences intégrateur et développeur)</li>
            <li><i class="fas fa-circle"></i> Comment fonctionne un site Internet (serveur, base de données, poste client) ?</li>
            <li><i class="fas fa-circle"></i> L'hébergement web : serveur mutualisé, serveur dédié, cloud</li>
            <li><i class="fas fa-circle"></i> Les bases de données et les différentes type de technos (SQL, Mysql, MangoDB, NoSQL...) API</li>
            <li><i class="fas fa-circle"></i> Accessibilité et W3C</li>
            <li><i class="fas fa-circle"></i> Le web responsif / Le web mobile</li>
            <li><i class="fas fa-circle"></i> Hybridation mobile / desktop</li>
          </ul>

          <ul class="item">
            <h1>Organisation / Gestion de Projet</h1>
            <li><i class="fas fa-circle"></i> Les méthodes AGILEs (Scrum, Kanban) UML & Merise</li>
            <li><i class="fas fa-circle"></i> Le refactoring</li>
            <li><i class="fas fa-circle"></i> Commenter son code</li>
          </ul>
        </div>
        <span v-show="!isOpen" @click="showDetails">masquer les détails</span>
      </div>
    </div>
  </div>

  <div class="dispositif_container">
    <h1>Un dispositif complet pour votre apprentissage</h1>
    <p>Notre pédagogie est basée sur la multi-modalité : cours en vidéo, accès à des salons d’entraide, QCM, visio-conférence, ressources pédagogiques, présentation d’un projet PRO. Nous vous accompagnons tout le long de votre apprentissage !</p>

    <div class="content">
      <div class="left">
        <div class="item" v-for="i in 3" :key="i">
          <img src="../assets/apple.png" alt="Apple">
          <div class="description">
            <h1>APPRENTISSAGE EN VIDÉO</h1>
            <span>Plus efficace qu’un livre. Plus accessible qu’une formation traditionnelle, la vidéo permet un apprentissage progressif et un ancrage mémoriel grâce à la répétition</span>
          </div>
        </div>
        
      </div>

      <div class="right">
        <div class="item" v-for="i in 3" :key="i">
          <img src="../assets/apple.png" alt="Apple">
          <div class="description">
            <h1>APPRENTISSAGE EN VIDÉO</h1>
            <span>Plus efficace qu’un livre. Plus accessible qu’une formation traditionnelle, la vidéo permet un apprentissage progressif et un ancrage mémoriel grâce à la répétition</span>
          </div>
        </div> 
      </div>
    </div>

    <button>Parler à un conseiller</button>
  </div>

  <div class="form_container">
    <span class="h1">Vous souhaitez trouver un travail ou évoluer dans votre carrière ? Vous voulez vous orienter vers le métier de développeur web ? Remplissez ce formulaire et nous vous recontactons directement</span>
    <div class="form">
      <form class="left">
        <label for="prenom">prénom</label>
        <input type="text">
        <label for="nom">nom</label>
        <input type="text">
        <label for="email">email</label>
        <input type="email">

        <button>Envoyer ma demande</button>

        <div class="after_from">
          <h2>délais de prise en charge</h2>
          <span>Le délai moyen entre votre demande d'informations et votre entrée effective dans un parcours, dépend du financement choisi :</span>
          <span>Auto-financement : 2 à 7 jours</span>
          <span>CPF : 1 à 7 jours</span>
          <span>Pole Emploi et OPCO : 1 mois</span>
        </div>
      </form>

      <div class="right">
        <div class="first">
          <h4>Public visé</h4>
          <span class="h4">tout public</span>
          <b>Informations relatives aux personnes en situation de handicap.</b>
          <p>Nos parcours de formation sont 100% en ligne. Ces derniers font appels à des techniques audio-visuelles et ne sont pas optimisés pour les personnes atteintes de surdité ou de cécité. Des prises en charges spécifiques pour le suivi de nos parcours sont indiquées dans <span class="link">cet article</span>.</p>
        </div>

        <ul class="second">
          <h4>objectifs</h4>
          <li><i class="fas fa-circle"></i> Connaître l’environnement, les outils et les technologie web</li>
          <li><i class="fas fa-circle"></i> Maîtriser les langages HTML, CSS, Javascript, PHP, MySQL</li>
          <li><i class="fas fa-circle"></i> Savoir structurer et optimiser une base de données</li>
          <li><i class="fas fa-circle"></i> Maîtriser le développement sous WordPress</li>
          <li><i class="fas fa-circle"></i> Être familiarisé à l’utilisation des langages Ruby, Python, React</li>
          <li><i class="fas fa-circle"></i> Savoir s’appuyer sur des frameworks pour optimiser son temps de développement</li>
        </ul>

        <div class="third">
          <h4>programme pdf</h4>
          <img src="../assets/anonyme.jpg" alt="PROGRAMME PDF" class="cursor-pointer">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeadEtTabs from './headEtTabs.vue'
import Image_container from './image_container.vue'
export default {
    name: 'page_parcours',

    data() {
      return {
        heading1: 'Formation Développeur Web',
        heading3: '415h de formation, 8 sessions LIVE, des ateliers pratiques, 1 projet personnel PRO à présenter',
        btn: 'suivre cette formation',

        h3: 'Envie de décrocher un poste de développeur web ou de vous lancer en freelance ? D’être autonome dans la création de site et d’applications web modernes ? Alors suivez notre formation Développeur Web à distance. Ouverte à tous, cette formation efficace vous permettra de maîtriser les langages et technologies utiles pour un développeur back-end. Un parcours mélangeant autonomie, pratique et accompagnement sur mesure.',

        tabs: [
          {tab: 'HTML', active: true}, 
          {tab: 'css', active: false}, 
          {tab: 'xml', active: false}, 
          {tab: 'javascript', active: false}, 
          {tab: 'php', active: false}, 
          {tab: 'sql', active: false}, 
          {tab: 'mysql', active: false}, 
          {tab: 'mungodb', active: false}, 
          {tab: 'ruby', active: false}, 
          {tab: 'python', active: false},
          {tab: 'poo', active: false},
          {tab: 'api', active: false},
          {tab: 'laravel', active: false},
          {tab: 'nodejs', active: false},
          {tab: 'jquery', active: false},
          {tab: 'git', active: false},
          {tab: 'wordoress', active: false},
          {tab: 'angularjs', active: false},
          {tab: 'react', active: false},
        ],

        isOpen: true,
      }
    },

    components: { Image_container, HeadEtTabs },

    methods: {
      showDetails() {
        this.isOpen = !this.isOpen
      }
    }
}
</script>

<style lang="scss" scoped>
$gray: #3F4348;

.text-center {
  color: $gray;
  margin: 75px 0;

  h1 {
    font-size: 28px;
  }

  h3 {
    font-size: 20px;
    margin: 20px 0 0 0;
  }

  span {
    color: #8B8B8B;
  }
}

.chapters {
  width: 48%;
  margin: 0 auto 37px;

  .item_bullet {
    display: flex;
    color: #AFB5BA;
    margin: 0 0 20px 0;
    text-transform: uppercase;

    .bullet_circle {
      margin: -10px 15px 0;
      width: 45px;
      height: 45px;
      border: 1px solid #AFB5BA;
      border-radius: 50px;
      text-align: center;

      span {
        display: block;
        margin: 5.5px;
        width: 32px;
        height: 32px;
        background-color: #AFB5BA;
        border-radius: 50px;
      }
    }
  }

  .description_wrapper {
    .title {
      margin: 0 0 9px 0;
      font-size: 19px;
    }

    .voir_les_detail {
      ul {
        margin: 27px 0 0 0;

        &:last-child {
          margin-bottom: 13px;
        }
      }

      h1 {
        font-weight: bold;
        margin: 0 0 15px 0;
      }

      li {
        margin: 0 0 3px 0;

        i {
          font-size: 9px;
          color: #CCCCCC;
          margin: 0 5px 0 0;
        }
      }
    }

    span {
      color: #1CB2F1;
      font-size: 16px;
      cursor: pointer;
    }
  }
}

.dispositif_container {
  color: $gray;
  margin-top: 80px;
  padding: 50px 0;
  background-color: white;
  text-align: center;

  h1 {
    font-size: 25px;
    font-weight: bold;
    margin: 0 auto 20px;
    width: fit-content;
  }

  p {
    font-size: 20px;
    width: 68%;
    margin: 0 auto 30px;
    text-align: center;
  }

  .content {
    margin: 85px auto 0;
    width: fit-content;
    display: flex;

    img {
      margin: 0 20px 0 0;
      width: 75px;
      height: 75px;
      border-radius: 50px;
    }

    .item {
      display: flex;
      margin: 0 0 40px 0;
    }

    .left {
      margin: 0 20px 0 0;
    }

    .description h1 {
      font-size: 19px;
      font-weight: bold;
      margin: 0 0 12px 0;
    }

    .description span {
      width: 400px;
      text-align: left;
      display: block;
      font-size: 17px;
      color: #999999;
    }
  }

  button {
    padding: 10px 20px;
    font-size: 19px;
    color: white;
    background-color: #1CB2F1;
    border-radius: 3px;
    margin: 30px 0 50px;
  }
}

.form_container {
  background-color: #3F4348;
  color: white;
  padding: 85px 0 0 0;

  .h1 {
    width: 605px;
    text-align: center;
    font-size: 20px;
    margin: 0 auto 35px;
    display: block;
  }

  .form {
    margin: 67px 0 0 0;
    display: flex;
    margin: auto;
    width: 50%;

    .left {
      margin: 0 90px 0 0;

      label {
        display: block;
        text-transform: uppercase;
        margin: 0 0 5px;
        font-weight: bold;
      }

      input {
        margin: 0 0 25px;
        width: 250px;
        height: 38px;
        color: #3F4348;
        padding: 10px;
      }

      button {
        padding: 15px 39px;
        border-radius: 7px;
        margin: 30px 0 28px 0;
        width: max-content;
        font-size: 20px;
        text-transform: uppercase;
        border: 1.5px solid white;
      }

      .after_from {
        h2 {
          text-transform: uppercase;
          font-weight: bold;
          font-size: 20px;
        }

        span {
          display: block;
        }
      }
    }

    .right {
      .link {
        color: #058ec9;
        cursor: pointer;

        &:hover {
          border-bottom: 1px solid #058ec9;
        }
      }

      h4 {
        text-transform: uppercase;
        font-size: 20px;
        font-weight: bold;
        margin: 0 0 10px 0;
      }

      .h4 {
        display: block;
        margin: 0 0 10px;
      }

      div, ul {
        margin: 0 0 20px;
      }

      .second {
        i {
          font-size: 10px;
          margin: 0 0 0 -15px;
        }

        li {
          margin: 0 0 3px 15px;
        }
      }

      .third {
        img {
          width: 80px;
          height: 98px;
        }
      }
    }
  }
}
</style>