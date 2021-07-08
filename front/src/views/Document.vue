<template>
  <div class="document">
    <div class="document_wrapper">
      <a href="/research" class="path">
        <div class="document_wrapper_rechercher">
          <div class="document_wrapper_rechercher_logo">
            <img src="image/loupe.png" />
          </div>
          <div class="document_wrapper_rechercher_title">Rechercher</div>
        </div></a
      >
      <!-- <a href="/document" class="path">
        <div class="document_wrapper_partager">
          <div class="document_wrapper_partager_logo">
            <img src="image/upload.png" />
          </div>
          <div class="document_wrapper_partager_title">Partager</div>
        </div></a> -->
      <a href="/user" class="path">
        <div class="document_wrapper_projet">
          <div class="document_wrapper_projet_logo">
            <img src="image/myprojects.png" />
          </div>
          <div class="document_wrapper_projet_title">Mon profil</div>
        </div></a
      >
    </div>

    <input
      type="text"
      enctype="multipart/form-data"
      placeholder="rechercher"
      id="search"
    />

    <button type="button" @click="chercher">Rechercher</button>
    <li v-if="liste[0] == undefined" id="no-result">Aucun résultat</li>
    <li v-for="item in liste" :key="item.message">
      {{ item.title }} {{ item.description }}
      <button type="button" @click="handleClick">envoyer</button>
    </li>
    <h1>Envoi de documents</h1>

    <input
      type="file"
      enctype="multipart/form-data"
      id="input"
      @change="handleFiles"
      multiple
      required
    />
    <input
      type="text"
      id="title"
      v-model="title"
      placeholder="Titre du document"
    />
    <input
      type="text"
      id="description"
      v-model="description"
      placeholder="Description"
    />
    <input list="years" name="years" id="browser" placeholder="Promotion" />

    <button type="button" @click="handleClick">envoyer</button>
    <iframe id="output" width="100%" height="500" frameborder="0"
      >This is an embedded</iframe
    >
  </div>
</template>

<script>
import { upload } from "../api/upload.js";
import { research } from "../api/research.js";
export default {
  components: {},
  data() {
    return {
      SelectedFile: null,
      title: "",
      description: "",
      liste: [],
      promotion: "",
    };
  },
  methods: {
    handleFiles() {
      const inputElement = document.getElementById("input").files[0];
      const output = document.getElementById("output");
      const selected_file = inputElement;
      this.SelectedFile = selected_file;
      //console.log(selected_file);

      const reader = new FileReader();
      reader.addEventListener("load", (event) => {
        output.src = event.target.result;
      });
      reader.readAsDataURL(selected_file);
    },
    handleClick() {
      upload({
        file: this.SelectedFile,
        title: this.title,
        description: this.description,
        promotion: this.promotion,
      });
    },

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
      console.log("LISTE : ");
      console.log(this.liste);
      //output.src = event.target.result;
    },
  },
};
</script>

<style scoped>
.document {
  height: 80vh;
  width: 100vw;
}

.path {
  text-decoration: none;
}

.document_wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row-reverse;
  border: 2px solid #c7c7c7;
  width: 100vw;
  height: 52px;
  font-size: 1em;
}

.document_wrapper_rechercher {
  display: flex;
  flex-direction: row-reverse;
  color: #757575;
  margin: 40px;
}

.document_wrapper_rechercher_logo {
  display: flex;
  justify-content: center;
  height: 35px;
  width: 50px;
}
.document_wrapper_rechercher_title {
  display: flex;
  align-items: center;
  text-transform: uppercase;
}

.document_wrapper_projet {
  display: flex;
  flex-direction: row-reverse;
  color: #757575;
  margin: 40px;
}

.document_wrapper_projet_logo {
  display: flex;
  justify-content: center;
  height: 35px;
  width: 50px;
}

.document_wrapper_projet_title {
  display: flex;
  align-items: center;
  text-transform: uppercase;
}

.document_wrapper_partager {
  display: flex;
  flex-direction: row-reverse;
  color: #757575;
  margin: 40px;
}

.document_wrapper_partager_logo {
  display: flex;
  justify-content: center;
  height: 35px;
  width: 50px;
}

.document_wrapper_partager_title {
  display: flex;
  align-items: center;
  text-transform: uppercase;
}

h1 {
  color: #757575;
  margin-top: 100px;
  margin-bottom: 50px;
  font-size: 3em;
}

#search {
  margin-top: 50px;
}

#no-result {
  margin-top: 30px;
}
</style>
