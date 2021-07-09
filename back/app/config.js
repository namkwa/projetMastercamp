"use strict";

import knex from "knex";
import bookshelf from "bookshelf";

const opts = {
  host: "127.0.0.1",
  user: "postgres",
  password: "",//AJOUTER LE MOT DE PASSE DE LA BASE DE DONNÉES
  database: "",//AJOUTER LE NOM DE LA BASE DE DONNÉES
  charset: "utf8",
  debug: true,
  port: 5432,
};
const db = knex({
  client: "pg",
  connection: opts,
});

const Bookshelf = bookshelf(db);

Bookshelf.plugin("registry"); // Resolve circular dependencies with relations
Bookshelf.plugin("visibility");

export { Bookshelf, db };
