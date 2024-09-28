const express = require("express");

const router = express.Router();

const Chat = require("../Modules/Chat");

const { v4: uuidv4 } = require('uuid');

// create room 

router.post("/",async (req,res)=>{
    try{

      
        
        const {token} = req.body;

        console.log(token)

        const decode  = jwt.verify(token,process.env.JWT_KEY)

        conslog.log("am here")

        const Room = uuidv4()

        const NewChat = [{content:"hello",id:decode.id}];

         const newData = new Chat({Room,NewChat})

        res.status(200).json(newData)


    }catch(err){

        
        res.status(501).json({"error":err.message});


    }
})

module.exports = router