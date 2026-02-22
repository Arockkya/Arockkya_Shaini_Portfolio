import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-50 px-6">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-3xl font-bold mb-8 text-slate-900">
          About Me
        </h3>

        <p className="text-slate-600 leading-relaxed text-lg">
          I am a B.Tech Information Technology student (CGPA 8.67) 
          with strong foundations in Java, MySQL, React, and modern 
          web technologies. I enjoy building scalable applications 
          and solving real-world problems through technology. 
          My goal is to contribute effectively in a reputed 
          organization while continuously improving my technical expertise.
        </p>
      </motion.div>
    </section>
  );
}