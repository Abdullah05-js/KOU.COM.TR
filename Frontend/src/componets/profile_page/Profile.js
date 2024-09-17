import React, { useState } from 'react'
import { Button } from '@nextui-org/button'
import { ArrowIcon } from '../../svgs/Icon'
import { Link } from 'react-router-dom'
import { Tooltip } from '@nextui-org/tooltip'
import { Chip } from '@nextui-org/chip'
import { Card,CardFooter} from '@nextui-org/card'
import { Image } from '@nextui-org/image'

import { PorfilePosts } from './PorfilePosts'
// import Ferdi from '/home/thodex/Desktop/website/src/images/trump.jpeg' 

export const Profile = () => {
  const [Trigger,setTrigger] = useState(false)

  const data = localStorage.getItem("data")
  
  const User = JSON.parse(data)




  return (
 <div className=" min-w-[672px]">

    <div className="sticky top-0 z-50 flex  flex-row justify-between items-center gap-10 bg-black  border-b-2 border-green-300 p-4 h-20 " >

    <div className=' flex justify-start items-center gap-10'>
    <Link to={"/home"}>
    
    <Button size='md' className="rounded-full bg-black border-2 border-green-300" aria-label="Back" title='back' >
        <ArrowIcon/>
    </Button>
    </Link>
    
    <div>
    <h2 className='text-white font-extrabold text-xl'>{User.UserName}</h2>
    <p className="text-gray-400 font-light  " >{2}-posts</p>
    </div>
    
    </div>


    {/* roles seaction here  */}
     <div className="flex gap-1  max-w-44 overflow-x-auto">
        <Tooltip content="Member in KOU" color="success" ><Chip className="m-0.5" color="success" variant="bordered">KOU</Chip></Tooltip> 
        <Tooltip content="CO-Founder" color="danger" ><Chip className="m-0.5" color="danger" variant="bordered">CO-Founder</Chip></Tooltip>

     </div>

    </div>
 

    <Card
      isFooterBlurred
      radius="lg"
      className=" bg-black  border-b-3 border-green-300"
      
    >
      {Trigger ? "" :  <Image
        alt="Woman listing to music"
        className="object-cover  rounded-none"
        src={User.img === "" ? setTrigger(true) : User.img }
        width={672}
        isZoomed
        fallbackSrc="https://via.placeholder.com/300x200"
        isBlurred
      />}
   
      <CardFooter className="justify-between before:bg-white/10 border-green-300 border-2 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)]  ml-1 z-10">
       <div className='flex flex-1 justify-between '>
            <div className='flex flex-col  items-center gap-2'>
                <h2 className='text-white font-extrabold text-xl'>{User.UserName}</h2>
                <h4 className='text-white'>{User.UserName}</h4>

                 <div className='flex flex-row gap-2'>
                    <Button className=" text-white text-lg bg-black/20 font-bold" variant="flat" color="default" radius="lg" size="sm">
                    {2}-Following
                    </Button>
                    <Button className=" text-white text-lg bg-black/20 font-bold" variant="flat" color="default" radius="lg" size="sm">
                    {3}-Follower
                    </Button>
                 </div>
            </div>


        <div className='flex flex-col justify-center items-center'>
        <Button className="text-xl text-white font-bold" variant="none"  radius="lg" size="sm">
          Edit Profile
        </Button>
        </div>
      
       </div>
     
      </CardFooter>
    </Card>





    <PorfilePosts/>



    
            
 </div>
  )
}
