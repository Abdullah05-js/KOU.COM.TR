const express = require("express");

const router = express.Router();

const Room = require("../Modules/Rooms");


// Read all 

router.get("/",async (req,res)=>{
    try{


        const {id} = req.query.id;

        const RoomsData = await Room.find({id:id});

        res.status(200).json(RoomsData)


    }catch(err){

        
        res.status(501).json({"error":e.message});


    }
})

module.exports = router