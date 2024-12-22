const express = require("express");

const router = express.Router();

const jwt = require("jsonwebtoken")

const Room = require("../Modules/Rooms");


// Read all 

router.get("/",async (req,res)=>{
    try{



        const token = req.query.token;


        const decode  = jwt.verify(token,process.env.JWT_KEY) 
        // console.log(id);

        const RoomsData = await Room.find({id:decode.id});


        console.log(RoomsData);

        res.status(200).json(RoomsData);
        


    }catch(err){

        
        res.status(501).json({"error":err.message})


    }
})





module.exports = router