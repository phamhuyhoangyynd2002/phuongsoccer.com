const express = require('express');
const router = express.Router();

const ordersController = require('../controllers/OrdersController');

router.post('/neworder', ordersController.postneworder);
router.post('/add', ordersController.PostAdd);
router.get('/failure', ordersController.failure);
router.get('/:slug', ordersController.show_detail);
router.get('/', ordersController.index);
module.exports = router;