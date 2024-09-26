const mongoose = require("mongoose");


const ChatSchema = mongoose.Schema(
    {

    Room:{
        type:String,
        required:true
    },
    Chat:[
        {
            Content:String,
            id:String
        }
    ]


});


const Chat = mongoose.model("Chat",ChatSchema);


module.exports = Chat;