import React from "react";
import image from "../images/Taiwo Joshua.jpg";
import resume from "./Joshua Taiwo's Resume.pdf";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-950 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="profile-image">
            <img
              src={image}
              alt="Joshua Taiwo"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Website Developer & Problem Solver
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Based in Lagos, Nigeria, I'm a passionate full-stack developer
              with expertise in modern web technologies. I specialize in
              creating responsive, user-friendly websites and web applications
              that deliver exceptional user experiences.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              With proficiency in both frontend and backend technologies, I can
              handle projects from conception to deployment. I'm committed to
              writing clean, efficient code and staying updated with the latest
              industry trends.
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center text-gray-700 dark:text-gray-300">
                <i className="fas fa-map-marker-alt text-blue-500 mr-2"></i>
                <span>Lagos, Nigeria</span>
              </div>
              <div className="flex items-center text-gray-700 dark:text-gray-300">
                <i className="fas fa-phone text-blue-500 mr-2"></i>
                <a href="tel:+2348103182378">(234) 810-318-2378</a>
              </div>
              <div className="flex items-center text-gray-700 dark:text-gray-300">
                <i className="fas fa-envelope text-blue-500 mr-2"></i>
                <a href="mailto:joshuataiwo07@gmail.com">
                  joshuataiwo07@gmail.com
                </a>
              </div>
              <div className="flex items-center text-gray-700 dark:text-gray-300">
                <i className="fab fa-linkedin text-blue-500 mr-2"></i>
                <a
                  href="https://www.linkedin.com/in/joshua-taiwo-a565442b7/"
                  target="_blank"
                  rel="noreferrer"
                >
                  linkedin.com/in/joshua-taiwo-a565442b7/
                </a>
              </div>
              <div className="flex items-center text-gray-700 dark:text-gray-300">
                <i className="fab fa-whatsapp text-green-500 mr-2"></i>
                <a
                  href="https://wa.me/2348103182378"
                  target="_blank"
                  rel="noreferrer"
                >
                  +234 810 318 2378
                </a>
              </div>
            </div>
            <div className="flex gap-4">
              <a href={resume} download={"Taiwo Joshua's Resume.pdf"}>
                <button
                  id="download-resume"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 flex items-center"
                >
                  <i className="fas fa-download mr-2"></i>Download Resume
                </button>
              </a>
              <a
                href="#contact"
                className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white dark:hover:text-white transition duration-300 flex items-center"
              >
                <i className="fas fa-handshake mr-2"></i>Let's Work Together
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
