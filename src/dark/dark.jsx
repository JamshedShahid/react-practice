import React, {useState,useEffect} from 'react'
import"./style.css"


const Dark =()=>{
    // const [dark,setMood] = use(false)
    let [dark,Set] = useState(false)
    return(
        <div className= {dark ? "App dark-mood" : "App"}>
            <div className='nav'>
            <label class="switch">
       <input type="checkbox"
        onChange={()=>Set(!dark)}
       />
       <span class="slider round"></span>
       </label>
            </div>
            <div className='content'>
                <h1>{dark?"Dark Mood On" :"Light Mood On"}</h1>
                <p style={{fontSize : "20px"}}>Want to see Magic ? Press Toogle Button</p>
            </div>
            
        </div>
    )
}
export default Dark