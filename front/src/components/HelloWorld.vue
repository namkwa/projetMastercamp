<template>
  <div class="hello">
    <div class="logo">
      <img src="@/assets/efilelogo.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>


<style scoped>
.hello {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.logo {
  width: 200px;
  height: 120px;
}

.logo img {
  width: 100%;
  height: auto;
}
</style>

