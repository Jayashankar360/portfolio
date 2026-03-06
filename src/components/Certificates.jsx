import { motion } from "framer-motion";
import { FaCertificate } from "react-icons/fa";

function Certificates() {
  const certificates = [
    {
      title: "Python Full Stack Development",
      org: "OneTeam Solutions, Kochi",
      year: "2025",
      desc: "Completed comprehensive training in Python, Django, REST APIs, frontend technologies, and real-world project development."
    },
    {
      title: "web & Application Development",
      org: "STEM ROBOTICS INTERNATIONAL, Trivandrum",
      year: "2024",
      desc: "Completed a comprehensive course covering web development fundamentals, frontend and backend technologies, and practical application development skills."
    }
  ];

  return (
    <motion.section
      id="certificates"
      className="py-32 px-8 md:px-20 bg-black/40 backdrop-blur-md scroll-mt-32"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-5xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-400 mb-20">
          Certifications
        </h2>

        <div className="relative border-l-2 border-blue-500/30 pl-10 space-y-16">

          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[26px] top-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/40">
                <FaCertificate className="text-white text-sm" />
              </div>

              {/* Card */}
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:shadow-2xl hover:shadow-blue-500/20 transition duration-300 hover:-translate-y-2">

                <h3 className="text-2xl font-semibold mb-2">
                  {cert.title}
                </h3>

                <p className="text-blue-400 text-sm mb-2">
                  {cert.org} | {cert.year}
                </p>

                <p className="text-gray-400 leading-relaxed">
                  {cert.desc}
                </p>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </motion.section>
  );
}

export default Certificates;