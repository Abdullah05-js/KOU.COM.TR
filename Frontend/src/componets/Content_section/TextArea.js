
import React from 'react'
import { useState} from 'react'
import Picker from '@emoji-mart/react'
import data from "@emoji-mart/data"

export const TextArea = ({isOn,SetisOn}) => {

  const [Row,setRow] = useState(1)

  const [TextValue,setTextValue] = useState("")
  
 
      return (
        <>
        <textarea 
        value={TextValue}
        cols={"40"} 
        rows={`${Row}`}
         className="p-3 mt-10 bg-black text-white"
         onChange={(e)=>{
          
          setTextValue(e.target.value)
          e.target.value.length+2 >= (Row)*43 ? setRow((v)=>v+1) : console.log()

        }}
        placeholder="Ders Notu var mı???"
        >
    
        </textarea>



</>
      )
    }
  
      
    
 

