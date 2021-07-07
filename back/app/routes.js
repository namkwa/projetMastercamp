"use strict";

import apiController from "./controllers/api.js";

const routes = (app) => {
  app.get("/api", apiController.base);
  app.post("/login", apiController.login);
  app.post("/register", apiController.register);
  app.get("/me", apiController.me);
  app.post("/upload", apiController.upload);
  app.post("/test", apiController.test);
  app.get("/test2", apiController.test2);
  app.get("/research", apiController.research);
};

export { routes };
