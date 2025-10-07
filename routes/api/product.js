const express = require("express");
const { createProduct, getAllProducts, getSingleProduct, updateProduct, deleteProduct } = require("../../controllers/products.controller");
const productRoute = express.Router();

productRoute.post("/create-product", createProduct)
productRoute.get("/all-products", getAllProducts)
productRoute.get("/single-product", getSingleProduct)
productRoute.patch("/update-product", updateProduct)
productRoute.delete("/delete-product", deleteProduct)

module.exports = productRoute;
