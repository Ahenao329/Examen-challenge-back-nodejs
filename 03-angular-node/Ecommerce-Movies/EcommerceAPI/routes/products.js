/*
    Ruta: /api/products
*/
const { Router } = require('express');
const { getProducts, postProducts } = require('../controllers/products');

const router = Router();

router.get('/', getProducts );

router.post('/', postProducts)

module.exports = router;