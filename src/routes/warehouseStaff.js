const express = require('express');
const router = express.Router();

const warehouseStaffController = require('../controllers/WarehouseStaffController');

router.get('/productlist', warehouseStaffController.warehouse);
router.post('/postproductlist', warehouseStaffController.PostWarehouse);

module.exports = router;