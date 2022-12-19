const express = require('express');
const router = express.Router();

const productManagerController = require('../controllers/ProductManagerController');
const submitProductController = require('../controllers/SubmitProductController');
const updateProductController = require('../controllers/UpdateProductController');
const submitDiscount_CodeController = require('../controllers/SubmitDiscount_CodeController');
const submitNewsController = require('../controllers/SubmitNewsController');
const updateNewsController = require('../controllers/UpdateNewsController');

router.get('/productlist', productManagerController.productList);
router.post('/productlist', productManagerController.PostProductList);

router.get('/submitproduct', submitProductController.submitproduct);
router.post('/submitproduct', submitProductController.PostSubmitproduct);

router.get('/submitdiscountcode', submitDiscount_CodeController.submitDiscount_Code);
router.post('/submitdiscountcode', submitDiscount_CodeController.PostSubmitDiscount_Code);

router.get('/updateproduct/:slug', updateProductController.updateProduct);
router.post('/updateproduct', updateProductController.PostUpdateProduct);


router.get('/submitnews',submitNewsController.submitNews);
router.post('/submitnews',submitNewsController.PostSubmitNews);

router.get('/newslist', productManagerController.newsList);
router.get('/updatenews/:slug', updateNewsController.updateNews);
router.post('/updatenews', updateNewsController.PostUpdateNews);

module.exports = router;