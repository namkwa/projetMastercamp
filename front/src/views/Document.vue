<template>
  <div class="document">
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
    <input list="years" name="years" id="browser" />
    <datalist id="browsers">
      <option value="Edge"> </option>
      <option value="Firefox"> </option>
      <option value="Chrome"> </option>
      <option value="Opera"> </option>
      <option value="Safari"> </option>
    </datalist>

    <button type="button" @click="handleClick">envoyer</button>
    <iframe id="output" width="100%" height="500" frameborder="0"
      >This is an embedded</iframe
    >
  </div>
</template>

<script>
import { upload } from "../api/upload.js";
export default {
  components: {},
  data() {
    return {
      SelectedFile: null,
      title: "",
      description: "",
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
      });
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
  margin-top: 150px;
  margin-bottom: 50px;
  font-size: 3em;
}
</style>
