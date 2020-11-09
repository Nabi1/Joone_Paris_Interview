const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

const products = require('./routes/products');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/products', products);

app.listen(port, () => console.log(`Listening on port ${port}`));
