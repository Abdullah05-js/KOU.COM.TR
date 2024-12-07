const express = require("express");

const router = express.Router();

const Chat = require("../Modules/Chat");

const jwt = require("jsonwebtoken");

const { v4: uuidv4 } = require("uuid");

const Room = require("../Modules/Rooms");

// create room

router.post("/", async (req, res) => {
  try {
    const { token, Target } = req.body;

    const decode = jwt.verify(token, process.env.JWT_KEY);

    const Room = uuidv4();

    const Chats = [{ Content: "hello", id: decode.id }];

    const test = "hi";

    await Room.findOneAndUpdate(
      { id: decode.id },
      { $push: { Rooms: Room } },
      { new: true }
    );
    await Room.findOneAndUpdate(
      { id: Target },
      { $push: { Rooms: Room } },
      { new: true }
    );

    const newData = new Chat({ Room, Chats, test });

    await newData.save();

    res.status(201);
  } catch (err) {
    res.status(501).json({ error: err.message });
  }
});

module.exports = router;
