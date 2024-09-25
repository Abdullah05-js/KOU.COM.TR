import React from 'react'
import { Input } from '@nextui-org/input'
import { Button } from '@nextui-org/button'
import {PostIcons} from '../../svgs/Icon'
import { TextArea } from '../Content_section/TextArea'
import { useRef } from 'react'

export const Messageİnput = () => {
   

  return (
    <div className='flex flex-row justify-around items-center border-t-2 min-h-32 border-green-300'>
          {/* <Input type="email" variant={"underlined"} label="message" color='success' className='w-80' /> */}
          <TextArea />
          <Button  variant="shadow" startContent={<PostIcons/>} size='md' className=" text-3xl   text-white bg-green-500  font-bold text-center " >Send</Button>
  
    </div>
  )
}
