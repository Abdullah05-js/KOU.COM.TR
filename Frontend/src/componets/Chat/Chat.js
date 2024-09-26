import React,{useEffect, useState} from 'react'
import Ferdi from "/home/thodex/Desktop/website/Frontend/src/images/GSIVyYDWIAAXS5m.jpeg"
import { Avatar } from '@nextui-org/avatar'
import { MessagesList } from './MessagesList'
import io from "socket.io-client"
import { Messageİnput } from './Messageİnput'
import { useParams } from 'react-router-dom'


export const Chat = () => {
  const [message,setmessage] = useState("")
  const [socket,setSocket] = useState({})

  const Room  = useParams() 

  console.log(Room)
  useEffect(()=>{

    const id = JSON.parse(localStorage.getItem("data")).UserName

    if(Room.id === undefined || Room.id === "")
        return

    //here we connect to the scoket and send the room id
    const socket = io("http://localhost:5000",{query:{room:Room.id,id:id}})
    setSocket(socket)

    //here we have evenlistiner for any message
    socket.on("get-message",(message)=>{
      setmessage(message)
    })



    console.log(socket,"the socket")

    return ()=> socket.close()
  },[Room.id])

  return (
  
       <div className="flex flex-col justify-between min-w-[672px] h-screen">

        <div className="sticky top-0 z-50 flex  flex-row justify-center items-center gap-10 bg-black  border-b-2 border-green-300 p-4 h-20 " >

            <div className='flex flex-row justify-center items-center gap-2'>
            <Avatar  radius="sm" src={Ferdi} className="border-2 border-green-300 object-cover"/>
            <h2 className='text-white font-extrabold text-xl'>{"abdullah han"}</h2>
            {/* <p className="text-gray-400 font-light  " ></p> */}
            </div>
 
        </div>


       
        <MessagesList message={message} id={socket.id} />
      
      

      
        <Messageİnput socket={socket} />
       
        

      </div>
    
  )
}
