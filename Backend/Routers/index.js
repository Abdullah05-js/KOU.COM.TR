const express = require("express");
const router = express.Router();

//routers
const PostRouter = require("./post.js");
const UsersRouter = require("./user.js");
const profileRouter = require("./profile.js");
const RoomRouter = require("./room.js");
const ChatRouter = require("./chat.js");
const NewChatRouter = require("./NewChat.js");
const verifyOTP = require("./VerifyOTP.js");

router.use("/newchat", PostRouter);

router.use("/post", PostRouter);

router.use("/users", UsersRouter);

router.use("/rooms", RoomRouter);

router.use("/profile", profileRouter);

router.use("/chat", ChatRouter);

router.use("/OTP", verifyOTP);

module.exports = router;
