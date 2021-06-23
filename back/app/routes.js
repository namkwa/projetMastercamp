'use strict';

import apiController from './controllers/api.js'

const routes = (app) => {

    app.get('/api', apiController.base);
    app.post('/connect', apiController.connection);
    app.post('/register', apiController.createAccount);

}

export { routes }