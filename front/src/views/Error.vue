<template>
  <div class="error">
    <div class="error_wrapper">
      <div class="error_wrapper_content">
        <div class="error_wrapper_content_title"><h1>Oups !</h1></div>
        <div class="error_wrapper_content_text">
          Une erreur s'est produite, la page que<br />
          vous cherchez semble introuvable :(
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
.error {
  display: flex;
  justify-content: center;
  /* align-items: center; */
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
