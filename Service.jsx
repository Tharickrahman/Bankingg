import React from 'react';
import './Service.css';
import pic3 from './assets/pic-3.jpg';

const Service = () => {
  return (
    <div className='service-container'>
      <img src={pic3} alt="Banking services" className="service-image" />
      <div className="overlay"></div>

      <div className="text-content">
        <h1>Banking For your Needs</h1>
        <p>The Bank that builds better relationships.</p>
      </div>
<div className="info-boxes">
  <div className="info-box">
    <span className="icon">💳</span>
    <p>Enjoy secure and seamless payments with our advanced encryption and fraud protection systems designed to keep your money safe.</p>
  </div>
  <div className="info-box">
    <span className="icon">📈</span>
    <p>Grow your wealth with personalized investment plans tailored to your goals and risk preferences, guided by our expert advisors.</p>
  </div>
  <div className="info-box">
    <span className="icon">📞</span>
    <p>Get 24/7 customer support through multiple channels ensuring your queries are resolved quickly and efficiently, anytime you need.</p>
  </div>
</div>

    </div>
  );
}

export default Service;
