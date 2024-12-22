import mongoose from "mongoose";

const OtpSchema = mongoose.Schema({
  OTP: {
    type: String,
    required: true,
  },
});

const OTP = mongoose.model("OTP", OtpSchema);

export default OTP;
