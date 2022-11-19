const express = require('express');
const router = express.Router();

const productController = require('../controllers/ProductController');

router.get('/add', productController.add);
router.post('/add',productController.postAdd);
router.get('/:slug', productController.show_detail);


module.exports = router;