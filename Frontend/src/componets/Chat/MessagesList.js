import React from 'react'
import { Message } from './Message'
export const MessagesList = () => {


    const  data = {
        messages:[{content:"dbttbe",direction:false,time:""},{content:"636ttbe",direction:false,time:""},{content:"dbttbe",direction:true,time:""},{content:"dbttbe",direction:false},{content:"dbttbe",direction:true},{content:"dbttbe",direction:true},{content:"dbttbe",direction:false},{content:"dbttbe",direction:true}]
    }


    const messagesList = data.messages.map((e)=>{
       
        return   <Message direction={e.direction} content={e.content} />
    })

  return (
    <div className='flex flex-col  min-w-[672px] h-96 gap-3 mt-2'>
        
    {messagesList}
   

   
    </div>
  )
}
