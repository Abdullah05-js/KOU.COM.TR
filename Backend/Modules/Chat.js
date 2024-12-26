import mongoose from "mongoose";

const ChatSchema = mongoose.Schema({
  Chats: {
    type:Array
  },
});

const Chat = mongoose.model("Chat", ChatSchema);

export default Chat;
