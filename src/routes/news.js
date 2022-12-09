const express = require('express');
const router = express.Router();

const submitNewsController = require('../controllers/SubmitNewsController');
const NewsController = require('../controllers/NewsController');
router.get('/submitnews',submitNewsController.submitNews);
router.post('/submitnews',submitNewsController.PostSubmitNews);
router.get('/:slug',NewsController.show_detail);
router.get('/',NewsController.index);
module.exports = router;