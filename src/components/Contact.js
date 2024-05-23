// src/components/Contact.js
import React from 'react';

const Contact = () => {
  return (
    <section className="contact">
      <h2>Contact Us</h2>
      <ul className='int'>
        <div className='box-1'>
          <div className='box-1-1'>
      <li className='contact-address'><span className='contact-span'>Address</span><br></br>
      No.26, Balaji Nagar, Sri Chakra Salai
      ,<br></br> Police Station Road,<br></br>Mangadu, Chennai - 600 122.
      </li>
      </div>
      <div className='box-1-2'>
      <li className='working-hrs'>
        <span className='contact-span'>Working Hours</span><br></br>
        Monday   9.00 AM - 8.00PM<br></br>
        Tuesday   9.00 AM - 8.00PM<br></br>
        Wednesday   9.00 AM - 8.00PM<br></br>
        Thursday   9.00 AM - 8.00PM<br></br>
        Friday   9.00 AM - 8.00PM<br></br>
        Saturday   9.00 AM - 8.00PM<br></br>
        Sunday   9.00 AM - 1.00PM<br></br>
      </li>
      </div>
      </div>
      <div className='box-2'>
        <div className='box-2-1'>
      <li className='mobile'><span className='contact-span'>Mobile Number</span><br></br>
      +91 9638527410
      </li>
      </div>
      <div className='box-2-2'>
      <li className='join'><span className='contact-span'>JoinUs</span><br></br>
      <ul>
      <li><a href="#">Facebook</a></li>
      <li><a href="#">Instagram</a></li>
      <li><a href="#">X</a></li>
      <li><a href="#">LinkedIn</a></li> 
      </ul>
      </li>
      </div>
      </div>
      </ul>

    </section>
  );
};

export default Contact;
