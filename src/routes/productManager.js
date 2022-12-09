const express = require('express');
const router = express.Router();

const productManagerController = require('../controllers/ProductManagerController');
const submitProductController = require('../controllers/SubmitProductController');
const updateProductController = require('../controllers/UpdateProductController');
const submitDiscount_CodeController = require('../controllers/SubmitDiscount_CodeController');
router.get('/productlist', productManagerController.productList);
router.post('/postproductlist', productManagerController.PostProductList);

router.get('/submitproduct', submitProductController.submitproduct);
router.post('/submitproduct', submitProductController.PostSubmitproduct);

router.get('/submitdiscountcode', submitDiscount_CodeController.submitDiscount_Code);
router.post('/submitdiscountcode', submitDiscount_CodeController.PostSubmitDiscount_Code);

router.get('/updateproduct', updateProductController.updateProduct);
router.post('/updateproduct', updateProductController.PostUpdateProduct);

router.get('/updateproduct/:slug', updateProductController.updateProductDetails);
router.post('/updateproduct/:slug', updateProductController.PostUpdateProductDetails);

module.exports = router;