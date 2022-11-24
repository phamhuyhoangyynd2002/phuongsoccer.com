const express = require('express');
const router = express.Router();

const submitNewsController = require('../controllers/SubmitNewsController');

router.get('/submitnews',submitNewsController.submitNews);
router.post('/submitnews',submitNewsController.PostSubmitNews);

module.exports = router;