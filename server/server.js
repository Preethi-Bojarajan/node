import 'babel-polyfill';
const db = require('./config/db');
const app = require('./expressServer');

app.startServer();