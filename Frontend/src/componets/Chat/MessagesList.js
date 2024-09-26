import React, { useEffect,useState } from 'react'
import { Message } from './Message'
import "./style.css"

export const MessagesList = ({message,id}) => {
    
    const [messages,setmessages] = useState([{messages:[]}])


    const  data = {
        requestSender:"123",
     
        messages:[{content:"dbttbe",time:"",id:"345345345"},{content:"dbttbe",time:"",id:"345345345"},{content:"dbttbe",time:"",id:"345345345"},{content:"dbttbe",time:"",id:"345345345"},{content:"dbttbe",time:"",id:"345345345"},{content:"dbttbe",time:"",id:"345345345"},{content:"dbttbe",time:"",id:"345345345"},{content:"dbttbe",time:"",id:"345345345"},{content:"dbttbe",time:"",id:"345345345"},{content:"dbttbe",time:"",id:"345345345"},{content:"dbttbe",time:"",id:"345345345"},{content:"dbttbe",time:"",id:"345345345"},{content:"dbttbe",time:"",id:"345345345"},{content:"636ttbe",time:"",id:"345345343"},{content:"dbttbe",time:"",id:"345345345"},{content:"dbttbe",id:"345345343"},{content:"dbttbe",id:"345345345"},{content:"dbttbe",id:"345345345"},{content:"dbttbe",id:"345345343"},{content:"dbttbe",id:"345345345"}]
    }


    useEffect(()=>{

        if(message === undefined || message==="" )return

        setmessages([...messages,message])
    },[message])




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
