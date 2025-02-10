'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function Projects() {
  const [activeTab, setActiveTab] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 3;

  const tabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
  ];

  const projects = [
    {
      title: "Daros International Hotel",
      description: "A full-stack Hotel booking website with an integrated reservation system for seamless online bookings",
      category: "fullstack",
      technologies: ["Laravel", "HTML", "CSS", "Javascripts"],
      github: "",
      live: "https://darosinternationalhotel.com/",
    },
    {
      title: "Doctor Appointment",
      description: "Doctor appointment booking system for web and mobile, allowing patients to book online while doctors can approve or decline appointments",
      category: "fullstack",
      technologies: ["PHP","Flutter","HTML", "Bootstrap", "Javascript"],
      github: "https://github.com/bikoendalew/onlineDoctor",
      live: "",
    },
    {
      title: "Ecommerce",
      description: "full stack ecommerce website with single vendor ",
      category: "fullstack",
      technologies: ["Django", "HTML5","CSS","Javascript"],
      github: "https://github.com/bikoendalew/django_ecommerce_base",
      live: "",
    },

    {
      title: "Girum Taem Coffee",
      description: "online coffee shop",
      category: "fullstack",
      technologies: ["Laravel", "HTML", "CSS", "Javascripts"],
      github: "",
      live: "https://girumtaemcoffee.com/",
    },

    {
      title: "Girum Leather",
      description: "it show case or list girum's leather products with category",
      category: "fullstack",
      technologies: ["Laravel", "HTML", "CSS", "Javascripts"],
      github: "",
      live: "https://girumleather.com/",
    },
    {
      title: "Dejene Lemessa",
      description: "it show case or list  Dejene lemessa products and services provide",
      category: "backend",
      technologies: ["Laravel"],
      github: "",
      live: "https://dejenelemessa.com",
    },
    {
      title: "Tebita Ambulance",
      description: "it show case or list  Tebita Ambulance products and services provide",
      category: "backend",
      technologies: ["Laravel"],
      github: "",
      live: "https://tebitambulance.com/",
    },

    {
      title: "expense tracker",
      description: "API gateway handling expense tracker, request routing, authentication",
      category: "backend",
      technologies: ["Node.js", "Express", "Mongodb", "JWT"],
      github: "https://github.com/bikoendalew/expense_tracker_api_expressJs",
      live: "",
    },
    {
      title: "Task Management App",
      description: "A full-stack project management tool with real-time updates, task tracking",
      category: "fullstack",
      technologies: ["Flutter", "Firebase"],
      github: "https://github.com/bikoendalew/task_tracker",
      live: "",
    },
   

    {
      title: "Weather App",
      description: "A Mobile app weather forecast application with location-based services and interactive maps.",
      category: "fullstack",
      technologies: ["Flutter", "OpenWeather API"],
      github: "https://github.com/bikoendalew/weather_app_flutter_bloc",
      live: "",
    },
   
    {
      title: "django_multple_role_api_auth",
      description: "Django Custom Authentication Backend with Email Login (API-Ready)",
      category: "backend",
      technologies: ["Django", "restframework"],
      github: "https://github.com/bikoendalew/django_multple_role_api_auth",
      live: "",
    },

    {
      title: "Movie Land",
      description: "website that handle listing movies, have Search movie with title and trending movie ",
      category: "full stack",
      technologies: ["React",'tmd movie api'],
      github: "https://github.com/bikoendalew/movie_land",
      live: "",
    },

    {
      title: "e learning landing page",
      description: "e learning landing page by react and tailwindcss",
      category: "frontend",
      technologies: ["React", "tailwindcss"],
      github: "https://github.com/bikoendalew/landingPageByReactAndTailwindcss",
      live: "",
    },
    {
      title: "flutter_car_rental_ui",
      description: "flutter car rental ui",
      category: "frontend",
      technologies: ["flutter"],
      github: "https://github.com/bikoendalew/flutter_car_rental_ui",
      live: "",
    },
  ];

  // Filter projects based on active tab
  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  // Calculate pagination
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);

  // Reset to first page when changing tabs
  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    setCurrentPage(1);
  };

  // Pagination controls
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage(prev => Math.min(prev + 1, totalPages));
  const prevPage = () => setCurrentPage(prev => Math.max(prev - 1, 1));

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            My Projects
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300 sm:mt-4">
            Check out some of my latest projects and experiments
          </p>
        </div>

        {/* Project Category Tabs */}
        <div className="mt-12 flex justify-center space-x-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150
                ${activeTab === tab.id
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <motion.div 
          layout
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode='wait'>
            {currentProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-6  flex space-x-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
              >
                <FaGithub size={20} />
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
              >
                <FaExternalLinkAlt size={20} />
              </a>
            )}
          </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Pagination */}
        {totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center items-center space-x-4 mt-12"
          >
            {/* Previous Page Button */}
            <motion.button
              onClick={prevPage}
              disabled={currentPage === 1}
              className={`p-2 rounded-lg ${
                currentPage === 1
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'
              }`}
              whileHover={currentPage !== 1 ? { scale: 1.1 } : {}}
              whileTap={currentPage !== 1 ? { scale: 0.9 } : {}}
            >
              <FaChevronLeft size={20} />
            </motion.button>

            {/* Page Numbers */}
            <div className="flex items-center space-x-2">
              {[...Array(totalPages)].map((_, index) => (
                <motion.button
                  key={index + 1}
                  onClick={() => paginate(index + 1)}
                  className={`w-8 h-8 rounded-lg text-sm font-medium transition-colors duration-150
                    ${currentPage === index + 1
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'
                    }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {index + 1}
                </motion.button>
              ))}
            </div>

            {/* Next Page Button */}
            <motion.button
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className={`p-2 rounded-lg ${
                currentPage === totalPages
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'
              }`}
              whileHover={currentPage !== totalPages ? { scale: 1.1 } : {}}
              whileTap={currentPage !== totalPages ? { scale: 0.9 } : {}}
            >
              <FaChevronRight size={20} />
            </motion.button>
          </motion.div>
        )}

        {/* No Projects Message */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-gray-600 dark:text-gray-300 mt-12"
          >
            No projects found in this category.
          </motion.div>
        )}
      </div>
    </section>
  );
}