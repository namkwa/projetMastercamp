<template>
  <div class="error">
    <div class="error_wrapper">
      <div class="error_wrapper_content">
        <div class="error_wrapper_content_title"><h1>Oups !</h1></div>
        <div class="error_wrapper_content_text">
          Une erreur s'est produite, la page que<br />
          vous cherchez semble introuvable :(
          <button
            @click="
              downloadResource('http://localhost:3000/Planning Mastercamp.ods', 'planning.ods')
            "
          >
            salut
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    downloadResource(url, filename) {
      if (!filename)
        filename = url
          .split("\\")
          .pop()
          .split("/")
          .pop();
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
.error {
  display: flex;
  justify-content: center;
  height: 80vh;
  width: 100vw;
}

.error_wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  width: 60vw;
}

.error_wrapper_content {
  padding-bottom: 80px;
}

.error_wrapper_content_title {
  font-size: 3em;
  color: #757575;
  font-weight: bold;
  padding-bottom: 30px;
}

.error_wrapper_content_text {
  /* display: flex; */
  font-size: 1.5em;
  color: #757575;
  font-weight: bold;
  text-align: justify;
}
</style>
