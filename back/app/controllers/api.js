'use strict';
const bcrypt = require('bcrypt')

const base = (req, res) => {
    res.json('base api'); 
  }

//Requête de connexion
const connection = (req, res) => {
  const email = req.body.email
  const password = req.body.password

  login(email, password)

  async function login (email, password){
    exist(email).then((result)=>{
      if(result.rowCount != 0){
        checkPassword(password, result.rows[0].password).then((validHash)=>{
          if (validHash===true) {
//-----------------------------------------A CHANGER-----------------------------------------------------
            if (req.session.id_user===result.rows[0].id_user){
//-----------------------------------------A CHANGER-----------------------------------------------------
              res.status(401).json({ message: "Vous êtes déjà connecté"})
            }
            else{
              req.session.current_user = {
//-----------------------------------------A CHANGER-----------------------------------------------------
                id_user : result.rows[0].id_user,
                username : result.rows[0].username,
//-----------------------------------------A CHANGER-----------------------------------------------------
                email : result.rows[0].email
              }
              res.status(200).json(req.session.current_user)
            }
          } else {
            res.json({ message: "Mot de passe incorrect"})
          }  
        })   
      }
      else{
        res.json({message : "L'email n'existe pas"})
      }
    });
  }
  //Vérifie si
  async function exist (email) {
    var sql = "SELECT * FROM personne WHERE Email=$1"
    return await client.query({
      text: sql,
      values: [email]
    })
  }

  async function checkPassword(password, dbhash){
    return await bcrypt.compare(password, dbhash)
  }
}




//Requête de création de compte
const createAccount = (req, res) => {
  const nom = req.body.nom
  const prenom = req.body.prenom
  const email = req.body.email
  const password = req.body.password
  
  exist(email).then((result)=>{
    if(result.rowCount != 0){
      res.status(400).json({ message: "Votre email est déjà utilisé"})
    }
    else{
      register(nom, prenom, email, password).then(()=>{
        res.status(200).json({message : "Votre compte a bien été enregistré"})
      })
    }
  });

  async function exist (email) {
    var sql = "SELECT Email FROM personne WHERE Email=$1"
    return await client.query({
      text: sql,
      values: [email]
    })
  }

  async function register(nom, prenom, email, password){
    var hash = await bcrypt.hash(password, 10)

    var sqlInsert="INSERT INTO personne (Nom, Prenom, Email, Password) VALUES ($1, $2, $3, $4)"

    await client.query({
      text: sqlInsert,
      values: [nom, prenom, email, hash]
    })
  }
}

export default { base };
export default { connection };
export default { createAccount };