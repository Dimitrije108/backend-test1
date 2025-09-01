const { Router } = require('express');
const router = Router();
const controller = require("../../controllers/products");

// Get all products
router.get('/', controller.getAllProducts);
// Create product
router.post('/', controller.createProduct);

module.exports = router;
