const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();
const { createPurchase } = require("../src/services/purchaseService");

async function main() {
  // Create users
  const dimitrije = await prisma.user.create({ 
		data: { 
			name: "Dimitrije" 
		} 
	});

  const jimmy = await prisma.user.create({ 
		data: { 
			name: "Jimmy", 
			inviterId: dimitrije.id 
		} 
	});

  // Create product
  const tshirt = await prisma.product.create({ 
		data: { 
			name: "T-Shirt", 
			price: 50 
		} 
	});

	// Create a purchase
  await createPurchase(jimmy.id, tshirt.id);

  console.log("Seed data created");
};

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
