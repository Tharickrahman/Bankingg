
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="header">
      <img src="./src/assets/logo-3-ed.png" alt="bank" className="logo" />

      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item dropdown">
            <a href="#home">Home ▼</a>
            <ul className="dropdown-menu">
              <li><a href="#home1">Home 01</a></li>
            </ul>
          </li>

          <li className="nav-item">
            <a href="#about">About</a>
          </li>

          <li className="nav-item dropdown">
            <a href="#services">Services ▼</a>
            <ul className="dropdown-menu">
              <li><a href="#service1">Service 01</a></li>
              <li><a href="#service2">Service 02</a></li>
              <li><a href="#service3">Service 03</a></li>
            </ul>
          </li>

          <li className="nav-item">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
