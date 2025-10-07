export const verifyOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return res.status(404).json({ error: "User not found" });

    if (user.otp !== otp) {
      return res.status(400).json({ error: "Invalid OTP" });
    }

    if (user.otpExpire < new Date()) {
      return res.status(400).json({ error: "OTP expired" });
    }

    const updatedUser = await prisma.user.update({
      where: { email },
      data: {
        emailVerify: true,
        otp: "",
        otpExpire: null,
      },
    });

    res.json({ message: "Email verified successfully", data: updatedUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};
