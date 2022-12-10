const express = require('express');
const router = express.Router();

const cartController = require('../controllers/CartController');

router.get('/delete/:slug',cartController.deletecart);
router.post('/add',cartController.addcart);
router.get('/',cartController.index);

module.exports = router;