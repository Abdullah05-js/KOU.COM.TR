import Users from "../Modules/User.js";
import express from "express";
import { v4 as uuidv4 } from "uuid";
import jwt from "jsonwebtoken";
import { encrypt, decrypt } from "node-encryption";
import Room from "../Modules/Rooms.js";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();


// /register
router.post("/register", async (req, res) => {
  try {
    const { OTP, OtpId } = req.body;
    const Target = await OtpSchema.findOne({ _id: OtpId });
    console.log(Target);
    if (OTP === Target.OTP) {
      await OtpSchema.findOneAndDelete({ _id: OtpId });
    } else {
      res.status(404).json({ success: "unsuccess" });
      return;
    }

    const { UserName, email, password, img } = req.body;

    const d = new Date();

    const date = `${d.getUTCDate()}-${d.getUTCMonth()}-${d.getUTCFullYear()}`;

    const Password = encrypt(password, process.env.ENCRYPT);

    const Rooms = [];
    const newUsers = new Users({ UserName, email, Password, date, img });
    const newRoom = new Room({id:newUsers._İd, Rooms });
    await newUsers.save();
    await newRoom.save();

    const token = jwt.sign({ id: newUsers._id }, process.env.JWT_KEY, {
      expiresIn: "7h",
    });

    res.status(201).json({
      token: token,
      UserName: UserName,
      email: email,
      img,
      img,
    });
  } catch (error) {
    res.status(404).json({ success: error.message });
  }
});

// login

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  // const user = await Users.findOneAndUpdate({email:email},{token:token})
  const user = await Users.findOne({ email });
  console.log(user);
  const decryptedPassword = decrypt(user.Password, process.env.ENCRYPT);

  if (decryptedPassword.toString() === password) {
    const token = jwt.sign({ id: user._id }, process.env.JWT_KEY, {
      expiresIn: "7h",
    });

    console.log(user);

    res.status(200).json({
      token: token,
      UserName: user.UserName,
      email: email,
      img: user.img,
    });
  } else {
    res.status(401).json({
      error: "email or password is wrong",
    });
  }
});

// check token


router.post("/find", async (req, res) => {
  let trigger = true;

  jwt.verify(req.body.token, process.env.JWT_KEY, (err, decode) => {
    console.log("am in", err);

    if (err) {
      trigger = false;
    }
  });

  if (trigger) res.status(200).json({ trigger: true });
  else res.status(200).json({ trigger: false });
});



router.post("/find", async (req, res) => {
  let trigger = true;

  jwt.verify(req.body.token, process.env.JWT_KEY, (err, decode) => {
    console.log("am in", err);

    if (err) {
      trigger = false;
    }
  });

  if (trigger) res.status(200).json({ trigger: true });
  else res.status(200).json({ trigger: false });
});


router.get("getUser",async (req,res) => {
try {

  const {token,id} = req.query

  const decode = jwt.verify(token,process.env.JWT_KEY)

  const {UserName,img} = await Users.findOne({
    _id:id
  })

  res.status(200).json({
    UserName,
    img
  })

} catch (error) {
  res.status(404)
}
})

export default router;
