"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaFacebook, FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa';

export default function Hero() {
   

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b  from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Hi, I&apos;m <span className="text-blue-600">Biruk Endalew</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-blue-300 mb-8">
            Full Stack Developer
          </p>
        

          
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="#contact"
              className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors duration-200"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="bg-gray-200 text-gray-800 px-6 py-3 rounded-full hover:bg-gray-300 transition-colors duration-200"
            >
              View Projects
            </a>
          </div>
        </div>

        <motion.div 
                className="md:w-1/2 mt-12 md:mt-0"
                initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{
                    duration: 0.8,
                    ease: "easeOut"
                }}
                >
      <motion.div
        className="relative"
        whileHover={{ 
          scale: 1.1,
          transition: { duration: 0.2 }
        }}
        animate={{
          y: [0, -10, 0],
          rotate: [0, -5, 5, 0]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      >
        <Image
          src="/hero.png"
          alt="Profile"
          width={300}
          height={400}
          className="rounded-full mx-auto shadow-xl"
        />
      </motion.div>
    </motion.div>
       
      </div>

      
    </section>
  );
}