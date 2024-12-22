import mongoose from "mongoose";


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



export default  Rooms;