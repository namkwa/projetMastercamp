'use strict';

import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import {routes as routes} from './app/routes.js';
//import db from './app/config.js';

const app = express();

app.use(morgan('dev'));

routes(app);

const server = app.listen(3000, () => {
  let port = server.address().port;
  console.log('Example app listening at http://localhost:%s', port);
});