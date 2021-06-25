<template>
  <div class="user">
    <div class="user_wrapper">
      <div class="user_wrapper_rechercher">
        <div class="user_wrapper_rechercher_logo">
          <img src="image/loupe.png" />
        </div>
        <div class="user_wrapper_rechercher_title">Rechercher</div>
      </div>
      <div class="user_wrapper_partager">
        <div class="user_wrapper_partager_logo">
          <img src="image/upload.png" />
        </div>
        <div class="user_wrapper_partager_title">Partager</div>
      </div>
      <div class="user_wrapper_projet">
        <div class="user_wrapper_projet_logo">
          <img src="image/myprojects.png" />
        </div>
        <div class="user_wrapper_projet_title">Mes Projets</div>
      </div>
    </div>
    <div class="user_content1">
      <div class="user_content1_right">
        <div class="user_content1_right_title">Contact</div>
        <div class="user_content1_right_mail">
          adrien.calmesnil@efrei.net<br />adcalmesni@gmail.com
        </div>
      </div>
      <div class="user_content1_left">
        <div class="user_content1_left_photo">
          <img
            src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-with-glasses.jpg"
          />
        </div>
        <div class="user_content1_left_desc">
          <h2>Adrien Calmesnil</h2>
          <br />
          <h3>Promotion {{ yearPromotion }}</h3>
        </div>
      </div>
      <div class="user_content1_separation"></div>
    </div>
    <div class="user_content2">
      <div class="user_content2_info">
        <div class="user_content2_info_title">information</div>
        <div class="user_content2_info_text">ah oui c'est cool blablabla</div>
      </div>
    </div>
    <div class="user_content3">
      <div class="user_content3_projet">
        <div class="user_content3_projet_title">Mes projets</div>
      </div>
    </div>
  </div>
</template>

<script>
</script>



<style scoped>
.user {
  /* display: flex;
  justify-content: flex-start;
  align-items: flex-start;  */
  /* flex-direction: column-reverse; */
  width: 100vw;
  height: 80vh;
}
.user_wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row-reverse;
  border: 2px solid #c7c7c7;
  width: 100vw;
  height: 52px;
  font-size: 1em;
}

.user_wrapper_rechercher {
  display: flex;
  flex-direction: row-reverse;
  color: #757575;
  margin: 40px;
}

.user_wrapper_rechercher_logo {
  display: flex;
  justify-content: center;
  height: 35px;
  width: 50px;
}
.user_wrapper_rechercher_title {
  display: flex;
  align-items: center;
  text-transform: uppercase;
}

.user_wrapper_projet {
  display: flex;
  flex-direction: row-reverse;
  color: #757575;
  margin: 40px;
}

.user_wrapper_projet_logo {
  display: flex;
  justify-content: center;
  height: 35px;
  width: 50px;
}

.user_wrapper_projet_title {
  display: flex;
  align-items: center;
  text-transform: uppercase;
}

.user_wrapper_partager {
  display: flex;
  flex-direction: row-reverse;
  color: #757575;
  margin: 40px;
}

.user_wrapper_partager_logo {
  display: flex;
  justify-content: center;
  height: 35px;
  width: 50px;
}

.user_wrapper_partager_title {
  display: flex;
  align-items: center;
  text-transform: uppercase;
}

.user_content1 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 25vh;
  width: 100vw;
  border-bottom: 2px solid #c7c7c7;
}

.user_content1_left {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row-reverse;
  width: 500px;
  /* padding-right: 30px; */
}

.user_content1_left_photo {
  display: flex;
  justify-content: center;
  height: 150px;
  width: 150px;
}

.user_content1_left_desc {
  padding-right: 30px;
}

h2 {
  font-weight: bold;
}

h3 {
  color: #757575;
  font-size: 1.5em;
  font-weight: lighter;
}

.user_content1_separation {
  border-right: 2px solid #c7c7c7;
  display: inline-block;
  height: 130px;
  width: 15vw;
}

.user_content1_right {
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  flex-direction: column-reverse;
  height: 120px;
  width: 34vw;
}

.user_content1_right_title {
  font-size: 1.5em;
  font-weight: bold;
  padding-bottom: 3%;
  line-height: 35px;
}

.user_content1_right_mail {
  text-align: justify;
  color: #757575;
}

.user_content2 {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 15vh;
  width: 100vw;
}

.user_content3 {
  height: 40vh;
  width: 100vw;
}
</style>
