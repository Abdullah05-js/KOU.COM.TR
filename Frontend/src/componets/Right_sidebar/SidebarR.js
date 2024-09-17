import React from 'react'
import {Input} from "@nextui-org/input";
import {User} from "@nextui-org/user";
import { useState } from 'react';
import { Divider } from '@nextui-org/divider';
import { Button } from '@nextui-org/button';
import { Card,CardFooter } from '@nextui-org/card';
import { Image } from '@nextui-org/image';
// import MarketImage from '/home/thodex/Desktop/website/src/images/MarketPlace.png'
import { useEffect } from 'react';
import { Spinner } from '@nextui-org/spinner';
import axios from 'axios';

let cancelAxios = null
 
export const SidebarR = () => {


  const [PostsArray,setPostsArray] = useState([])

  const [Load,setLoad] = useState(true)
  


  useEffect(()=>{

    axios.get("https://tarmeezacademy.com/api/v1/posts?limit=6" , 
      {
        cancelToken: new axios.CancelToken((c)=> {
          cancelAxios = c
        })
      }
    )
    .then((Response)=>{
     setPostsArray(Response.data.data)
     console.log(Response)
     setLoad(false)
    })
    .catch((error)=>{
      console.log(error)
    })

   
    return () => {
      console.log("cancleing ")
      cancelAxios()
    }
    
  },[])


  const Skeleton_model = () => {
    return( 
      <div className="flex justify-center items-center p-7">
        <Spinner label="Loading ....." color="success" labelColor='success'/>
      </div>
          )}


   



  const ReturnUsers = PostsArray.map((user) => {
    return (
      <li  key={user.id}  className="p-3 flex justify-between "><User name={user.author.name.length>10 ? `${user.author.name.slice(0,9)}...` : user.author.name} description={user.author.username.length>10 ? `${user.author.username.slice(0,9)}...` : user.author.username} avatarProps={{src:user.author.profile_image}} className="text-white" /><Button  variant="shadow"  size='sm' className="  text-white bg-green-500  font-bold text-center ">FOllow</Button></li>
    )
  })

  return (
    <div className="sticky top-0 z-40 flex flex-col justify-between items-center min-w-80  h-screen border-l-2 border-solid border-green-300 ">

      <div  className="min-w-52 max-w-60 mt-5 text-white ">
      <Input
          color="success"
          type="email"
          label="Search"
          placeholder="Arif,selçuk,abdullah"
          labelPlacement="inside"
          variant="bordered"
          
        />
      </div>

      <div className="min-w-52 w-72 ml-12 border-2 border-solid border-green-300 rounded-lg" >
        <h3 className="text-center p-2 font-bold text-white">New Friends?</h3>

        <Divider className="bg-green-300" />

        <ul className="flex flex-col justify-center">

        {Load ? Skeleton_model() : ReturnUsers}
       

        <Button  variant="shadow"  size='sm' className="  text- bg-green-500  font-bold text-center m-2 text-xl ">See More</Button>

        </ul>

      </div>

      <div className="flex justify-center items-center  ml-14">
      <Card
      isFooterBlurred
      radius="lg"
      className="border-2 border-solid border-green-300"
      >
      <Image
        alt="Woman listing to music"
        isZoomed
        className="object-cover"
        height={270}
        src={""}
        width={270}
      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-tiny text-white/80">Market Available soon.</p>
        <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
          Notify me
        </Button>
      </CardFooter>
      </Card>
      </div>

      <div className="min-w-52 w-72 text-white">
        <p className="text-center p-10 flex">&copy;2024 KOU inc.   <Button className='ml-4 text-green-300 border-green-300 bg-black border-2'  variant="shadow">About us</Button></p>
      </div>


    </div>
  )
}
