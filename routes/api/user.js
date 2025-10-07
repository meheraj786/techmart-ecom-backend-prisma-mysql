const express = require("express");
const { verifyOtp } = require("../../controllers/verifyOtp.controller");
const { createUser, loginUser } = require("../../controllers/user.controller");
const { resendOtp } = require("../../controllers/resendOtp.controller");
const userRoute = express.Router();

userRoute.post("/registration", createUser)
userRoute.post("/login", loginUser)
userRoute.post("/verify-otp", verifyOtp )
userRoute.post("/resend-otp", resendOtp )

module.exports = userRoute;
