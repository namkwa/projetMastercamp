"use strict";

import { Documents, Student } from "../models.js";
import bcrypt from "bcrypt";
import Bookshelf from "bookshelf";
import jwt from "jsonwebtoken";

const base = (req, res) => {
  res.json("base api");
};

const test = async (req, res) => {
  const { nom, prenom, email, password, login } = req.body;
  const user = await new Student({
    nom,
    prenom,
    email,
    password,
    login,
  }).save();
  res.json(user);
};

const test2 = async (req, res) => {
  const student = await Student.fetchAll();
  res.json(student);
};

//Requête de connexion
const login = async (req, res) => {
  const request = await Student.where("email", req.body.email).fetch();
  const passwordIsValid = await bcrypt.compare(
    req.body.password,
    request.attributes.password
  );
  if (!passwordIsValid) return res.status(401).send(null);

  const token = jwt.sign(
    { id: request.attributes.idetudiant },
    "trestressecret",
    {
      expiresIn: 86400, // expires in 24 hours
    }
  );

  res.status(200).send(token);
};

//Requête de création de compte
const register = async (req, res) => {
  const nom = req.body.nom;
  const prenom = req.body.prenom;
  const email = req.body.email;
  const password = await bcrypt.hash(req.body.password, 10);
  const login = req.body.login;

  const request = await Student.where("email", req.body.email).fetch({
    require: false,
  }); //{ require: false } ne sert probablement à rien
  if (request == null) {
    const student = await new Student({
      nom,
      prenom,
      email,
      password,
      login,
    }).save();
    console.log("terminé !");
    res.json({ message: "ok" });
  } else {
    res.json({ message: "Error" });
  }
};

const upload = async (req, res) => {
  const token = req.headers.authorization;
  const file = req.files.file;
  const title = req.body.title;
  const desc = req.body.description;
  const etat = "fini";
  const relativeAdress = "./app/uploads/" + file.name;
  const verif = authenticate(token, res);
  file.mv(relativeAdress);
  await new Documents({
    titredoc: title,
    adresse: relativeAdress,
    etatdoc: etat,
    typedoc: desc,
  }).save();

  res.status(200);
};

async function authenticate(jwt, res) {
  try {
    const verif = await jwt.verify(token, "trestressecret");
    return verif;
  } catch (err) {
    res.status(401);
  }
}

export default { base, register, test, test2, upload, login };
