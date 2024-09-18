import React, { useState } from 'react'
import { WebsiteIcon } from '../../svgs/Icon'
import { Button } from '@nextui-org/button'
import { HomeIcon } from '../../svgs/Icon'
import { SearchIcon } from '../../svgs/Icon'
import { MessagesIcon } from '../../svgs/Icon'
import { ProfileIcon } from '../../svgs/Icon'
import { PostIcons , MarketIcon} from '../../svgs/Icon'
import { Card,CardHeader,CardBody} from '@nextui-org/card'
import {Image} from "@nextui-org/image"
import {Divider} from "@nextui-org/divider";
import {Badge} from "@nextui-org/badge";
import {Tooltip} from "@nextui-org/tooltip";
import {Chip} from "@nextui-org/chip";
import { Link } from 'react-router-dom'
// import Ferdi from '/home/thodex/Desktop/website/src/images/trump.jpeg' 
import { CreatePost } from '../Content_section/CreatePost'







export const SidebarL = () => {
  const [isOpen,setisOpen] = useState(false)


  const data = localStorage.getItem("data")
  
  const User = JSON.parse(data)

  const handleModelOpen = () =>{
    document.body.style.overflow= "hidden"
    setisOpen(true)
  }

    const CreatePostModal = ()=>{
     

    const handleClick = (e)=>{

     if(e.target.id === "modal" )
      document.body.style.overflow = "auto"
      setisOpen(false)
    
    }
    
  
    return(   
    <div backdrop={"blur"}  className={`${isOpen ? "flex justify-center items-center fixed top-0 left-0 backdrop-blur-sm   z-50 w-screen min-h-screen " : "hidden"}  `} id='modal' onClick={handleClick} >
      <div className=" flex flex-col justify-center items-center bg-black border-2 border-green-300 rounded max-h-96 min-w-[700px]" >
       
            <h1 className=" text-white font-extrabold text-2xl ">Create Post</h1>
            <div className='overflow-auto'>
               <CreatePost/>
            </div>
     
      
      </div>
    </div>
    )
  }
  
  

  
  return (
  

    <div className="sticky top-0 z-50 flex flex-col justify-between items-center w-72  px-2  h-screen border-r-2 border-solid border-green-300  ">
      <CreatePostModal/>
      <div className="py-3"><WebsiteIcon /></div>
      <div className="mb-12">
        <ul className='p-3'>   
          <li><Link to={"/home"}k>< Button color="primary" variant="light" startContent={<Badge  content={"99+"} color="success" variant="solid" placement="top-left" ><HomeIcon/></Badge>}   size='lg' className=" text-3xl mb-8    text-white hover:bg-white transition ease-in-out duration-1000 hover:translate-x-6 h-16" >Home</Button></Link></li>
          <li><Button color="primary" variant="light" startContent={<SearchIcon/>} size='lg' className=" text-3xl mb-8   text-white hover:bg-white  transition ease-in-out duration-1000 hover:translate-x-6 h-16">Search</Button></li>
          <li><Button color="primary" variant="light" startContent={<Badge content={"100"}  color="success" variant="solid" placement="top-right" ><MessagesIcon/></Badge>} size='lg' className=" text-3xl mb-8 text-white hover:bg-white  transition ease-in-out duration-1000 hover:translate-x-6 h-16" >Messages</Button></li>
          <li><Link to={"/home/profile"}><Button color="primary" variant="light" startContent={<Badge content={"5"}  color="success" variant="solid" placement="top-right" ><ProfileIcon/></Badge>} size='lg' className=" text-3xl mb-8  text-white hover:bg-white  transition ease-in-out duration-1000 hover:translate-x-6 h-16">Profile</Button></Link></li>
          <li><Button color="primary" variant="light" startContent={<Badge content={"5"}  color="success" variant="solid" placement="top-right" ><MarketIcon/></Badge>} size='lg' className=" text-3xl mb-8  text-white hover:bg-white  transition ease-in-out duration-1000 hover:translate-x-6  h-16" >Market</Button></li>
          <li><Button  variant="shadow" startContent={<PostIcons/>} size='lg' className=" text-3xl mb-8   text-white bg-green-500  font-bold text-center ml-4" onClick={handleModelOpen}>Post</Button></li>
        </ul>
      </div>

      <Card className="py-2 min-w-48  max-w-52 mb-16  transition ease-in-out duration-1000 hover:-translate-y-1 bg-black border-2 border-solid border-green-300 rounded-md">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
    
        <h4 className="font-bold text-large m-1 text-white" >{User.UserName}</h4>
        <Divider />
      </CardHeader>
      <CardBody className="overflow-visible py-2">
       
        <Image
          isBlurred
          isZoomed
          alt="Card background"
          className="object-cover rounded-xl"
          src={User.img}
          width={270}
          height={270}
        />
      </CardBody>
    </Card>
      
    </div>
  )
}
