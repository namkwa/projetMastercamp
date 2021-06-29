"use strict";

import express from "express";
import morgan from "morgan";
import { routes as routes } from "./app/routes.js";
import cors from "cors";

const app = express();

app.use(morgan("dev"));

app.use(cors());

app.use(express.json());

routes(app);

const server = app.listen(3000, () => {
  let port = server.address().port;
  console.log("Example app listening at http://localhost:%s", port);
});
