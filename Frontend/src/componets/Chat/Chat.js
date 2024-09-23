import React from 'react'

import { Avatar } from '@nextui-org/avatar'
import { MessagesList } from './MessagesList'

export const Chat = () => {
  return (
  
       <div className=" min-w-[672px] h-screen">

        <div className="sticky top-0 z-50 flex  flex-row justify-center items-center gap-10 bg-black  border-b-2 border-green-300 p-4 h-20 " >

            <div className='flex flex-row justify-center items-center gap-2'>
            <Avatar  radius="sm" src="https://i.pravatar.cc/150?u=a04258a2462d826712d" className="border-2 border-green-300 object-cover"/>
            <h2 className='text-white font-extrabold text-xl'>{"abdullah han"}</h2>
            {/* <p className="text-gray-400 font-light  " ></p> */}
            </div>
 
        </div>



        <MessagesList/>



      </div>
    
  )
}
