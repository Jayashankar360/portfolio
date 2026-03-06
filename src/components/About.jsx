import { motion } from "framer-motion";
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaPython } from "react-icons/fa";
import { SiDjango, SiMongodb } from "react-icons/si";

function About() {
  return (
    <motion.section
      id="about"
      className="py-32 px-8 md:px-20 bg-black/40 backdrop-blur-md scroll-mt-32"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-400 mb-16">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div>
            <p className="text-gray-400 leading-relaxed">
              I am a passionate and self-motivated Full Stack Developer at the beginning of my professional journey. 
              I have built hands-on projects using modern web technologies and continuously work on improving my 
              problem-solving and development skills.
            </p>

            <p className="text-gray-400 mt-6 leading-relaxed">
              As a fresher, I am eager to contribute to real-world projects, learn from experienced developers, 
              and grow within a professional environment. I value clean code, teamwork, and building meaningful digital solutions.
            </p>

            {/* Download Resume Button */}
            <a
              href="/resume.pdf"
              download
              className="mt-8 inline-block bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition shadow-lg shadow-blue-500/30"
            >
              Download Resume
            </a>
          </div>

          {/* Skills Grid */}
          {/* Skills Grid */}
<div className="grid grid-cols-2 md:grid-cols-3 gap-6">

  <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 flex flex-col items-center hover:scale-105 transition duration-300">
    <FaReact className="text-5xl text-cyan-400 mb-4" />
    <p>React</p>
  </div>

  <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 flex flex-col items-center hover:scale-105 transition duration-300">
    <FaJs className="text-5xl text-yellow-400 mb-4" />
    <p>JavaScript</p>
  </div>

  <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 flex flex-col items-center hover:scale-105 transition duration-300">
    <FaHtml5 className="text-5xl text-orange-500 mb-4" />
    <p>HTML</p>
  </div>

  <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 flex flex-col items-center hover:scale-105 transition duration-300">
    <FaCss3Alt className="text-5xl text-blue-500 mb-4" />
    <p>CSS</p>
  </div>

  <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 flex flex-col items-center hover:scale-105 transition duration-300">
    <FaPython className="text-5xl text-yellow-300 mb-4" />
    <p>Python</p>
  </div>

  <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 flex flex-col items-center hover:scale-105 transition duration-300">
    <SiDjango className="text-5xl text-green-500 mb-4" />
    <p>Django</p>
  </div>

</div>

        </div>
      </div>
    </motion.section>
  );
}

export default About;