


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
          <input id="search" type="search" placeholder="Search">
          <button type="button" @click="chercher">rechercher</button>
        </form>
        <li v-if="liste[0] == undefined">Aucun résultat</li>
        <li v-for="item in liste" :key="item.message">
          {{ item.title }} : {{ item.description }}
          <button type="button" @click="handleClick">envoyer</button>
        </li>
        
      </div>

    
      <div class="container">
        <div v-for="(group, name) in groups" :key="name">
         <a @click="group.open = !group.open" class="titlegroup"> {{ group.name }} </a>
           <ul v-show="group.open" id="langage">
           <li v-for="item in group.items" :key="item">
             <input class="box" type="checkbox"><label class="enum"> {{ item }} </label> 
           </li>
          </ul>
          <hr>
        </div>
      </div>

    </div>
  </div>


</template>





<script>

var groups = {
  "GROUP A": {
    "name": "Prépas et majeurs",
    "open": false,
    "items": [

      "L1 BioNumérique",
      "L1 Classique",
      "L1 Inter",
      "L1 Renforcée",
      "L1 Rentrée Décalée",
      "L2 BioNumérique",
      "L2 Classique",
      "L2 Inter",
      "L1 Renforcée",
      "L3 BioNumérique",
      "L3 Classique",
      "L3 Inter",
      "L3 New",
      "Software Engineering",
      "Business Intelligence and Analytics",
      "Digital Transformation",
      "Cybersécurité SI et Gouvernance",
      "Cybersécurité infrastructure et logiciels",
      "Big Data and Machine Learning",
      "Network & Cloud Infrastructure",
      "IT for Finance",
      "Bio-informatique",
      "Systèmes robotiques & Drones",
      "Transports intelligents",
      "Imagerie et Réalité Virtuelle",
      "Energie & Smart Grids"

    ]
  },
  "GROUP B": {
    "name": "Langage Informatique",
    "open": false,
    "items": [
      "C",
      "C++",
      "C#",
      "HTML/CSS",
      "Python",
      "PHP",
      "Java",
      "JavaScript",
      "Vue.js",
      "React.js",
      "Ruby",
      "UML",
      "Unity",
      "SQL",
      "Swift"
    ]
  },
  "GROUP C": {
    "name": "Année de réalisation",
    "open": false,
    "items": [
      "2010",
      "2011",
      "2012",
      "2013",
      "2014",
      "2015",
      "2016",
      "2017",
      "2018",
      "2019",
      "2020",
      "2021",
    ]
  },

}
import { research } from "../api/research.js";
export default {
  data() {
    return{
      groups: groups,
      liste: [],
      }
  },
  methods: {
    async chercher() {
      //console.log("front")
      var search = document
        .getElementById("search")
        .value.replaceAll(" ", " | ");
      //console.log(search);
      var res = await research({
        string: search,
      });
      this.liste = res.data.informations;
      console.log("LISTE : ")
      console.log(this.liste);
      //output.src = event.target.result;
    },
  }
  
}

</script>






<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');

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
    display: flex;
    justify-content: left;
    border-right : 2px solid #C7C7C7;
    width: 20em;
    height:inherit;
    flex-direction: column;
    overflow:scroll;
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




.container{
  order: 2;
}

.titlegroup {
  font-family: 'Roboto', sans-serif;
  font-size: 1.8em;
  justify-content: left;
  color : #757575;
}

#langage{
  text-align: justify;
  /* text-align: center; */
}

.enum {
  font-family: 'Roboto', sans-serif;
  justify-content: left;
  color : #757575;
  margin: 0.3em;
}



</style>