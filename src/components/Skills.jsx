import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    "Java",
    "Python",
    "React",
    "JavaScript",
    "MySQL",
    "HTML",
    "CSS",
    "Git",
    "Linux",
    "Android Studio",
  ];

  return (
    <section id="skills" className="py-24 bg-slate-50 px-6">
      <motion.div
        className="max-w-6xl mx-auto text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-3xl font-bold mb-12 text-slate-900">
          Technical Skills
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-md rounded-xl py-6 font-semibold text-slate-700 hover:shadow-lg hover:scale-105 transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}