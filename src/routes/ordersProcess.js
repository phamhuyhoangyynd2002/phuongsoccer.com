const express = require('express');
const router = express.Router();

const ordersProcess = require('../controllers/ordersProcess');

router.get('/unhandled', ordersProcess.unhandled);
router.post('/posthandle', ordersProcess.posthandle);
router.get('/handling', ordersProcess.handling);
router.get('/handled', ordersProcess.handled);

module.exports = router;