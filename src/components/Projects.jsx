import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

function Projects() {
  const projectData = [
    {
      title: "Job Portal System",
      desc: "A full-stack web application that allows users to register, login, and apply for jobs. Includes authentication and job management features.",
      tech: "React, Django Rest, REST API",
      live: "",
      github: "https://github.com/Jayashankar360/job-portal",
    },
    {
      title: "Personal Finance Tracker",
      desc: "A full-stack finance management application where users can register, track income and expenses, set goals, and view six-month financial trends through an interactive analytics dashboard.",
      tech: "Python, Django, HTML, CSS, JavaScript, Chart.js",
      live: "",
      github: "https://github.com/Jayashankar360/mini-project",
    },
    {
      title: "Personal Portfolio",
      desc: "Modern animated portfolio showcasing skills and projects with smooth transitions and responsive design.",
      tech: "React, Tailwind CSS, Framer Motion",
      live: "",
      github: "https://github.com/Jayashankar360/portfolio.git",
    },
  ];

  return (
    <motion.section
      id="projects"
      className="py-32 px-8 md:px-20 scroll-mt-32"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-400 mb-16">
          My Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {projectData.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:shadow-2xl hover:shadow-blue-500/20 transition duration-300"
            >
              <h3 className="text-2xl font-semibold mb-4">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-4">
                {project.desc}
              </p>

              <p className="text-sm text-blue-400 mb-6">
                {project.tech}
              </p>

              <div className="flex gap-4">

                {/* Live Button only if link exists */}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                  >
                    <FiExternalLink />
                    Live
                  </a>
                )}

                {/* GitHub Button only if link exists */}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border border-white/20 px-4 py-2 rounded-lg hover:bg-white/10 transition"
                  >
                    <FaGithub />
                    Code
                  </a>
                )}

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </motion.section>
  );
}

export default Projects;