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

export default class App extends React.Component{
  render(){
    //Page Animation
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };
  
    function setMove(navoption){
      const sections = ["#home", "#about", "#portfolio", "#skills", "#certificate", "#services", "#contact"];
      navoption = navoption.href.slice(navoption.href.indexOf("#"));
      const currSection = sections.indexOf(navoption);
      const prevSection = currSection !== 0 ? currSection - 1 : 0;
      const nextSection = currSection !== sections.length - 1 ? currSection + 1 : sections.length - 1;
      document.getElementById("moveUp").href = sections[prevSection];
      document.getElementById("moveDown").href = sections[nextSection];
    }

    // ----------------- Helper Function ----------------------
    function toggleActive(navoption, distance, height) {
      if (distance < 61 && distance > -height) {
        navoption.classList.add("active");
        setMove(navoption);
      } else {
        navoption.classList.remove("active");
      }
    }
    
    // ----------------- Home Section ----------------------
    window.addEventListener('scroll', function () {
      const navoption = document.querySelector("#navbar ul li:nth-child(1) a");
      const elementOffset = document.getElementById("home").getBoundingClientRect().top;
      const distance = elementOffset;
      const height = parseFloat(getComputedStyle(document.getElementById("home")).height) - 61;
  
      toggleActive(navoption, distance, height);
    });
    
    // ----------------- About Section ----------------------
    window.addEventListener('scroll', function () {
      const about = document.getElementById("about");
      const navoption = document.querySelector("#navbar ul li:nth-child(2) a");
      const aobserver = new IntersectionObserver(entries => {
          entries.forEach(entry => {
              if (entry.intersectionRatio > options.threshold) {
                  about.classList.add("animate__fadeInLeft");
                  about.classList.add("visible");
              }
          });
      }, options);
  
      aobserver.observe(about);
  
      const elementOffset = document.getElementById("about").getBoundingClientRect().top;
      const distance = elementOffset;
      const height = parseFloat(getComputedStyle(document.getElementById("about")).height) - 61;
  
      toggleActive(navoption, distance, height);
    });
    
    // ----------------- Portfolio Section ----------------------
    window.addEventListener('scroll', function () {
      const portfolio = document.getElementById("portfolio");
      const about = document.getElementById("about");
      const navoption = document.querySelector("#navbar ul li:nth-child(3) a");
      const pobserver = new IntersectionObserver(entries => {
          entries.forEach(entry => {
              if (entry.intersectionRatio > options.threshold) {
                  portfolio.style.visibility = "visible";
                  portfolio.classList.add("animate__fadeInRight");
              }
          });
      }, options);
  
      pobserver.observe(about);
  
      const elementOffset = document.getElementById("portfolio").getBoundingClientRect().top;
      const distance = elementOffset;
      const height = parseFloat(getComputedStyle(document.getElementById("portfolio")).height) - 61;
  
      toggleActive(navoption, distance, height);
    });
    
    // ----------------- Other Sections: Skills, Certificate, Services, Contact ----------------------
    function observeAndAnimate(child, sectionId, animateClass, contact = false) {
      const section = document.getElementById(sectionId);
      const navoption = document.querySelector(`#navbar ul li:nth-child(${child}) a`);
      const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
              if (entry.intersectionRatio > options.threshold) {
                  section.classList.add(animateClass);
                  section.classList.add("visible");
                  if(contact){
                      document.getElementById("footer").classList.add("animate__fadeInLeft");
                      document.getElementById("footer").classList.add("visible");
                  }
              }
          });
      }, options);
  
      observer.observe(section);
  
      const elementOffset = section.getBoundingClientRect().top;
      const distance = elementOffset;
      const height = parseFloat(getComputedStyle(section).height) - 61;
  
      toggleActive(navoption, distance, height);
    }
    
    window.addEventListener('scroll', function () {
      observeAndAnimate("4", "skills", "animate__fadeInLeft");
      observeAndAnimate("5", "certificate", "animate__fadeInRight");
      observeAndAnimate("6", "services", "animate__fadeInLeft");
      observeAndAnimate("7", "contact", "animate__fadeInRight", true);
    });
  
    return (
      <div className="app">
        <span className='move'><a href='#home' className="fa-solid fa-chevrons-up"> </a><a href='#footer' className="fa-solid fa-chevrons-down"> </a></span>
        <input type="checkbox" id="showNav" style={{display: "none"}} />
        <label htmlFor="showNav" id="menu"><FaBars /></label>
        <Navbar />
        <Home />
        <About />
        <Portfolio />
        <Skills />
        <Certificate />
        <Services />
        <Contact />
        <Footer />
        <span className='move'><a href='#home' id='moveUp'><FaChevronUp /></a><a href='#about' id='moveDown'><FaChevronDown /></a></span>
      </div>
    );
  }
}