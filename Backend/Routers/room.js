const express = require("express");

const router = express.Router();

const Room = require("../Modules/Rooms");


// Read all 

router.get("/",async (req,res)=>{
    try{



        const {token} = req.query.token;



        const id = jwt.verify(token,process.env.JWT_KEY)

        const RoomsData = await Room.find({id:id});

        res.status(200).json(RoomsData)


    }catch(err){

        
        res.status(501).json({"error":e.message});


    }
})

module.exports = router