const Skills = () => {
  const skillCategories = [
    {
      title: "Web Development",
      icon: "fa-solid fa-desktop",
      desc: "Creating responsive, fast, and visually engaging user interfaces using modern CSS methodologies and React states.",
      skills: ["HTML5", "CSS3", "JavaScript", "Streamlit"],
    },
    {
      title: "Programming Languages & Database",
      icon: "fa-solid fa-server",
      desc: "Architecting logical API pipelines and handling database instances using server-side frameworks.",
      skills: ["Python", "DAX", "MySQL"],
    },
    {
      title: "Data Analytics & BI",
      icon: "fa-solid fa-robot",
      desc: "Training regression models, preprocessing datasets, implementing computer vision filters, and building analytics dashboards.",
      skills: ["Power BI", "Data Visualization", "Exploratory Data Analysis (EDA)", " Data  Cleaning "],
    },
    {
      title: "Developer Tools",
      icon: "fa-solid fa-screwdriver-wrench",
      desc: "Managing code deployment, version control branching, collaborative integrations, and custom IDE layouts.",
      skills: ["Git", "GitHub", "VS Code", "Jupyter Notebook"],
    },
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <p className="ui-font text-[11px] font-bold tracking-[0.16em] text-[var(--gold)] uppercase mb-3">
            What I Offer
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-800 dark:text-slate-100 display-font leading-tight mb-6">
            Technical Skills & Capabilities
          </h2>
          <p className="text-slate-500 dark:text-slate-400 font-light body-font text-sm leading-relaxed">
            Formulating elegant logic and high-performance digital systems using a comprehensive developer stack.
          </p>
        </div>

        {/* Grid Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[var(--radius-lg)] p-8 shadow-[var(--shadow-deep)] hover:translate-y-[-8px] hover:border-[rgba(201,168,76,0.3)] dark:hover:border-[rgba(201,168,76,0.4)] hover:shadow-[var(--shadow-gold)] transition-all duration-300 relative overflow-hidden group reveal"
              style={{ transitionDelay: `${index * 0.08}s` }}
            >
              {/* Gold gradient top border effect */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500"></div>

              {/* Service Icon Container */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--gold-light)] to-[var(--gold-dark)] flex items-center justify-center text-white text-xl mb-6 shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-5deg]">
                <i className={`${category.icon}`}></i>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 ui-font mb-3">
                {category.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-light mb-6 body-font">
                {category.desc}
              </p>

              {/* Skills tags mapping */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="bg-[var(--cream)] text-[var(--gold-dark)] dark:bg-[rgba(201,168,76,0.12)] dark:text-[var(--gold-light)] border border-[rgba(201,168,76,0.2)] dark:border-[rgba(201,168,76,0.3)] px-4 py-1.5 rounded-full text-[10px] font-semibold ui-font tracking-wide transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;