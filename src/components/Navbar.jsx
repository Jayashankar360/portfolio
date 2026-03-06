import { useState } from "react";
import { motion } from "framer-motion";

function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    "Home",
    "About",
    "Projects",
    "Education",
    "Certificates",
    "Contact",
  ];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="flex items-center gap-8 px-8 py-4 
                      bg-white/5 backdrop-blur-lg 
                      border border-white/10 
                      rounded-full shadow-lg shadow-blue-500/10">

        {/* Logo */}
        <h1 className="text-blue-500 font-semibold text-lg tracking-wide">
          Jayashankar
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-sm">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={`#${link.toLowerCase()}`}
              className="relative group text-gray-300 hover:text-white transition"
            >
              {link}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden mt-4 bg-black/80 backdrop-blur-lg border border-white/10 rounded-xl p-6 space-y-4 text-center">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={`#${link.toLowerCase()}`}
              className="block text-gray-300 hover:text-blue-400 transition"
              onClick={() => setOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </motion.nav>
  );
}

export default Navbar;