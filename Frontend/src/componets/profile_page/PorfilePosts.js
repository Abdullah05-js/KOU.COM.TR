import React from 'react'
import { Post } from '../Content_section/Post'
import { useEffect,useState} from 'react'
import axios from 'axios'

// import Ferdi from '/home/thodex/Desktop/website/src/images/trump.jpeg' 
import { Spinner } from '@nextui-org/spinner'




export  const PorfilePosts= ({isCreatePostOn,setisCreatePostOn}) => {

  const [PostsArray,setPostsArray] = useState([])
  const [Load,setLoad] = useState(true)
  
  const Skeleton_model = () => {
    return( 
      <div className="flex justify-center items-center p-7">
   <Spinner label="Loading ....." color="success" labelColor='success'/>
      </div>
          )}




  useEffect(()=>{
     const token = JSON.parse(localStorage.getItem("data"))
    console.log("token",token.token)
    axios.get(`http://localhost:5000/api/profile` ,{params:{"token":token.token}})
    .then((Response)=>{
     setPostsArray(Response.data)
     console.log(Response.data)
     setLoad(false)
     setisCreatePostOn(false)
    })
    .catch((error)=>{

      // console.log(error.response.data.error)

    })

   
    return () => {
      console.log("cancleing ")
     
    }
    
  },[isCreatePostOn])
   

    const ReturnPosts = PostsArray.map((e) => {
      // console.log(e.image)
        return( 
          
            <Post  key={e._id} tag={e.Role} posted_at={e.date} src={e.profilePhoto} name={e.UserName} content={"dfvfdv"} likes={e.likes} comments={e.comments} shares={e.shares} views={e.views} body_image={e.img} />
        )
    })

   

  return (
    <>
    {Load ? Skeleton_model() : ReturnPosts}
    </>
  )
}
