import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const ProjectCard = ({ project }) => {

  return (

    <motion.div
      whileHover={{ y: -10 }}
      className="bg-slate-900 border border-slate-700 rounded-3xl overflow-hidden shadow-xl"
    >

      {/* Image */}

      <img
        src={project.image}
        alt={project.title}
        className="w-full h-56 object-cover"
      />

      {/* Content */}

      <div className="p-6">

        {/* Title */}

        <h3 className="text-2xl font-bold mb-4">

          {project.title}

        </h3>

        {/* Description */}

        <p className="text-gray-400 leading-7">

          {project.description}

        </p>

        {/* Tech Stack */}

        <div className="flex flex-wrap gap-3 mt-6">

          {project.tech.map((tech, index) => (

            <span
              key={index}
              className="bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm"
            >

              {tech}

            </span>

          ))}

        </div>

        {/* Features */}

        {project.features && (

          <div className="mt-6">

            <h4 className="text-lg font-semibold mb-3 text-blue-400">

              Key Features

            </h4>

            <ul className="space-y-2 text-gray-400">

              {project.features.map((feature, index) => (

                <li key={index}>

                  • {feature}

                </li>

              ))}

            </ul>

          </div>

        )}

        {/* Buttons */}

        <div className="flex gap-4 mt-8 flex-wrap">

          <a
            href={project.github}
            target="_blank"
            className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 transition px-5 py-3 rounded-xl"
          >

            <FaGithub />

            GitHub

          </a>

          <a
            href={project.demo}
            target="_blank"
            className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 transition px-5 py-3 rounded-xl"
          >

            <FiExternalLink />

            Live Demo

          </a>

        </div>

      </div>

    </motion.div>

  )
}

export default ProjectCard