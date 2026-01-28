import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaLaptopCode,
  FaRocket,
} from "react-icons/fa";

const Experience = () => {
  const journeyData = [
    {
      year: "2019",
      title: "Secondary School (Class X)",
      organization: "G.S.V.M High School, Kathar (BSEB)",
      description:
        "Completed Class X with 78%, building a strong academic foundation and interest in technical subjects.",
      type: "education",
      icon: FaGraduationCap,
      color: "from-emerald-500 to-teal-500",
      bgGlow: "bg-emerald-500/20",
    },
    {
      year: "2021",
      title: "Senior Secondary (Class XII – PCM)",
      organization: "Jagjiwan College, Ara (BSEB)",
      description:
        "Completed Class XII with 80.4% in Physics, Chemistry, and Mathematics, strengthening analytical and problem-solving skills.",
      type: "education",
      icon: FaGraduationCap,
      color: "from-green-500 to-emerald-500",
      bgGlow: "bg-green-500/20",
    },
    {
      year: "2022",
      title: "Journey into Software Development",
      organization: "Self-Driven Learning",
      description:
        "Started focused learning in programming, data structures, and core Java. Solved 180+ DSA problems and actively participated in coding contests.",
      type: "milestone",
      icon: FaCode,
      color: "from-amber-500 to-orange-500",
      bgGlow: "bg-amber-500/20",
    },
    {
      year: "2022 – 2026",
      title: "B.Tech in Computer Science",
      organization: "Lakshmi Narain College of Technology, Bhopal",
      description:
        "Currently pursuing B.Tech in CSE (CGPA: 7.71). Gaining strong expertise in Java, OOP, Spring Boot, DSA, and full-stack development.",
      type: "education",
      icon: FaGraduationCap,
      color: "from-blue-500 to-cyan-500",
      bgGlow: "bg-blue-500/20",
    },
    {
      year: "2024 – Present",
      title: "Java & Spring Boot Developer",
      organization: "Personal & Academic Projects",
      description:
        "Building scalable backend systems using Spring Boot, JPA, Hibernate, Microservices, REST APIs, Docker, and MySQL. Developed HMS, Appointment MS, and E-Commerce projects.",
      type: "work",
      icon: FaBriefcase,
      color: "from-violet-500 to-purple-500",
      bgGlow: "bg-violet-500/20",
    },
    {
      year: "2025",
      title: "Open Source & Competitive Programming",
      organization: "GitHub, LeetCode, GFG, CodeChef",
      description:
        "Solved 180+ DSA problems, secured global ranks in CodeChef contests, and actively shared projects and code on GitHub.",
      type: "freelance",
      icon: FaLaptopCode,
      color: "from-pink-500 to-rose-500",
      bgGlow: "bg-pink-500/20",
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 bg-white dark:bg-dark-900 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="text-6xl mb-4">🚀</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            My Journey
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            From a curious student to a passionate Java & Spring Boot developer
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto">
          {journeyData.map((item, index) => {
            const Icon = item.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <div
                  className={`flex flex-col md:flex-row gap-8 ${
                    isEven ? "" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="flex-1">
                    <div className="bg-white dark:bg-dark-800 rounded-2xl p-6 shadow-xl border dark:border-dark-700">
                      <div
                        className={`inline-block mb-3 px-4 py-1 rounded-full bg-gradient-to-r ${item.color} text-white text-sm`}
                      >
                        {item.year}
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                      <p className="text-blue-600 dark:text-blue-400 font-semibold mb-3">
                        {item.organization}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-center">
                    <div
                      className={`w-16 h-16 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center`}
                    >
                      <Icon className="text-white text-2xl" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="text-center mt-20">
          <FaRocket className="text-6xl mx-auto text-purple-600 mb-4" />
          <h3 className="text-2xl font-bold">The Journey Continues...</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Learning, building, and growing every day 🚀
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
