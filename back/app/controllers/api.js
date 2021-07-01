"use strict";

import { Student } from "../models.js";
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
const connection = async (req, res) => {
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
const createAccount = async (req, res) => {
  const nom = req.body.nom;
  const prenom = req.body.prenom;
  const email = req.body.email;
  const password = await bcrypt.hash(req.body.password, 10);
  const login = req.body.login;
  const student = await new Student({
    nom,
    prenom,
    email,
    password,
    login,
  }).save();
  res.json(student);
};

const upload = async (req, res) => {
  const token = req.headers.authorization;
  console.log(req);
  const file = req.files.file;

  file.mv("./app/uploads/pierre.png");
  const verif = await jwt.verify(token, "trestressecret");
  console.log(verif);
  res.status(200).send(verif);
};

export default { base, connection, createAccount, test, test2, upload };
