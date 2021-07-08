<template>
  <div class="document">
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
      console.log("LISTE : ")
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
