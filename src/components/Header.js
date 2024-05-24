// src/components/Header.js
import React from 'react';
import logo from './images/Confi logo.png';

const Header = () => {
  return (
    <header>
      <nav className='nav'>
      {/* <button type='button' className='login-home-btn'>Login/Sign up</button> */}
      <img src={logo} className='logo' alt='' />
      <h1 className='confi'>Confi <span className='head'>Dental Clinic</span></h1>
        <ul >
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button type='button'>Appointment</button>
      </nav>
    </header>
  );
};

export default Header;
