const express = require('express');
const router = express.Router();

const footerController = require('../controllers/FooterController');


router.get('/guide', footerController.guide);
router.get('/policy', footerController.policy);
router.get('/', footerController.guide);
module.exports = router;