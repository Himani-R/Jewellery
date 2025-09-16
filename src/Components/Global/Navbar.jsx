import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import {useState} from "react";
import { MdOutlineMenu } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";
function Navbar() {
  const [isOpen , setIsOpen] =  useState(false);
   const nev=useNavigate();
   console.log(isOpen)
  return (
   
   <>
     <nav>
       <div className="nav">
        <div className="nav-data">
          <div className="nav-logo">
            <img src="src\assets\image\FJ.png" alt="" />
          </div>

           <div className="nav-toggle" onClick={()=>{setIsOpen(!isOpen)}} >
            {!isOpen ? (
                
                  <MdOutlineMenu className='menu-icon'/>
              
            ): (
              
                <IoCloseOutline/>
        
            )}
           
           
           
          </div>

        </div>


          <div className="nav-links">
            <ul className={''} >
                <Link to={'/Home'} ><li>Home</li></Link>
                 <Link to={'/Services'} ><li>Services</li></Link>
                   <Link to={'/ContactUs'} ><li>Contact</li></Link>
                 <Link to={'/About'} ><li>About Us</li></Link>
            </ul>
            {isOpen && <div>
                      <Link to={'/Home'} ><li>Home</li></Link>
                 <Link to={'/Services'} ><li>Services</li></Link>
                   <Link to={'/ContactUs'} ><li>Contact</li></Link>
                 <Link to={'/About'} ><li>About Us</li></Link>
            </div>

            }
             <button onClick={()=>{nev('/ContactUs')}}>Contact</button>
        </div>
        
        </div> 
     </nav>
   </>
  )
}

export default Navbar