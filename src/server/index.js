const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const pizzapi = require('pizzapi');

app.get('/:address', async (req, res) => {
  const address = req.params.address.split('+').join(' ');
  // Address also needs colon-separated fields
  console.log(address);

  pizzapi.Util.findNearbyStores(address, 'Delivery', (data) => {
    res.send(data.result.Stores[0]);
  });
});

app.listen(port);
console.log('Listening on port', port);
