import React,{useState,useEffect} from 'react'
import { PersonBox } from './PersonBox'
import "./style.css"
import axios from 'axios'



let cancelAxios = null
export const Room = () => {

     const [RoomArray,setRoomArray] = useState([{id:"4353535",Rooms:[]}])


    // const data = {
    //   rquestSneder : "235345354",

    //   //the string in the chats i the chat id 
    //   chats:["3242","23552","2532525"]
    // }


    useEffect( ()=> {

      const localToken = JSON.parse(localStorage.getItem("data")).token
                 
     axios.get(`http://localhost:5000/api/rooms` , {params:{"token":localToken}},
      {
        cancelToken: new axios.CancelToken((c)=> {
          cancelAxios = c
        })
      }
    )
    .then((Response)=>{
          console.log("respone for room list-------",Response)
          // setRoomArray(Response)
      
    })
    .catch((error)=>{

      // console.log(error.response.data.error)

    })

   
    return () => {
      console.log("cancleing ")
      cancelAxios()
    }
                 
 
          },[])

    const PorfileBoxList = RoomArray.chats.map((e)=>{
      
      return <PersonBox Key={e}  />
    })




    return (
      <div id='room' className="sticky top-0 z-40 flex flex-col justify-start gap-2 items-center min-w-[350px]  h-screen border-l-2 border-solid border-green-300 overflow-y-scroll overflow-x-hidden">
        <div className='mt-1'></div>

          {PorfileBoxList}
      </div>
    )
}
