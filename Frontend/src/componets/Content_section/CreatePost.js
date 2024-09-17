import React from 'react'
// import {TextArea} from './TextArea'
import { EmojiIcon,ImageIcon,PostIcons} from '../../svgs/Icon'
import { Button } from '@nextui-org/button'
import { User } from '@nextui-org/user'
import { Popover,PopoverContent,PopoverTrigger } from '@nextui-org/popover'
import { Tooltip } from '@nextui-org/tooltip'
import { Chip } from '@nextui-org/chip'
import { useState} from 'react'
import { Image } from '@nextui-org/image'
import Picker from '@emoji-mart/react'
import data from "@emoji-mart/data"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


// let validToken = "128202|eg0sxt0FCRa1oBFsP0SVTf7KV5zgPMmWfFnHm7gF"
export const CreatePost = ({setisCreatePostOn}) => {

const navigate = useNavigate()

const [FilesApi,setFilesApi] = useState([])

const [isPikerOn,setisPikerOn] = useState(false)

const [Row,setRow] = useState(1)

const [TextValue,setTextValue] = useState("")



const user = JSON.parse(localStorage.getItem("data"))

const handlePost = () => {




      const createPost =async () => {
          

        try{

          const data = JSON.parse(localStorage.getItem("data"))
          console.log(data)
          console.log("am in")
          const Response = await axios.post("http://localhost:5000/api/post",{
            "token":data.token,
            "UserName":data.UserName,
            "content":TextValue,
            "img" :FilesApi[0],
            "Roles":false,
            "likes":"1000",
            "veiws":"1200",
            "profilePhoto":data.img
            
          }
          )
          setisCreatePostOn(true)
          setTextValue("")
          setRow(1)
          setFilesApi([])


          console.log("from post requestt",Response)

        }catch(error)
        {
          console.log(error)
          navigate("/")

          
        }


 
                                    }

                                        createPost()
}

const handleFile = () => {
  const input = document.createElement("input")
  input.type = "file"
  input.accept ="image/jpeg,image/png,image/webp,image/gif,video/mp4,video/quicktime"
  input.setAttribute("multiple","")
  input.click()
  input.onchange =async (event) => {
   
    const file = event.target.files[0]
    const reader = new FileReader()
    reader.addEventListener("load",()=>{
      
      setFilesApi([...FilesApi,reader.result])

    })
     reader.readAsDataURL(file)
    
 
  }

 

}

const handleDelete = (index) => {
    console.log("sdc",index)
  let NewFiles = [...FilesApi]
  
  NewFiles.splice(index,1)

  setFilesApi(NewFiles)

}




const Returnİmages = FilesApi.map((file,index) => {
  return (
        
            <Button key={index} isIconOnly  onClick={() => {handleDelete(index)}}  aria-label="add emoji" className="h-[330px] w-[330px] m-2 overflow-hidden bg-black border-2 border-green-300">
            <Image   width={330}  height={330}  className="object-cover" src={file}/>
            </Button>

        )
                                                })


  return (
            
    <div className="flex flex-col justify-center items-center  border-b-2 border-green-300" >

 <div className='flex flex-row gap-4'>

 
    <Popover  showArrow placement="bottom" >
      <PopoverTrigger>
      <User 
        as={"button"}
        className="text-white font-extrabold transition-transform pb-14"
        name={user.UserName}
        avatarProps={{
          src:user.img
        }}
      />
      </PopoverTrigger>
      <PopoverContent className="p-1 bg-black border-2 border-green-300">
      <h2 className="text-center text-white">Roles:</h2>
      <div className="flex gap-1  max-w-44 overflow-x-auto">
        <Tooltip content="Member in KOU" color="success" ><Chip className="m-1" color="success" variant="bordered">KOU</Chip></Tooltip> 
        <Tooltip content="CO-Founder" color="danger" ><Chip className="m-1" color="danger" variant="bordered">CO-Founder</Chip></Tooltip>
        <Tooltip content="Member in KOU" color="success" ><Chip className="m-1" color="success" variant="bordered">KOU</Chip></Tooltip>  
        <Tooltip content="Member in KOU" color="success" ><Chip className="m-1" color="success" variant="bordered">KOU</Chip></Tooltip> 
        <Tooltip content="Member in KOU" color="success" ><Chip className="m-1" color="success" variant="bordered">KOU</Chip></Tooltip> 
        </div>
      </PopoverContent>
        </Popover>

    <div className="flex flex-col justify-start  gap-2 ">


    <textarea 
        value={TextValue}
        cols={"40"} 
        rows={`${Row}`}
         className={`p-3 mt-10 bg-black text-white  overflow-y-scroll `}
         
         onChange={(e)=>{
          
          setTextValue(e.target.value)
          e.target.value.length+2 >= (Row)*43 ? setRow((v)=>v+1) : console.log()

          if(TextValue.length < 30)
            setRow(1)

        }}
        placeholder="Ders Notu var mı???"
        >
    
        </textarea>
   
     
     
      

      <div className="flex flex-row justify-between ">
        <div className="flex flex-row gap-x-2">
        <Button isIconOnly color="success"  aria-label="add image" onClick={handleFile}>
        <ImageIcon width={24} height={24} />
        </Button>
       
       <div>

        <Popover   placement="bottom" >
      <PopoverTrigger>
                    <Button isIconOnly color="success"  aria-label="add emoji" className='flex flex-col' onClick={() =>{setisPikerOn(!isPikerOn)}} >
                           <EmojiIcon width={24} height={24}/>
                    </Button>
      </PopoverTrigger>
      <PopoverContent className="rounded-3xl bg-black border-3 border-green-300">
     
      

          <Picker data={data} onEmojiSelect={(e) => {
            setTextValue(TextValue+e.native)
            }} 
            />

        
      </PopoverContent>
        </Popover>
   
       </div>
       
        </div>

        <Button  variant="shadow" startContent={<PostIcons/>} size='md' className=" text-3xl mb-8   text-white bg-green-500  font-bold text-center ml-4" onClick={() => {handlePost()}}>Post</Button>

      </div>


   
    </div>

    </div>


    <div className='flex flex-col'>
         {Returnİmages}


    </div>

    
 
    
        
    </div>
  )
}
