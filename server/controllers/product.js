const fetch = require("node-fetch");

const getProducts = () => async (req, res) => {
  fetch("https://jooneparis.myshopify.com/admin/api/graphql.json", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Access-Token": process.env.ACCESS_TOKEN
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
      if(data.errors){
        throw new Error(data.errors)
      }
      if(data.data && data.data.shop && data.data.shop.products){
        res.send(data.data.shop.products.edges);
      }
    }).catch(err=>{
    console.error('err :',err );
    res.send([])
  });
};
module.exports = getProducts;
