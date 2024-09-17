import React from 'react'
import { Post } from './Post'
import { useEffect,useState} from 'react'
import axios from 'axios'

// import Ferdi from '/home/thodex/Desktop/website/src/images/trump.jpeg' 
import { Spinner } from '@nextui-org/spinner'


 let cancelAxios = null

export  const Posts = ({isCreatePostOn,setisCreatePostOn}) => {

  const [PostsArray,setPostsArray] = useState([])
  const [Load,setLoad] = useState(true)
  
  const Skeleton_model = () => {
    return( 
      <div className="flex justify-center items-center p-7">
   <Spinner label="Loading ....." color="success" labelColor='success'/>
      </div>
          )}




  useEffect(()=>{
    // const token = JSON.parse(localStorage.getItem("data"))

    axios.get(`http://localhost:5000/api/post` , 
      {
        cancelToken: new axios.CancelToken((c)=> {
          cancelAxios = c
        })
      }
    )
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
      cancelAxios()
    }
    
  },[isCreatePostOn])
   

    const ReturnPosts = PostsArray.map((e) => {
      
        return( 
          
            <Post  KEY={e._id} tag={e.Role} posted_at={e.date} src={e.profilePhoto} name={e.UserName} content={e.content} likes={e.likes} comments={e.comments} shares={e.shares} views={e.views} body_image={e.img} />
        )
    })

   

  return (
    <>
    {Load ? Skeleton_model() : ReturnPosts}
    </>
  )
}
