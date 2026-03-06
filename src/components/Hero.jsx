import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaReact, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import profile from "../assets/profile.png";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-between px-8 md:px-20 pt-32 scroll-mt-32"
    >
      {/* LEFT SIDE */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="max-w-2xl"
      >
        <h4 className="text-blue-400 text-lg">Hey, I'm</h4>

        <h1 className="text-5xl md:text-6xl font-bold mt-2">
          Jayashankar Jayan
        </h1>

        {/* Animated Role */}
        <h2 className="text-3xl md:text-4xl font-semibold text-blue-500 mt-4">
          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              2000,
              "Frontend Developer",
              2000,
              "React Developer",
              2000,
              "Web Developer",
              2000,
            ]}
            speed={50}
            repeat={Infinity}
          />
        </h2>

        <p className="text-gray-400 mt-6 leading-relaxed">
          A dedicated and self-driven Full Stack Developer with a strong foundation in modern web technologies.
          As a fresher, I am eager to apply my skills in real-world projects and contribute to innovative development teams.
        </p>

        <div className="mt-8 flex gap-4">
          
          {/* Hire Me → Scroll to Contact */}
          <a
            href="#contact"
            className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition shadow-lg shadow-blue-500/30"
          >
            Hire Me
          </a>

          {/* Download CV */}
          <a
            href="/resume.pdf"
            download
            className="border border-blue-500 px-6 py-3 rounded-lg hover:bg-blue-500/20 transition"
          >
            Download CV
          </a>

        </div>
      </motion.div>

      {/* RIGHT SIDE */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="relative mt-16 md:mt-0 flex justify-center items-center"
      >
        <div className="relative w-[450px] h-[450px] flex items-center justify-center">

          <div className="absolute w-[450px] h-[450px] bg-blue-500/10 blur-3xl rounded-full"></div>

          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="absolute w-[350px] h-[350px] rounded-full border border-blue-500/30"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <FaReact className="text-4xl text-cyan-400" />
            </div>

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
              <FaHtml5 className="text-4xl text-orange-500" />
            </div>

            <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2">
              <FaCss3Alt className="text-4xl text-blue-500" />
            </div>

            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2">
              <FaJs className="text-4xl text-yellow-400" />
            </div>
          </motion.div>

          <div className="absolute w-[300px] h-[300px] rounded-full border border-blue-500/20"></div>

          <img
            src={profile}
            alt="Profile"
            className="w-72 h-72 rounded-full object-cover border-4 border-blue-500 shadow-2xl shadow-blue-500/40 z-10"
          />

        </div>
      </motion.div>
    </section>
  );
}

export default Hero;