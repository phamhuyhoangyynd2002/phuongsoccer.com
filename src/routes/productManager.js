const express = require('express');
const router = express.Router();

const productManagerController = require('../controllers/ProductManagerController');

router.get('/submitproduct', productManagerController.submitproduct);
router.post('/submitproduct', productManagerController.PostSubmitproduct);

module.exports = router;