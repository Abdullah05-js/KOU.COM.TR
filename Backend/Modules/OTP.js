const mongoose = require("mongoose");

const OtpSchema = mongoose.Schema({
  UserId: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  OTP: {
    type: String,
    required:true,
  },
});

const OTP = mongoose.model("OTP", OtpSchema);

module.exports = OTP;
