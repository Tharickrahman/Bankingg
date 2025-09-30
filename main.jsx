import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Service from'./Service'
import Features from'./Features'
import Footer from'./Footer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
    
     <Navbar />
	  <Home />
	  <About/>
    <Service/>
    <Features />
    <Footer />
    </>
   
  </StrictMode>,
)
