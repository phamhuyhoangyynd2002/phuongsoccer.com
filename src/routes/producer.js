const express = require('express');
const router = express.Router();

const producerController = require('../controllers/ProducerController');

router.get('/:slug', producerController.show_producer);

module.exports = router;