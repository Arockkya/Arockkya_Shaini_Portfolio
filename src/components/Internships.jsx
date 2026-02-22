import { motion } from "framer-motion";

export default function Internships() {
  const internships = [
    {
      company: "Elewayte",
      role: "Full Stack Developer Intern",
      duration: "1 Month",
      description:
        "Worked on front-end and back-end development, gaining hands-on experience in building scalable web applications.",
    },
    {
      company: "Tech Power Solutions",
      role: "Front-End Developer Intern",
      duration: "15 Days",
      description:
        "Developed responsive web interfaces using HTML, CSS, and JavaScript and improved overall user experience.",
    },
    {
      company: "Systemtron",
      role: "Web Developer Intern",
      duration: "1 Month",
      description:
        "Assisted in UI design, feature implementation, and debugging web applications.",
    },
  ];

  return (
    <section className="py-24 px-6">
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-3xl font-bold text-center mb-12 text-slate-900">
          Internships
        </h3>

        <div className="space-y-8">
          {internships.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-md rounded-xl p-6 border-l-4 border-blue-500"
              whileHover={{ x: 5 }}
            >
              <h4 className="text-xl font-semibold text-slate-800">
                {item.role}
              </h4>

              <p className="text-blue-600 font-medium">
                {item.company} | {item.duration}
              </p>

              <p className="text-slate-600 mt-3">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}