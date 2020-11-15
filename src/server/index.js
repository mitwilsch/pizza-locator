const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const pizzapi = require('pizzapi');

app.get('/', async (req, res) => {
  const address = '1581 E Main St, El Cajon, CA, 92021';
  pizzapi.Util.findNearbyStores(address, 'Delivery', (data) => {
    console.log('func', typeof data.result.Stores[0].StoreID);
    res.send(data.result.Stores[0]);
  });
});

app.listen(port);
console.log('Listening on port', port);
