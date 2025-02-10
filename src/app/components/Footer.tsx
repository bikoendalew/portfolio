import { FaFacebook, FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";

export default function Footer() {

   const socialLinks = [
          {
            icon: <FaGithub size={24} />,
            url: "https://github.com/bikoendalew",
            color: "hover:border-gray-800 hover:text-gray-800",
          },
          {
            icon: <FaLinkedin size={24} />,
            url: "https://www.linkedin.com/in/biruk-endalew-437633237/",
            color: "hover:border-blue-600 hover:text-blue-600",
          },
          {
            icon: <FaTelegram size={24} />,
            url: "https://t.me/bikoendalew",
            color: "hover:border-blue-500 hover:text-blue-500",
          },
          {
            icon: <FaFacebook size={24} />,
            url: "https://facebook.com/yourusername",
            color: "hover:border-blue-700 hover:text-blue-700",
          },
      ];
    return (
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between  items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h3 className="text-xl font-bold">Biruk Endalew</h3>
              <p className="text-gray-400">Full Stack Developer</p>
            </div>

            <div className="mt-8 text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} Biruk Endalew. All rights reserved.
            </div>

            <div className="flex space-x-4 mb-8">
            {socialLinks.map((social, index) => (
                <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                    p-2 rounded-full
                    border-2 border-transparent
                    text-gray-600 dark:text-gray-400
                    hover:scale-110
                    transform transition-all duration-300
                    ${social.color}
                `}
                >
                {social.icon}
                </a>
            ))}
            </div>

          </div>
         
        </div>
      </footer>
    );
  }