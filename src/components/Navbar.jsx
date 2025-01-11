import React from "react";
import {
  FaCircleInfo,
  FaCode,
  FaDiagramProject,
  FaGraduationCap,
  FaHouse,
  FaLaptopCode,
  FaPhoneFlip,
} from "react-icons/fa6";
import { LiaTimesSolid } from "react-icons/lia";

export default function Navbar() {
  const scrollToId = (e) => {
    e.preventDefault();
    let href = e.target.href;

    if (!href) {
      href = e.target.parentElement.href;
    }

    const element = document.getElementById(href.slice(href.indexOf("#") + 1));
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav id="navbar">
      <ul>
        <li>
          <a onClick={(e) => scrollToId(e)} href="#home">
            <FaHouse style={{ fontSize: "1.1em" }} /> Home
          </a>
        </li>
        <li>
          <a onClick={(e) => scrollToId(e)} href="#about">
            <FaCircleInfo /> About Me
          </a>
        </li>
        <li>
          <a onClick={(e) => scrollToId(e)} href="#portfolio">
            <FaDiagramProject style={{ fontSize: "1.2em" }} /> Portfolio
          </a>
        </li>
        <li>
          <a onClick={(e) => scrollToId(e)} href="#skills">
            <FaCode style={{ fontSize: "1.3em" }} /> Skills
          </a>
        </li>
        <li>
          <a onClick={(e) => scrollToId(e)} href="#certificate">
            <FaGraduationCap style={{ fontSize: "1.3em" }} /> Certificates
          </a>
        </li>
        <li>
          <a onClick={(e) => scrollToId(e)} href="#services">
            <FaLaptopCode style={{ fontSize: "1.3em" }} /> Services
          </a>
        </li>
        <li>
          <a onClick={(e) => scrollToId(e)} href="#contact">
            <FaPhoneFlip /> Contact Me
          </a>
        </li>
      </ul>
      <label htmlFor="showNav">
        <LiaTimesSolid />
      </label>
    </nav>
  );
}
