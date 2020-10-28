const express = require('express');
const bodyParser = require('body-parser');
const os = require('os');
const Router = require('./Router');
const Utils = require('./Utils');


const app = express();
const port = process.env.PORT || 8786;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', Router);

app.listen(port);
console.log('Listening on port', port);

