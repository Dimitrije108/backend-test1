const { Router } = require('express');
const router = Router();
const controller = require('../../controllers/bonus');

// Get all bonuses
router.get('/', controller.getAllBonuses);

module.exports = router;