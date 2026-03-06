import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_p7c539f",
        "template_eexv5pw",   // ✅ Correct Template ID Added
        form.current,
        "ziq7_hdDVnsX-S3XP"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message. Check console.");
          console.log(error);
        }
      );
  };

  return (
    <motion.section
      id="contact"
      className="py-32 px-8 md:px-20 bg-black/40 backdrop-blur-md scroll-mt-32"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-5xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-400 mb-16">
          Contact Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Left Side Info */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Let's Work Together 🚀
            </h3>

            <p className="text-gray-400 mb-6">
              I am currently open to full-time opportunities and internships.
              Feel free to connect with me through the links below.
            </p>

            <div className="flex gap-6 text-3xl">

              <a
                href="https://github.com/Jayashankar360"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="hover:text-blue-400 transition" />
              </a>

              <a
                href="https://www.linkedin.com/in/jayashankar-jayan-647519262"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="hover:text-blue-400 transition" />
              </a>

            </div>
          </div>

          {/* Contact Form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 space-y-6"
          >
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full bg-black/40 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
            />

            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full bg-black/40 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
            />

            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              required
              className="w-full bg-black/40 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-blue-600 py-3 rounded-lg hover:bg-blue-700 transition shadow-lg shadow-blue-500/30"
            >
              Send Message
            </button>
          </form>

        </div>
      </div>
    </motion.section>
  );
}

export default Contact;