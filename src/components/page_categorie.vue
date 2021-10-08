<template>
  <Header />

  <div class="page_categorie">
    <div class="location small">
      <span>Vous êtes ici : </span>
      <span class="link">Accueil </span>
      <span> > </span>
      <span class="link">Formation</span>
      <span> > </span>
    </div>

    <div class="body">
      <div class="sidebar">
        <div class="web">
          <span class="title">Web</span>
          <span>Toutes</span>
          <span class="active">Tuto Web gratuits</span>
          <span class="link">Formation A à Z Web</span>
          <span class="link">Tuto Web en promo</span>
        </div>

        <div class="themes">
          <span class="title">Thèmes</span>
          <span>Transformation digitale</span>
        </div>

        <div class="logiciels">
          <span class="logiciel"></span>
        </div>
      </div>

      <div class="videos_container">
        <div class="head">
          <div class="left">
            <span class="title">331 tuto Web</span>
            <span class="small">(plus d'infos)</span>
          </div>

          <div class="right">
            <span>Les + populaires</span>
            <span> / </span>
            <span class="link">Les + récents</span>
            <span> / </span>
            <span class="link">Les mieux notés</span>
          </div>
        </div>

        <div class="videos">
          <div class="video" v-for="i in 6" :key="i">
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

      <div class="pagination">

      </div>
    </div>
  </div>
</template>

<script>
import Header from './header.vue'
export default {
  components: { Header },
  name: 'page_categorie'
}
</script>

<style lang="scss" scoped>
.page_categorie {
  width: 80%;
  margin: auto;
}
</style>