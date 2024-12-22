import React from 'react'
import { Avatar } from '@nextui-org/avatar'
// import Ferdi from "/home/thodex/Desktop/website/Frontend/src/images/GSIVyYDWIAAXS5m.jpeg"
import { useNavigate } from 'react-router-dom'
import { socket } from './socket'


export const PersonBox = ({Key}) => {

const navigate = useNavigate()

  const handleChat = ()=>{
    socket.emit("join-roon",{room:Key})
    navigate(`/chat/${Key}`)

  }


  return (
    <div onClick={handleChat} className='min-h-24 flex flex-col justify-center items-center  min-w-80 overflow-auto cursor-pointer border-2 border-green-500 rounded-xl'>


            <div className='flex flex-row justify-center items-center gap-2'>
                <Avatar  radius="sm" src={""} className="border-2 border-green-300 object-cover"/>
                <h2 className='text-white font-extrabold text-xl'>{"abdullah han"}</h2>
                {/* <p className="text-gray-400 font-light  " ></p> */}
            </div>

            <h2 className='text-center text-white'>`"+${"lan nerdesin  gel halısahaya"}+"`</h2>
            
    </div>
  )
}


