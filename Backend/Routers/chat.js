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

module.exports = router