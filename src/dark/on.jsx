import React, { useState } from "react";
import Img from "../images/ONbulb.jpg"
import Im from "../images/off.jpg"

const On =()=>{


const [Name,fullName] = useState({Img})
let handle =()=>{
     fullName({Im})
}
return(
    <div>
        <img src={Im} alt="" />
        <button onClick={handle} >on</button>
    </div>
)
}
export default On