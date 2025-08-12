import React from "react";

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are the technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg card-hover">
            <div className="text-center mb-4">
              <i className="fas fa-palette text-4xl text-blue-500 mb-2"></i>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                Frontend
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="skill-tag bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm">
                HTML5
              </span>
              <span className="skill-tag bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm">
                CSS3
              </span>
              <span className="skill-tag bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm">
                JavaScript
              </span>
              <span className="skill-tag bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm">
                ReactJS
              </span>
              <span className="skill-tag bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm">
                Bootstrap
              </span>
              <span className="skill-tag bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm">
                Tailwind CSS
              </span>
              <span className="skill-tag bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm">
                jQuery
              </span>
              <span className="skill-tag bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm">
                AlpineJS
              </span>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg card-hover">
            <div className="text-center mb-4">
              <i className="fas fa-server text-4xl text-green-500 mb-2"></i>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                Backend
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="skill-tag bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm">
                PHP
              </span>
              <span className="skill-tag bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm">
                Python
              </span>
              <span className="skill-tag bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm">
                NodeJS
              </span>
              <span className="skill-tag bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm">
                ExpressJS
              </span>
              <span className="skill-tag bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm">
                Laravel
              </span>
              <span className="skill-tag bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm">
                Django
              </span>
              <span className="skill-tag bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm">
                Blade
              </span>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg card-hover">
            <div className="text-center mb-4">
              <i className="fas fa-database text-4xl text-purple-500 mb-2"></i>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                Database
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="skill-tag bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm">
                MySQL
              </span>
              <span className="skill-tag bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm">
                PostgreSQL
              </span>
              <span className="skill-tag bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm">
                SQLite
              </span>
              <span className="skill-tag bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm">
                Firebase
              </span>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg card-hover">
            <div className="text-center mb-4">
              <i className="fas fa-tools text-4xl text-orange-500 mb-2"></i>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                Tools
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="skill-tag bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm">
                Git
              </span>
              <span className="skill-tag bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm">
                GitHub
              </span>
              <span className="skill-tag bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm">
                MEGA
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
