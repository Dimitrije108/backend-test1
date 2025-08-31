const { Router } = require('express');
const router = Router();
const controller = require('../../controllers/purchase');

// Create purchase
router.post('/', controller.createPurchase);

module.exports = router;
