const { Router } = require('express');
const router = Router();
const controller = require("../controllers/purchases");

// Create purchase
router.post('/', controller.handleCreatePurchase);

module.exports = router;
