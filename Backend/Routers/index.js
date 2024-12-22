import express from "express";
const router = express.Router();


//routers
import PostRouter from "./post.js";
import UsersRouter from "./user.js";
import profileRouter from "./profile.js";
import RoomRouter from "./room.js";
import ChatRouter from "./chat.js";
import NewChatRouter from "./NewChat.js";
import verifyOTP from "./VerifyOTP.js";
import SearchUser from "./search.js";




router.use("/newchat", PostRouter);

router.use("/post", PostRouter);

router.use("/users", UsersRouter);

router.use("/rooms", RoomRouter);

router.use("/profile", profileRouter);

router.use("/chat", ChatRouter);

router.use("/OTP", verifyOTP);

router.use("/search",SearchUser)

export default router;
