'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUser, FaBriefcase, FaGraduationCap } from 'react-icons/fa';

export default function About() {
  const [activeTab, setActiveTab] = useState('about');

  const tabs = [
    {
      id: 'about',
      label: 'About Me',
      icon: <FaUser size={18} />,
    },
   
    {
      id: 'education',
      label: 'Education',
      icon: <FaGraduationCap size={18} />,
    },
    {
        id: 'experience',
        label: 'Experience',
        icon: <FaBriefcase size={18} />,
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-[80%] mx-auto">
        <motion.h2 
          className="text-3xl font-bold text-center text-blue-400 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar Navigation */}
          <div className="md:w-[200px]">
            
          
            <div className="bg-gray-900 text-white rounded-lg p-3">
              {tabs.map((tab, index) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center px-3 py-2.5 rounded-lg mb-2 text-sm transition-all duration-200
                    ${
                      activeTab === tab.id
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
                    }
                  `}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="mr-2">{tab.icon}</span>
                  <span className="font-medium">{tab.label}</span>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1 max-w-3xl">
            <AnimatePresence mode='wait'>
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -20, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-900 rounded-lg p-6 shadow-lg"
              >
                {activeTab === 'about' && <AboutContent />}
                {activeTab === 'experience' && <ExperienceContent />}
                {activeTab === 'education' && <EducationContent />}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutContent() {
  return (
    <motion.div 
      className="space-y-6"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2
          }
        }
      }}
    >
      <motion.h3 
        className="text-2xl font-bold text-white"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 }
        }}
      >
        Hello, I&apos;m Biruk Endalew
      </motion.h3>
      
      <motion.div
        className="prose dark:prose-invert max-w-none"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 }
        }}
      >
        <p className="text-gray-400">
          I&apos;m a passionate Full Stack Developer with a strong foundation in web technologies
          and a keen eye for creating user-friendly applications.
        </p>
      </motion.div>

      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 }
        }}
      >
        <h4 className="font-semibold text-white mb-3">
          My expertise includes:
        </h4>
        <div className="grid grid-cols-2 gap-4">
          {[
            "Frontend Development",
            "Backend Development",
            "Database Design",
            "API Development"
          ].map((skill, index) => (
            <motion.div
              key={skill}
              className="bg-gray-600 p-4 rounded-lg"
              whileHover={{ scale: 1.05, backgroundColor: '#3B82F6' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <span className="text-gray-200">{skill}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

function ExperienceContent() {
  const experiences = [
    {
      title: " Full Stack Developer",
      company: "Melfan Tech Company",
      period: " April 29,2023 to May 1,2024",
      description: "Full Stack Developer using Laravel, HTML, CSS, Javascript, Flutter and build Ecommerce applications, Porfolio Websites and Mall Managements",
    
    },
    {
        title:"Freelance Developer ",
        company:'',
        period:"2024 - Present",
        description:"Specializing in building web and mobile applications for clients worldwide."
    }
    // Add more experiences...
  ];

  return (
    <motion.div 
      className="space-y-6"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2
          }
        }
      }}
    >
      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          className="bg-gray-900 p-6 rounded-lg"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <motion.h3 
            className="text-xl font-bold text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {exp.title}
          </motion.h3>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-blue-600 dark:text-blue-400">{exp.company}</p>
            <p className="text-gray-500 dark:text-gray-400 text-sm">{exp.period}</p>
          </motion.div>
          <motion.p 
            className="text-gray-400 mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {exp.description}
          </motion.p>
          <motion.ul 
            className="mt-3 space-y-1"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            
          </motion.ul>
        </motion.div>
      ))}
    </motion.div>
  );
}

function EducationContent() {
  const education = [
    {
      degree: "Bachelor's Degree in Computer Science", 
      school: "Microlink Information Technology College",
      period: "2018 - 2022",
      description: "Specialized in Software Engineering",
      courses: ["Website Development","Advanced Algorithms", "Machine Learning", "Database Systems",]
    },
    
  ];

  return (
    <motion.div 
      className="space-y-6"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2
          }
        }
      }}
    >
      {education.map((edu, index) => (
        <motion.div
          key={index}
          className="bg-gray-900 p-6 rounded-lg"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          whileHover={{ scale: 1.02 }}
        >
          <motion.div className="space-y-3">
            <motion.h3 
              className="text-xl font-bold text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {edu.degree}
            </motion.h3>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-blue-600 dark:text-blue-400">{edu.school}</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">{edu.period}</p>
            </motion.div>
            <motion.p 
              className="text-gray-600 dark:text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {edu.description}
            </motion.p>
            <motion.div 
              className="mt-4"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
            >
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Key Courses:
              </h4>
              <div className="flex flex-wrap gap-2">
                {edu.courses.map((course, i) => (
                  <motion.span
                    key={i}
                    className="bg-blue-100 text-blue-800 text-xs px-2.5 py-1 rounded-full dark:bg-blue-900 dark:text-blue-200"
                    variants={{
                      hidden: { opacity: 0, scale: 0.8 },
                      visible: { opacity: 1, scale: 1 }
                    }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {course}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
}