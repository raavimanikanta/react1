import React, { useState } from "react"

const Function=()=>{
    const [status,setstatus]=useState(true)

    const clickfun=()=>{
        setstatus(!status);
    }
    
    return (
        <div>
            <div className="btndiv">
        <button className="btn1" onClick={clickfun} >To see styling in functional Component</button>
        </div>
       
        {
         status ?   <div className="fun1">
           <h2>This is created using Functional component </h2> 
           <p className="para1">This is done using external Css</p>
           <p style={{color:"red"}}>This is done by using inline  css</p>
        </div> : null 
        }
        
        </div>
    )
}
export default Function