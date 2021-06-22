'use strict';

import apiController from './controllers/api.js'

const routes = (app) => {

    app.get('/api', apiController.base);
    app.get('/connect', apiController.connection);
    app.get('/register', apiController.createAccount);

}

export { routes }