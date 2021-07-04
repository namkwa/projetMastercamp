<template>
  <div class="create">
    <div class="create_wrapper">
      <div class="create_wrapper_title">
        <h1>Créer un compte</h1>
      </div>
      <form id="create" method="get">
        <div class="create_wrapper_email">
          <input type="email" id="email" required pattern="[a-z0-9._%+-]+@efrei+\.[a-z]{2,4}$" placeholder="email@efrei.net" 
              v-model="email"/>
        </div>
        <div class="create_wrapper_name">
          <input type="password" id="pwd" placeholder="Mot de passe" v-model="password"/>
          <input type="text" id="name" placeholder="Nom" v-model="nom"/>
        </div>
        <div class="create_wrapper_fname">
          <input type="password" id="confirm" placeholder="Validation du mot de passe" v-model="confirm"/>
          <input type="text" id="fname" placeholder="Prénom" v-model="prenom"/>
        </div>
        <div class="create_wrapper_checkbox">
          <label class="container">Déjà diplomé.e ?</label>
          <input type="checkbox" name="Diplome" id="graduated" v-model="diplome">
        </div>
        <div class="create_wrapper_year">
          <div class="create_wrapper_year_sub">
            
          <button class="button_creation" type="button" @click="Account">C'est parti !</button>
            </div>
          
          <input type="text" id="year" placeholder="Promotion" v-model="promotion"/>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { createAccount } from "../api/createAccount.js";
import router from '../router/index.js'
export default {
  data() {
    return {
      email: "",
      nom: "",
      prenom: "",
      diplome: "",
      promotion: "",
      password: "",
      confirm: ""
    };
  },
  methods: {
    goToHome() {
      router.push("/").catch(() => {})
    },
    async Account() {
      if (this.password == this.confirm) {
        const res = await createAccount({ nom: this.nom, prenom: this.prenom, email: this.email, password: this.password, login: "a supprimer"});

        if (res.data.message == "ok") {
          console.log("Le compte a été créé avec succès!");
          this.goToHome();
        }
        else if (res.data.message == "Error") {
          alert("Cette adresse est déjà utilisée");
        }
        else {
          alert("Erreur inconnue détéctée");
        }
      }
      else {
        alert("Les mots de passe ne correspondent pas.\n Veuillez réessayer.");
      }
    },
  },
};
</script>

<style scoped>
.create {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  width: 100vw;
}

.create_wrapper {
  display: flex;
  justify-content: center;
  flex-direction: column-reverse;
  height: 500px;
  width: 100vw;
  /* background: beige; */
}

.create_wrapper_title {
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

.create_wrapper_email {
  display: flex;
  justify-content: flex-start;
  margin-left: 10%;
  padding-bottom: 30px;
}

.create_wrapper_name {
  display: flex;
  justify-content: space-around;
  padding-bottom: 30px;
}

.create_wrapper_fname {
  display: flex;
  justify-content: space-around;
  padding-bottom: 30px;
}

.create_wrapper_checkbox {
  display: flex;
  justify-content: flex-start;
  margin-left: 10%;
  padding-bottom: 30px;
  font-size: 1.33em;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

input#graduated {
  width: 25px;
  height: 25px;
}

label.container {
  padding-left: 20px;
}

.create_wrapper_year {
  display: flex;
  justify-content: flex-start;
  margin-left: 10%;
  padding-bottom: 30px;
}

.create_wrapper_year_sub {
  width: 60vw;
  padding-left: 16%;
}

.create_wrapper_button {
  padding-bottom: 30px;
}

.button_creation {
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

::placeholder {
  font-size: 1.32em;
}
</style>
