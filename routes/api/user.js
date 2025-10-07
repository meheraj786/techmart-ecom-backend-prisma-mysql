const express = require("express");
const { verifyOtp } = require("../../controllers/verifyOtp.controller");
const userRoute = express.Router();

userRoute.post("/registration", (req,res)=>res.send("working") )
userRoute.post("/verify-otp", verifyOtp )

module.exports = userRoute;
