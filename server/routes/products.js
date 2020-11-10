const router = require('express').Router();

const products = require('../controllers/product');

router.get('/products', products())

module.exports = router;
