import React from 'react'
import { useState ,useEffect,useMemo} from 'react'
import { WebsiteIcon } from '../../svgs/Icon'
//  import Loginİmage from '/home/thodex/Desktop/website/Frontend/src/images/login.png'
import { Image } from '@nextui-org/image'
import { Input } from '@nextui-org/input'
import { EyeFilledIcon,EyeSlashFilledIcon } from '../../svgs/Icon'
import { Button } from '@nextui-org/button'
import { json, Link } from 'react-router-dom'
import axios from 'axios'
import { Spinner } from '@nextui-org/spinner'
import { useNavigate } from 'react-router-dom'
import { ImageIcon } from '../../svgs/Icon'


export const Register = () => {
    const WordsArray = ["ART","SCİENCE","TECHNOLOGY"]

    const [isVisible, setIsVisible] = useState(false);


    const [isButtonOn,setisButtonOn] = useState(true)

    const [Words,setWords] = useState("ART")

    const [Load,setLoad] = useState(false)
    
    const [UserData,setUserData] = useState({email:"",password1:"",password2:"",img:""})


    const validateEmail = (value) => value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

    const navigate = useNavigate()

        
    const isInvalid = React.useMemo(() => {
        if (UserData.email === "") return false;
    
        return validateEmail(UserData.email) ? false : true;
      }, [UserData.email]);

      
    const toggleVisibility = () => setIsVisible(!isVisible);
    



    useMemo(
        () => {
            if (UserData.email === "" || UserData.password1.length<5 ||  UserData.password2.length<5)
                setisButtonOn(true);
    
            if(validateEmail(UserData.email) && UserData.password1.length>=5  && UserData.password2.length>=5)
                 {
                    setisButtonOn(false)
                 }
           
        },[UserData])



        useEffect(()=>{
            const timeout =   setTimeout(() => {
                 if( Words === WordsArray[0])
                {  
                    setWords(WordsArray[1])
                }
                else if(Words === WordsArray[1])
                {
                    setWords(WordsArray[2])
                }
                else if(Words === WordsArray[2])
                {
                    setWords(WordsArray[0])
                }
                
                 },3000 );




                 return ()=>{clearTimeout(timeout)}
                },[Words])


                const handleFile = ()=>{

                    const input = document.createElement("input")
                    input.type ="file"
                    input.accept = "image/jpeg,image/png,image/webp,image/gif"
                    input.click()

                    input.onchange = (event) => {
                        const file = event.target.files[0]
                        const reader = new FileReader()
                        reader.addEventListener("load",()=>{
                          
                          setUserData({...UserData,img:reader.result})
                    
                        })
                         reader.readAsDataURL(file)
                    }


                }



                const  handelsumbit = (e)=>{
                    e.preventDefault()
                    setLoad(true)
                    const ApiRequest = async ()=> {
                   
                        try{
                            console.log("fetching")
                            const response  =  await axios.post("http://localhost:5000/api/users/register",{"UserName":"Abdullah","email" : UserData.email,"password" :UserData.password1,"img":UserData.img})
                            console.log(response.data)
                            localStorage.setItem("data",JSON.stringify(response.data))
                      
                          setLoad(false)
                          navigate("/home")

                        }
                        catch(error)
                         {
                            console.log(error)
                            setLoad(false)
                         }
                      

                    }
                


                    ApiRequest()
                   }


                   const Skeleton_model = () => {
                    return( 
                         <div className="flex justify-center items-center p-7">
                             <Spinner label="Loading ....." color="success" labelColor='success'/>
                          </div>
                          )}


    
  return (
    <div className="flex flex-row bg-black h-screen">

        <div className="flex flex-col border-r-4 justify-center items-center border-green-300 max-w-[1100px] min-w-[1000px] ">
            <div className=" flex flex-col mt-5 justify-center items-center">
            <WebsiteIcon />
            <h1 className="text-green-300 mt-2 text-3xl ">Welcome to 长ㄖㄩ.尸㇄闩ㄚ </h1>
            </div>  
        <div className="flex flex-col gap-4  h-screen mt-10" >
            <ul>
                <li><Image src={""} isZoomed width={800} isBlurred className='border-2 border-green-300' /></li>
                <li> <div className='flex flex-row gap-2  mt-10'>
            <h1 className="text-white text-3xl ">FOR A QUARTER CENTURY </h1>
            <h1 className="text-green-300 min-w-52 bg-white text-center text-3xl font-bold ">{Words}</h1>
            </div></li>

            <li> <h1 className="text-white text-3xl font-extrabold  ">IS BORN HERE.</h1></li>
       
           <li> <div className='flex flex-row gap-2  mt-10'>
            <h1 className="text-white text-3xl font-bold ">Experience the Campus</h1>
            <h1 className="text-green-300 min-w-52 bg-white text-center text-3xl font-bold">Online</h1>
            </div></li>
          
            </ul>
            <p className="text-center p-10 text-white">&copy; 2024 KOU inc.</p>
        </div>

        </div>

        <div className=" flex-1 flex flex-col justify-center items-center gap-4 min-w-48 ">
            <form className='border-3 border-green-300 p-12 rounded-lg' onSubmit={(e) => {handelsumbit(e)}}>
                <ul  className="flex flex-col gap-8">

                    <li><h2 className=' font-extrabold text-xl  text-white '>Register:</h2></li>

                    <li> <Input isRequired autoComplete="new-email" className='text-white ' value={UserData.email}  isInvalid={isInvalid}  errorMessage="Please enter a valid email" onChange={(e) => { setUserData({...UserData,email:e.target.value})}} type="email" variant={'bordered'} label="Email" placeholder="Enter your email" /></li>

                       
                    <li><Input isRequired className='text-white' autoComplete="new-password" value={UserData.password1}  onChange={(e) => { setUserData({...UserData,password1:e.target.value})}} label="Password" variant="bordered" placeholder="Enter your password" endContent={ <button className="focus:outline-none" type="button" onClick={toggleVisibility}> {isVisible ? (   <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />         ) : ( <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" /> )}       </button> }type={isVisible ? "text" : "password"}/></li>

                    <li><Input isRequired className='text-white'  value={UserData.password2}  onChange={(e) => { setUserData({...UserData,password2:e.target.value})}} label="Password" variant="bordered" placeholder="Confirm your password" endContent={ <button className="focus:outline-none" type="button" onClick={toggleVisibility}> {isVisible ? (   <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />         ) : ( <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" /> )}       </button> }type={isVisible ? "text" : "password"}/></li>
               
                    <li>  <Button isIconOnly color="success"  aria-label="add image" onClick={handleFile}> <ImageIcon width={24} height={24} /></Button></li>


                    <Button  variant="shadow"  size='lg' className=" text-3xl mb-4  text-white bg-green-500  font-bold text-center "  type="submit" isDisabled={isButtonOn}>Submit</Button>

                    <li>{Load ? Skeleton_model() : ""}</li>
                </ul>
     
            </form>


            <h2 className=' font-extrabold text-xl text-center  text-white'>OR:</h2>

            <Link to="/">
            <Button  variant="shadow"  size='lg' className=" text-3xl mb-4 mt-4 text-white   font-bold text-center bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ">Login</Button>
            </Link>
           

        </div>
    </div>
  )
}
