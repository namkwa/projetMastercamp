<template>
  <div class="home"><div class="home_title">Hello</div></div>
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
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
}
</style>

