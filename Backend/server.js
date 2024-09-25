const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const mainRoute = require("./Routers/index.js")
dotenv.config()

const app = express();

app.use(express.json())
app.use(cors());

const connect = async () => {
try{
    console.log("am in")
    await mongoose.connect(process.env.MONGO_URL)
    console.log("connected to mongodb")
}
catch(error){
    console.log("error from mongo:------------",error.message)
}

}



app.use("/api", mainRoute);




app.listen(process.env.PORT,async ()=>{

    console.log("am in2")
    await connect()
    console.log(`server working on ${process.env.PORT} port `)
})





