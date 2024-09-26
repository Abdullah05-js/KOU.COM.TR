const mongoose = require("mongoose");


const RoomsSchema = mongoose.Schema(
    {
        id:{
            type:String,
            required:true
        },
        Rooms:{ type : Array , "default" : [] }
    }
);


const Rooms = mongoose.model("Rooms",RoomsSchema);


module.exports = Rooms;