const express = require('express');
const router = express.Router();

const productController = require('../controllers/ProductController');

router.get('/shoes', productController.show_shoes);
router.get('/accessory', productController.show_accessory);
router.get('/:slug', productController.show_detail);
router.get('/', productController.index);


module.exports = router;