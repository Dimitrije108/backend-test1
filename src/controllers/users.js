const { PrismaClient } = require("../../generated/prisma");
const prisma = new PrismaClient();
const asyncHandler = require("express-async-handler");

// TODO:
// - Add validation and sanitization
// - Add other CRUD methods

const getAllUsers = asyncHandler(
	async (req, res) => {
		const users = await prisma.user.findMany({ 
			include: { 
				inviter: true, 
				invitees: true 
			}
		});

		res.status(200).json(users);
	}
);

const createUser = asyncHandler(
	async (req, res) => {
		const { name, invitedById } = req.body || {};
		// Basic validation
		if (!name) {
			return res.status(400).json("Name is required");
		};

		if (invitedById) {
			const inviter = await prisma.user.findUnique({ 
				where: { 
					id: invitedById 
				} 
			});
			// Check if inviter exists
			if (!inviter) {
				return res.status(400).json("Inviter user does not exist");
			};
		};

		const user = await prisma.user.create({ 
			data: { 
				name, 
				inviterId: invitedById ?? null 
			} 
		});

		res.status(201).json(user);
	}
);

module.exports = {
	getAllUsers,
	createUser,
};
