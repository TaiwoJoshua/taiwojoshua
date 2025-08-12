import React, { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const typingElement = document.querySelector(".typing-animation");
    const texts = [
      "Full-Stack Website Developer",
      "Website Designer",
      "Back-End Developer",
      "Problem Solver",
      "Tech Enthusiast",
      "Code Craftsman",
    ];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeWriter() {
      const currentText = texts[textIndex];

      if (isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
      } else {
        typingElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
      }

      if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
      }
    }

    const interval = setInterval(typeWriter, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="gradient-bg min-h-screen flex items-center justify-center pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm <span className="text-yellow-300">Joshua</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 typing-animation inline-block">
            Full-Stack Website Developer
          </p>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Passionate developer from Lagos, Nigeria, creating modern web
            solutions with cutting-edge technologies. Let's build something
            amazing together!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="bg-yellow-400 text-gray-800 px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition duration-300 transform hover:scale-105"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-800 transition duration-300"
            >
              <i className="fas fa-handshake mr-2"></i>Hire Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
