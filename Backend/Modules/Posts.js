const mongoose = require("mongoose");



const postsSchema = mongoose.Schema(
    {
    id:{
        type:String,
        required:true
    },
    UserName:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:false
    },
    img:{
        type:String,
        required:false
    },
    Role:{
        type:Boolean,
        default:false 
    },
    likes:{
        type:Number,
        required:true
    },
    views:{
        type:Number,
      
    },
    date:{
        type:String,
        required:true
    },
    profilePhoto:{
        type:String,
        required:false
    }
    })


    const Posts = mongoose.model("posts",postsSchema)

    module.exports = Posts