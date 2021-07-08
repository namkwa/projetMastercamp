"use strict";

import apiController from "./controllers/api.js";

const routes = (app) => {
  app.post("/login", apiController.login);
  app.post("/register", apiController.register);
  app.get("/me", apiController.me);
  app.get("/getProjects", apiController.me);
  app.post("/upload", apiController.upload);
  app.get("/research", apiController.research);
};

export { routes };
