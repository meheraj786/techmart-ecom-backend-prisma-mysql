const express = require("express");
const userRoute = require("./user");
const apiRoutes = express.Router();

apiRoutes.use("/user",userRoute)

module.exports = apiRoutes;
