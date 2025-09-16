
import React, { use } from 'react'
import { useNavigate } from 'react-router-dom'
function Services(){
    const nev=useNavigate()
    return(
        <>
      
        <div className="services">
            <h2>Our Services</h2>
        </div>
       
        <div className="services-main">
            <div className="services-image">
                <img src="src\assets\image\pexels-the-glorious-studio-7541807.png" alt="" />
            </div>
            <div className="services-content">
                <h2>Custom Jewelry</h2>
                <p>Our team specializes in designing and crafting complex custom jewelry in gold or platinum. Our 3D designers can work with even the most complex ideas and create a digital model for you to approve before committing to production. </p>
                <button onClick={()=>{nev('/Jewelry')}}>Read More</button>
            </div>
        </div>



          <div className="serv">
           <div className="services-main">
          
            <div className="services-content">
                <h2>Engagement Ring</h2>
                <p>Our team of 3d modelers and jewelers can create literally any ring you can imagine, including complex designs. We're opening up our services to private clients, so you can get a beautiful, designer quality engagement ring at an affordable price. </p>
                <button onClick={()=>{nev('/Jewelry')}}>Read More</button>
            </div>

              <div className="services-image">
                <img src="src\assets\image\pexels-say-straight-2735970.png" alt="" />
            </div>
        </div>
    </div>

        <div className="services-main">
           <div className="services-image">
                <img src="src\assets\image\Rectangle 7.png" alt="" />
            </div>

            <div className="services-content">
                <h2>Jewelry Manufacturing</h2>
                <p>We work with you to make sure your jewelry is produced exactly as your specify and with impeccable standards. We can manufacture a unique collection for your store, or even work with custom orders for your customers.  </p>
                <button onClick={()=>{nev('/Jewelry')}}>Read More</button>
            </div>

             
        </div>


        <div className="services-limits">
            <div className="limits-image">
                <img src="src\assets\image\Rectangle 9.png" alt="" />
            </div>
            <div className="limits-content">
                <h2>No limits to the lifestyle you deserve.</h2>
                <p>Contact us and we’ll reply you back with  personalized plan and quote.</p>
                <button>Send Your Design Idea</button>
            </div>
        </div>

        </>
    )
}
export default Services