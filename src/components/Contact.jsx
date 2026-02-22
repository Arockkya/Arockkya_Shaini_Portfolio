import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-slate-900 text-white">
      <motion.div
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-3xl font-bold mb-10">
          Let’s Connect
        </h3>

        <div className="space-y-6 text-lg">

          {/* Email */}
          <a
            href="mailto:arockkyashainia@gmail.com"
            className="flex items-center justify-center gap-3 hover:text-blue-400 transition"
          >
            <FaEnvelope size={20} />
            <span>Email</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/arockkya-shaini-a-8bb110297/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 hover:text-blue-400 transition"
          >
            <FaLinkedin size={20} />
            <span>LinkedIn</span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Arockkya"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 hover:text-blue-400 transition"
          >
            <FaGithub size={20} />
            <span>GitHub</span>
          </a>
        </div>

        <div className="mt-10">
          <a
            href="/resume.pdf"
            download
            className="inline-block bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full font-medium transition duration-300"
          >
            Download Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
}