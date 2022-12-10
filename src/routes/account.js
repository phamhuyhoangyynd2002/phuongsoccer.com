const express = require('express');
const router = express.Router();

const accountController = require('../controllers/AccountController');

router.get('/login', accountController.login);
router.get('/logout', accountController.logout);
router.get('/register', accountController.register);
router.get('/profile', accountController.profile);
router.post('/login', accountController.PostLogin);
router.post('/profile', accountController.postProfile);
router.post('/register', accountController.PostRegister);
module.exports = router;
