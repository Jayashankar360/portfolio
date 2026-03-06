import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Education from "./components/Education";
import Certificates from "./components/Certificates";
import ScrollProgress from "./components/ScrollProgress";
import ParticlesBackground from "./components/ParticlesBackground";

function App() {
  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-x-hidden">

      <ScrollProgress />

      <Navbar />

      <Hero />

      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent my-20"></div>

      <About />

      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent my-20"></div>

      <Projects />

      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent my-20"></div>

      <Education />

      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent my-20"></div>

      <Certificates />

      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent my-20"></div>

      <Contact />

      <ParticlesBackground />

      <Footer />

    </div>
  );
}

export default App;