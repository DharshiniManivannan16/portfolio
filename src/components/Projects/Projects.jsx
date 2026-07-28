import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import projects from "../../data/projects";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filterTabs = [
    { label: "All Projects", id: "all" },
    { label: "Web Apps", id: "web" },
    { label: "AI & ML", id: "ai" },
    { label: "Data Analytics", id: "data" },
  ];

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section className="py-24 px-6 md:px-12 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 reveal">
          <p className="ui-font text-[11px] font-bold tracking-[0.16em] text-[var(--gold)] uppercase mb-3">
            Project Showcase
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-800 dark:text-slate-100 display-font leading-tight mb-6">
            Work That Speaks
          </h2>
          <p className="text-slate-500 dark:text-slate-400 font-light body-font text-sm leading-relaxed">
            A hand-picked selection of machine learning models, analytical dashboards, and interactive full stack interfaces.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap gap-3 justify-center mb-12 reveal">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`ui-font text-[10px] uppercase font-bold tracking-wider px-6 py-2.5 rounded-full border transition-all duration-300 select-none ${
                activeCategory === tab.id
                  ? "bg-gradient-to-r from-[var(--gold)] to-[var(--gold-dark)] text-white border-transparent shadow-[0_4px_15px_rgba(201,168,76,0.35)]"
                  : "bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:border-[var(--gold)] hover:text-[var(--gold)] dark:hover:border-[var(--gold)]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.title}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;