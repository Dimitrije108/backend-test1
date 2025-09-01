const cron = require('node-cron');

// Cron scheduler will check for due bonuses every minute
function startBonusScheduler() {
  cron.schedule("* * * * *", async () => {
    try {
      const count = await processDueBonuses();
      if (count > 0) {
        console.log(`Processed ${count} due bonuses`);
      }
    } catch (error) {
      console.log("Error processing bonuses:", error);
    }
  });
};

module.exports = startBonusScheduler;
