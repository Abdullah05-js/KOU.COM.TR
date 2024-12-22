import express from "express";
import Chat from "../Modules/Chat.js";
import jwt from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";
import Room from "../Modules/Rooms.js";

const router = express.Router();


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

export default router;
