import React from 'react';
import { FaCircleInfo, FaCode, FaDiagramProject, FaGraduationCap, FaHouse, FaLaptopCode, FaPhoneFlip } from 'react-icons/fa6';
import { LiaTimesSolid } from 'react-icons/lia';

export default class Navbar extends React.Component{
  render(){
    return (
      <nav id="navbar">
        <ul>
            <li><a href="#home"><FaHouse style={{fontSize: "1.1em"}} /> Home</a></li>
            <li><a href="#about"><FaCircleInfo /> About Me</a></li>
            <li><a href="#portfolio"><FaDiagramProject style={{fontSize: "1.2em"}} /> Portfolio</a></li>
            <li><a href="#skills"><FaCode style={{fontSize: "1.3em"}} /> Skills</a></li>
            <li><a href="#certificate"><FaGraduationCap style={{fontSize: "1.3em"}} /> Certificates</a></li>
            <li><a href="#services"><FaLaptopCode style={{fontSize: "1.3em"}} /> Services</a></li>
            <li><a href="#contact"><FaPhoneFlip /> Contact Me</a></li>
        </ul>
        <label htmlFor="showNav"><LiaTimesSolid /></label>
      </nav>
    );
  }
}