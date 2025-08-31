require("dotenv").config();
const express = require("express");
const app = express();
const routes = require("./api/v1/index");
const prismaErrorHandler = require("./middleware/prismaErrorHandler");
const errorHandler = require("./middleware/errorHandler");

app.use(express.json());
// Parse form data into req.body
app.use(express.urlencoded({ extended: true }));

// Setup routes
app.use("/routes/users", routes.users);
app.use("/routes/products", routes.products);
app.use("/routes/purchases", routes.purchases);
app.use("/routes/bonuses", routes.bonuses);

// 404 handler for unmatched routes
app.use((req, res) => {
  res.status(404).json({
    error: "Not Found",
    message: `Cannot ${req.method} ${req.originalUrl}`,
  });
});
app.use(prismaErrorHandler);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
