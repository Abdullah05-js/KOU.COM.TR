const express=require("express");
const router = express.Router();

//routers 
const PostRouter = require("./post.js")
const UsersRouter = require("./user.js")
const profileRouter = require("./profile.js")
const RoomRouter = require("./room.js")

router.use("/post",PostRouter)

router.use("/users",UsersRouter)

router.use("/rooms",RoomRouter)

router.use("/profile",profileRouter)

module.exports = router;