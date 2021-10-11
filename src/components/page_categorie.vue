<template>
  <div class="page_categorie">
    <div class="location small">
      <span>Vous êtes ici : </span>
      <span class="link">Accueil </span>
      <span> > </span>
      <span class="link">Formation</span>
      <span> > </span>
      <span> Tuto </span>
    </div>

    <div class="body">
      <div class="sidebar">
        <div class="web">
          <span class="title">Web</span>
          <span>Toutes</span>
          <span class="link">Tuto Web gratuits</span>
          <span class="link">Formation A à Z Web</span>
          <span class="link">Tuto Web en promo</span>
        </div>

        <div class="themes">
          <span class="title">Thèmes</span>
          <span>Transformation digitale</span>
        </div>

        <div class="logiciels">
          <span class="title">Logiciels</span>
          <span class="logiciel" v-for="logiciel in logiciels" :key="logiciel">{{logiciel}}</span>
        </div>
      </div>

      <div class="videos_container">
        <div class="head">
          <div class="left">
            <span class="title">331 tuto Web</span>
            <span class="small"><i>(plus d'infos)</i> </span>
          </div>

          <div class="right">
            <span>les + populaires</span>
            <span> / </span>
            <span class="link">les + récents</span>
            <span> / </span>
            <span class="link">les mieux notés</span>
          </div>
        </div>

        <div class="videos">
          <div class="video" v-for="i in 12" :key="i">
              <div class="video_img">
                <video src="../assets/photoshop.mp4" controls></video>
                <img src="../assets/cover2.jpg" alt="">
              </div>
              <div class="info">Les possibilités insoupçconnées des calques courbes de transfert de dégradé dans photoshop CC</div>
              <div class="autor gray"> de <span class="blue">Pascal Gauch</span> - Durée : 23m49s</div>
              <div class="star">
                <i class="fas fa-star checked"></i>
                <i class="fas fa-star checked"></i>
                <i class="fas fa-star checked"></i>
                <i class="fas fa-star checked"></i>
                <i class="fas fa-star"></i>
              </div>
          </div>
        </div>
      </div>
    </div>

    <div class="pagination">

    </div>
  </div>
</template>

<script>
export default {
name: 'page_categorie',
setup() {
let logiciels= [
      'WordPress',
      'Jomia',
      'Dreamweaver',
      'Google',
      'Cloud',
      'Elementor',
      'Internet',
      'WIX',
      'Drupal',
      'Contribute',
      'Dotclear',
      'IWeb',
      'Magneto',
      'iWeb',
      'Spip',
      'Viadeo'
    ]
    return {
      logiciels
    }
  }
}
</script>

<style lang="scss" scoped>

$gray: #b4bac0;
$blue: #00a9f0;
$small: 14px;

.title {
  font-size: 19px;
}

.small {
    color: $gray;
    font-size: 12.5px;
}

.link:hover {
    color: $blue;
    cursor: pointer;
    border-bottom: 1px solid $blue;
}

span {
  width: fit-content;
  border-bottom: 1px solid transparent;
}

.page_categorie {
  width: 80%;
  margin: auto;

  .location {
    margin: 10px 0 25px 0;
  } 

  .body {
    display: flex;

    .sidebar {
      width: 16.666666666666664%;;
      margin: 0 15px 0 0;

      .web {
        padding: 0 0 15px 0;
        margin: 0 0 15px 0;
        width: fit-content;
        border-bottom: 1px solid $gray;

        span:not(:nth-child(1)) {
          font-size: $small;
          margin: 0 0 3px 0;

          &:not(:nth-child(2)) {
            color: $gray;

            &:hover {
              @extend .link;
            }
          }

          &:nth-child(3) {
            color: #3cc5b1;
            cursor: pointer;

            &:hover {
              color: #3cc5b1;
              border-bottom: 1px solid #3cc5b1;
            }
          }
        }
      }

      span {
        display: block;
      }

      .title {
        margin: 0 0 15px 0;
      }

      .themes {
        padding: 0 0 15px 0;
        margin: 0 0 15px 0;
        border-bottom: 1px solid $gray;
        width: fit-content;

        span:nth-child(2) {
          color: $gray;
          font-size: $small;
          @extend .link;
        }
      }

      .logiciels {
        padding: 0 0 15px 0;
        margin: 0 0 15px 0;
        width: fit-content;

        span:not(:nth-child(1)) {
          color: $gray;
          font-size: $small;
          @extend .link;
        }
      }
    }    

    .videos_container {
      width: 83.33333333333334%;

      .head {
        display: flex;
        justify-content: space-between;
        padding: 0 0 15px 0;
        margin: 0 0 20px 0;
        border-bottom: 1px solid $gray;

        .left .title {
          margin: 0 10px 0 0;
        }

        .left .small:hover {
          @extend .link;
        }

        .right {
          span {
            font-size: 15px;
          }

          span:not(:nth-child(1)) {
            color: $gray;

            &:not(:nth-child(2), :nth-child(4)) {
              @extend .link;
            }
          }
        }
      }

      .videos {
        justify-content: center;
        .video {
          margin: 0 25px 30px 0;
          width: 300px;
          display: inline-block;

          .video_img {
            position: relative;
            z-index: 100;

            video {
                width: 100%;
                height: 150px;
                object-fit: cover;
            }

            img {
                width: 44px;
                height: 44px;
                border-radius: 50px;
                position: absolute;
                bottom: -9px;
                right: 3px;
            }
          }

          .info {
              margin: 10px 0;
              font-size: 14px;
              font-weight: bold;
              color: rgb(73, 73, 73);
              line-height: 20px;
          }

          .autor {
            font-size: 14px;
            margin: 0 0 5px 0;
          }

          .star .checked {
            color: #ffc241;
          }
        }
      }
    }
  }
}
</style>