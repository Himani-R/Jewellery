import React from 'react'
import { GoArrowRight } from "react-icons/go";
function Hero() {
  return (
    <>
    <div className="hero">
        <div className="hero-content">
             <h2>Beautiful, masterful design never goes out of fashion.</h2>
             <div className="hero-button">
                 <button id='hero-but1'>Contact</button>
             <button id='hero-but2' >Gallery <GoArrowRight /> </button>

             </div>
            

        </div>
        <div className="hero-image">
            
            <div className="img1">
                <img src="src\assets\image\Mask Group.png" alt="" />
        
                <img className='hero-i' src="src\assets\image\Rectangle 43.png" alt="" />
            </div>
            <div className="img2">
                <img src="src\assets\image\pexels-w-w-2799862.png" alt="" />
            </div>
           

          
        </div>
         {/* <img className='hero-i' src="src\assets\image\Rectangle 43.png" alt="" /> */}
       
    </div>
    </>
  )
}

export default Hero