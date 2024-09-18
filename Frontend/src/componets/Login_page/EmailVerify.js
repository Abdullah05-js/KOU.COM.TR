import React from 'react'
import { useState } from 'react'
export const EmailVerify = () => {

    const [Otp,setOtp] = useState([])

    const checkOTP = ()=>{
        const inputs = document.querySelectorAll("input")
        inputs.forEach((e)=>{
            e.setAttribute("disabled","disabled")
        })
           
    }

    console.log(Otp)


  const  handleİnput = (e) =>{
    const inputs = document.querySelectorAll("input")
     

        const controller = () =>{
          
                  if(e.target.id !== "3")
                  {
                      inputs[Number(e.target.id)+1].focus() 
                    
                      const NewOtp = [...Otp,e.target.value]
                      
                      setOtp(NewOtp) 

                     
                  }
                  else
                    {
                      const NewOtp = [...Otp,e.target.value]
                      
                      setOtp(NewOtp) 
                      
                      checkOTP()
                    }
                
              
                
        }

        e.target.value.length>1 ? e.target.value = "" : controller()
        
        //better then all the tutorials on youtube lol made by ABDULLAH HAN
                    

  }



  return (
    <div className="bg-black w-screen h-screen flex flex-col justify-center items-center text-white " >
      <h1>OTP verification</h1>
      <h2 className='border-b-2 border-b-green-300 text-center'>Please check your email</h2>

      <div>
      <input type='number'id='0' maxLength={"1"}  className='focus:border-white focus:outline-none focus:border-2  bg-black m-2 border-2 border-green-300 w-14 min-h-14 text-center' onChange={handleİnput}/>
      <input type='number'id='1' maxLength={"1"} className='focus:border-white focus:outline-none focus:border-2  bg-black m-2 border-2 border-green-300 w-14 min-h-14 text-center' onChange={handleİnput}/>
      <input type='number'id='2' maxLength={"1"} className='focus:border-white focus:outline-none focus:border-2  bg-black m-2 border-2 border-green-300 w-14 min-h-14 text-center' onChange={handleİnput}/>
      <input type='number'id='3' maxLength={"1"} className='focus:border-white focus:outline-none focus:border-2  bg-black m-2 border-2 border-green-300 w-14 min-h-14 text-center' onChange={handleİnput}/>
      </div>
    </div>
  )
}
