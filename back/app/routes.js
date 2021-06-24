"use strict";

import api from "./controllers/api.js";
import apiController from "./controllers/api.js";

const routes = (app) => {
  app.get("/api", apiController.base);
  app.post("/connect", apiController.connection);
  app.post("/register", apiController.createAccount);
  app.post("/test", apiController.test);
  app.get("/test2", apiController.test2);
};

export { routes };
