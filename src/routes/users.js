const { Router } = require('express');
const router = Router();
const controller = require("../controllers/users");

// Get all users
router.get('/', controller.getAllUsers);
// Create user
router.post('/', controller.createUser);

module.exports = router;
