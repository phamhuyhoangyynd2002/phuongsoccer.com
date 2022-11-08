const express = require('express');
const router = express.Router();

const homeController = require('../controllers/HomeController');
const accountController = require('../controllers/AccountController');

router.get('/home',homeController.home);
router.get('/',accountController.account);

module.exports = router;