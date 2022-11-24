const express = require('express');
const router = express.Router();

const productManagerController = require('../controllers/ProductManagerController');
const submitProductController = require('../controllers/SubmitProductController');

router.get('/submitproduct', submitProductController.submitproduct);
router.post('/submitproduct', submitProductController.PostSubmitproduct);

module.exports = router;