const express = require('express');
const router = express.Router();

const tagController = require('../controllers/TagController');

router.get('/nameaz', tagController.nameaz);
router.get('/nameza', tagController.nameza);
router.get('/price_min', tagController.price_min);
router.get('/price_max', tagController.price_max);

router.get('/nameaz/nameaz', tagController.indexx);
router.get('/nameaz/nameza', tagController.indexx);
router.get('/nameaz/price_min', tagController.indexx);
router.get('/nameaz/price_max', tagController.indexx);

router.get('/nameza/nameaz', tagController.indexx);
router.get('/nameza/nameza', tagController.indexx);
router.get('/nameza/price_min', tagController.indexx);
router.get('/nameza/price_max', tagController.indexx);

router.get('/price_min/nameaz', tagController.indexx);
router.get('/price_min/nameza', tagController.indexx);
router.get('/price_min/price_min', tagController.indexx);
router.get('/price_min/price_max', tagController.indexx);

router.get('/price_max/nameaz', tagController.indexx);
router.get('/price_max/nameza', tagController.indexx);
router.get('/price_max/price_min', tagController.indexx);
router.get('/price_max/price_max', tagController.indexx);

router.get('/:slug', tagController.show_producer);
router.get('/:slug/nameaz', tagController.nameaz);
router.get('/:slug/nameza', tagController.nameza);
router.get('/:slug/price_min', tagController.price_min);
router.get('/:slug/price_max', tagController.price_max);

router.get('/:slug/nameaz/nameaz', tagController.indexx);
router.get('/:slug/nameaz/nameza', tagController.indexx);
router.get('/:slug/nameaz/price_min', tagController.indexx);
router.get('/:slug/nameaz/price_max', tagController.indexx);

router.get('/:slug/nameza/nameaz', tagController.indexx);
router.get('/:slug/nameza/nameza', tagController.indexx);
router.get('/:slug/nameza/price_min', tagController.indexx);
router.get('/:slug/nameza/price_max', tagController.indexx);

router.get('/:slug/price_min/nameaz', tagController.indexx);
router.get('/:slug/price_min/nameza', tagController.indexx);
router.get('/:slug/price_min/price_min', tagController.indexx);
router.get('/:slug/price_min/price_max', tagController.indexx);

router.get('/:slug/price_max/nameaz', tagController.indexx);
router.get('/:slug/price_max/nameza', tagController.indexx);
router.get('/:slug/price_max/price_min', tagController.indexx);
router.get('/:slug/price_max/price_max', tagController.indexx);


router.get('/', tagController.index);

module.exports = router;