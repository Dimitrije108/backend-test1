// Just marks the bonuses as paid without adding amount to user balance
async function processDueBonuses() {
	// Check for bonuses that are unpaid and scheduled for now or earlier
  const dueBonuses = await prisma.bonus.findMany({
    where: {
      paid: false,
      scheduledAt: { lte: new Date() }
    },
    orderBy: { scheduledAt: "asc" }
  });

	// Update due bonuses as paid
  for (const bonus of dueBonuses) {
    await prisma.bonus.update({
      where: { id: bonus.id },
      data: { paid: true },
    });
  };

	// return processed bonuses count
  return dueBonuses.length;
}

module.exports = processDueBonuses;
