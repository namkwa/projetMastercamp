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
  align-items: center;
}
.logo {
  height: auto;
  width: 100%;
}
</style>

