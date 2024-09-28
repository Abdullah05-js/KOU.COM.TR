const express = require("express")
const router = express.Router()
const Posts = require("../Modules/Posts.js")
const jwt = require("jsonwebtoken")



// to get all the posts the token owner have 

router.get("/",async (req,res) => {
 try{
    const token = req.query.token

    const decode  = jwt.verify(token,process.env.JWT_KEY) 
    console.log("decode",decode)
    
    const UserPosts =await Posts.find({id:decode.id})
    console.log("ssvd",UserPosts)
    res.status(200).json(UserPosts)

 }catch(error){
    console.log(error)
    res.status(500).send("relogin")
    
 }
    
})


module.exports = router