const express = require('express');
const router = express.Router();

const homeController = require('../controllers/HomeController');
const accountController = require('../controllers/AccountController');

router.get('/',homeController.home);

module.exports = router;