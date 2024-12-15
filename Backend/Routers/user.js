const Users = require("../Modules/User.js");
const express = require("express");
const { v4: uuidv4 } = require("uuid");
const jwt = require("jsonwebtoken");
const router = express.Router();
const { encrypt, decrypt } = require("node-encryption");
const Room = require("../Modules/Rooms");
const dotenv = require("dotenv");
dotenv.config();

// /register
router.post("/register", async (req, res) => {
  const { UserName, email, password, img } = req.body;

  const id = uuidv4();

  const d = new Date();

  const date = `${d.getUTCDate()}-${d.getUTCMonth()}-${d.getUTCFullYear()}`;

  const Password = encrypt(password, process.env.ENCRYPT);

  const Rooms = [];

  const newRoom = new Room({ id, Rooms });
  const newUsers = new Users({ UserName, email, Password, date, img });
  await newUsers.save();
  await newRoom.save();

  const token = jwt.sign({ id: newUsers._id }, process.env.JWT_KEY, {
    expiresIn: "7h",
  });

  res.status(201).json({
    token: token,
    UserName: UserName,
    email: email,
    img,img
  });
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

// find user

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

module.exports = router;
