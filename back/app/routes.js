'use strict';

import apiController from './controllers/api.js'

const routes = (app) => {

    app.get('/api', apiController.base);

}

export { routes }