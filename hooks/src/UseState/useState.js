import React from "react";
import { useState } from "react";


const PageUseState=()=>{
    const [name , setName]  = useState("Hicham");
    

    return(
    <div>
       <h1> hello {name}</h1>
    </div>
)
}

export default PageUseState;