// src/components/Home.js
import React from 'react';
import dental3d from './images/Dental_Implant_2.webp'

const Home = () => {
  return (
    <section className="home">
      <h2><span className='welcome'>Welcome</span> <br></br><span className='CDC'>to Confi Dental Clinic</span></h2>
      <p className='quote'>“Life is a mirror: If you frown at it, it frowns back; if you smile, it returns the greeting.”</p>
      <p className='quote-author'>- William Makepeace Thackeray </p>
      <img className='dental3d' src={dental3d} alt='' />
    </section>
    
  );
};

export default Home;
