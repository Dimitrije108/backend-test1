const { Router } = require('express');
const router = Router();
const controller = require('../../controllers/product');

// Get all products
router.get('/', controller.getAllProducts);
// Create product
router.post('/', controller.createProduct);
// Get product
router.get('/:productId', controller.getProduct);
// Update product
router.put('/:productId', controller.updateProduct);
// Delete product
router.delete('/:productId', controller.deleteProduct);

module.exports = router;
