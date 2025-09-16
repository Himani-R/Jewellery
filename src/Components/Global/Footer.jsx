import React from 'react'
import { CiMail } from "react-icons/ci";
import { IoMdPhonePortrait } from "react-icons/io";
function Footer() {
  return (
    <>
     <div className="footer">
    <div className="footer-main">
        <div className="naam">
            <h2>Naam</h2>
            <p>At NaamNYC, we work with high-end designers (both new and established), retail stores, and also private clients looking for that perfect custom piece or engagement ring.</p>
        </div>
        <div className="footer-about">
            <h2>About us</h2>
             <ul>
                <li>Services</li>
                <li>Gallery</li>
                <li>About Us</li>
             </ul>
        </div>
        <div className="support">
            <h2>Support</h2>
             <div className="support-icon">
              <div className="msg">
                <CiMail />
                <h3> hello@naamnyc.com</h3>
                
              </div>
              <div className="phone">
                <IoMdPhonePortrait />
                <h3> +12-345-6789</h3>
              </div>
               <div className="icon">
              <img src="src\assets\image\twitter 2.png" alt="" />
              <img src="src\assets\image\facebook 2.png" alt="" />
              <img src="src\assets\image\instagram 2.png" alt="" />
               </div>
             </div>

        </div>
    </div>
    </div>
    </>
  )
}

export default Footer