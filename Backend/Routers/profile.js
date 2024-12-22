const express = require("express")
const router = express.Router()
const Posts = require("../Modules/Posts.js")
const jwt = require("jsonwebtoken")



// to get all the posts the token owner have 

router.get("/",async (req,res) => {
 try{
    const token = req.query.token
    const pageNumber = req.query.pageParam
    const decode  = jwt.verify(token,process.env.JWT_KEY) 
    
    
    const UserPosts =await Posts.find({author:decode.id})
    console.log("decode",UserPosts)
    res.status(200).json({data:UserPosts.slice(pageNumber,pageNumber+process.env.LIMIT),nextPage:pageNumber + process.env.LIMIT < UserPosts.length ? pageNumber + process.env.LIMIT : null,})
   
 }catch(error){
    console.log(error)
    res.status(500).send("relogin")
    
 }
    
})


module.exports = router