import React from "react";
import ReactTyped from "react-typed";

export default function Home() {
  return (
    <section id="home">
      <div>
        <div className="main">
          <div>
            <h1 className="headings">
              I AM <br /> Taiwo Joshua
            </h1>
            <h2 className="full">
              <ReactTyped
                strings={["A Website Designer", "A Website Developer"]}
                typeSpeed={80}
                backSpeed={80}
                loop
              >
                <span></span>
              </ReactTyped>
            </h2>
            <br />
          </div>
          <a href="#contact">
            <button className="btn">Hire Me</button>
          </a>
        </div>
      </div>
    </section>
  );
}
