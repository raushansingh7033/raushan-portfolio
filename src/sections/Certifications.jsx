// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaAward, FaClock } from "react-icons/fa";

const certifications = [
  {
    title: "Data Structures & Algorithms (Java)",
    status: "In Progress",
    skills: ["DSA", "Problem Solving", "Java"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Java Spring Boot & Microservices",
    status: "In Progress",
    skills: ["Spring Boot", "REST APIs", "Microservices"],
    gradient: "from-indigo-500 to-purple-600",
  },
  {
    title: "AWS Cloud Fundamentals",
    status: "Planned",
    skills: ["EC2", "S3", "Cloud Basics"],
    gradient: "from-orange-400 to-amber-600",
  },
];

const CertificateCard = ({ cert, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-dark-800 rounded-2xl shadow-lg border border-gray-100 dark:border-dark-700 p-6 flex flex-col"
    >
      {/* Top Gradient */}
      <div
        className={`h-2 w-full rounded-full bg-gradient-to-r ${cert.gradient}`}
      />

      <div className="mt-4 flex-1">
        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
          {cert.title}
        </h3>

        <p className="flex items-center gap-2 text-sm text-amber-500 mt-2">
          <FaClock /> {cert.status}
        </p>

        {/* Skills */}
        <div className="flex flex-wrap gap-2 mt-4">
          {cert.skills.map((skill, i) => (
            <span
              key={i}
              className="px-2 py-1 text-xs font-semibold rounded bg-gray-100 dark:bg-dark-700 text-gray-600 dark:text-gray-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 flex items-center gap-2 text-sm text-gray-400">
        <FaAward />
        Certificate will be added after completion
      </div>
    </motion.div>
  );
};

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-dark-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Certifications
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I am continuously enhancing my skills through structured learning
            and professional training programs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <CertificateCard key={index} cert={cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
