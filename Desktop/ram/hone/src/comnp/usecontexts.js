import ThemeContext from "./createcontext"
import React, { Children, useState } from 'react'
import Alert1 from "./alert1"



export default function Usecontexts() {
    const [mode, setmode] = useState("");
    const [name, setname] = useState("");
    const [alertvai, setalertvai] = useState(false);
    const hire = () => {
    
        setname("you have been hired");
        setmode("success")
        setalertvai(true);
        setTimeout(() => {
    
          setalertvai(false)
      
        }, 2000)
    
    
    
      }
  return (
    <ThemeContext.Provider value={{hire}}>
            {Children}
    </ThemeContext.Provider>
  )
}
