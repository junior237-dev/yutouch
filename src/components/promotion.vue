<template>
  <div class="page_categorie">
    <div class="location small">
      <span>Vous êtes ici : </span>
      <span class="link">Accueil </span>
      <span> > </span>
      <span class="link">Promos</span>
    </div>

    <div class="body">
      <sidebar @close="toggleSidebar" :isClosed="isClosed" :sidebarIsClosed="sidebarIsClosed" :blocks="blocks"/>

      <div class="videos_container">
        <div class="head">
          <div class="left">
            <i class="fas fa-plus-circle gray" v-show="isClosed" @click="toggleSidebar"></i> 
            <span class="title text-gray-700">441 promos actuellement</span>
          </div>

          <div class="right">
            <span class="active">temps restant</span>
            <span> / </span>
            <span>les + économiques</span>
            <span> / </span>
            <span>les + récentes</span>
          </div>
        </div>

        <div class="videos">
          <div class="video" v-for="i in 12" :key="i">
            <router-link :to="'/page_formation'" ><category-element :colorTicket="['bg-red-500']" :labelTicket="'Vente Flash!'"  :showstars="true" :listingDatetime="'14h25mn'"/></router-link>
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
</template>

<script>
import categoryElement from "./category-element.vue"
import sidebar from './sidebar.vue'
export default {
  name: 'page_categorie',
  components: {sidebar, categoryElement},
  setup() {
      let blocks = [
      {
        divBlock: ['promo'],
        titleBlock: 'Promo',
        links: [
            {
                name: 'Tous',
                link: ''
            },
            {
                name: 'Ventes flash',
                link: ''
            },
            {
                name: 'Deal Du Jour',
                link: ''
            }
        ]
      },

      {
        divBlock: ['logiciels'],
        titleBlock: 'Logiciels',
        links: [
            {
                name: '3ds Max',
                link: ''
            },
            {
                name: 'ACD See',
                link: ''
            },
            {
                name: 'Acrobat',
                link: ''
            },
            {
                name: 'affinity Designer',
                link: ''
            },
            {
                name: 'Affinity Photo',
                link: ''
            },
            {
                name: 'After Effects',
                link: ''
            },
            {
                name: 'Ajax',
                link: ''
            },
            {
                name: 'Audiovisuel',
                link: ''
            },
            {
                name: 'Autocad',
                link: ''
            },
            {
                name: 'Arnold',
                link: ''
            },
            {
                name: 'Blender',
                link: ''
            },
            {
                name: 'Bootstrap',
                link: ''
            },
            {
                name: 'Camera Raw',
                link: ''
            },
            {
                name: 'Excel',
                link: ''
            }
        ]
      }
      

    ]
    return {
      blocks
    }
  },
  data() {
    return {
      open: false,
      isClosed: false,
      sidebarIsClosed: false
    }
  },

  created() {
    window.addEventListener('resize', this.checkScreen);
    window.addEventListener('resize', this.checkScreenAgain);
    this.checkScreen()
    this.checkScreenAgain()
  },

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

    .sidebar {
      width: 16.666666666666664%;
      margin: 0 15px 0 0;

      i {
          float: right;
          margin: 15px 10px 10px 0;
          font-size: 17px;
          display: none;
          

          &:hover {
            color: $blue;
          }
        }

      div {
        padding: 0 0 15px 0;
        margin: 0 0 15px 0;
        width: fit-content;
        
        &:not(:last-child) {
          border-bottom: 1px solid $gray;
        }

        span:not(.title) {
          font-size: $small;
          margin: 0 0 3px 0;
          color: $gray;
          cursor: pointer;
          transition: color .5s ease;

          &:hover {
            color: $blue;
          }

          &.active {
            color: rgb(219, 39, 119);           
          }
        }
      }

      span {
        display: block;
      }

      .title {
        margin: 0 0 15px 0;
      }

      @media screen and (max-width: 639px) {
        width: 0;
        position: fixed;
        z-index: 178;
        height: 100%;
        top: 0;
        left: 0;
        background-color: white;
        overflow-x: hidden;
        transition: 0.5s;

        div {
          margin: 10px auto 0;
          width: 90%;
          
          span {
            display: block;
            transition: 0.3s;
          }
        }

        &.open {
          width: 200px;

          i {
            display: block;
          }
        }
      }
    }   

    .sidebarTrans-enter-from, .sidebarTrans-leave-to {
        opacity: 0;
        transform: translateX(-300px);

    }

    .sidebarTrans-enter-active, .sidebarTrans-leave-active {
        transition: opacity .7s ease, transform .7s ease;
    } 
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
              color: rgb(95, 94, 94);
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