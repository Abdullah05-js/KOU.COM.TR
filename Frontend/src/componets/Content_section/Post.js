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

  const [isFollowed,setisFollowed] = useState(false)

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
      <div onClick={handleModelOpen}>

      <Card  className="p-3 border-b-2 border-green-300 rounded-none bg-black cursor-pointer" >
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

        {isFollowed ? <Button  variant="shadow" size='md' className=" text-2xl  text-white bg-green-500  font-bold text-center">Follow</Button> : ""}

      </CardHeader>
      <Divider className="bg-green-300"/>
      <CardBody className="felx flex-col items-center">
        <p className="text-white max-w-96 overflow-y-auto ">{content}</p>
        <Image
        alt="Woman listing to music"
        className="object-cover border-2 border-green-300"
        height={270}
        src={body_image }
        width={330}
        
      />
      </CardBody>
      <Divider className="bg-green-300"/>
      <CardFooter className="flex flex-row gap-3 justify-between">


      <div className="flex flex-row gap-2">
      <Button isIconOnly  className=" bg-black " aria-label="Like ">
        <LikeIcon  width={36} height={36} />
        </Button>

        <Button isIconOnly  className="  bg-black "  aria-label="Comment">
          <CommentIcon width={36} height={36} /> 
        </Button>

        <Button isIconOnly  className=" bg-black" aria-label="Share">
          <ShareIcon width={36} height={36}  /> 
        </Button>
      </div>



      <div  className="flex flex-row gap-2">

      <Chip  color="success" variant="bordered" className="font-bolder text-base text-white ">Likes:{likes}</Chip>
      <Chip  color="success" variant="bordered" className="font-bolder text-base text-white ">Comments:{comments}</Chip>
      <Chip  color="success" variant="bordered" className="font-bolder text-base text-white ">Shares{shares}</Chip>
      <Chip  color="success" variant="bordered" className="font-bolder text-base text-white ">View:{views}</Chip>

      </div>



      </CardFooter>
    </Card>
    </div>
    </>
  )
}
