// requires 
const express = require('express');
const router = express.Router();

// require a controller where is the logic of the aplication 
const indexController = require('../controllers/index');

// Routes
router.get('/', indexController.index);
router.get('/products', indexController.products);
router.post('/new-product', indexController.addProducts);

// export as a module
module.exports = router;