import { motion } from "framer-motion";
import projects from "../../data/projects";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (

    <section className="py-24 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center mb-16"
        >

          Projects

        </motion.h2>

        {/* Grid */}

        <div className="grid md:grid-cols-2 gap-10">

          {projects.map((project, index) => (

            <ProjectCard
              key={index}
              project={project}
            />

          ))}

        </div>

      </div>

    </section>
  )
}

export default Projects