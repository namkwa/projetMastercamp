


<template>
  <div class="home">
    <div class="home_wrapper">
      <div class="home_wrapper_rechercher">
        <div class="home_wrapper_rechercher_logo">
          <img src="image/loupe.png" />
        </div>
        <div class="home_wrapper_rechercher_title">Rechercher</div>
      </div>
      <div class="home_wrapper_partager">
        <div class="home_wrapper_partager_logo">
          <img src="image/upload.png" />
        </div>
        <div class="home_wrapper_partager_title">Partager</div>
      </div>
      <div class="home_wrapper_projet">
        <div class="home_wrapper_projet_logo">
          <img src="image/myprojects.png" />
        </div>
        <div class="home_wrapper_projet_title">Mes Projets</div>
      </div>
    </div>
    
    
    <div class="rsch_menu">

      <div class="rsch1">
        <form id="demo-2">
          <input type="search" placeholder="Search">
        </form>
      </div>

    
      <div v-for="accordion in accordions" :key="accordion.title" class="accord">
        <BaseAccordian>
          <template v-slot:title>{{ accordion.title }}</template>

          <template v-slot:content >
            <input type="checkbox" class="check">
            <label v-bind:id="accordion.content.id">{{ accordion.value }}</label>
          </template>

        </BaseAccordian>
      </div>

    </div>
  </div>


</template>





<script>

import BaseAccordian from "@/components/BaseAccordion";


export default {
  components: {
    BaseAccordian
  },
  data() {
    return {
      accordions: [
        {
          title: "Prépa et majeurs",
          content: [
          {
            id:"l3new",
            value: "L3 New"
          },
          {
            id:"l1inter",
            value: "L1 Inter"
          },
          ]
        },
        {
          title: "Année d’étude",
          text: "All about Nuxt"
        },
        {
          title: "Langage de code",
          text: "All about webpack"
        },
        {
          title: "Année réalisation",
          text: "All about Nuxt"
        }
      ]
    };
  }
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

.rsch_menu {
    background: #af2c2c;
    display: flex;
    position: left;
    border-right : 2px solid #C7C7C7;
    width: 20em;
    height:inherit;
    flex-direction: column;
    overflow: auto;
}

.rsch_menu > div {
  margin : 4%;
}

.rsch1 {
  order : 1;
}


/* Barre recherche déroulante */
input {
  outline: none;
  
}
input[type=search] {
  -webkit-appearance: textfield;
  -webkit-box-sizing: content-box;
  font-family: inherit;
  font-size: 100%;
}
input::-webkit-search-decoration,
input::-webkit-search-cancel-button {
  display: none; 
}


input[type=search] {
  background: #ededed url(https://static.tumblr.com/ftv85bp/MIXmud4tx/search-icon.png) no-repeat 9px center;
  border: solid 1px #ccc;
  padding: 9px 10px 9px 32px;
  width: 55px;
  
  -webkit-border-radius: 10em;
  -moz-border-radius: 10em;
  border-radius: 10em;
  
  -webkit-transition: all .5s;
  -moz-transition: all .5s;
  transition: all .5s;
}
input[type=search]:focus {
  width: 130px;
  background-color: #fff;
  border-color: #66CC75;
  
  -webkit-box-shadow: 0 0 5px rgba(109,207,246,.5);
  -moz-box-shadow: 0 0 5px rgba(109,207,246,.5);
  box-shadow: 0 0 5px rgba(109,207,246,.5);
}


input:-moz-placeholder {
  color: #999;
}
input::-webkit-input-placeholder {
  color: #999;
}

#demo-2 input[type=search] {
  width: 15px;
  padding-left: 10px;
  color: transparent;
  cursor: pointer;
}
#demo-2 input[type=search]:hover {
  background-color: #fff;
}
#demo-2 input[type=search]:focus {
  width: 130px;
  padding-left: 32px;
  color: #000;
  background-color: #fff;
  cursor: auto;
}
#demo-2 input:-moz-placeholder {
  color: transparent;
}
#demo-2 input::-webkit-input-placeholder {
  color: transparent;
}
/* FIN barre recherche déroulante */


.accord {
  order:2;
}

#l3new {
  color : blanchedalmond;
  margin-left: 1%;
}


</style>



