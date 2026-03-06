import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="py-10 text-center border-t border-white/10 mt-20">

      <p className="text-gray-400 mb-4">
        © {new Date().getFullYear()} Jayashankar Jayan
      </p>

      <div className="flex justify-center gap-6 text-xl">

        <a
          href="https://github.com/Jayashankar360"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-400 transition"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/jayashankar-jayan-647519262"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-400 transition"
        >
          <FaLinkedin />
        </a>

      </div>

      <p className="text-gray-500 text-sm mt-4">
        Built with React & Tailwind CSS
      </p>

    </footer>
  );
}

export default Footer;