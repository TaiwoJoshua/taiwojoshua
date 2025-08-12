import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-white transition-colors duration-300 dark:shadow-2xl dark:shadow-gray-950/50">
      <div className="hidden dark:block w-full h-[0.5px] opacity-50 bg-gradient-to-r from-blue-500 to-purple-600"></div>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Joshua Taiwo</h3>
            <p className="text-gray-300 dark:text-gray-400 mb-4">
              Full-Stack Website Developer passionate about creating amazing web
              experiences.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/TaiwoJoshua/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-300 dark:text-gray-400 hover:text-white transition duration-300"
              >
                <i className="fab fa-github text-xl"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/joshua-taiwo-a565442b7/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-300 dark:text-gray-400 hover:text-white transition duration-300"
              >
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a
                href="https://wa.me/2348103182378"
                target="_blank"
                rel="noreferrer"
                className="text-gray-300 dark:text-gray-400 hover:text-white transition duration-300"
              >
                <i className="fab fa-whatsapp text-xl"></i>
              </a>
              <a
                href="mailto:joshuataiwo07@gmail.com"
                className="text-gray-300 dark:text-gray-400 hover:text-white transition duration-300"
              >
                <i className="fas fa-envelope text-xl"></i>
              </a>
              <a
                href="tel:+2348103182378"
                className="text-gray-300 dark:text-gray-400 hover:text-white transition duration-300"
              >
                <i className="fas fa-phone text-xl"></i>
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300 dark:text-gray-400">
              <li>Website Development</li>
              <li>Web Applications</li>
              <li>E-commerce Solutions</li>
              <li>API Development</li>
              <li>Website Maintenance</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Technologies</h4>
            <ul className="space-y-2 text-gray-300 dark:text-gray-400">
              <li>React & JavaScript</li>
              <li>Laravel & PHP</li>
              <li>Django & Python</li>
              <li>Node.js & Express</li>
              <li>MySQL & PostgreSQL</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 dark:border-gray-600 mt-8 pt-8 text-center">
          <p className="text-gray-300 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Joshua Taiwo. All rights reserved.
            Built with passion in Lagos, Nigeria.
          </p>
        </div>
      </div>
    </footer>
  );
}
