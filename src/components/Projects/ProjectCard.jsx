import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[var(--radius-lg)] overflow-hidden shadow-[var(--shadow-deep)] hover:border-[rgba(201,168,76,0.25)] hover:shadow-[var(--shadow-gold)] transition-all duration-300 flex flex-col h-full group"
    >
      {/* Zoomable Image Container */}
      <div className="relative h-48 w-full overflow-hidden border-b border-slate-100 dark:border-slate-800">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 select-none grayscale group-hover:grayscale-0"
          onError={(e) => {
            // Fallback for missing screenshots
            e.target.style.display = "none";
            e.target.parentNode.innerHTML = `
              <div class="w-full h-full bg-gradient-to-br from-[var(--cream)] to-[#ebd9b2] dark:from-slate-800 dark:to-slate-900 flex items-center justify-center">
                <i class="fa-solid fa-code text-5xl text-[var(--gold)]"></i>
              </div>
            `;
          }}
        />
        {/* Soft overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Card Content Area */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Title */}
        <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 ui-font mb-3">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-light mb-6 body-font flex-grow">
          {project.description}
        </p>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tech.map((tech, index) => (
            <span
              key={index}
              className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-3 py-1 rounded-full text-[9px] font-semibold ui-font tracking-wider uppercase"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Key Features Bullet Points */}
        {project.features && (
          <div className="mb-6 border-t border-slate-100 dark:border-slate-800/60 pt-4">
            <h4 className="text-[10px] uppercase font-bold tracking-wider mb-2 text-[var(--gold)] ui-font">
              Key Features
            </h4>
            <ul className="space-y-1.5 text-slate-500 dark:text-slate-400 font-light text-[11px] list-none p-0 m-0">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-[var(--gold)] text-[8px] mt-1 select-none">◆</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Action Button Links */}
        <div className="grid grid-cols-2 gap-3 mt-auto pt-4 border-t border-slate-100 dark:border-slate-800/60">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold ui-font text-[10px] uppercase tracking-wider py-2.5 rounded-xl transition duration-200 select-none"
          >
            <FaGithub className="text-xs" />
            Repository
          </a>

          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-[var(--gold-light)] to-[var(--gold-dark)] text-white font-bold ui-font text-[10px] uppercase tracking-wider py-2.5 rounded-xl shadow-[0_4px_12px_rgba(201,168,76,0.2)] hover:shadow-[0_6px_18px_rgba(201,168,76,0.35)] hover:translate-y-[-1px] transition-all duration-200 select-none text-center"
          >
            <FiExternalLink className="text-xs" />
            Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;