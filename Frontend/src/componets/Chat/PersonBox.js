import React, { useLayoutEffect ,useState} from 'react'
import { Avatar } from '@nextui-org/avatar'
// import Ferdi from "/home/thodex/Desktop/website/Frontend/src/images/GSIVyYDWIAAXS5m.jpeg"
import { useNavigate } from 'react-router-dom'
import { socket } from './socket'
import axios from 'axios'

export const PersonBox = ({Key,UserID}) => {

  const [User,setUser] = useState();

const navigate = useNavigate()

  const handleChat = ()=>{
    socket.emit("join-room",{room:Key})
    navigate(`/chat/${Key}`)

  }

  useLayoutEffect(() => {
    const getUser = async () => {
      try {
        const data = localStorage.getItem("data");
        const token= JSON.parse(data).token;
        const response = await axios.get("http://localhost:5000/api/users/getUser",{params:{
          id:UserID,
          token
        }})

        const {UserName,img} = response.data;

        setUser({
          UserName,
          img
        })

      } catch (error) {
        console.log(error);
      }
    }

    getUser();
  },[UserID])


  // this hook block ui so the ui will wait until this hook done its work


  return (
    <button onClick={handleChat} className='min-h-24 flex flex-col justify-center items-center  min-w-80 overflow-auto cursor-pointer border-2 border-green-500 rounded-xl'>


            <div className='flex flex-row justify-center items-center gap-2'>
                <Avatar  radius="sm" src={User.img} className="border-2 border-green-300 object-cover"/>
                <h2 className='text-white font-extrabold text-xl'>{User.UserName}</h2>
                {/* <p className="text-gray-400 font-light  " ></p> */}
            </div>

            <h2 className='text-center text-white'>`"+${"lan nerdesin  gel halısahaya"}+"`</h2>
            
    </button>
  )
}


