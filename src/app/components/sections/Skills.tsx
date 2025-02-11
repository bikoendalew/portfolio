"use client"
import { motion } from 'framer-motion';

export default function Skills() {
    const skills = {
      "Frontend": ["HTML", "CSS", "Bootstrap", "JavaScript", "React.js", "Next.js", "Tailwind CSS"],
      "Backend": ["Laravel", "Django", "Node.js", "PHP", "Express", "Python"],
      "Database": ["MySQL", "MongoDB", "PostgreSQL"],
      "Tools": ["Git", "Docker", "VS Code"],
    };

    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.2
        }
      }
    };

    const itemVariants = {
      hidden: { y: 20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1
      }
    };

    const skillBadgeVariants = {
      hidden: { scale: 0 },
      visible: {
        scale: 1,
        transition: {
          type: "spring",
          stiffness: 260,
          damping: 20
        }
      }
    };
  
    return (
      <section id="skills" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center text-white mb-12"
          >
            Skills
          </motion.h2>
     
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {Object.entries(skills).map(([category, items]) => (
              <motion.div
                key={category}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-800 rounded-lg shadow-md p-6"
              >
                <h3 className="text-xl font-semibold text-white mb-4">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, index) => (
                    <motion.span
                      key={index}
                      variants={skillBadgeVariants}
                      whileHover={{ scale: 1.1 }}
                      className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    );
}