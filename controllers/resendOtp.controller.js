const otpGenerator = require("otp-generator");
const { PrismaClient } = require("@prisma/client");
const { sendMail } = require("../utils/sendMail");

const prisma = new PrismaClient();

exports.resendOtp = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    if (user.emailVerify) {
      return res.status(400).json({ error: "Email already verified" });
    }

    const newOtp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      specialChars: false,
      lowerCaseAlphabets: false,
    });

    const newOtpExpire = new Date(Date.now() + 10 * 60 * 1000);

    await prisma.user.update({
      where: { email },
      data: {
        otp: newOtp,
        otpExpire: newOtpExpire,
      },
    });

    await sendMail(email, "Resend Email Verification OTP", newOtp);

    return res.status(200).json({
      message: "New OTP sent successfully",
    });
  } catch (error) {
    console.error("❌ Error in resendOtp:", error);
    return res.status(500).json({ error: "Server error" });
  } finally {
    await prisma.$disconnect();
  }
};
