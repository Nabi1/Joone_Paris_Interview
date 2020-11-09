const express = require('express');
const bodyParser = require('body-parser');
const fetch = require("node-fetch");

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/products", (req, res) => {
  fetch("https://jooneparis.myshopify.com/admin/api/graphql.json", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Access-Token": process.env.TOKEN_ACCESS
    },
    body: JSON.stringify({
      query: `{
         shop {
      products(first: 10) {
        edges {
          node {
            id
            title
            vendor
            description
            onlineStorePreviewUrl
            totalInventory
          }
        }
      }
    }
       }`
    })
  })
    .then(result => {
      return result.json();
    })
    .then(data => {
      res.send(data.data.shop.products.edges);
    });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
