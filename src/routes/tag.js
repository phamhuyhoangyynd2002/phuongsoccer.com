const express = require('express');
const router = express.Router();

const tagController = require('../controllers/TagController');

router.get('/:slug', tagController.show_tag);

module.exports = router;