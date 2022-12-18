const express = require('express');
const router = express.Router();

const submitNewsController = require('../controllers/SubmitNewsController');
const newsController = require('../controllers/NewsController');
router.get('/submitnews',submitNewsController.submitNews);
router.post('/submitnews',submitNewsController.PostSubmitNews);
router.get('/:slug',newsController.show_detail);
router.get('/',newsController.index);
module.exports = router;