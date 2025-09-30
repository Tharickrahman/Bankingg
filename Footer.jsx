import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">

        {/* 1. Company Overview */}
        <div className="footer-section about">
        <img src="./src/assets/logo-3-removebg-preview.png" alt="XXXXXXX" className='image' />
          <p>
            Stackly is a next-generation digital banking platform providing secure, fast, and easy financial services.
            We help individuals and businesses manage money with confidence and convenience.
          </p>
        </div>

        {/* 2. Navigation */}
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* 3. Services */}
        <div className="footer-section services">
          <h3>Our Services</h3>
          <ul>
            <li>Secure Money Transfers</li>
            <li>Multi-Currency Accounts</li>
            <li>Online Bill Payments</li>
            <li>Mobile Banking App</li>
            <li>Business Solutions</li>
          </ul>
        </div>

        {/* 4. Resources */}
        <div className="footer-section resources">
          <h3>Resources</h3>
          <ul>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Security Center</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>

        {/* 5. Contact Info + Newsletter */}
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p><strong>Address:</strong> 123 Fintech Ave, Silicon Valley, CA</p>
          <p><strong>Phone:</strong> +1 (555) 123-4567</p>
          <p><strong>Email:</strong> support@stackly.com</p>

          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>

          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i> Facebook</a>
            <a href="#"><i className="fab fa-twitter"></i> Twitter</a>
            <a href="#"><i className="fab fa-linkedin-in"></i> LinkedIn</a>
            <a href="#"><i className="fab fa-instagram"></i> Instagram</a>
          </div>
        </div>

      </div>

      {/* 6. Bottom Legal */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Stackly. All rights reserved. | <a href="#">Privacy Policy</a> | <a href="#">Terms & Conditions</a></p>
      </div>
    </footer>
  );
};

export default Footer;
