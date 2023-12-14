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
  React.useEffect(() => {
    function setMove(navoption){
      const sections = ["#home", "#about", "#portfolio", "#skills", "#certificate", "#services", "#contact"];
      navoption = navoption.href.slice(navoption.href.indexOf("#"));
      const currSection = sections.indexOf(navoption);
      const prevSection = currSection !== 0 ? currSection - 1 : 0;
      const nextSection = currSection !== sections.length - 1 ? currSection + 1 : sections.length - 1;
      document.getElementById("moveUp").href = sections[prevSection];
      document.getElementById("moveDown").href = sections[nextSection];
    }
    
    function observe(child, sectionId) {
      const section = document.getElementById(sectionId);
      const navoption = document.querySelector(`#navbar ul li:nth-child(${child}) a`);
      const elementOffset = section.getBoundingClientRect().top;
      const distance = elementOffset;
      const height = parseFloat(getComputedStyle(section).height) - 61;
      if (distance < 61 && distance > -height) {
        navoption.classList.add("active");
        setMove(navoption);
      } else {
        navoption.classList.remove("active");
      }
    }

    function allObserve(){
      observe("1", "home");
      observe("2", "about");
      observe("3", "portfolio");
      observe("4", "skills");
      observe("5", "certificate");
      observe("6", "services");
      observe("7", "contact");
    }
    
    window.addEventListener('scroll', allObserve);
    return () => {
        window.removeEventListener('scroll', allObserve);
    }
  }, []);

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