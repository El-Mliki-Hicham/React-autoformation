import React from "react";
import { useState } from "react";


const PageUseState=()=>{
    const [name , setName]  = useState("Hicham");
    

   const setData=()=>{
        setName('nada')
    }   

    return(
    <div>
       <h1> hello {name}</h1>
       <button onClick={setData}> set name</button>
    </div>
)
}

export default PageUseState;