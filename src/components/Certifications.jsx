import { motion } from "framer-motion";

export default function Certifications() {

  const certifications = [
    {
      title: "Web Development",
      issuer: "Infosys",
      year: "2025",
    },
    {
      title: "Python Programming",
      issuer: "Nassom",
      year: "2024",
    },
    {
      title: "Cyber Security",
      issuer: "Cisco",
      year: "2024",
    },
    {
      title: "Generative AI",
      issuer: "Oracle",
      year: "2023",
    },
  ];

  return (
    <section className="py-24 px-6 bg-slate-50">
      <motion.div
        className="max-w-6xl mx-auto text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-3xl font-bold mb-12 text-slate-900">
          Certifications
        </h3>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition"
              whileHover={{ y: -5 }}
            >
              <h4 className="text-lg font-semibold text-slate-800">
                {cert.title}
              </h4>

              <p className="text-blue-600 font-medium mt-2">
                {cert.issuer}
              </p>

              <p className="text-slate-500 mt-1">
                {cert.year}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}