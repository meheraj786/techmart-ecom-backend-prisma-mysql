const express = require("express");
const { createCategory } = require("../../controllers/category.controller");
const { tokenVerify } = require("../../middlewares/token-verify");
const categoryRoute = express.Router();

categoryRoute.post("/create-category", tokenVerify, createCategory)

module.exports = categoryRoute;
