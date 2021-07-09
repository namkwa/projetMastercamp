<template>
  <div class="home">
    <div class="home_wrapper">
      <a href="/document" class="path">
        <div class="home_wrapper_partager">
          <div class="home_wrapper_partager_logo">
            <img src="image/upload.png" />
          </div>
          <div class="home_wrapper_partager_title">Partager</div>
        </div></a
      ><a href="/user" class="path">
        <div class="home_wrapper_projet">
          <div class="home_wrapper_projet_logo">
            <img src="image/myprojects.png" />
          </div>
          <div class="home_wrapper_projet_title">Mon profil</div>
        </div></a
      >
    </div>

    <div class="rsch">
      <div class="rsch_result">
        <ul class="rsch_ul">
          <li v-if="liste[0] == undefined" class="result">Aucun résultat</li>
          <li v-for="item in liste" :key="item.message" class="content_list" id="rsch_liste">
            {{ item.title }} : {{ item.description }}
            <button type="button" @click="downloadResource(item.adress, false)" id="send">
            
              Télécharger
            </button>
          </li>
        </ul>
      </div>
      <div class="rsch_menu">
        <div class="rsch1">
          <form id="demo-2">
            <input id="search" type="search" placeholder="Search" />
            <button type="button" @click="chercher" id="btn_rsch">
              rechercher
            </button>
          </form>
        </div>

        <div class="container">
          <div v-for="(group, name) in groups" :key="name">
            <a @click="group.open = !group.open" class="titlegroup">
              {{ group.name }}
            </a>
            <ul v-show="group.open" class="list">
              <li v-for="item in group.items" :key="item">
                <input class="box" type="checkbox" /><label class="enum">
                  {{ item }}
                </label>
              </li>
            </ul>
            <hr />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
var groups = {
  "GROUP A": {
    name: "Prépas et majeurs",
    open: false,
    items: [
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
      "Energie & Smart Grids",
    ],
  },
  "GROUP B": {
    name: "Langage Informatique",
    open: false,
    items: [
      "C",
      "C++",
      "C#",
      "HTML/CSS",
      "MatLab",
      "Python",
      "PHP",
      "Java",
      "JavaScript",
      "Express.js",
      "Node.js",
      "TypeScript",
      "Vue.js",
      "Ruby",
      "UML",
      "Unity",
      "SQL",
      "Swift",
    ],
  },
  "GROUP C": {
    name: "Année de réalisation",
    open: false,
    items: [
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
    ],
  },
};
import { research } from "../api/research.js";
export default {
  data() {
    return {
      groups: groups,
      liste: [],
    };
  },
  methods: {
    async chercher() {
      var search = document
        .getElementById("search")
        .value.replaceAll(" ", " | ");
      var res = await research({
        string: search,
      });
      this.liste = res.data.informations;
    },
    downloadResource(url, filename) {
      if (!filename) filename = url.split("\\").pop().split("/").pop();
      fetch(url, {
        headers: new Headers({
          Origin: location.origin,
        }),
        mode: "cors",
      })
        .then((response) => response.blob())
        .then((blob) => {
          let blobUrl = window.URL.createObjectURL(blob);
          var a = document.createElement("a");
          a.download = filename;
          a.href = blobUrl;
          document.body.appendChild(a);
          a.click();
          a.remove();
        })
        .catch((e) => console.error(e));
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap");

.home {
  width: 100vw;
  height: 80vh;
}

.path {
  text-decoration: none;
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

.rsch_result {
  justify-content: center;
  display: flex; 
  height: 100vh;
  width: 100vw;
  margin-top: 10%;
}

#rsch_liste.content_list {
  justify-content: space-between;
  border-bottom: 2px solid #C7C7C7;
  padding-bottom: 5px;
  padding-top: 10px;
}

.rsch_ul {
  text-align: justify;
}

#send {
  position: relative;
  right: 0%;
}

.content_list {
  display: flex;
  flex-direction: column;
}

.rsch {
  display: flex;
  height: 100vh;
}

#rsch_liste {
  display: inline-block;
}

.rsch_menu {
  display: flex;
  justify-content: left;
  border-right: 2px solid #c7c7c7;
  width: 40em;
  height: inherit;
  flex-direction: column;
}

.rsch_menu > div {
  margin: 4%;
}

.rsch1 {
  order: 1;
}

#btn_rsch, #send {
  background-color: #0e3b5a;
  border: none;
  color: white;
  cursor: pointer;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  margin-left: 12px;
  padding: 12px 28px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  text-transform: uppercase;
}

/* Barre recherche déroulante */
input {
  outline: none;
}
input[type="search"] {
  -webkit-appearance: textfield;
  -webkit-box-sizing: content-box;
  font-family: inherit;
  font-size: 100%;
}
input::-webkit-search-decoration,
input::-webkit-search-cancel-button {
  display: none;
}

input[type="search"] {
  background: #ededed
    url(https://static.tumblr.com/ftv85bp/MIXmud4tx/search-icon.png) no-repeat
    9px center;
  border: solid 1px #ccc;
  padding: 9px 10px 9px 32px;
  width: 55px;

  -webkit-border-radius: 10em;
  -moz-border-radius: 10em;
  border-radius: 10em;

  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  transition: all 0.5s;
}
input[type="search"]:focus {
  width: 130px;
  background-color: #fff;
  border-color: #66cc75;

  -webkit-box-shadow: 0 0 5px rgba(109, 207, 246, 0.5);
  -moz-box-shadow: 0 0 5px rgba(109, 207, 246, 0.5);
  box-shadow: 0 0 5px rgba(109, 207, 246, 0.5);
}

input:-moz-placeholder {
  color: #999;
}
input::-webkit-input-placeholder {
  color: #999;
}

#demo-2 input[type="search"] {
  width: 15px;
  padding-left: 10px;
  color: transparent;
  cursor: pointer;
}
#demo-2 input[type="search"]:hover {
  background-color: #fff;
}
#demo-2 input[type="search"]:focus {
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

.container {
  order: 2;
  overflow: auto;
}

.titlegroup {
  font-family: "Roboto", sans-serif;
  font-size: 1.8em;
  justify-content: left;
  color: #757575;
}

.list {
  text-align: justify;
}

.enum {
  font-family: "Roboto", sans-serif;
  justify-content: left;
  color: #757575;
  margin: 0.3em;
}
</style>
