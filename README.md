# ![alt text](https://cdn.shopify.com/s/files/1/1956/4693/files/flavicon-joone_small.png?v=1545216161) FullStack App  ![alt text](https://cdn.shopify.com/s/files/1/1956/4693/files/flavicon-joone_small.png?v=1545216161)
### React / Graphql / NodeJs / Express


> Before going further, you should get the provided ACCESS_TOKEN from the last email I sent to Maria R. (Your favorite Talent & Acquisition Specialist). 

> This ACCESS_TOKEN should be stored in a config file like .env (more details in the Usage section).

## Prerequisite

You must have [Yarn](https://classic.yarnpkg.com/en/docs/install/#debian-stable) and [Npm](https://www.npmjs.com/get-npm) installed in your machine.

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

Remove the '.dist' extension to your .env.dist file to obtain a .env file. Add your ACCESS_TOKEN in it.

For exemple if your ACCESS_TOKEN is 'jieoe89e6epjicoeezja7a1' then you should only have the line below in your .env file

```
ACCESS_TOKEN='jieoe89e6epjicoeezja7a1'
``` 
To start the server and client at the same time (from the server folder of the project)

```
$ yarn dev 
```
## Troubleshooting

* Yarn

    If you have this Yarn error : `ERROR: There are no scenarios; must have at least one.` Please try this.

    ```
    curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
    sudo apt update
    sudo apt install yarn
    ```

* The App is rendering an empty table.

  Add your ACCESS_TOKEN directly in server/controllers/product.js
    ```
        headers: {
          "Content-Type": "application/json",
          "X-Shopify-Access-Token": 'YOUR_ACCESS_TOKEN'
        },
    ```


Thibaut Cointet
