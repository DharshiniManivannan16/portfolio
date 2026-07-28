import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      role: "Intern, Full Stack Web Development",
      company: "Accent Techno Soft",
      location: "Coimbatore, Tamil Nadu, India",
      project: "Air Cargo Navigator",
      points: [
        "Worked on the development and optimization of the Air Cargo Navigator web application.",
        "Learned HTML, CSS, JavaScript, and web application development principles.",
        "Gained valuable experience in codebase debugging, system testing, and collaborative teamwork."
      ],
      type: "Internship"
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <p className="ui-font text-[11px] font-bold tracking-[0.16em] text-[var(--gold)] uppercase mb-3">
            Career Journey
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-800 dark:text-slate-100 display-font leading-tight mb-6">
            Work Experience
          </h2>
          <p className="text-slate-500 dark:text-slate-400 font-light body-font text-sm leading-relaxed">
            Professional industry experiences, engineering roles, and technical internships.
          </p>
        </div>

        {/* Experience Card */}
        <div className="space-y-8 max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800/80 rounded-[var(--radius-lg)] p-8 shadow-[var(--shadow-deep)] hover:border-[var(--gold)] hover:shadow-[var(--shadow-gold)] transition-all duration-300 relative group reveal"
            >
              {/* Type Badge */}
              <span className="absolute top-6 right-8 bg-[var(--cream)] text-[var(--gold-dark)] dark:bg-[rgba(201,168,76,0.12)] dark:text-[var(--gold-light)] border border-[rgba(201,168,76,0.2)] dark:border-[rgba(201,168,76,0.3)] px-3.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider ui-font">
                {exp.type}
              </span>

              {/* Title & Company */}
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 display-font tracking-wide mb-1.5">
                {exp.role}
              </h3>
              <div className="flex flex-wrap gap-x-2 gap-y-1 items-center text-xs font-semibold ui-font text-[var(--gold-dark)] dark:text-[var(--gold)] mb-6">
                <span>{exp.company}</span>
                <span className="text-slate-300 dark:text-slate-700 select-none">|</span>
                <span className="text-slate-500 dark:text-slate-400 font-normal">{exp.location}</span>
              </div>

              {/* Project Badge */}
              <div className="inline-flex items-center gap-2 bg-slate-200/50 dark:bg-slate-800/80 px-4 py-2 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-300 mb-6 border border-slate-300/40 dark:border-slate-700/50">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)]"></span>
                <a href="https://github.com/DharshiniManivannan16/logistia-1.0.0"><span>Project: {exp.project}</span></a>
              </div>

              {/* Bullet Points */}
              <ul className="space-y-3 text-slate-600 dark:text-slate-300 font-light text-xs list-none p-0 m-0">
                {exp.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-[var(--gold)] text-[10px] mt-1 select-none">◆</span>
                    <span className="body-font leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
