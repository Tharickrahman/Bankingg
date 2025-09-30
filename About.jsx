
import './About.css';
import React,{ useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const About = () => {
  useEffect(() => {
    AOS.init({
      duration:1000,
      once:true,
    });
  },[]);
  return (
    <div className="testimonial-section">
    <div  className='heading'>
      <h2 className="testimonial-heading">Bank for a Better Tomorrow</h2>
      <p className="test"> Committed to helping Our Customers Succeed.</p>
    </div>
      
<div data-aos="fade-right"className="testimonial-card">
  <div className="card">
        <p >
          "Invest confidently in our fixed deposit plans, designed to provide secure, stable, and predictable returns, ensuring the steady growth and preservation of your capital over a fixed tenure."
        </p>
        
          <img
            src="./src/assets/fixeddepost.png"
            alt="Customer"
            className="author-image"></img>
         
          
            <h2>FIXED DEPOSIT</h2>

          
        </div>
         <div className="card">
        <p >
          "Experience seamless management of your daily business transactions with our flexible and feature-rich current account solutions, designed to support your financial operations efficiently and securely."
        </p>
        
          <img
            src="./src/assets/currentaccount.png"
            alt="Customer"
            className="author-image"></img>
         
          
            <h2>CURRENT ACCOUNT</h2>
            
          
        </div>
         <div className="card">
        <p >
         "Grow your wealth strategically by investing in our diversified mutual fund portfolios, professionally managed to balance risk and maximize returns over the long term."
        </p>
        
          <img
            src="./src/assets/mutualfunds.jpg"
            alt="Customer"
            className="author-image"></img>
         
          
            <h2>MUTUAL FUNDS</h2>
            
          
        </div>
  </div>
  </div>

    
  )
}

export default About;
