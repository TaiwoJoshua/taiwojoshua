import React, { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Certificate from "./components/Certificate";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Footer from "./components/Footer";
import { FaBars, FaChevronDown, FaChevronUp } from "react-icons/fa6";
// import TawkToScript from "./components/TawkToScript";

export default function App() {
  const [prevNext, setPrevNext] = useState({ prev: "", next: "" });
  const timeoutRef = useRef(null);

  useEffect(() => {
    const sections = [
      "#home",
      "#about",
      "#portfolio",
      "#skills",
      "#certificate",
      "#services",
      "#contact",
    ];

    function observe(child, sectionId) {
      const section = document.getElementById(sectionId);
      const navoption = document.querySelector(
        `#navbar ul li:nth-child(${child}) a`
      );
      const elementOffset = section.getBoundingClientRect().top;
      const distance = elementOffset;
      const height = parseFloat(getComputedStyle(section).height) - 61;
      if (distance < 61 && distance > -height) {
        navoption.classList.add("active");
        let current = navoption.href;
        current = current.slice(current.indexOf("#"));
        const currentIndex = sections.indexOf(current);
        let prevIndex = currentIndex - 1;
        let nextIndex = currentIndex + 1;
        if (prevIndex < 0) {
          prevIndex = 0;
        }
        if (nextIndex >= sections.length) {
          nextIndex = sections.length - 1;
        }
        const prev = sections[prevIndex];
        const next = sections[nextIndex];
        setPrevNext({ prev, next });
        console.log(current, prev, next);

        // setMove(navoption);
      } else {
        navoption.classList.remove("active");
      }
    }

    function allObserve() {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      observe("1", "home");
      observe("2", "about");
      observe("3", "portfolio");
      observe("4", "skills");
      observe("5", "certificate");
      observe("6", "services");
      observe("7", "contact");

      document.querySelector(`.move.left`).classList.add("show");
      document.querySelector(`.move.right`).classList.add("show");
      timeoutRef.current = setTimeout(() => {
        document.querySelector(`.move.left`).classList.remove("show");
        document.querySelector(`.move.right`).classList.remove("show");
      }, 3000);
    }

    window.addEventListener("scroll", allObserve);
    window.addEventListener("wheel", allObserve);
    window.addEventListener("touchmove", allObserve);
    return () => {
      window.removeEventListener("scroll", allObserve);
      window.removeEventListener("wheel", allObserve);
      window.removeEventListener("touchmove", allObserve);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

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
    <div className="app">
      <span className="move left">
        <a
          href="#home"
          className="fa-solid fa-chevrons-up"
          onClick={(e) => scrollToId(e)}
        >
          {" "}
        </a>
        <a
          href="#footer"
          className="fa-solid fa-chevrons-down"
          onClick={(e) => scrollToId(e)}
        >
          {" "}
        </a>
      </span>
      {prevNext.prev && (
        <span className="move right">
          <a href={prevNext.prev} id="moveUp" onClick={(e) => scrollToId(e)}>
            <FaChevronUp />
          </a>
          <a href={prevNext.next} id="moveDown" onClick={(e) => scrollToId(e)}>
            <FaChevronDown />
          </a>
        </span>
      )}
      <input type="checkbox" id="showNav" style={{ display: "none" }} />
      <label htmlFor="showNav" id="menu">
        <FaBars />
      </label>
      <label className="nav-close" htmlFor="showNav"></label>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Skills />
      <Certificate />
      <Services />
      <Contact />
      <Footer />
      {/* <TawkToScript /> */}
    </div>
  );
}
