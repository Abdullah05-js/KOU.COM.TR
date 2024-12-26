import express from "express";
import jwt from "jsonwebtoken";
import Room from "../Modules/Rooms.js";

const router = express.Router();



// Read all 

router.get("/",async (req,res)=>{
    try{



        const token = req.query.token;


        const decode  = jwt.verify(token,process.env.JWT_KEY) 
        // console.log(id);

        const RoomsData = await Room.find({id:decode.id});


        res.status(200).json(RoomsData);
        


    }catch(err){

        
        res.status(501).json({"error":err.message})


    }
})





export default router