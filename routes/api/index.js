const express = require("express");
const userRoute = require("./user");
const productRoute = require("./product");
const categoryRoute = require("./category");
const subCategoryRoute = require("./subCategory");
const apiRoutes = express.Router();

apiRoutes.use("/user", userRoute);
apiRoutes.use("/product", productRoute);
apiRoutes.use("/category", categoryRoute);
apiRoutes.use("/subcategory", subCategoryRoute);

module.exports = apiRoutes;
