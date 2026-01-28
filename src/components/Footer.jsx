import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Footer = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub className="text-xl" />,
      url: "https://github.com/raushansingh7033",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="text-xl" />,
      url: "https://www.linkedin.com/in/raushansingh7033/",
    },
    {
      name: "Email",
      icon: <FaEnvelope className="text-xl" />,
      url: "mailto:raushan786267@gmail.com",
    },
  ];

  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Branding */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 md:mb-0 text-center md:text-left"
          >
            <h2 className="text-2xl font-bold flex items-center justify-center md:justify-start">
              <span className="text-blue-500 animate-spin-slow">{"<"}</span>
              <span className="mx-1">Raushan</span>
              <span className="text-blue-500 animate-spin-slow-reverse">
                {"/>"}
              </span>
            </h2>
            <p className="text-gray-400 mt-2">Java Full Stack Developer</p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center"
          >
            <h3 className="text-lg font-semibold mb-4">Connect With Me</h3>
            <div className="flex justify-center space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4 }}
                  className="bg-gray-800 hover:bg-blue-600 p-3 rounded-full transition"
                  aria-label={link.name}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-6 pt-4 text-center text-gray-400 border-t border-gray-800"
        >
          <p>
            © {new Date().getFullYear()} Raushan Singh. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
