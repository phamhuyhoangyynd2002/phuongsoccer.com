const express = require('express');
const router = express.Router();

const customerCareStaffController = require('../controllers/CustomerCareStaffController');

router.get('/problem',customerCareStaffController.problem);
router.get('/problem/:slug',customerCareStaffController.submitproblem);
module.exports = router;