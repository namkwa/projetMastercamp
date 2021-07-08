"use strict";

import knex from "knex";
import bookshelf from "bookshelf";

const opts = {
  host: "127.0.0.1",
  user: "postgres",
  password: "hugo1507",
  database: "efile",
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
