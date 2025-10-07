const express = require("express");
const { tokenVerify } = require("../../middlewares/token-verify");
const { createSubCategory } = require("../../controllers/subCategory.controller");
const subCategoryRoute = express.Router();

subCategoryRoute.post("/create-subcategory", tokenVerify, createSubCategory)

module.exports = subCategoryRoute;
