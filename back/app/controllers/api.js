"use strict";

import { Documents, Student, Test } from "../models.js";
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
    { id: request.attributes.idstudent },
    "trestressecret",
    {
      expiresIn: 86400, // expires in 24 hours
    }
  );

  res.status(200).send(token);
};

//Requête de création de compte
const register = async (req, res) => {
  const name = req.body.nom;
  const firstname = req.body.prenom;
  const email = req.body.email;
  const password = await bcrypt.hash(req.body.password, 10);
  const yearpromotion = req.body.yearPromotion;

  const request = await Student.where("email", req.body.email).fetch({
    require: false,
  }); //{ require: false } ne sert probablement à rien
  if (request == null) {
    const student = await new Student({
      name,
      firstname,
      email,
      password,
      yearpromotion,
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
  const verif = await authenticate(token, res);
  console.log(verif);
  file.mv(relativeAdress);
  await new Documents({
    titredoc: title,
    adresse: relativeAdress,
    etatdoc: etat,
    typedoc: desc,
  }).save();

  res.status(200);
};

const me = async (req, res) => {
  const token = req.headers.authorization;
  //console.log(res);
  const verif = await authenticate(token, res);
  console.log(token);
  const id = verif.id;
  console.log(verif);
  const student = await Student.where("idstudent", id).fetch();
  res.status(200).json({ informations: student.attributes });
};

const getProjects = async (req, res) => {
  const token = req.headers.authorization;
  //console.log(res);
  const verif = await authenticate(token, res);
  console.log(token);
  const id = verif.id;
  console.log(verif);
  const student = await Documents.where("idauthor", id).fetchAll();
  res.status(200).json({ informations: student.attributes });
};

async function authenticate(token, res) {
  try {
    const verif = await jwt.verify(token, "trestressecret");
    console.log(verif)
    return verif;
  } catch (err) {
    res.status(401);
  }
}

const research = async (req, res) => {
  const token = req.headers.authorization;
  /*console.log("DEBUT");
  console.log(req.headers.argument);*/
  const arg = req.headers.argument;
  const verif = await authenticate(token, res);
  //const student = await Student.where("idetudiant", id).fetch();
  //const student = await Test.where('document_tokens', '@@', "jump").fetch();//"to_tsvector(document_text) @@ to_tsquery(\'jump & quick\')"
  const student = await Test.query(
    "where",
    "document_tokens",
    "@@",
    arg
  ).fetchAll();
  res.status(200).json({ informations: student });
  //console.log(student)
};

export default {
  base,
  register,
  test,
  test2,
  upload,
  me,
  getProjects,
  login,
  authenticate,
  research,
};
