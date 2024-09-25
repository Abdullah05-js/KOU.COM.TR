import React,{useState} from 'react'
import { PersonBox } from './PersonBox'
import "./style.css"
export const Room = () => {

    // const [ChatArray,setChatArray] = useState([{id:"4353535",chats:[id]}])


    const data = {
      rquestSneder : "235345354",

      //the string in the chats i the chat id 
      chats:["3242","23552","2532525"]
    }




    return (
      <div id='room' className="sticky top-0 z-40 flex flex-col justify-start gap-2 items-center min-w-[350px]  h-screen border-l-2 border-solid border-green-300 overflow-y-scroll overflow-x-hidden">
        <div className='mt-1'></div>
        <PersonBox/>
        <PersonBox/>
        <PersonBox/>
        <PersonBox/>
        <PersonBox/>
        <PersonBox/>
        <PersonBox/>
        <PersonBox/>
        <PersonBox/>
        <PersonBox/>
        <PersonBox/>
  
      </div>
    )
}
