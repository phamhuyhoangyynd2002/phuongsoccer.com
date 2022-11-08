const express = require('express');
const router = express.Router();

const accountController = require('../controllers/AccountController');

router.get('/profile', accountController.profile);
router.get('/',accountController.login);

module.exports = router;