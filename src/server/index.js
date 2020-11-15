const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const sampleResults = require('./sampleResults.json');

app.get('/', function (req, res) {
  res.send(sampleResults);
});

app.listen(port);
console.log('Listening on port', port);
