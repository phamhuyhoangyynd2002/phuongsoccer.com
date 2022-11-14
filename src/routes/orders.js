const express = require('express');
const router = express.Router();

const ordersController = require('../controllers/OrdersController');

router.get('/:slug', ordersController.show_detail);
router.get('/', ordersController.orders);

module.exports = router;