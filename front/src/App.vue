<template>
  <div class="header">
    <div class="header_wrapper">
      <div class="header_wrapper_nav">
        <div class="header_wrapper_nav_route">
          <router-link to="/">home</router-link> |
          <router-link to="/login">login</router-link> |
          <router-link to="/create">create account</router-link> |
          <router-link to="/error">error</router-link> |
          <router-link to="/document">document</router-link> |
          <router-link to="/user">profil</router-link> |
        </div>
      </div>
      <div class="header_wrapper_logo">
        <router-link to="/">
          <div class="header_wrapper_logo_efile">
            <img id="nameLogo" src="image/efiledex_white_sized.png" /></div
        ></router-link>
        <div class="header_wrapper_logo_right">
          <div class="header_wrapper_logo_right_star">
            <img id="star" src="image/star.png" />
          </div>
          <div class="header_wrapper_logo_right_bell">
            <img id="bell" src="image/bell.png" />
          </div>
        </div>
        <router-link to="/login">
          <div class="header_wrapper_logo_left">
            <div class="header_wrapper_logo_left_user">
              <img src="image/user.png" />
            </div></div
        ></router-link>
      </div>
      <router-view />
    </div>
  </div>
</template>
./components/HelloWorld.vue

<script>
</script>


<style>
*,
html {
  margin: 0;
  overflow-x: hidden;
  overflow-y: hidden;
}

#app {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.header {
  display: flex;
  height: 100vh;
}

.header_wrapper {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
}

.header_wrapper :nth-child(1) {
  order: 1;
}

.header_wrapper_logo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row-reverse;
  width: 100vw;
  background: #0e3b5a;
}

.header_wrapper_logo :nth-child(3) {
  order: 1;
}

.header_wrapper_logo_efile {
  display: flex;
  justify-content: center;
  height: 60px;
  width: 25vw;
  padding-left: 70px;
}

.header_wrapper_logo_right {
  display: flex;
}

.header_wrapper_logo_right_star {
  display: flex;
  height: 35px;
  width: 35px;
  padding-top: 0px;
  padding-right: 25px;
}

.header_wrapper_logo_right_bell {
  display: flex;
  justify-content: center;
  width: 35px;
  height: 35px;
  padding-top: 0px;
  padding-right: 25px;
}

.header_wrapper_logo_left {
  display: flex;
  padding: 25px;
}

.header_wrapper_logo_left_user {
  display: flex;
  justify-content: center;
  height: 45px;
  width: 45px;
}

.header_wrapper_nav {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: auto;
  width: 100%;
}

.header_wrapper_nav a {
  font-weight: bold;
  color: #2c3e50;
}

.header_wrapper_nav a.router-link-exact-active {
  color: #42b983;
}
</style>
