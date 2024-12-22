import express from "express";
import OtpSchema from "../Modules/OTP.js";
import useGetOTP from "../Hooks/useGetOTP.js";
import useBot from "../Hooks/useBot.js";
import useSendMail from "../Hooks/useSendMail.js";

const router = express.Router();



router.post("/send-otp", async (req, res) => {
  try {
    const OTPKEY = useGetOTP();
    const newOTP = new OtpSchema({ OTP: OTPKEY });
    await newOTP.save();
    const name = await useBot(req.body.email);
    console.log("1")
    if (name === "error") {
      throw new Error("kanki böyle öğrenci yok dsfsvfkqeknvd");
    }
    await useSendMail(name, req.body.email, OTPKEY);
    res.status(200).json({ OtpId: newOTP._id, name: name });
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
});

export default router;
