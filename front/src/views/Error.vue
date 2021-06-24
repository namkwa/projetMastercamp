<template>
  <div class="error">
    <div class="error_wrapper">
      <div class="error_wrapper_title"><h1>Oups !</h1></div>
      <div class="error_wrapper_content">
        Une erreur s'est produite, la page que<br />
        vous cherchez semble introuvable :(
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
  /* display: inline;
  justify-content: flex-start;
  align-items: center; */
  height: 80vh;
  width: 60vw;
}

.error_wrapper_title {
  font-size: 3em;
  color: #757575;
  font-weight: bold;
}

.error_wrapper_content {
  /* display: flex; */
  font-size: 1.5em;
  color: #757575;
  font-weight: bold;
}
</style>
