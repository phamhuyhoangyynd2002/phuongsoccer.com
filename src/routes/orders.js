const express = require('express');
const router = express.Router();

const ordersController = require('../controllers/OrdersController');


router.get('/add/:slug', ordersController.add);
router.post('/add', ordersController.PostAdd);
router.get('/:slug', ordersController.show_detail);
router.get('/', ordersController.index);
module.exports = router;