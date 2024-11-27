const mongoose = require("mongoose");

const OtpSchema = mongoose.Schema({
  OTP: {
    type: String,
    required:true,
  },
});

const OTP = mongoose.model("OTP", OtpSchema);

module.exports = OTP;
