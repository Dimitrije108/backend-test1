const { PrismaClient } = require("../../generated/prisma");
const prisma = new PrismaClient();

async function createBonus(productPrice, inviterId, purchaseId) {
	// Calculate bonus amount based on price (10% used as an example)
	const amount = productPrice * 0.1;

  return prisma.bonus.create({
    data: {
			amount,
      inviterId,
      purchaseId,
			// Schedule bonus 1 hour after purchase
      scheduledAt: new Date(Date.now() + 60 * 60 * 1000),
    },
  });
}

module.exports = {
  createBonus,
};
