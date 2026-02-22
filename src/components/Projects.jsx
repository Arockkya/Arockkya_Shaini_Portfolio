import { motion } from "framer-motion";
import tourism from "../assets/tourism.png";
import attendance from "../assets/attendance.png";
import plant from "../assets/plant.png";

export default function Projects() {
  const projects = [
    {
      title: "Tourism Web Application",
      image: tourism,
      description:
        "Full-stack tourism platform enabling destination browsing and booking management.",
      tech: ["HTML", "CSS", "JavaScript", "Java", "MySQL"],
      github: "https://github.com/yourusername/tourism",
      demo: "#",
    },
    {
      title: "Smart Offline Attendance System",
      image: attendance,
      description:
        "Offline attendance tracking system using Raspberry Pi for rural environments.",
      tech: ["Raspberry Pi", "Python"],
      github: "https://github.com/yourusername/attendance",
      demo: "#",
    },
    {
      title: "Intelligent Plant Recommendation",
      image: plant,
      description:
        "Web assistant recommending plants based on user lifestyle and environment.",
      tech: ["React", "JavaScript", "MySQL"],
      github: "https://github.com/yourusername/plant",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-slate-50">
      <motion.div
        className="max-w-6xl mx-auto text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-3xl font-bold mb-12 text-slate-900">
          Projects
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
              whileHover={{ y: -10 }}
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="h-48 w-full object-cover"
              />

              <div className="p-6 text-left">
                <h4 className="text-xl font-semibold mb-3 text-slate-800">
                  {project.title}
                </h4>

                <p className="text-slate-600 text-sm mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((techItem, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full"
                    >
                      {techItem}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    className="text-sm font-medium text-blue-600 hover:underline"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    className="text-sm font-medium text-slate-600 hover:underline"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}