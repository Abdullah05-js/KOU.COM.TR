const express = require("express");
const app = express();
const mongoose = require("mongoose");
const http = require("http")
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken")
const cors = require("cors");
const mainRoute = require("./Routers/index.js")
const server = http.createServer(app);
const {Server} = require("socket.io")
const Chat = require("./Modules/Chat.js")
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
     await connect()
    console.log(`server working on ${process.env.PORT} port `)
})



const data = {
    requestSender:"A",
    messages:[]
}


io.on('connection', (socket) => {


        
    // const data = {
    //     requestSender:socket.handshake.query.id,
    //     messages:[]
    // }

    socket.on("join-roon",(room)=>{
        socket.join(room.room);






        socket.on("send-message",async (message)=>{

       


            const encode = jwt.verify(message.token,process.env.JWT_KEY)
    
          
    
            const newMessage = {Content:message.content,id:encode.id}
            // data.messages.push(message)
            console.log(newMessage);
    
            
              await Chat.findOneAndUpdate(
                {Room:message.Room},
                {$push:{Chats:newMessage}},
                {new:true}
            );
    
        
         
    
            const newUpdatedMessage = {
                Content:message.content,
                id:encode.id
            }
    
         
            io.to(message.Room).emit("get-message",newUpdatedMessage)
        })
    
        socket.on('disconnect', () => {
          console.log('user disconnected');
        })
    
    








    })
   
    // const Messages = []

    //  socket.join(socket.handshake.query.room)
    



  });


//   when need to intgerat zod in the project for validaition