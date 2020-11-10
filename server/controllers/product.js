const fetch = require("node-fetch");

const getProducts = () => async (req, res) => {
  fetch("https://jooneparis.myshopify.com/admin/api/graphql.json", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Access-Token":  process.env.TOKEN_ACCESS
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
};
module.exports = getProducts;
