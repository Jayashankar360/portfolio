import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

function Education() {
  const educationData = [
    {
      title: "Bachelor of Computer Applications (BCA)",
      org: "Mahatma Gandhi University",
      year: "Completed",
      desc: "Completed a comprehensive undergraduate program focused on computer science fundamentals, programming concepts, database management, and software development principles."
    },
    {
      title: "Python Full Stack Development",
      org: "OneTeam Solutions, Kochi",
      year: "Professional Training",
      desc: "Completed professional training in Full Stack Development covering Python, Django, frontend technologies, REST APIs, and real-world project development."
    }
  ];

  return (
    <motion.section
      id="education"
      className="py-32 px-8 md:px-20 scroll-mt-32"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-5xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-400 mb-20">
          Education
        </h2>

        <div className="relative border-l-2 border-blue-500/30 pl-10 space-y-16">

          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[26px] top-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/40">
                <FaGraduationCap className="text-white text-sm" />
              </div>

              {/* Card */}
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:shadow-2xl hover:shadow-blue-500/20 transition duration-300 hover:-translate-y-2">

                <h3 className="text-2xl font-semibold mb-2">
                  {edu.title}
                </h3>

                <p className="text-blue-400 text-sm mb-2">
                  {edu.org} | {edu.year}
                </p>

                <p className="text-gray-400 leading-relaxed">
                  {edu.desc}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </motion.section>
  );
}

export default Education;