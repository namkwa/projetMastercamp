<template>
  <div class="home">
    <div class="home_wrapper">
      <a href="/research" class="path">
        <div class="home_wrapper_rechercher">
          <div class="home_wrapper_rechercher_logo">
            <img src="image/loupe.png" />
          </div>
          <div class="home_wrapper_rechercher_title">Rechercher</div>
        </div></a
      >
      <a href="/document" class="path">
        <div class="home_wrapper_partager">
          <div class="home_wrapper_partager_logo">
            <img src="image/upload.png" />
          </div>
          <div class="home_wrapper_partager_title">Partager</div>
        </div> </a
      ><a href="/user" class="path">
        <div class="home_wrapper_projet">
          <div class="home_wrapper_projet_logo">
            <img src="image/myprojects.png" />
          </div>
          <div class="home_wrapper_projet_title">Mon profil</div>
        </div></a
      >
    </div>
    <div class="home_content1">
      <!--<div class="home_content1_echange">
        <div class="home_content1_echange_logo">
          <img id="echangeLogo" src="image/echange.png" />
        </div>
        <div class="home_content1_echange_title">
          Entrez en contact avec<br />
          les créateur d’anciens projets
        </div>
      </div>-->
      <a href="/research" class="path">
        <div class="home_content1_search">
          <div class="home_content1_search_logo">
            <img id="searchLogo" src="image/search.png" />
          </div>
          <div class="home_content1_echange_title">Recherchez des projets</div>
        </div></a
      >

      <a href="/document" class="path">
        <div class="home_content1_share">
          <div class="home_content1_share_logo">
            <img id="searchLogo" src="image/share.png" />
          </div>
          <div class="home_content1_share_title">
            Partagez vos propres projets
          </div>
        </div>
      </a>
    </div>
  </div>
</template>







<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>


<style scoped>
.home {
  /* display: flex;
  justify-content: flex-start;
  align-items: flex-start;  */
  /* flex-direction: column-reverse; */
  width: 100vw;
  height: 80vh;
}
.home_wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row-reverse;
  border: 2px solid #c7c7c7;
  width: 100vw;
  height: 52px;
  font-size: 1em;
}

.home_wrapper_rechercher {
  display: flex;
  flex-direction: row-reverse;
  color: #757575;
  margin: 40px;
}

.home_wrapper_rechercher_logo {
  display: flex;
  justify-content: center;
  height: 35px;
  width: 50px;
}
.home_wrapper_rechercher_title {
  display: flex;
  align-items: center;
  text-transform: uppercase;
}

.home_wrapper_projet {
  display: flex;
  flex-direction: row-reverse;
  color: #757575;
  margin: 40px;
}

.home_wrapper_projet_logo {
  display: flex;
  justify-content: center;
  height: 35px;
  width: 50px;
}

.home_wrapper_projet_title {
  display: flex;
  align-items: center;
  text-transform: uppercase;
}

.path {
  text-decoration: none;
}

.home_wrapper_partager {
  display: flex;
  flex-direction: row-reverse;
  color: #757575;
  margin: 40px;
}

.home_wrapper_partager_logo {
  display: flex;
  justify-content: center;
  height: 35px;
  width: 50px;
}

.home_wrapper_partager_title {
  display: flex;
  align-items: center;
  text-transform: uppercase;
}

.home_content1 {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 70vh;
}

#searchLogo {
  height: 120px;
  width: 120px;
}

#echangeLogo {
  height: 120px;
  width: 120px;
}

.home_content1_share_title {
  color: #081f2f;
}

.home_content1_echange_title {
  color: #081f2f;
}

/* @media screen and (max-width: 600px) {
  .home_content1 {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
} */
</style>

