const express = require("express");
const router = express.Router();
const OtpSchema = require("../Modules/OTP.js");
const useGetOTP = require("../Hooks/useGetOTP.js");
const useSendMail = require("../Hooks/useSendMail.js");

router.post("/verify-otp", async (req, res) => {
  try {
    const { OTP, OtpId } = req.body;
    
    const Target = await OtpSchema.findOne({ _id:OtpId });
    console.log(Target);
    if (OTP === Target.OTP) {
      await OtpSchema.findOneAndDelete({ _id:OtpId });
      res.status(200).json({ success: "success" });
    } else {
      res.status(404).json({ success: "unsuccess" });
    }
  } catch (error) {
    res.status(404).json({ success: error.message });
  }
});

router.post("/send-otp", async (req, res) => {
  try {
    const OTPKEY = useGetOTP();
    const newOTP = new OtpSchema({ OTP: OTPKEY });
    await newOTP.save();
    useSendMail(req.body.email, OTPKEY);
    res.status(200).json({ OtpId: newOTP._id });
  } catch (error) {
    res.status(400).json({ error: error.message});
  }
});

module.exports = router;
