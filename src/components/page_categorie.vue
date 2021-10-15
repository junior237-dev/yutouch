<template>
  <div class="page_categorie">
    <div class="location small">
      <span>Vous êtes ici : </span>
      <span class="link">Accueil</span>
      <span> > </span>
      <span class="link">Formation</span>
      <span> > </span>
      <span> Tuto </span>
    </div>

    <div class="body">
<<<<<<< HEAD
      <transition name="sidebarTrans">
        <div class="sidebar" ref="sidebar">
          <i class="fas fa-minus-circle" @click="closeSideBar"></i>
          <div class="web">
            <span class="title">Web</span>
            <span>Toutes</span>
            <span class="active">Tuto Web gratuits</span>
            <span>Formation A à Z Web</span>
            <span>Tuto Web en promo</span>
          </div>
          <div class="themes">
            <span class="title">Thèmes</span>
            <span>Transformation digitale</span>
          </div>
          <div class="logiciels">
            <span class="title">Logiciels</span>
            <span v-for="logiciel in logiciels" :key="logiciel">{{logiciel}}</span>
          </div>
        </div>
      </transition>
=======
      <Sidebar @close="toggleSidebar" :isClosed="isClosed" :sidebarIsClosed="sidebarIsClosed"/>
>>>>>>> ba8cba75e42e580c7d4790cffc7e44c4a7335ad5

      <div class="videos_container">
        <div class="head">
          <div class="left">
            <i class="fas fa-plus-circle gray" v-show="isClosed" @click="toggleSidebar"></i> 
            <span class="title">331 tuto Web</span>
            <span class="small"><i>(plus d'infos)</i> </span>
          </div>
          <div class="right">
            <span class="active">les + populaires</span>
            <span> / </span>
            <span>les + récents</span>
            <span> / </span>
            <span>les mieux notés</span>
          </div>
        </div>

        <div class="videos">
          <div class="video" v-for="i in 12" :key="i">
            <category-element />
          </div>
        </div>
      </div>
    </div>

    <div class="pagination">
      <a class="active" href="#">1</a>
      <a href="#">2</a>
      <a href="#">3</a>
      <a href="#">4</a>
      <a href="#">5</a>
      <a href="#">6</a>
      <a href="#">&raquo;</a>
      <a href="#">dernière page</a>
    </div>
  </div>

  <div class="texts_container">
    <div class="title">
      <img src="../assets/book.png" alt="">
      <h3>Web</h3>
    </div>

    <div class="texts">
      <h4>Internet et Web : une confusion courante</h4>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, maxime tempora neque quis sequi perspiciatis asperiores praesentium delectus repellendus vitae quam, nemo obcaecati, aperiam fuga eveniet! Ab, quia impedit culpa repellat ea ipsam at obcaecati eveniet vero veniam in, odio quod maxime explicabo dolorum sapiente molestiae. Eaque iusto illum quis necessitatibus nobis? Dolores nobis provident, esse ea, error eius, perferendis odio veritatis aspernatur fugit dolor. Nobis at magni mollitia quidem earum fuga doloremque explicabo repellat ex dolores hic officia odit excepturi rerum laborum voluptatum consequatur et corporis illo eius nisi aut, praesentium molestiae. Dolor placeat doloremque sapiente voluptatem eaque fuga! Error quam, unde ut nihil, doloribus nisi magnam optio provident voluptates voluptatum praesentium! Quasi rerum praesentium nesciunt vero tempora necessitatibus sed repellendus odio in odit, optio quia voluptatibus fugit, nisi atque distinctio, minus ea voluptatum doloribus dignissimos? Incidunt aperiam dolore, fugit itaque, excepturi praesentium quod, delectus soluta error quo harum.</p>
      <p>Lorem, ipsum dolor sit amet <b style="color: #00a9f0">consectetur adipisicing</b> elit. Sit at optio natus cupiditate tenetur ipsam temporibus eaque consectetur illum fugit eveniet nulla voluptatibus ad, illo excepturi quo quam numquam nisi ab perspiciatis <b style="color: rgb(39, 38, 38)">facere</b> aut pariatur ratione quisquam! Commodi itaque veritatis provident rerum pariatur quae illo ab. Fugiat numquam dolor aut iure nemo doloribus, quis laborum exercitationem. Quia nostrum architecto aliquam, est tenetur aspernatur vel ipsa pariatur. Nisi repellendus quibusdam accusantium necessitatibus fugit. Tempora delectus, eligendi dicta ducimus obcaecati placeat, quia laudantium accusamus voluptas facere ipsa repellat, corporis voluptate deserunt praesentium excepturi. Veniam autem at dolorum aliquid optio voluptate. Atque dolorum, debitis saepe eaque et illum facilis aut perspiciatis officiis. Asperiores voluptas tempora deserunt quisquam, ullam fugit dolore atque, laborum deleniti, minima delectus quidem? Aperiam enim assumenda quisquam adipisci quae ipsam quibusdam vel obcaecati reprehenderit minus quidem, laboriosam ex! Ratione nobis autem, aspernatur excepturi voluptatibus nam odit quia aut voluptatem debitis illum pariatur velit minus illo error consequatur enim laudantium, beatae fugit. Aspernatur, placeat quas quam ratione iusto recusandae! Praesentium illo amet ut sunt fuga impedit ullam iusto consequatur pariatur commodi, aspernatur magnam ex, veniam nostrum! Fugit omnis aspernatur in, necessitatibus repellendus obcaecati, eum ex minus nostrum nemo consequatur! Exercitationem, aut.</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, libero voluptatum non explicabo aliquid quasi officia exercitationem sint molestiae illo, repudiandae rem, quam modi accusamus vitae deserunt. Quibusdam obcaecati harum dolore itaque beatae! Numquam facilis est architecto eius minus id odio, officia corporis sed sunt, quisquam placeat quod maiores aliquid iure <b style="color: rgb(39, 38, 38)">inventore ratione</b> eum voluptatibus perferendis laboriosam distinctio. Animi voluptatibus sapiente nobis, molestias itaque consequatur optio cumque deleniti doloribus mollitia. Quibusdam provident atque molestiae, quae officiis aperiam! Eos minus aliquid eligendi autem non, facere fugiat eum rem at? Debitis doloremque quas esse enim corrupti non! Commodi suscipit iste exercitationem aliquam?</p>
      <h4>Le Web : une fenêtre ouverte sur le monde</h4>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium ipsa ipsum ut beatae perferendis, <b style="color: rgb(39, 38, 38)">ducimus</b> delectus non voluptatem repellat aperiam necessitatibus labore ratione excepturi nulla corporis eius perspiciatis quia veritatis quis, neque omnis corrupti inventore? Nihil quaerat quidem eius rem rerum, praesentium optio sit. Distinctio hic placeat ex rem recusandae, vero aspernatur unde molestias autem quaerat reiciendis doloremque alias sequi at, iste eum cupiditate quae! Voluptatem maiores iure officiis incidunt nam ut. Consectetur optio impedit nemo! Maxime repellendus fugiat cumque error explicabo dolorum, dolorem laudantium nam voluptatum labore beatae deleniti tempora officiis nisi quo tempore sequi vero unde. Dolor, consectetur</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, quisquam explicabo distinctio incidunt, accusamus laboriosam non quos consectetur eveniet dolorum id ea voluptates totam minus aliquam placeat dolorem perferendis, doloribus voluptatibus itaque? Assumenda est porro facilis neque, sint aliquam ad repellat aliquid veniam ut ea cumque, hic laborum blanditiis quo quasi iusto ipsam corporis ex reiciendis harum itaque. Laudantium, possimus voluptatibus libero praesentium vero ullam voluptatum amet dolore totam tenetur vitae facere consequuntur laboriosam id quasi dolor minima quis dolores animi? Officia perspiciatis suscipit, est nulla blanditiis consequuntur quidem molestiae. Aliquid similique nostrum laboriosam eligendi saepe suscipit facere vero sit qui harum ut beatae, eaque obcaecati molestiae quae unde soluta recusandae numquam adipisci quis reiciendis. Necessitatibus unde vitae maxime explicabo odio sint officiis placeat quisquam magnam iste repellendus fuga perspiciatis dolorum, praesentium voluptate possimus quibusdam sunt quas mollitia, alias et dolores sequi quidem qui. Nemo, maxime? Libero vel voluptate molestiae itaque fugiat repudiandae, delectus ratione voluptatem aspernatur officia magni, amet blanditiis quidem sapiente quas. Numquam quia deserunt eaque reprehenderit quibusdam nihil quidem error perferendis saepe. Aliquam ab fugiat voluptatum odio quia sint, ipsa nihil ratione voluptates expedita natus nostrum non. Eos blanditiis ducimus delectus omnis optio recusandae mollitia numquam vel.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur non quod nobis repudiandae minus, eos harum inventore magnam, delectus possimus dolore nesciunt. Molestiae quos dolorum laboriosam sed dolor fuga vitae asperiores, nihil error molestias voluptatem recusandae aut officiis numquam ab iusto. Neque natus aliquid provident. Enim molestiae tenetur maxime ad quibusdam fugit aliquid officiis ab, natus, sed saepe nostrum itaque placeat, laboriosam necessitatibus voluptates esse debitis vitae in quia? Sapiente, iure. Voluptate, illo delectus beatae nisi quisquam saepe velit error distinctio obcaecati qui recusandae? Aspernatur consectetur eveniet cum. Natus ab totam ipsum, facere nam eum repudiandae expedita incidunt officiis ad sit ipsam molestias quidem voluptatibus soluta officia. Ad voluptates molestiae voluptatem, impedit debitis magnam optio deserunt, harum voluptatibus quidem nostrum, beatae sit adipisci asperiores repellendus perferendis quisquam dolorum quo libero! Et laborum dolorem a ipsa repudiandae, molestiae quae quia explicabo assumenda ab beatae minus impedit pariatur sed laboriosam non, accusamus facere! Voluptas, magnam. Ducimus natus officiis velit. Debitis fugiat voluptatibus voluptate consequuntur doloremque cumque illum dolor illo magnam, asperiores aspernatur iure odit! Consectetur rem ipsam quia asperiores rerum laudantium itaque ab culpa magnam, eum, suscipit qui reprehenderit eaque! Tempore, officiis!</p>
      <h1>Tuto Web pour apprendre toutes les techniques</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <b style="color: rgb(39, 38, 38)">Ad, ullam</b> ?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium facere laboriosam eligendi iste dignissimos earum doloribus, quod voluptate quos in hic ipsam corrupti libero iure ducimus minus obcaecati mollitia maiores deserunt numquam perferendis, cupiditate rem, ipsum veniam. Nam ipsa rem a laudantium odit modi sit voluptas doloremque hic cupiditate, id consequatur obcaecati deleniti suscipit quo facilis magni, minima fugiat <b style="color: #00a9f0"></b> corrupti alias dolorum sequi quaerat? Deleniti, accusamus beatae sit, eius porro vel ut ipsam dolorem molestias saepe veritatis ratione rem alias. Veritatis, explicabo nostrum? Recusandae, deleniti culpa placeat aperiam perferendis magni quae iste vero, ab, commodi veritatis. Qui voluptate facere quaerat quasi, fuga, repellendus assumenda inventore quibusdam corrupti dicta possimus asperiores recusandae totam excepturi nisi consectetur necessitatibus. Excepturi autem, earum qui saepe, quia nemo odio id at voluptas quibusdam repudiandae aspernatur libero assumenda accusamus ea est in distinctio sequi itaque dolorum, maiores tempore hic suscipit. Maiores aliquid perferendis provident reiciendis quidem, laborum dignissimos recusandae consequuntur iure reprehenderit.</p>
    </div>
  </div>
</template>

<script>
<<<<<<< HEAD
import categoryElement from './category-element.vue'
=======
import Footer from './footer.vue'
import Header from './header.vue'
import Sidebar from './sidebar.vue'

>>>>>>> ba8cba75e42e580c7d4790cffc7e44c4a7335ad5
export default {
  components: { categoryElement },
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
<<<<<<< HEAD
      logiciels
    }
  },
=======
      open: false,
      isClosed: null,
      sidebarIsClosed: null
    }
  },
  
  components: { Footer, Header, Sidebar },

  created() {
    window.addEventListener('resize', this.checkScreen);
    window.addEventListener('resize', this.checkScreenAgain);
    this.checkScreen()
    this.checkScreenAgain()
  },
>>>>>>> ba8cba75e42e580c7d4790cffc7e44c4a7335ad5

  methods: {
    toggleSidebar() {
      this.sidebarIsClosed = !this.sidebarIsClosed
      console.log(this.sidebarIsClosed + ' 2')
    },

    checkScreen() {
      this.windowWidth= window.innerWidth;
      if (this.windowWidth <= 878) {
          this.isClosed = true;
          return
      }
      this.isClosed = false
      return
    },

    checkScreenAgain() {
      this.windowWidth2= window.innerWidth;
      if (this.windowWidth2 >= 878) {
          this.sidebarIsClosed = false;
          return
      }
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

    .videos_container {
      width: 83.33333333333334%;
      transition: margin-left .5s;

      .head {
        display: flex;
        justify-content: space-between;
        padding: 0 0 15px 0;
        margin: 0 0 20px 0;
        border-bottom: 1px solid $gray;

        i.gray {
          margin: 0 5px 0 0;
          display: none;
          cursor: pointer;

          &:hover {
            color: $blue;
          }
        }

        .left .title {
          margin: 0 10px 0 0;
        }

        .left .small:hover {
          @extend .link;
        }

        .right {
          span {
            font-size: 15px;
            color: $gray;

            &:hover:not(.active) {
              @extend .link;
            }

            &.active {
              color: black;
            } 
          }
        }
      }

      .videos {
       
        .video {
          margin: 0 5px 15px 5px;
          display: inline-block;
          width: 32.3%;
          cursor: pointer;

          .video_img {
            position: relative;
            z-index: 0;

            img.formation {
              width: 100%;
              height: 170px;
              object-fit: cover;
            }

            img.formateur {
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

      
      @media screen and (max-width: 1468px) {
        .videos .video {
          width: 32%;
        }
      }

      @media screen and (max-width: 1159px) {
        .videos .video {
          width: 31.9%;
        }
      }

      @media screen and (max-width: 1103px) {
        .videos .video {
          width: 48.4%;
        }
      }

      @media screen and (max-width: 972px) {
        .videos .video {
          width: 48%;
        }
      }

      @media screen and (max-width: 878px) {
        width: 100%;

        .left i.gray {
          display: inline-block;
        }
      }

      @media screen and (max-width: 827px) {
        .head {
          flex-direction: column;

          .left {
            margin: 0 0 10px 0;
          }
        }
      }

      @media screen and (max-width: 791px) {
        .videos .video {
          width: 48%;
        }
      }

      @media screen and (max-width: 640px) {
        .videos .video {
          width: 47.5%;
        }
      }

      @media screen and (max-width: 541px) {
        .videos .video {
          width: 100%;
          margin-left: 0;
        }
      }
    }
  }

  .pagination {
    margin: 50px 0;
    font-size: 14px;
    text-align: right;

    a {
      color: $gray;
      display: inline-block;
      padding: 6px 14px;
      margin: 0 0 0 5px;
      text-decoration: none;
      transition: background-color .3s;
    }

    .active {
      color: white;
      background-color: rgb(39, 38, 38);
    }

    a:hover:not(.active) {
      background-color: dodgerblue;
      color: white;
    }

    @media screen and (max-width: 507px) {
      :last-child {
        display: none;
      }

      a {
        padding: 0 11px;
      }
    }
  }

  @media screen and (max-width: 391px) {
    width: 96%;
    margin: auto;

    & .body .videos_container {
      width: 100%;
    }
  }
}

.texts_container {
  background-color: #f0f0f0;
  padding: 50px 0 30px 0;
  color: rgb(73, 73, 73);

  .title {
    width: fit-content;
    margin: auto;
    text-align: center;

    img {
      width: 75px;
      height: 55px;
      margin: 0 auto 15px;
    }

    h3 {
      font-size: 25px;
    }
  }

  .texts {
    columns: 2;
    width: 80%;
    text-align: justify;
    margin: 20px auto;

    p {
      margin: 0 0 20px 0;
      font-size: 14px;
    }

    h4 {
      font-size: 20px;
      margin: 0 0 15px 0;
    }

    h1 {
      font-size: 30px;
      margin: 40px 0 0 0;
    }
  }

  @media screen and (max-width: 807px) {
    .texts {
      columns: 1;
    }
  }
}
</style>