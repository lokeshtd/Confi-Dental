// src/components/Services.js
import React from 'react';
import tc from './images/female-dentist-suggesting-to-brush-teeth-regularly-5794933-4850961.webp';
import tw from './images/tooth-transparent-background-21.png';
import braces from './images/Veneers-2-1024x1024.webp';
import implant from './images/Dental_Implant_2.webp';
import canal from './images/Premolar.webp'

const Services = () => {
  return (
    <section className="services">
      <h2>Our Services</h2>
      <ul className='flex-container'>
        <li className='flex-box'>Teeth Cleaning
         <img src={tc} alt='' className='tc'/>
        </li>
        <li className='flex-box'>Teeth Whitening
        <img src={tw} alt='' className='tw' />        
        </li>
        <li className='flex-box'>Braces
        <img src={braces} alt='' className='braces' />
        </li>
        <li className='flex-box'>Dental Implants
        <img src={implant} alt='' className='implants' />
        </li>
        <li className='flex-box'>Root Canal Treatment
        <img src={canal} alt='' className='canal' />
        </li>
      </ul>
    </section>
  );
};

export default Services;
