const express = require("express");

const router = express.Router();

const Room = require("../Modules/Rooms");


// Read all 

router.get("/",async (req,res)=>{
    try{



        // const {token} = req.query.token;



        // const id = jwt.verify(token,process.env.JWT_KEY);
        // console.log(id);

        const RoomsData = await Room.find({id:"088aa647-6f3a-47ab-b8de-45cbb7562610"});


      

        res.status(200).json(RoomsData);
        


    }catch(err){

        
        res.status(501).json({"error":err.message})


    }
})





module.exports = router