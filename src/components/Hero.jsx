import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold text-slate-900 mb-6">
            Hi, I'm Arockkya Shaini 👋
          </h2>

          <p className="text-xl text-slate-600 mb-8">
            Full Stack Developer | React & Java Enthusiast
          </p>

          <div className="space-x-4">
            <a
              href="#projects"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-slate-300 px-6 py-3 rounded-lg hover:bg-slate-100 transition"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={profile}
            alt="Arockkya Shaini"
            className="w-72 h-72 object-cover rounded-full shadow-xl border-4 border-white"
          />
        </motion.div>

      </div>
    </section>
  );
}