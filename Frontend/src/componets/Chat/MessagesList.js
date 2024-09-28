import React, { useEffect,useState } from 'react'
import { Message } from './Message'
import "./style.css"

export const MessagesList = ({socket}) => {
    
    const [messages,setmessages] = useState({requestSender:"",messages:[{content:"fbfgb",id:"erg"}]})


    // const  data = {
    //     requestSender:"123",
     
    //     messages:[{content:"dbttbe",time:"",id:"345345345"},{content:"dbttbe",time:"",id:"345345345"},{content:"dbttbe",time:"",id:"345345345"},{content:"dbttbe",time:"",id:"345345345"},{content:"dbttbe",time:"",id:"345345345"},{content:"dbttbe",time:"",id:"345345345"},{content:"dbttbe",time:"",id:"345345345"},{content:"dbttbe",time:"",id:"345345345"},{content:"dbttbe",time:"",id:"345345345"},{content:"dbttbe",time:"",id:"345345345"},{content:"dbttbe",time:"",id:"345345345"},{content:"dbttbe",time:"",id:"345345345"},{content:"dbttbe",time:"",id:"345345345"},{content:"636ttbe",time:"",id:"345345343"},{content:"dbttbe",time:"",id:"345345345"},{content:"dbttbe",id:"345345343"},{content:"dbttbe",id:"345345345"},{content:"dbttbe",id:"345345345"},{content:"dbttbe",id:"345345343"},{content:"dbttbe",id:"345345345"}]
    // }


    // useEffect(()=>{

    //     if(message === undefined || message==="" )return
    //     console.log(message)
    //     setmessages(message)
    // },[message])



    useEffect(()=>{

  
      //here we have evenlistiner for any message
      socket.on("get-message",(message)=>{
        setmessages(message)
      })
  
  
  
      console.log(socket,"the socket")
  
      return ()=> socket.off("get-message")
    },[socket])




    const messagesList = messages.messages.map((e)=>{

    
       
        if(messages.requestSender === e.id)
            return   <Message direction={true} content={e.content} />
        else
        return   <Message direction={false} content={e.content} />

    })

  return (
    <div id='room' className='flex flex-col  min-w-[672px] h-screen overflow-y-auto gap-3 mt-2'>
     
    {messagesList}
   
    </div>
  )
}
