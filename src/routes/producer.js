const express = require('express');
const router = express.Router();

const producerController = require('../controllers/ProducerController');

router.get('/nameaz', producerController.nameaz);
router.get('/nameza', producerController.nameza);
router.get('/price_min', producerController.price_min);
router.get('/price_max', producerController.price_max);

router.get('/nameaz/nameaz', producerController.indexx);
router.get('/nameaz/nameza', producerController.indexx);
router.get('/nameaz/price_min', producerController.indexx);
router.get('/nameaz/price_max', producerController.indexx);

router.get('/nameza/nameaz', producerController.indexx);
router.get('/nameza/nameza', producerController.indexx);
router.get('/nameza/price_min', producerController.indexx);
router.get('/nameza/price_max', producerController.indexx);

router.get('/price_min/nameaz', producerController.indexx);
router.get('/price_min/nameza', producerController.indexx);
router.get('/price_min/price_min', producerController.indexx);
router.get('/price_min/price_max', producerController.indexx);

router.get('/price_max/nameaz', producerController.indexx);
router.get('/price_max/nameza', producerController.indexx);
router.get('/price_max/price_min', producerController.indexx);
router.get('/price_max/price_max', producerController.indexx);

router.get('/:slug', producerController.show_producer);
router.get('/:slug/nameaz', producerController.nameaz);
router.get('/:slug/nameza', producerController.nameza);
router.get('/:slug/price_min', producerController.price_min);
router.get('/:slug/price_max', producerController.price_max);

router.get('/:slug/nameaz/nameaz', producerController.indexx);
router.get('/:slug/nameaz/nameza', producerController.indexx);
router.get('/:slug/nameaz/price_min', producerController.indexx);
router.get('/:slug/nameaz/price_max', producerController.indexx);

router.get('/:slug/nameza/nameaz', producerController.indexx);
router.get('/:slug/nameza/nameza', producerController.indexx);
router.get('/:slug/nameza/price_min', producerController.indexx);
router.get('/:slug/nameza/price_max', producerController.indexx);

router.get('/:slug/price_min/nameaz', producerController.indexx);
router.get('/:slug/price_min/nameza', producerController.indexx);
router.get('/:slug/price_min/price_min', producerController.indexx);
router.get('/:slug/price_min/price_max', producerController.indexx);

router.get('/:slug/price_max/nameaz', producerController.indexx);
router.get('/:slug/price_max/nameza', producerController.indexx);
router.get('/:slug/price_max/price_min', producerController.indexx);
router.get('/:slug/price_max/price_max', producerController.indexx);


router.get('/', producerController.index);

module.exports = router;