import React,{useState} from 'react'
import { Input } from '@nextui-org/input'
import { Button } from '@nextui-org/button'
import {PostIcons} from '../../svgs/Icon'
import { TextArea } from '../Content_section/TextArea'
import { useRef } from 'react'
import { useContext } from 'react'
import { socketProvider } from '../Root/ChatApp'
import { useParams } from 'react-router-dom'

export const Messageİnput = () => {
  const socket = useContext(socketProvider)
  const [message,setmessage] = useState("")
  const Roomİd  = useParams() 


 

  const handleMessage = ()=>{
    const localToken = JSON.parse(localStorage.getItem("data")).token

    if(message !=="")
      socket.emit("send-message",{content:message,token:localToken,Room:Roomİd.id})
  }

  return (
    <div className='flex flex-row justify-around items-center border-t-2 min-h-32 border-green-300'>
          <Input type="email" onChange={(e)=>{setmessage(e.target.value)}} value={message} variant={"underlined"} label="message" color='success' className='w-80 text-white' />
          {/* <TextArea /> */}
          <Button  variant="shadow" startContent={<PostIcons/>} size='md' onClick={handleMessage} className=" text-3xl   text-white bg-green-500  font-bold text-center " >Send</Button>

  
    </div>
  )
}
