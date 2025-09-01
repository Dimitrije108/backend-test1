const { PrismaClient } = require("../../generated/prisma");
const prisma = new PrismaClient();
const asyncHandler = require("express-async-handler");

// TODO:
// - Add validation and sanitization
// - Add other CRUD methods

const getAllProducts = asyncHandler(
	async (req, res) => {
		const products = await prisma.product.findMany();
		res.status(200).json(products);
	}
);

const createProduct = asyncHandler(
	async (req, res) => {
		const { name, price } = req.body || {};
		// Basic validation
		if (!name) {
			return res.status(400).json("Product name is required");
		};

		if (price === null || isNaN(Number(price))) {
			return res.status(400).json("Valid price is required");
		};

		const product = await prisma.product.create({ 
			data: { 
				name, 
				price: Number(price) 
			} 
		});

		res.status(201).json(product);
	}
);

module.exports = {
	getAllProducts,
	createProduct,
};
