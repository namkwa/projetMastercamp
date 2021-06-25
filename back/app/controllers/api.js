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
  const student = await Student.count();
  res.json(student);
};

//Requête de connexion
const connection = async (req, res) => {
  const request1 = await Student.where("email", req.body.email).fetch();
  var passwordIsValid = await bcrypt.compare(
    req.body.password,
    request1.attributes.password
  );
  if (!passwordIsValid)
    return res.status(401).send({ auth: false, token: null });

  var token = jwt.sign(
    { id: request1.attributes.idetudiant },
    "trestressecret",
    {
      expiresIn: 86400, // expires in 24 hours
    }
  );

  res.status(200).send({ auth: true, token: token });
};

//Requête de création de compte
const createAccount = async (req, res) => {
  const nom = req.body.nom;
  const prenom = req.body.prenom;
  const email = req.body.email;
  const password = await bcrypt.hash(req.body.password, 10);
  const login = req.body.login;
  console.log(password);
  const student = await new Student({
    nom,
    prenom,
    email,
    password,
    login,
  }).save();
  res.json(student);
};

export default { base, connection, createAccount, test, test2 };
