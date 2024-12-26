import express from "express";
import mongoose from "mongoose";
import http from "http";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import cors from "cors";
import bodyParser from "body-parser";
import {
  LimitOTP,
  LimitSearch,
  LimitUserRegister,
  LimitUserLogin,
  LimitCreatePost,
} from "./RateLimits.js";
import mainRoute from "./Routers/index.js";
import { Server } from "socket.io";
import Chat from "./Modules/Chat.js";

dotenv.config();

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});

const Cors = {
  origin: "http://localhost:3000",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"],
  credentials: true,
  maxAge: 600,
};

app.use(cors(Cors));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/OTP", LimitOTP);
app.use("/api/search", LimitSearch);
app.use("/api/users/register", LimitUserRegister);
app.use("/api/users/login", LimitUserLogin);
app.use("api/post/CreatePost", LimitCreatePost);

const connect = async () => {
  try {
    console.log("am in");
    await mongoose.connect(process.env.MONGO_URL);
    console.log("connected to mongodb");
  } catch (error) {
    console.log("error from mongo:------------", error.message);
  }
};

app.get("/get", (req, res) => {
  console.log("hello am here");
});

app.get("/", connect);

app.use("/api", mainRoute);

server.listen(process.env.PORT, async () => {
  console.log("am in2");
  await connect();
  console.log(`server working on ${process.env.PORT} port `);
});

io.on("connection", (socket) => {
  socket.on("join-room", ({ room }) => {
    socket.join(room);

    socket.on("send-message", async (message) => {
      const encode = jwt.verify(message.token, process.env.JWT_KEY);

      const newUpdatedMessage = {
        Content: message.content,
        id: encode.id,
      };

      io.to(message.Room).emit("get-message", newUpdatedMessage);

      await Chat.findOneAndUpdate(
        { _id: room },
        { $push: { Chats: newUpdatedMessage } }
      );
    });

    socket.on("disconnect", () => {
      console.log("user disconnected");
    });
  });

  // const Messages = []

  //  socket.join(socket.handshake.query.room)
});

//   when need to intgerat zod in the project for validaition
