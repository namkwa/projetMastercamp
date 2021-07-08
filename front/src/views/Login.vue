<template>
  <div class="login">
    <div class="login_wrapper">
      <div class="login_wrapper_title"><h1>Connexion</h1></div>
      <form id="login" method="get">
        <div class="login_wrapper_email">
          <input
            type="email"
            id="email"
            placeholder="email@efrei.net"
            required
            pattern="[a-z0-9._%+-]+@efrei+.[a-z]{2,4}$"
            v-model="email"
          />
        </div>
        <div class="login_wrapper_password">
          <input
            type="password"
            id="pwd"
            placeholder="Mot de passe"
            v-model="password"
          />
        </div>
        <div class="login_wrapper_button">
          <button class="button_connexion" type="button" @click="handleClick()">
            Connexion
          </button>
          <router-link to="/create" id="create_route"
            ><p>Par encore de compte ? C'est par ici !</p></router-link
          >
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import router from "../router/index.js";
import { login } from "../api/login.js";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async handleClick() {
      var token = await login({ email: this.email, password: this.password });
      localStorage.setItem("token", token.data);
      console.log(token);
      this.goToUser();
    },
    goToUser() {
      router.push("/User").catch(() => {});
    },
  },
};
</script>

<style scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  width: 100vw;
}

.login_wrapper {
  display: flex;
  justify-content: center;
  flex-direction: column-reverse;
  height: 500px;
  width: 500px;
  /* background: beige; */
}

.login_wrapper_title {
  display: flex;
  justify-content: center;
  color: #757575;
  padding-bottom: 100px;
  font-size: 1.5em;
}

input {
  outline: 0;
  border-width: 0 0 2px;
  border-color: #8a8a8a;
  width: 30vw;
}

input:focus {
  border-color: blue;
}

/* form {
  display: flex;
  align-items: space-between;
  flex-direction: column;
} */

.login_wrapper_email {
  padding-bottom: 30px;
}

.login_wrapper_password {
  padding-bottom: 30px;
}

::placeholder {
  font-size: 1.33em;
}

.login_wrapper_button {
  padding-bottom: 30px;
}

p {
  text-decoration: none;
  padding-top: 15px;
  font-size: 17px;
  color: #0e3b5a;
}

p:hover {
  color: #49ade0;
}

.button_connexion {
  background-color: #0e3b5a;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
}

#create_route {
  text-decoration: none;
}
</style>
