<template>
  <div class="document">
    <h1>Le document page</h1>
    <input
      type="file"
      enctype="multipart/form-data"
      id="input"
      @change="handleFiles"
      multiple
      required
    />
    <input type="text" id="title" v-model="title" />
    <input type="text" id="description" v-model="desciption" />
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
      upload({ file: this.SelectedFile, title: this.title });
    },
  },
};
</script>
