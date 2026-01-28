// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaJava, FaReact } from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiGit,
  SiMysql,
  SiMongodb,
  SiSpringboot,
  SiHibernate,
  SiDocker,
  SiPostman,
  SiBootstrap,
} from "react-icons/si";

import { FaAws } from "react-icons/fa";
import { DiIntellij } from "react-icons/di";
import { TbApi } from "react-icons/tb";
import { useEffect, useRef, useState } from "react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", icon: <FaJava className="text-red-500" /> },
        {
          name: "JavaScript",
          icon: <SiJavascript className="text-yellow-400" />,
        },
      ],
      color: "border-purple-200 dark:border-purple-900/50",
    },
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML5 / CSS3", icon: <span className="text-blue-500">{"</>"}</span> },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
        { name: "React.js", icon: <FaReact className="text-blue-500" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
        { name: "Bootstrap", icon: <SiBootstrap className="text-purple-500" /> },
        { name: "Thymeleaf", icon: <span className="text-green-600">🍃</span> },
      ],
      color: "border-blue-200 dark:border-blue-900/50",
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Spring Boot", icon: <SiSpringboot className="text-green-500" /> },
        { name: "Spring MVC", icon: <span className="text-green-600">🌱</span> },
        { name: "Hibernate & JPA", icon: <SiHibernate className="text-red-500" /> },
        { name: "RESTful APIs", icon: <TbApi className="text-purple-500" /> },
        { name: "JWT Authentication", icon: <span className="text-indigo-500">🔐</span> },
        { name: "Microservices", icon: <span className="text-blue-400">🧩</span> },
      ],
      color: "border-green-200 dark:border-green-900/50",
    },
    {
      title: "Database & DevOps",
      skills: [
        { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
        { name: "Docker", icon: <SiDocker className="text-blue-400" /> },
        { name: "AWS (Basics)", icon: <FaAws className="text-amber-600" /> },
        { name: "Git & GitHub", icon: <SiGit className="text-orange-500" /> },
        { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
        { name: "IntelliJ IDEA", icon: <DiIntellij className="text-purple-600" /> },
      ],
      color: "border-amber-200 dark:border-amber-900/50",
    },
  ];

  const proficiencyData = [
    { skill: "Java", level: 90, color: "bg-red-500" },
    { skill: "Spring Boot", level: 80, color: "bg-green-500" },
    { skill: "SQL / MySQL", level: 85, color: "bg-blue-600" },
    { skill: "JavaScript", level: 70, color: "bg-yellow-500" },
    { skill: "React", level: 70, color: "bg-cyan-500" },
  ];

  const SkillBox = ({ category, index }) => {
    const containerRef = useRef(null);
    const contentRef = useRef(null);
    const [shouldScroll, setShouldScroll] = useState(false);

    useEffect(() => {
      if (!containerRef.current || !contentRef.current) return;

      const container = containerRef.current;
      const content = contentRef.current;

      const needsScroll = content.scrollHeight > container.clientHeight;
      setShouldScroll(needsScroll);

      if (!needsScroll) return;

      let scrollPosition = 0;
      const scrollSpeed = 40;
      let animationId;

      const scroll = () => {
        scrollPosition += scrollSpeed / 60;
        if (scrollPosition >= content.scrollHeight - container.clientHeight) {
          scrollPosition = 0;
        }
        container.scrollTop = scrollPosition;
        animationId = requestAnimationFrame(scroll);
      };

      const timeout = setTimeout(() => {
        animationId = requestAnimationFrame(scroll);
      }, 2000);

      return () => {
        clearTimeout(timeout);
        cancelAnimationFrame(animationId);
      };
    }, [category.skills.length]);

    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        className={`rounded-xl border ${category.color} bg-white dark:bg-dark-800 p-5 shadow-sm`}
      >
        <h3 className="font-bold text-lg mb-4">{category.title}</h3>
        <div ref={containerRef} className="overflow-hidden" style={{ height: "260px" }}>
          <div ref={contentRef} className="space-y-3">
            {category.skills.map((skill, i) => (
              <div
                key={i}
                className="flex items-center px-4 py-2 rounded-lg bg-gray-50 dark:bg-dark-700"
                style={{ height: "56px" }}
              >
                <div className="mr-3 text-xl">{skill.icon}</div>
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="skills" className="py-16 bg-gray-50 dark:bg-dark-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Technical Skills
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
          {/* Proficiency */}
          <div className="rounded-xl border bg-white dark:bg-dark-800 p-5">
            <h3 className="font-bold mb-4">Skill Proficiency</h3>
            {proficiencyData.map((item, i) => (
              <div key={i} className="mb-3">
                <div className="flex justify-between text-sm mb-1">
                  <span>{item.skill}</span>
                  <span>{item.level}%</span>
                </div>
                <div className="h-1.5 bg-gray-200 rounded-full">
                  <div
                    className={`${item.color} h-1.5 rounded-full`}
                    style={{ width: `${item.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {skillCategories.map((cat, i) => (
            <SkillBox key={i} category={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
