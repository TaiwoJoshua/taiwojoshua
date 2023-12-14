import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Certificate from './components/Certificate';
import Contact from './components/Contact';
import Services from './components/Services';
import Footer from './components/Footer';
import { FaBars, FaChevronDown, FaChevronUp } from 'react-icons/fa6';

export default function App(){
  return (
    <div className="app">
      <span className='move'><a href='#home' className="fa-solid fa-chevrons-up"> </a><a href='#footer' className="fa-solid fa-chevrons-down"> </a></span>
      <input type="checkbox" id="showNav" style={{display: "none"}} />
      <label htmlFor="showNav" id="menu"><FaBars /></label>
      <Navbar />
      <Home />
      <About direction="left" />
      <Portfolio direction="right" />
      <Skills direction="left" />
      <Certificate direction="right" />
      <Services direction="left" />
      <Contact direction="right" />
      <Footer direction="left" />
      <span className='move'><a href='#home' id='moveUp'><FaChevronUp /></a><a href='#about' id='moveDown'><FaChevronDown /></a></span>
    </div>
  );
}