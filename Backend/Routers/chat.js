import express from "express";
import Chat from "../Modules/Chat.js";
import jwt from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();


// create room 

router.post("/",async (req,res)=>{
    try{

      
        
        const {token} = req.body;

      

        const decode  = jwt.verify(token,process.env.JWT_KEY)

      

        const Room = uuidv4()

        const Chats = [{Content:"hello",id:decode.id}];

        const test = "test"

         const newData = new Chat({Room,Chats,test})

         await newData.save();

        res.status(200).json(newData)


    }catch(err){

        
        res.status(501).json({"error":err.message});


    }
})


    // read all 
router.get("/",async (req,res)=>{
    try{

      
        
        const room = req.query.room
        const token = req.query.token

        console.log("THE ROOM ",req.query,req.params)


         const decode  = jwt.verify(token,process.env.JWT_KEY)
      


         const newData = await Chat.find({Room:room})

         

        const Data = {
            requestSender:decode.id,
            Chats:newData[0].Chats
        }


 

        res.status(200).json(Data);


    }catch(err){

        
        res.status(501).json({"error":err.message});


    }
});











export default router