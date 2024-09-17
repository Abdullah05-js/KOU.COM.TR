import React from 'react'
import { CreatePost } from './CreatePost'
import { Button} from '@nextui-org/button'
import { useState } from 'react'
import { Posts } from './Posts'
  const Main = () => {
  const [BorderB,SetBorderB] = useState("Explore")

  const [isCreatePostOn,setisCreatePostOn] = useState(false)
  const setİsCreate = (e) =>{
    setisCreatePostOn(e)
  }
  return (
    <div className=" min-w-[672px]">

       <div className="sticky top-0 z-40 flex justify-around bg-black  border-b-2 border-green-300 p-2  " >
      <Button value={"Explore"}   onPress={(e) => {SetBorderB("Explore")}}   className={`h-14  text-white rounded-md bg-black font-bold ${BorderB==="Explore" ? "border-b-3 border-green-400" : ""} `}>Explore</Button>
      <Button value={"Following"} onPress={(e) => {SetBorderB("Following")}} className={`h-14  text-white rounded-md bg-black font-bold ${BorderB==="Following" ? "border-b-3 border-green-400" : ""} `}>Following</Button>
     </div>

    <div>

    <CreatePost  setisCreatePostOn={setİsCreate} />
    

    <Posts isCreatePostOn={isCreatePostOn} setisCreatePostOn={setİsCreate} />

    </div>

    
    </div>
  )
}

export default Main