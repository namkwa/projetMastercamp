"use strict";

import apiController from "./controllers/api.js";

const routes = (app) => {
  app.get("/api", apiController.base);
  app.post("/login", apiController.connection);
  app.post("/createAccount", apiController.createAccount);
  app.post("/upload", apiController.upload);
  app.post("/test", apiController.test);
  app.get("/test2", apiController.test2);
};

export { routes };
