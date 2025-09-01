const { PrismaClient } = require("../../generated/prisma");
const prisma = new PrismaClient();

async function createBonus(amount, inviterId, purchaseId) {
  return prisma.bonus.create({
    data: {
			amount,
      inviterId,
      purchaseId,
    },
  });
}

// Calculate bonus amount based on price (10% used as an example)
function calculateBonus(price) {
  return price * 0.1;
};

module.exports = {
  createBonus,
	calculateBonus,
};
