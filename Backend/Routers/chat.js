import express from "express";
import Chat from "../Modules/Chat.js";
import jwt from "jsonwebtoken";
import Rooms from "../Modules/Rooms.js";

const router = express.Router();

// create chat

router.post("/", async (req, res) => {
  try {
    const { token } = req.body;

    const decode = jwt.verify(token, process.env.JWT_KEY);

    const Chats = [];

    const newData = new Chat({ Chats });
    await Rooms.findOneAndUpdate(
      { id: decode.id },
      { $push: { Rooms: newData._id } }
    );
    await newData.save();

    res.status(200).json(newData);
  } catch (err) {
    res.status(501).json({ error: err.message });
  }
});

// read all
router.get("/", async (req, res) => {
  try {
    const token = req.query.token;
    const room = req.query.room;

    const decode = jwt.verify(token, process.env.JWT_KEY);

    const Messages = Chat.find({ _id: room });
    const data = {
      requestSender: decode.id,
      Chats: Messages,
    };
    res.status(200).json(data);
  } catch (err) {
    res.status(501).json({ error: err.message });
  }
});

export default router;
