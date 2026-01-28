import ProjectCard from "../components/ProjectCard";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Microservices Platform",
      description:
        "Designed and developed a scalable e-commerce platform using Spring Boot microservices architecture. Implemented independent services for User, Product, Order, and Payment with secure JWT-based authentication. Integrated service discovery, centralized configuration, and REST-based inter-service communication.",
      tags: [
        "Java",
        "Spring Boot",
        "Microservices",
        "Spring Security",
        "JWT",
        "MySQL",
        "Docker",
        "REST API",
      ],
      githubLink: "https://github.com/raushansingh7033",
      liveLink: null,
      videoUrl: null,
      version: "v1.0",
    },
    {
      title: "Hospital Management System (HMS)",
      description:
        "Built a full-stack Hospital Management System to manage doctors, patients, appointments, and billing workflows. Implemented role-based access control and REST APIs using Spring Boot, with MySQL as the backend database and React for frontend integration.",
      tags: [
        "Java",
        "Spring Boot",
        "Spring Data JPA",
        "Spring Security",
        "JWT",
        "MySQL",
        "React",
      ],
      githubLink: "https://github.com/raushansingh7033",
      liveLink: null,
      videoUrl: null,
      version: "v1.0",
    },
    {
      title: "Appointment Management System",
      description:
        "Developed an Appointment Management System using Spring Boot and MariaDB, enabling secure booking, cancellation, and tracking of appointments. Implemented exception handling, DTO-based architecture, and RESTful APIs following best practices.",
      tags: [
        "Java",
        "Spring Boot",
        "REST API",
        "Spring Data JPA",
        "MariaDB",
        "DTO",
      ],
      githubLink: "https://github.com/raushansingh7033",
      liveLink: null,
      videoUrl: null,
      version: "v1.0",
    },
    {
      title: "Real-Time Chat Application",
      description:
        "Created a real-time chat application using Spring Boot and WebSocket, enabling instant one-to-one messaging. Designed a responsive frontend and handled real-time communication with a scalable backend architecture.",
      tags: ["Java", "Spring Boot", "WebSocket", "REST API", "React"],
      githubLink: "https://github.com/raushansingh7033",
      liveLink: null,
      videoUrl: null,
      version: "v1.0",
    },
    {
      title: "Portfolio Website",
      description:
        "Developed a modern, responsive personal portfolio using React, Tailwind CSS, and Framer Motion. Showcases projects, skills, and experience with smooth animations, dark mode support, and optimized UI/UX.",
      tags: ["React.js", "Tailwind CSS", "Framer Motion", "JavaScript"],
      githubLink: "https://github.com/raushansingh7033",
      liveLink: null,
      videoUrl: null,
      version: "v1.0",
    },
  ];

  return (
    <section
      id="projects"
      className="py-32 bg-gray-50 dark:bg-dark-900 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Practical projects demonstrating real-world backend and full-stack
            development experience.
          </p>
        </motion.div>

        <div className="flex flex-col gap-20 md:gap-32">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
