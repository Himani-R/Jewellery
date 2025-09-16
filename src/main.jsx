import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Land from './Landing.jsx'
import Page2 from './Components/Local/page2.jsx'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Navbar from './Components/Global/Navbar.jsx'
import Services from './Components/Local/Services.jsx'
import About from './Components/Local/About.jsx'
import Contact from './Components/Local/Contact.jsx'
import ContactUs from './Components/Local/ContactUs.jsx'

createRoot(document.getElementById('root')).render(

  <StrictMode>
    
  <BrowserRouter>
 <Navbar></Navbar>
  <Routes>
    <Route path='/' element={<Land/>}/>
    <Route path='/Home' element={<Land/>}/>
    <Route path='/Jewelry' element={<Page2/>}/>
    <Route path='/Services' element={<Services/>}/>
    <Route path='/About' element={<About/>}/>
    <Route path ='/Contact' element={<Contact/>}/>
    <Route path='/ContactUs' element={<ContactUs/>}/>

    </Routes></BrowserRouter>
    </StrictMode>,
)
