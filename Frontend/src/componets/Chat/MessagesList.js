import React, { useEffect,useState } from 'react'
import { Message } from './Message'
import "./style.css"
import { socket } from './socket'
import axios from 'axios'
import { useParams } from 'react-router-dom'
let cancelAxios = null
export const MessagesList = () => {

    const [messages,setmessages] = useState([{Content:"",id:""}])
    const [ChatList,setChatList] = useState({requestSender:"",Chats:[{Content:"",id:""}]})
    const Roomİd  = useParams() 
    // const  data = {
    //     requestSender:"123",
     
    //     messages:[{content:"dbttbe",time:"",id:"345345345"},{content:"dbttbe",time:"",id:"345345345"},{content:"dbttbe",time:"",id:"345345345"},{content:"dbttbe",time:"",id:"345345345"},{content:"dbttbe",time:"",id:"345345345"},{content:"dbttbe",time:"",id:"345345345"},{content:"dbttbe",time:"",id:"345345345"},{content:"dbttbe",time:"",id:"345345345"},{content:"dbttbe",time:"",id:"345345345"},{content:"dbttbe",time:"",id:"345345345"},{content:"dbttbe",time:"",id:"345345345"},{content:"dbttbe",time:"",id:"345345345"},{content:"dbttbe",time:"",id:"345345345"},{content:"636ttbe",time:"",id:"345345343"},{content:"dbttbe",time:"",id:"345345345"},{content:"dbttbe",id:"345345343"},{content:"dbttbe",id:"345345345"},{content:"dbttbe",id:"345345345"},{content:"dbttbe",id:"345345343"},{content:"dbttbe",id:"345345345"}]
    // }


    useEffect( ()=> {

  
                 
     axios.get(`http://localhost:5000/api/chat` ,{params:{"room":Roomİd.id}},
      {
        cancelToken: new axios.CancelToken((c)=> {
          cancelAxios = c
        })
      }
    )
    .then((Response)=>{

         console.log(Response.data ,"-----------------------")
        setChatList(Response.data)
    })
    .catch((error)=>{

      // console.log(error.response.data.error)

    })

   
    return () => {
      console.log("cancleing ")
      cancelAxios()
    }
                 
 
          },[Roomİd])


    useEffect(()=>{

  
      //here we have evenlistiner for any message
      socket.on("get-message",(message)=>{
        console.log("hi am here")
       
        setmessages((messages)=> [...messages,message])
      })
  
  
  
      console.log(socket,"the socket")
  
      return ()=> socket.off("get-message")
      // return ()=> socket.close()
    },[])


    console.log("messagw",messages)   

    
    const messagesDBList = ChatList.Chats.map((e)=>{

      if(ChatList.requestSender === e.id)
          return   <Message direction={true} content={e.Content} />
      else
      return   <Message direction={false} content={e.Content} />

  })

    const messagesList = messages.map((e)=>{

    
       
        if(ChatList.requestSender === e.id)
            return   <Message direction={true} content={e.Content} />
        else
        return   <Message direction={false} content={e.Content} />

    })

  return (
    <div id='room' className='flex flex-col  min-w-[672px] h-screen overflow-y-auto gap-3 mt-2'>
    {ChatList.requestSender !== "" ? messagesDBList : ""}
    {messages.id !== "" ? messagesList : ""}
   
    </div>
  )
};
