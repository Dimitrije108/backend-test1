const { PrismaClient } = require("../../generated/prisma");
const prisma = new PrismaClient();
const { createBonus, calculateBonus } = require("./bonusService");

async function createPurchase(userId, productId) {
  // Fetch user with inviter as well
  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: { inviter: true },
  });

	// Check if user exists
  if (!user) {
    throw new Error("User not found");
  };

  // Fetch product
  const product = await prisma.product.findUnique({
    where: { id: productId },
  });

	// Check if product exists
  if (!product) {
    throw new Error("Product not found");
  };

  // Create purchase
  const purchase = await prisma.purchase.create({
    data: {
      userId: user.id,
      productId: product.id,
    },
  });
	
  // Create bonus if user has an inviter
  if (user.inviter) {
    await createBonus(
			calculateBonus(product.price),
      user.inviter.id,
      purchase.id,
    );
  };

  return purchase;
};

module.exports = {
  createPurchase
};
