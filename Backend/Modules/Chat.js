const mongoose = require("mongoose");


const ChatSchema = mongoose.Schema(
    {

    Room:{
        type:String,
        required:true
    },
    Chats:[
        {
            Content:String,
            id:String
        }
    ],
    test:String


});


const Chat = mongoose.model("Chat",ChatSchema);


module.exports = Chat;