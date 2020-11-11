# ![alt text](https://cdn.shopify.com/s/files/1/1956/4693/files/flavicon-joone_small.png?v=1545216161) Joone Interview FullStack App  ![alt text](https://cdn.shopify.com/s/files/1/1956/4693/files/flavicon-joone_small.png?v=1545216161)
### React / Graphql / NodeJs / Express


> Thanks for giving me the opportunity to do this interview.

> Before going further, you should get the provided ACCESS_TOKEN from the last email I sent to Maria R. (Your favorite Talent & Acquisition Specialist). 

> This ACCESS_TOKEN should be stored in a config file like .env (more details in the Usage section)


## Usage

Install [nodemon](https://github.com/remy/nodemon) globally

```
$ npm i nodemon -g
```

Install client dependencies

```
$ cd client
$ yarn
```
Install server dependencies

```
$ cd ../server
$ yarn
```

Add your ACCESS_TOKEN in .env file (in server folder )

```
ACCESS_TOKEN='ACCESS_TOKEN'
```
To start the server and client at the same time (from the server folder of the project)

```
$ yarn dev 
```
## Troubleshooting
If your app is rendering an empty table add your ACCESS_TOKEN directly in server/controllers/product.js
```
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Access-Token": 'YOUR_ACCESS_TOKEN'
    },
```

Thibaut Cointet
