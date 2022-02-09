import React, { useState } from 'react'
import Imgoff from "./images/off.jpg"
import ImgOn from "./images/ONbulb.jpg"
import "./dark/style.css"



const Modes = () => {

  // bulb Setting
  const [bulb, setBulb] = useState(Imgoff)

  const [onOffText, btnText] = useState("ON")
  const toggleBulbBtn = (e) => {
     
      if (bulb == Imgoff) {
          setBulb(ImgOn)
          btnText("OFF")
      } else {
          setBulb(Imgoff)
          btnText("ON")
      }
  }





return (
  <div >

      <section className='names' >
          <img id="img" src={bulb} width="200px" alt="" />
          <button  onClick={() => toggleBulbBtn("ab")}>{onOffText}</button>
      </section>
      
  </div>

)
}
export default Modes
