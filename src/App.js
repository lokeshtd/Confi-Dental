// src/App.js
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Services from './components/Services';
import Contact from './components/Contact';
import Appointment from './components/appointment';


import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <Services />
        <Appointment />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default App;
