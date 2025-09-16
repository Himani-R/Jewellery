import Navbar from "./Components/Global/Navbar";
import Hero from "./Components/Local/Hero";
import Services from "./Components/Local/Services";
import About from "./Components/Local/About";
import Contact from "./Components/Local/Contact";
import Footer from "./Components/Global/Footer";
import Page2 from "./Components/Local/page2";


function land () {
    return (  
        <>
        
        <Hero/>
        <Services/>
         <Contact/>
        <About/> 
       
      <Footer/> 
     

      {/* <Page2/>  */}
        </>
       
    );
}

export default land;