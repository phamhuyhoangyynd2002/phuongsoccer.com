const express = require('express');
const router = express.Router();

const accountController = require('../controllers/AccountController');

router.get('/login', accountController.login);
router.get('/register', accountController.register);
router.post('/login', accountController.PostLogin);
router.post('/register', accountController.PostRegister);
router.get('/', accountController.account);
module.exports = router;
