import React from 'react'

export const Message = ({direction,content}) => {


  return (
 <div  className={`flex flex-col ${direction ? "items-end" : ""}`}>
    <div className={  direction ? 'flex min-h-12 p-2 mx-2 text-white bg-black border-2 mt-2 border-green-500 rounded-xl  w-2/4' : 'flex min-h-12 p-2 mx-2 text-white bg-black border-2    rounded-xl  w-2/4'}>
        
        <h1>{content}</h1>
    </div>
 </div>
  )
}
