import React from 'react'
import { Card,CardBody,CardHeader,CardFooter } from '@nextui-org/card'
import { Divider } from '@nextui-org/divider'
import { Image } from '@nextui-org/image'
import { Chip } from '@nextui-org/chip'
import { useState } from 'react'
import { Button } from '@nextui-org/button'
import { LikeIcon ,CommentIcon,ShareIcon} from '../../svgs/Icon'
import { PostPage } from './PostPage'
import { useNavigate } from "react-router-dom";


export const Post = ({KEY,src,tag,name,content,likes,comments,shares,views,body_image,posted_at}) => {

  const navigate = useNavigate()

  const [isOpen,setisOpen] = useState(false)

  const [isFollowed,setisFollowed] = useState(true)

  const handleModelOpen = ()=>{
    document.body.style.overflow = "hidden"
     navigate(`/home/${KEY}`)
    setisOpen(true)
  }


  const CreatePostModal = ()=>{

    const handleClick = (e)=>{


     if(e.target.id === "modal" )
     {
      document.body.style.overflow = "auto"
       navigate(`/home`)
      setisOpen(false)
     }
    
    }
    
  
    return(   
    <div backdrop={"blur"}  className={`${isOpen ? "flex justify-center items-center fixed top-0 left-0 backdrop-blur-sm   z-50 w-screen min-h-screen " : "hidden"}  `} id='modal' onClick={handleClick} >
      <div className=" flex flex-col justify-center items-center bg-black border-2 border-green-300 rounded  " >
       
            
            <div>
               <PostPage />
            </div>
     
      
      </div>
    </div>
    )
  }

  const Roles = tag && ""

//  const Roles = tags.map((tag,index)=> {
//     return( <Tooltip key={index} content="CO-Founder" color="danger" ><Chip className="m-0.5" color="danger" variant="bordered">{tag}</Chip></Tooltip>)
//     })


 
  return (
    <>
      <CreatePostModal/>
      <Card  className=" flex flex-col gap-4 p-3 border-b-2 border-green-300 rounded-none bg-black cursor-pointer" >
      <CardHeader className="flex gap-3 justify-between items-center ">

        <div className="flex gap-3">
        <Image
          alt="nextui logo"
         
          radius="sm"
          src={src}
           fallbackSrc="https://via.placeholder.com/300x200"
          className="border-2 border-green-300 max-w-11 max-h-11 min-w-10 min-h-10"
        />


        <div className="flex flex-col justify-center items-center ">
          <p className="text-md text-white">{name}  -  {posted_at}</p>
        </div>

        </div>
      
      

        <div className="flex gap-1  max-w-44 overflow-x-auto">
         { 
          Roles
          }     
        </div>

        {isFollowed ? <Button   size='md' className=" text-xl  text-white bg-transparent font-semibold border-2 border-primary text-center">Follow</Button> : ""}

       
      </CardHeader>
      <CardBody className='flex flex-wrap gap-2 justify-center items-start min-h-14'>
        <p className="text-white max-w-96 overflow-y-auto ">{content}</p>
        {
          body_image && (<Image
        alt="Woman listing to music"
        className="object-cover max-h-[800px]"
       
        src={body_image }
       width={670}
        
      />)
        }
      </CardBody>
     
  
     
      <CardFooter className="flex flex-row gap-3 justify-center items-center  before:bg-white/10 border-white/20  overflow-hidden py-1 before:rounded-xl rounded-large  w-[calc(100%_-_8px)] shadow-small ml-1 ">

    

 

        <div className='flex flex-row justify-center items-center'>
        <Button isIconOnly  className=" bg-transparent " aria-label="Like ">
        <LikeIcon  width={24} height={24} />
        </Button>
        <Chip   className="font-bolder  text-center text-white bg-transparent">{likes}</Chip>
        </div>
  

      <div className='flex flex-row justify-center items-center'>
        <Button isIconOnly  className="  bg-transparent " onClick={handleModelOpen} aria-label="Comment">
          <CommentIcon width={24} height={24} />
        </Button> 
      </div>

   

       <div>
        <Button isIconOnly  className=" bg-transparent" aria-label="Share">
          <ShareIcon width={24} height={24}  /> 
        </Button>
       </div>
    





      </CardFooter>
    </Card>
   
    </>
  )
}
