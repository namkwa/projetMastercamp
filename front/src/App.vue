<template>
  <div class="header">
    <div class="header_wrapper">
      <div class="header_wrapper_nav">
        <div class="header_wrapper_nav_route">
          <router-link to="/">Home</router-link> |
          <router-link to="/login">Login</router-link> |
          <router-link to="/create">Create Account</router-link> |
          <router-link to="/error">Error</router-link> |
          <router-link to="/document">Document</router-link> |
          <router-link to="/user">User</router-link>
        </div>
      </div>
      <div class="header_wrapper_logo">
        <div class="header_wrapper_logo_efile">
          <img src="@/assets/name_white.png" />
        </div>
      </div>
      <router-view />
    </div>
  </div>
</template>
./components/HelloWorld.vue

<style>
*,
html {
  margin: 0;
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
  height: 100vh;
  /* width: 100vw; */
}

.header_wrapper {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 100vw;
}

.header_wrapper :nth-child(1) {
  order: 1;
}

.header_wrapper_logo {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  background: #0e3b5a;
}

.header_wrapper_logo_efile {
  display: flex;
  justify-content: center;
  height: 87px;
  width: 100vw;
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