import React, { useEffect, useState } from "react";
import data from "./Data/projects.json";
import Fancybox from "./Fancybox";
import ImageLoader from "./ImageLoader";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [limit, setLimit] = useState(6);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setProjects(data.slice(0, limit));
  }, [limit]);

  function loadMore() {
    setLoading(true);
    setTimeout(() => {
      setLimit((old) =>
        old < data.length && old + 3 < data.length ? old + 3 : data.length
      );
      setLoading(false);
    }, 1500);
  }

  const colors = [
    "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
    "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
    "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200",
    "bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200",
    "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200",
  ];
  return (
    <section
      id="projects"
      className="py-20 bg-white dark:bg-gray-950 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            expertise
          </p>
        </div>

        <Fancybox>
          <div
            id="projects-container"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <div
                key={`${project.title}_${project.folder}_${index}`}
                className="project-card bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden card-hover"
              >
                <div className="relative h-48 overflow-hidden">
                  <ImageLoader />

                  <img
                    src={require(`../images/${project.folder}/${project.images[0]}`)}
                    alt={project.title}
                    title={project.title}
                    loading="lazy"
                    onLoad={(e) => {
                      e.target.previousElementSibling.style.display = "none";
                    }}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-justify">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.stack.map((tech, index) => (
                      <span
                        key={`${project.title}_${tech}_${index}`}
                        className={`${
                          colors[index % colors.length]
                        } px-2 py-1 rounded text-xs`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    {project.link ? (
                      <button className="bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 flex-1 text-sm">
                        <a
                          href={project.link}
                          rel="noreferrer"
                          target="_blank"
                          className="flex items-center justify-center w-full h-full px-3 py-2"
                        >
                          <i className="fas fa-eye mr-1"></i>Visit
                        </a>
                      </button>
                    ) : (
                      <button
                        className="bg-gray-400 text-white px-3 py-2 rounded cursor-not-allowed flex-1 text-sm"
                        disabled
                      >
                        <i className="fas fa-eye mr-1"></i>Visit N/A
                      </button>
                    )}
                    <button className="bg-green-500 text-white px-3 py-2 rounded hover:bg-green-600 transition duration-300 flex-1 text-sm">
                      <a
                        key={`${project.title}_${project.images[0]}`}
                        href={require(`../images/${project.folder}/${project.images[0]}`)}
                        data-fancybox={project.title}
                        className="flex items-center justify-center w-full h-full px-3 py-2"
                      >
                        <i className="fas fa-image mr-1"></i>Images
                      </a>
                      {project.images.slice(1).map((image) => (
                        <a
                          key={`${project.title}_${image}`}
                          href={require(`../images/${project.folder}/${image}`)}
                          data-fancybox={project.title}
                        >
                          {" "}
                        </a>
                      ))}
                    </button>
                    {project.github && (
                      <button className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-3 py-2 rounded hover:bg-gray-50 dark:hover:bg-gray-700 transition duration-300">
                        <a
                          href={project.github}
                          rel="noreferrer"
                          target="_blank"
                          className="flex items-center justify-center w-full h-full px-3 py-2"
                        >
                          <i className="fab fa-github"></i>
                        </a>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Fancybox>

        <div className="text-center mt-12">
          {limit < data.length && (
            <button
              id="load-more-btn"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition duration-300 transform hover:scale-105 disabled:from-gray-500 disabled:to-gray-500 disabled:cursor-not-allowed"
              onClick={loadMore}
              disabled={loading}
            >
              {loading ? (
                <svg
                  className="animate-spin m-auto h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : (
                <>
                  <i className="fas fa-plus mr-2"></i>
                  Load More Projects
                </>
              )}
            </button>
          )}
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
            Showing {limit} of {data.length}+ projects
          </p>
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/TaiwoJoshua/"
            target="_blank"
            rel={"noreferrer"}
            className="bg-gray-800 dark:bg-gray-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-700 dark:hover:bg-gray-600 transition duration-300 inline-flex items-center"
          >
            <i className="fab fa-github mr-2"></i>
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
