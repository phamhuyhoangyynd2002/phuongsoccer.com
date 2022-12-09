const express = require('express');
const router = express.Router();

const ordersController = require('../controllers/OrdersController');


router.get('/add/:slug', ordersController.add);
router.get('/', ordersController.index);
router.get('/:slug', ordersController.show_detail);
module.exports = router;