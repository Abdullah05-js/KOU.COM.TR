import React from 'react'
import { Button } from '@nextui-org/button'
export const MarketFilter = () => {
  return (
    <div className="sticky top-0 z-50 flex flex-col justify-between items-center min-w-80 text-white h-screen border-l-2 border-solid border-green-300 ">

        <div>
        MarketFilter
        </div>

            <div className="min-w-52 w-72 text-white">
            <p className="text-center p-10 flex ">&copy;2024 <p className='text-green-300 mx-2'>KOU</p> inc.   <Button className='ml-4 text-green-300 border-green-300 bg-black border-2'  variant="shadow">About us</Button></p>
        </div>

        
    </div>
  )
}
