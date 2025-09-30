import React from 'react';
import './Features.css';
import pic6 from './assets/pic-6.png'; // Update if needed

const Features = () => {
    return (
        <div className="features-container">
            <div className="features-left">
                <img src={pic6} alt="Feature" />
            </div>
            <div className="features-right">
                <p className='para'>Our Features</p>
                <h1>The Reliable, Cheap & Fastest Way To Send Money Abroad</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem eaque, odit itaque tempore omnis...
                </p>

                <div className="features-list">
                    <div className="feature-item">
                        <span className="material-icons">security</span>
                        <div>
                            <h3>Secure Transfers</h3>
                            <p>We keep your transfers safe,
                                with strong encryption and privacy features,
                                ensuring peace of mind with every send,Your money is transferred securely,
                                using industry-leading encryption protocols,
                                so you can trust every transaction is protected.</p>

                        </div>
                    </div>

                    <div className="feature-item">
                        <span className="material-icons">flash_on</span>
                        <div>
                            <h3>Lightning Fast</h3>
                            <p>Experience lightning-fast money transfers with our cutting-edge technology that ensures your funds arrive in seconds, not days. Whether you're sending money across the street or across the globe, our streamlined systems minimize delays and eliminate unnecessary waiting..</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;
