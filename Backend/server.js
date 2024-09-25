const express = require("express");
const app = express();
const mongoose = require("mongoose");
const http = require("http")
const dotenv = require("dotenv");
const cors = require("cors");
const mainRoute = require("./Routers/index.js")
const server = http.createServer(app);
const {Server} = require("socket.io")

const io = new Server(server,{
    cors:{
        origin:"http://localhost:3000"
    }
})

dotenv.config()


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

app.get("/get",(req,res)=>{
    console.log("hello am here")
})

app.use("/api", mainRoute);



    server.listen(process.env.PORT,async ()=>{

    console.log("am in2")
    // await connect()
    console.log(`server working on ${process.env.PORT} port `)
})





io.on('connection', (socket) => {
    console.log('a user connected');
  });



