<template>
  <div class="home">
    <div class="home_wrapper">
      <div class="home_wrapper_rechercher">
        <div class="home_wrapper_rechercher_logo">
          <img src="image/loupe.png" />
        </div>
        <div class="home_wrapper_rechercher_title">Rechercher</div>
      </div>
      <div class="home_wrapper_projet">
        <div class="home_wrapper_projet_logo">
          <img src="image/myprojects.png" />
        </div>
        <div class="home_wrapper_projet_title">Mes Projets</div>
      </div>
      <div class="home_wrapper_partager">
        <div class="home_wrapper_partager_logo">
          <img src="image/upload.png" />
        </div>
        <div class="home_wrapper_partager_title">Partager</div>
      </div>
    </div>
    <div class="home_content1"></div>
  </div>

  <!-- <div class="content1_search">
      <div class="content1_search_logo">
        <img src="image/search.png" />
      </div>
      <div class="content1_echange_title">cznvzrpiniv</div>
    </div>
    <div class="content1_echange">
      <div class="content1_echange_logo">
        <img src="image/echange.png" />
      </div>
      <div class="content1_echange_title">ùkzrnùvna</div>
    </div> -->
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
  display: flex;
  justify-content: center;
  align-items: flex-start;
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
  font-size: 1.5em;
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
  /* display: flex;
  justify-content: center;
  align-items: center; */
  background: red;
}
</style>

