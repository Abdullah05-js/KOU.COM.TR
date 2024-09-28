const express=require("express");
const posts = require("../Modules/Posts.js")
const router = express.Router()
const { v4: uuidv4 } = require('uuid');
const jwt = require("jsonwebtoken")



//create post
router.post("/",async (req,res) => {

    try{
        console.log("req",req.body)
        const {token,UserName,content,img,Role,likes,views,profilePhoto} = req.body
     
        const decode = jwt.verify(token,process.env.JWT_KEY,(err,decode) => {
            if(err)
                throw new Error("please login or register")

            return decode
            
        })
        // console.log("decode",decode)
        const id = decode.id
      
        const d = new Date()

        const date = `${d.getUTCDate()}-${d.getUTCMonth()}-${d.getUTCFullYear()}`
            
        const newPost = new posts({id,UserName,content,img,Role,likes,views,date,profilePhoto})
        
        await newPost.save()
        
        res.status(201).json(newPost)
    }
    catch(error)
    {
        console.log("hatta",error,"hatta")
        res.status(500).json({error: error.message});
    }

})

//Read all
router.get("/", async (req,res) => {
    try{

        // const token = req.params.token
        //  console.log(token)

    //   jwt.verify(token,process.env.JWT_KEY,(err,decode) => {
    //       if(err)
    //       {
    //         console.log("am in")
    //         console.log(err.message)
    //         throw new Error("re login")
            
    //       }

            
    //     })


         const AllPosts = await posts.find()
         res.status(200).json(AllPosts)
    }
    catch(e)
    {
    //    artık böyle yapıcaığız throw erro ile istediğimiz error göstereceğiz
        res.status(501).json({"error":e.message});
    }
})


module.exports = router