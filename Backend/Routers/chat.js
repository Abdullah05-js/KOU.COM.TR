const express = require("express");

const router = express.Router();

const Chat = require("../Modules/Chat");

const jwt = require('jsonwebtoken');

const { v4: uuidv4 } = require('uuid');

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

        console.log("THE ROOM ",req.query,req.params)



      


         const newData = await Chat.find({Room:room})

         console.log(newData);

        const Data = {
            requestSender:"088aa647-6f3a-47ab-b8de-45cbb7562610",
            Chats:newData[0].Chats
        }


        console.log(Data)

        res.status(200).json(Data);


    }catch(err){

        
        res.status(501).json({"error":err.message});


    }
});











module.exports = router