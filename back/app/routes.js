"use strict";

import apiController from "./controllers/api.js";

const routes = (app) => {
  app.get("/api", apiController.base);
  app.post("/login", apiController.login);
  app.post("/register", apiController.register);
  app.post("/upload", apiController.upload);
  app.post("/test", apiController.test);
  app.get("/test2", apiController.test2);
};

export { routes };
