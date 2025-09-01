const asyncHandler = require("express-async-handler");
const { createPurchase } = require('../services/purchaseService');

const handleCreatePurchase = asyncHandler(
	async (req, res) => {
		const { userId, productId } = req.body;

		if (!userId) {
			return res.status(400).json({ error: "userId is required" });
		};
		
		if (!productId) {
			return res.status(400).json({ error: "productId is required" });
		};

		const purchase = await createPurchase(Number(userId), Number(productId));
		return res.status(201).json(purchase);
	}
);

module.exports = {
  handleCreatePurchase,
};
